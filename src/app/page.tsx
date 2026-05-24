import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SlotHeadline } from "@/components/slot-headline";
import { homeContent } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative pb-32">
      <DotPattern />
      <div className="pointer-events-none absolute left-[72px] top-0 hidden h-full w-px bg-[var(--border-visible)] lg:block" />

      <section className="relative min-h-[92vh] w-full overflow-hidden bg-[var(--bg)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90 mix-blend-multiply"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--bg)] to-transparent" />

        <div className="relative z-10 flex h-full min-h-[92vh] flex-col justify-end px-4 pb-16 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[1000px] bg-[var(--surface-0)]/95 p-8 shadow-[0_0_0_1px_var(--border-subtle)] backdrop-blur-md sm:p-10 md:p-12">
            <p className="font-mono text-[11px] uppercase text-[var(--fg-muted)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
              CricSight Intelligence
            </p>
            <SlotHeadline
              text={homeContent.hero.headline}
              triggerOnMount
              className="mt-4 text-[clamp(48px,8vw,120px)] leading-[0.88] text-[var(--fg)]"
            />
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--fg)]">{homeContent.hero.subHeadline}</p>
            <p className="mt-5 max-w-[75ch] text-base leading-relaxed text-[var(--fg-muted)]">{homeContent.hero.body}</p>
          </div>
        </div>
      </section>

      <section className="mt-0 border-y border-[var(--border-visible)]">
        <Marquee className="w-screen" duration="40s">
          {homeContent.ticker.map((item) => (
            <span
              key={item}
              className="border-l-2 border-[var(--accent)] px-6 py-3 font-mono text-[11px] uppercase text-[var(--fg)]"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="section-gap mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <SlotHeadline text={homeContent.paradigm.headline} className="text-[clamp(56px,8vw,144px)] text-[var(--fg)]" />
        </BlurFade>
        <div className="mt-8 h-px w-full bg-[var(--border-visible)]" />
        <p className="mt-8 text-xl leading-relaxed text-[var(--fg-muted)]">{homeContent.paradigm.body}</p>
      </section>

      <section className="mx-auto w-full border-y border-[var(--border-visible)] bg-[var(--surface-1)] py-20">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <BlurFade variant="slide">
                <h2 className="text-[clamp(40px,5vw,80px)] leading-[0.9] text-[var(--fg)]">{homeContent.duality.headline}</h2>
              </BlurFade>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[var(--fg-muted)]">{homeContent.duality.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <h2 className="text-[clamp(48px,6vw,96px)] leading-[0.9] text-[var(--fg)]">{homeContent.guide.headline}</h2>
          <p className="mt-6 text-xl text-[var(--fg-muted)]">{homeContent.guide.body}</p>
        </div>

        <div className="grid gap-px border border-[var(--border-visible)] bg-[var(--border-visible)] sm:grid-cols-2">
          {homeContent.features.map((feature, index) => (
            <article key={feature.title} className="bg-[var(--surface-0)] p-8 sm:p-12">
              <p className="font-mono text-[11px] uppercase text-[var(--accent)]" style={{ letterSpacing: "var(--tracking-label)" }}>
                {`${String(index + 1).padStart(2, "0")} / ${feature.label}`}
              </p>
              <h3 className="mt-6 text-3xl leading-tight text-[var(--fg)]">{feature.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)]">{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] border-t border-[var(--border-visible)] px-4 pt-16 sm:px-8 md:px-12 lg:px-16">
        <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
          By the Numbers
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {homeContent.numbers.map((num) => (
            <div key={num.label} className="shape-border h-full">
              <div className="shape-inner flex h-full flex-col bg-[var(--surface-0)] p-6 transition-colors hover:bg-[var(--surface-1)]">
                <p className="text-[clamp(32px,4vw,52px)] leading-none text-[var(--fg)]">{num.value}</p>
                <p className="mt-4 text-sm font-medium text-[var(--fg)]">{num.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
                  {num.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] px-4 pt-[clamp(80px,10vw,140px)] sm:px-8 md:px-12 lg:px-16">
        <hr className="mb-[clamp(80px,10vw,140px)] border-[var(--border-visible)]" />
        <BlurFade variant="full">
          <SlotHeadline text={homeContent.cta.headline} className="text-[clamp(58px,10vw,180px)] text-[var(--fg)]" />
        </BlurFade>
        <p className="mt-6 text-xl leading-relaxed text-[var(--fg-muted)]">{homeContent.cta.body}</p>
        <div className="mt-10 flex justify-end">
          <Link
            href="/architecture"
            className="group flex items-center gap-3 font-mono text-sm uppercase text-[var(--accent-bright)]"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            View Architecture <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
