import Link from "next/link";
import { ArrowRight, Binary, Radar, Sparkles } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ADVANCED_INSIGHTS, OPTA_STATS } from "@/lib/cricsight-data";

export default function Home() {
  const featuredStats = OPTA_STATS.slice(0, 3);
  const featuredInsights = ADVANCED_INSIGHTS.slice(0, 3);

  return (
    <div className="relative mx-auto max-w-[1200px] px-4 pb-20 md:px-8">
      <DotPattern />
      <section className="relative py-16 md:py-24">
        <BlurFade>
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-zinc-400">Model-driven Cricket Intelligence</p>
          <WordPullUp
            words="CRICSIGHT CONTROL ROOM"
            className="max-w-4xl text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-white md:text-7xl"
          />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Real-time Opta stats, pressure-pattern diagnostics, and architecture-level traceability across every insight card.
          </p>
        </BlurFade>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Total Opta Stats", value: OPTA_STATS.length, icon: Radar },
          { label: "Deep Insight Cards", value: ADVANCED_INSIGHTS.length, icon: Binary },
          { label: "Model Techniques", value: 5, icon: Sparkles },
        ].map((kpi, index) => (
          <BlurFade key={kpi.label} delay={index * 0.06} className="border border-white/10 bg-white/[0.03] p-5">
            <kpi.icon className="mb-3 h-4 w-4 text-zinc-300" />
            <p className="text-xs uppercase tracking-[0.11em] text-zinc-400">{kpi.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{kpi.value}</p>
          </BlurFade>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <BlurFade className="border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-white">Stats Preview</h2>
            <Link href="/insights" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-300">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {featuredStats.map((stat) => (
              <article key={stat.stat_id} className="border border-white/10 bg-black/40 p-3">
                <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">{stat.player} · {stat.metric}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">{stat.fact}</p>
              </article>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.08} className="border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-white">Architecture Preview</h2>
            <Link href="/architecture" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-300">
              Open <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {featuredInsights.map((insight) => (
              <article key={insight.card_id} className="border border-white/10 bg-black/40 p-3">
                <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">{insight.technique}</p>
                <p className="mt-1 text-sm font-medium tracking-tight text-zinc-200">{insight.headline}</p>
              </article>
            ))}
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
