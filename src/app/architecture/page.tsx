import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ADVANCED_INSIGHTS, OPTA_STATS } from "@/lib/cricsight-data";

const techniqueLabels = ["wp_swing", "player_vs_self", "league_rank", "vaep_analysis", "advanced_modeling"] as const;

export default function ArchitecturePage() {
  const countByTechnique = techniqueLabels.map((label) => ({
    label,
    count: ADVANCED_INSIGHTS.filter((item) => item.technique === label).length,
  }));

  return (
    <div className="relative mx-auto max-w-[1200px] px-4 pb-20 md:px-8">
      <DotPattern />
      <section className="relative pb-10 pt-14">
        <BlurFade>
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-zinc-400">Architecture</p>
          <WordPullUp
            words="MODEL + DATA + RENDER PIPELINE"
            className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl"
          />
        </BlurFade>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <BlurFade className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">Input Blocks</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">{3}</p>
          <p className="mt-2 text-sm text-zinc-400">One Opta stats block + two advanced-insight blocks loaded from local JSON.</p>
        </BlurFade>
        <BlurFade delay={0.06} className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">Normalized Totals</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">{OPTA_STATS.length + ADVANCED_INSIGHTS.length}</p>
          <p className="mt-2 text-sm text-zinc-400">Combined records available for route-level rendering and model stratification.</p>
        </BlurFade>
        <BlurFade delay={0.12} className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">Techniques</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">{techniqueLabels.length}</p>
          <p className="mt-2 text-sm text-zinc-400">Technique badges map directly to iconography and explanatory labels in UI cards.</p>
        </BlurFade>
      </section>

      <section className="mt-10 border border-white/10 bg-black/40 p-6">
        <h2 className="text-lg font-semibold tracking-tight text-white">Technique Distribution</h2>
        <div className="mt-4 space-y-3">
          {countByTechnique.map((row, index) => (
            <BlurFade key={row.label} delay={0.03 * index}>
              <div className="grid grid-cols-[180px_1fr_56px] items-center gap-3">
                <p className="text-xs uppercase tracking-[0.1em] text-zinc-400">{row.label}</p>
                <div className="h-2 bg-white/10">
                  <div className="h-full bg-white/80" style={{ width: `${Math.max(6, (row.count / ADVANCED_INSIGHTS.length) * 100)}%` }} />
                </div>
                <p className="text-right text-sm text-zinc-200">{row.count}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Ingestion",
            text: "Typed imports from JSON are normalized in a single data layer (`cricsight-data.ts`) for deterministic rendering.",
          },
          {
            title: "Transformation",
            text: "Technique dictionary and icon mapping are applied at render-time, preserving original labels while enriching UI semantics.",
          },
          {
            title: "Delivery",
            text: "Three routes share one motion and token system: geometric nav, staggered reveals, dark contrast, and modular cards.",
          },
        ].map((item, index) => (
          <BlurFade key={item.title} delay={0.06 * index} className="border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-base font-semibold tracking-tight text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{item.text}</p>
          </BlurFade>
        ))}
      </section>
    </div>
  );
}
