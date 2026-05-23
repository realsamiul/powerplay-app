import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { BlurFade } from "@/components/magicui/blur-fade";
import { homeContent } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative pb-32">
      <DotPattern />
      <div className="pointer-events-none fixed left-[72px] top-0 hidden h-full w-px bg-[var(--border-visible)] lg:block" />

      <section className="relative mx-auto max-w-[1700px] px-4 pt-16 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[4fr_3fr]">
          <div>
            <p className="font-mono text-[11px] uppercase text-[var(--fg-muted)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
              CricSight Intelligence
            </p>
            <BlurFade variant="full" className="mt-4">
              <WordPullUp
                words={homeContent.hero.headline}
                className="leading-[0.84] text-[clamp(72px,13vw,240px)] text-[var(--fg)]"
              />
            </BlurFade>
          </div>
          <div className="self-end pb-4">
            <BlurFade variant="slide" delay={0.1}>
              <p className="text-xl leading-relaxed text-[var(--fg)]">{homeContent.hero.subHeadline}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--fg-muted)]">{homeContent.hero.body}</p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="mt-10 border-y border-[var(--border-visible)]">
        <Marquee className="w-screen" duration="36s">
          {homeContent.ticker.map((item) => (
            <span key={item} className="border-l-2 border-[var(--accent)] px-5 py-3 font-mono text-[11px] uppercase text-[var(--fg)]" style={{ letterSpacing: "var(--tracking-label)" }}>
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="mx-auto mt-20 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <h2 className="text-[clamp(64px,9vw,144px)] leading-[0.9] text-[var(--fg)]">{homeContent.paradigm.headline}</h2>
        </BlurFade>
        <div className="mt-6 h-px w-full bg-[var(--border-visible)]" />
        <p className="mt-8 max-w-5xl text-lg leading-9 text-[var(--fg-muted)]">{homeContent.paradigm.body}</p>
      </section>

      <section className="mx-auto mt-16 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="overflow-x-auto">
          <div className="min-w-[760px]">
            {homeContent.features.map((feature, index) => (
              <article key={feature.title} className="grid grid-cols-[120px_1fr_1fr] gap-6 border-b border-[var(--border-subtle)] py-7">
                <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
                  {`${String(index + 1).padStart(2, "0")} / ${feature.label}`}
                </p>
                <h3 className="text-3xl leading-tight text-[var(--fg)]">{feature.title}</h3>
                <p className="text-sm leading-7 text-[var(--fg-muted)]">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <h2 className="text-[clamp(58px,10vw,180px)] leading-[0.88] text-[var(--fg)]">
            {homeContent.cta.headline}
          </h2>
        </BlurFade>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--fg-muted)]">{homeContent.cta.body}</p>
        <div className="mt-8 flex justify-end">
          <Link
            href="/architecture"
            className="font-mono text-sm uppercase text-[var(--accent-bright)]"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            Architecture →
          </Link>
        </div>
      </section>
    </div>
  );
}
