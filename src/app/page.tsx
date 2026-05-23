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

      <section className="relative min-h-[92vh] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />

        <div className="relative z-10 flex h-full min-h-[92vh] flex-col justify-end px-4 pb-12 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[900px] bg-white/92 p-8 shadow-[0_0_0_1px_rgba(26,24,20,0.08)] backdrop-blur-[2px] sm:p-10 md:p-12">
            <p className="font-mono text-[11px] uppercase text-[var(--fg-muted)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
              CricSight Intelligence
            </p>
            <SlotHeadline
              text={homeContent.hero.headline}
              triggerOnMount
              className="mt-3 text-[clamp(48px,8vw,120px)] leading-[0.88] text-[var(--fg)]"
            />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--fg)]">{homeContent.hero.subHeadline}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--fg-muted)]">{homeContent.hero.body}</p>
          </div>
        </div>
      </section>

      <section className="mt-0 border-y border-[var(--border-visible)]">
        <Marquee className="w-screen" duration="36s">
          {homeContent.ticker.map((item) => (
            <span
              key={item}
              className="border-l-2 border-[var(--accent)] px-5 py-3 font-mono text-[11px] uppercase text-[var(--fg)]"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="section-gap mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <SlotHeadline
            text={homeContent.paradigm.headline}
            className="text-[clamp(64px,9vw,144px)] leading-[0.9] text-[var(--fg)]"
          />
        </BlurFade>
        <div className="mt-6 h-px w-full bg-[var(--border-visible)] pb-2" />
        <p className="max-w-5xl pt-6 text-lg leading-9 text-[var(--fg-muted)]">{homeContent.paradigm.body}</p>
      </section>

      <section className="mx-auto mt-16 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="overflow-x-auto">
          <div className="min-w-[760px]">
            {homeContent.features.map((feature, index) => (
              <article
                key={feature.title}
                className={`grid grid-cols-[120px_1fr_1fr] gap-6 border-b border-[var(--border-subtle)] py-7 ${index === 0 ? "border-t" : ""}`}
              >
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

      <section className="mx-auto mt-16 max-w-[1700px] border-t border-[var(--border-visible)] px-4 pt-16 sm:px-8 md:px-12 lg:px-16">
        <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
          By the Numbers
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px border border-[var(--border-visible)] bg-[var(--border-visible)] sm:grid-cols-3 lg:grid-cols-6">
          {homeContent.numbers.map((num) => (
            <div key={num.label} className="bg-[var(--bg)] p-6">
              <p className="text-[clamp(32px,4vw,52px)] leading-none text-[var(--fg)]">{num.value}</p>
              <p className="mt-2 text-sm text-[var(--fg)]">{num.label}</p>
              <p className="mt-1 font-mono text-[10px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
                {num.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] px-4 pt-[clamp(80px,10vw,140px)] sm:px-8 md:px-12 lg:px-16">
        <hr className="border-[var(--border-visible)]" />
        <BlurFade variant="full">
          <SlotHeadline
            text={homeContent.cta.headline}
            className="mt-10 text-[clamp(58px,10vw,180px)] leading-[0.88] text-[var(--fg)]"
          />
        </BlurFade>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--fg-muted)]">{homeContent.cta.body}</p>
        <div className="mt-8 flex justify-end">
          <Link
            href="/architecture"
            className="font-mono text-sm uppercase text-[var(--accent-bright)]"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            Architecture -&gt;
          </Link>
        </div>
      </section>
    </div>
  );
}
