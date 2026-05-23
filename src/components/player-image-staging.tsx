"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Candidate = {
  player: string;
  headline: string;
};

type ResolverResult = {
  ok: boolean;
  name: string;
  qid?: string;
  label?: string;
  imageTitle?: string;
  imageUrl?: string;
  format?: string;
  error?: string;
  quality?: {
    ok: boolean;
    pass?: boolean;
    sourceWidth?: number;
    sourceHeight?: number;
    sharpness?: number;
    centerWeight?: number;
    checks?: {
      resolutionPass: boolean;
      sharpnessPass: boolean;
      centerPass: boolean;
    };
    error?: string;
  };
};

type Entry = Candidate & {
  status: "idle" | "loading" | "ok" | "fail";
  result?: ResolverResult;
};

export function PlayerImageStaging({ candidates }: { candidates: Candidate[] }) {
  const [entries, setEntries] = useState<Entry[]>(
    candidates.map((c) => ({
      ...c,
      status: "idle",
    })),
  );

  const successCount = useMemo(() => entries.filter((e) => e.status === "ok").length, [entries]);
  const qaPassCount = useMemo(
    () => entries.filter((e) => e.result?.quality?.ok && e.result.quality.pass).length,
    [entries],
  );

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < candidates.length; i += 1) {
        const candidate = candidates[i];
        if (cancelled) return;

        setEntries((prev) => prev.map((e, idx) => (idx === i ? { ...e, status: "loading" } : e)));

        try {
          const res = await fetch(`/api/player-image?name=${encodeURIComponent(candidate.player)}&w=480&qa=1`);
          const data = (await res.json()) as ResolverResult;

          setEntries((prev) =>
            prev.map((e, idx) =>
              idx === i
                ? {
                    ...e,
                    status: data.ok && !!data.imageUrl ? "ok" : "fail",
                    result: data,
                  }
                : e,
            ),
          );
        } catch (error) {
          setEntries((prev) =>
            prev.map((e, idx) =>
              idx === i
                ? {
                    ...e,
                    status: "fail",
                    result: {
                      ok: false,
                      name: candidate.player,
                      error: error instanceof Error ? error.message : "Network error",
                    },
                  }
                : e,
            ),
          );
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [candidates]);

  return (
    <section className="relative mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
      <header className="mb-8 border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Staging Area</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Player Image Pull Test (WebP)</h1>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Testing Wikimedia resolution from player names only. This route is isolated from the main UX.
        </p>
        <p className="mt-4 text-sm text-zinc-300">
          Success: <span className="font-semibold text-white">{successCount}</span> / {entries.length}
        </p>
        <p className="mt-1 text-sm text-zinc-300">
          QA Pass: <span className="font-semibold text-white">{qaPassCount}</span> / {entries.length}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {entries.map((entry) => (
          <article key={`${entry.player}-${entry.headline}`} className="border border-white/10 bg-black/50 p-4">
            <div className="mb-3 h-[220px] overflow-hidden border border-white/10 bg-zinc-900">
              {entry.status === "ok" && entry.result?.imageUrl ? (
                <Image
                  src={entry.result.imageUrl}
                  alt={entry.player}
                  width={480}
                  height={320}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.12em] text-zinc-500">
                  {entry.status === "loading" ? "Loading..." : "No image"}
                </div>
              )}
            </div>
            <p className="text-[11px] uppercase tracking-[0.11em] text-zinc-500">{entry.player}</p>
            <p className="mt-1 text-sm font-medium leading-6 text-zinc-200">{entry.headline}</p>
            <p className="mt-2 text-xs text-zinc-400">
              {entry.status === "ok"
                ? `ok · ${entry.result?.format ?? "unknown"} · ${entry.result?.qid ?? "no-qid"}`
                : `${entry.status} · ${entry.result?.error ?? "pending"}`}
            </p>
            {entry.result?.quality?.ok ? (
              <p className="mt-1 text-xs text-zinc-400">
                qa: {entry.result.quality.pass ? "pass" : "fail"} · {entry.result.quality.sourceWidth}x{entry.result.quality.sourceHeight} ·
                sharp {entry.result.quality.sharpness} · center {entry.result.quality.centerWeight}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
