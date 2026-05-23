import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { BlurFade } from "@/components/magicui/blur-fade";
import { homeContent } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="relative pb-28">
      <DotPattern />
      <section className="relative mx-auto min-h-[78vh] max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="absolute inset-x-5 top-14 h-[1px] bg-white/10 md:inset-x-10" />
        <BlurFade className="max-w-6xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-500">CricSight Intelligence</p>
          <WordPullUp words={homeContent.hero.headline} className="text-5xl font-semibold uppercase leading-[0.88] tracking-tight text-white md:text-8xl" />
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-200">{homeContent.hero.subHeadline}</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">{homeContent.hero.body}</p>
        </BlurFade>
        <BlurFade delay={0.2} className="mt-14">
          <Marquee className="border-y border-white/10 py-3">
            {homeContent.ticker.map((item) => (
              <span key={item} className="mr-3 border border-white/10 bg-white/[0.04] px-6 py-2 text-xs uppercase tracking-[0.14em] text-zinc-200">
                {item}
              </span>
            ))}
          </Marquee>
        </BlurFade>
      </section>

      <section className="mx-auto mt-24 max-w-[1400px] px-5 md:px-10">
        <BlurFade className="grid gap-10 border border-white/10 bg-white/[0.02] p-8 md:grid-cols-[1.15fr_1fr] md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Paradigm Shift</p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{homeContent.paradigm.headline}</h2>
          </div>
          <p className="text-base leading-8 text-zinc-400 md:text-lg">{homeContent.paradigm.body}</p>
        </BlurFade>
      </section>

      <section className="mx-auto mt-16 max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {homeContent.features.map((feature, index) => (
            <BlurFade key={feature.title} delay={index * 0.08} className="border border-white/10 bg-black/55 p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">{feature.label}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">{feature.copy}</p>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] px-5 md:px-10">
        <BlurFade className="border border-white/10 bg-white/[0.02] px-7 py-12 md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Bottom Line</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-white md:text-6xl">
            {homeContent.cta.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">{homeContent.cta.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/architecture" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.12em] text-white">
              Explore the Architecture <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/insights" className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.12em] text-zinc-300">
              View Insights
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
