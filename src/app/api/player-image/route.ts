import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const WIKIDATA_SEARCH = "https://www.wikidata.org/w/api.php";
const WIKIDATA_ENTITY = "https://www.wikidata.org/wiki/Special:EntityData";
const WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php";

type EntitySearchResponse = {
  search?: Array<{ id: string; label?: string; description?: string }>;
};

type EntityResponse = {
  entities?: Record<
    string,
    {
      claims?: {
        P18?: Array<{
          mainsnak?: {
            datavalue?: {
              value?: string;
            };
          };
        }>;
      };
    }
  >;
};

function buildCommonsWebpUrl(fileName: string, width: number) {
  const encoded = encodeURIComponent(fileName.replace(/ /g, "_"));
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=${width}&format=webp`;
}

async function analyzeImageQuality(imageUrl: string) {
  const res = await fetch(imageUrl, { headers: { Accept: "image/*" }, cache: "no-store" });
  if (!res.ok) {
    return { ok: false as const, error: "Image fetch failed for QA" };
  }

  const arrayBuffer = await res.arrayBuffer();
  const input = Buffer.from(arrayBuffer);
  const meta = await sharp(input).metadata();
  const sourceWidth = meta.width ?? 0;
  const sourceHeight = meta.height ?? 0;

  const { data, info } = await sharp(input)
    .rotate()
    .resize(192, 192, { fit: "cover" })
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const px = data;

  let gradTotal = 0;
  let gradCount = 0;
  let gradCenter = 0;

  const cx1 = Math.floor(w * 0.25);
  const cx2 = Math.floor(w * 0.75);
  const cy1 = Math.floor(h * 0.25);
  const cy2 = Math.floor(h * 0.75);

  for (let y = 1; y < h - 1; y += 1) {
    for (let x = 1; x < w - 1; x += 1) {
      const i = y * w + x;
      const gx = Math.abs(px[i + 1] - px[i - 1]);
      const gy = Math.abs(px[i + w] - px[i - w]);
      const g = gx + gy;
      gradTotal += g;
      gradCount += 1;
      if (x >= cx1 && x <= cx2 && y >= cy1 && y <= cy2) {
        gradCenter += g;
      }
    }
  }

  const sharpness = gradCount > 0 ? gradTotal / gradCount : 0;
  const centerWeight = gradTotal > 0 ? gradCenter / gradTotal : 0;
  const resolutionPass = sourceWidth >= 320 && sourceHeight >= 320;
  const sharpnessPass = sharpness >= 22;
  const centerPass = centerWeight >= 0.33 && centerWeight <= 0.75;
  const pass = resolutionPass && sharpnessPass && centerPass;

  return {
    ok: true as const,
    pass,
    sourceWidth,
    sourceHeight,
    sharpness: Number(sharpness.toFixed(2)),
    centerWeight: Number(centerWeight.toFixed(3)),
    checks: {
      resolutionPass,
      sharpnessPass,
      centerPass,
    },
  };
}

type WikipediaSearchResponse = {
  query?: {
    search?: Array<{
      title: string;
      pageid: number;
    }>;
  };
};

type WikipediaPagePropsResponse = {
  query?: {
    pages?: Record<
      string,
      {
        pageprops?: {
          wikibase_item?: string;
        };
      }
    >;
  };
};

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name")?.trim();
  const width = Number(request.nextUrl.searchParams.get("w") ?? "480");
  const withQa = request.nextUrl.searchParams.get("qa") === "1";

  if (!name) {
    return NextResponse.json({ ok: false, error: "Missing name" }, { status: 400 });
  }

  try {
    // Step 1: user-requested approach, bias to direct Wikipedia hit with
    // "<name> international cricketer", then resolve Wikidata item from pageprops.
    const wikiSearch = `${name} international cricketer`;
    const wikiSearchUrl = `${WIKIPEDIA_API}?action=query&format=json&list=search&srlimit=5&srsearch=${encodeURIComponent(wikiSearch)}`;
    const wikiSearchRes = await fetch(wikiSearchUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 * 60 * 24 },
    });

    let qid: string | undefined;
    let label: string | undefined;

    if (wikiSearchRes.ok) {
      const wikiSearchData = (await wikiSearchRes.json()) as WikipediaSearchResponse;
      const topPage = wikiSearchData.query?.search?.[0];
      if (topPage) {
        label = topPage.title;
        const pagePropsUrl = `${WIKIPEDIA_API}?action=query&format=json&prop=pageprops&pageids=${topPage.pageid}`;
        const pagePropsRes = await fetch(pagePropsUrl, {
          headers: { Accept: "application/json" },
          next: { revalidate: 60 * 60 * 24 },
        });
        if (pagePropsRes.ok) {
          const pageProps = (await pagePropsRes.json()) as WikipediaPagePropsResponse;
          const pages = pageProps.query?.pages ?? {};
          const page = Object.values(pages)[0];
          qid = page?.pageprops?.wikibase_item;
        }
      }
    }

    // Step 2 fallback: Wikidata search with enhanced query.
    if (!qid) {
      const searchUrl = `${WIKIDATA_SEARCH}?action=wbsearchentities&format=json&language=en&type=item&limit=5&search=${encodeURIComponent(wikiSearch)}`;
      const searchRes = await fetch(searchUrl, {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 * 60 * 24 },
      });

      if (!searchRes.ok) {
        return NextResponse.json({ ok: false, error: "Wikidata search failed" }, { status: 502 });
      }

      const searchData = (await searchRes.json()) as EntitySearchResponse;
      const candidate =
        searchData.search?.find((item) => {
          const desc = (item.description ?? "").toLowerCase();
          return desc.includes("international cricketer") || desc.includes("cricketer") || desc.includes("cricket");
        }) ?? searchData.search?.[0];

      if (!candidate?.id) {
        return NextResponse.json({ ok: false, name, error: "No wikidata match" }, { status: 404 });
      }

      qid = candidate.id;
      label = label ?? candidate.label;
    }

    const entityUrl = `${WIKIDATA_ENTITY}/${qid}.json`;
    const entityRes = await fetch(entityUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!entityRes.ok) {
      return NextResponse.json({ ok: false, name, error: "Entity lookup failed" }, { status: 502 });
    }

    const entityData = (await entityRes.json()) as EntityResponse;
    const entity = entityData.entities?.[qid];
    const imageClaim = entity?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;

    if (!imageClaim) {
      return NextResponse.json(
        {
          ok: false,
          name,
          qid,
          label,
          error: "No image (P18) available",
        },
        { status: 404 },
      );
    }

    const payload = {
      ok: true,
      name,
      qid,
      label,
      source: "wikidata_p18",
      imageTitle: imageClaim,
      imageUrl: buildCommonsWebpUrl(imageClaim, Number.isFinite(width) ? Math.max(240, Math.min(width, 1024)) : 480),
      format: "webp",
      licenseNote: "Check Wikimedia Commons attribution before production use.",
    };

    if (!withQa) {
      return NextResponse.json(payload);
    }

    const quality = await analyzeImageQuality(payload.imageUrl);
    return NextResponse.json({ ...payload, quality });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        name,
        error: error instanceof Error ? error.message : "Unknown failure",
      },
      { status: 500 },
    );
  }
}
