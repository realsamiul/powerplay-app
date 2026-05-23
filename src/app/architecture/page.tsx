import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ADVANCED_INSIGHTS, OPTA_STATS } from "@/lib/cricsight-data";
import { architectureContent } from "@/lib/site-content";

const techniqueLabels = ["wp_swing", "player_vs_self", "league_rank", "vaep_analysis", "advanced_modeling"] as const;

export default function ArchitecturePage() {
  const countByTechnique = techniqueLabels.map((label) => ({
    label,
    count: ADVANCED_INSIGHTS.filter((item) => item.technique === label).length,
  }));

  return (
    <div className="relative pb-24">
      <DotPattern />
      <section className="relative mx-auto min-h-[64vh] max-w-[1400px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <BlurFade className="max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.18em] text-zinc-500">Architecture</p>
          <WordPullUp
            words={architectureContent.hero.headline}
            className="max-w-6xl text-4xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-8xl"
          />
          <p className="mt-6 text-xl leading-relaxed text-zinc-200">{architectureContent.hero.subHeadline}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">{architectureContent.hero.body}</p>
        </BlurFade>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-4 px-5 md:grid-cols-3 md:px-10">
        {[
          { title: "Input Blocks", value: "03", text: "One Opta stats block + two advanced-insight blocks loaded from local JSON." },
          { title: "Normalized Records", value: `${OPTA_STATS.length + ADVANCED_INSIGHTS.length}`, text: "Combined records available for route-level rendering and model stratification." },
          { title: "Model Techniques", value: `${techniqueLabels.length}`, text: "Technique labels map directly to iconography and explanatory badge copy." },
        ].map((metric, index) => (
          <BlurFade key={metric.title} delay={0.06 * index} className="border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{metric.title}</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-white">{metric.value}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{metric.text}</p>
          </BlurFade>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-[1400px] px-5 md:px-10">
        <BlurFade className="border border-white/10 bg-black/50 p-7 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Technique Distribution</h2>
          <div className="mt-6 space-y-3">
            {countByTechnique.map((row, index) => (
              <BlurFade key={row.label} delay={0.03 * index}>
                <div className="grid gap-2 sm:grid-cols-[180px_1fr_56px] sm:items-center sm:gap-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-zinc-500">{row.label}</p>
                  <div className="h-2 bg-white/10">
                    <div className="h-full bg-white/85" style={{ width: `${Math.max(6, (row.count / ADVANCED_INSIGHTS.length) * 100)}%` }} />
                  </div>
                  <p className="text-right text-sm text-zinc-200">{row.count}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </section>

      <section className="mx-auto mt-10 max-w-[1400px] px-5 md:px-10">
        <BlurFade className="mb-5">
          <h2 className="text-3xl font-semibold uppercase tracking-tight text-white md:text-5xl">System Breakdown</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            Expand each block to see the casual hook and the technical mechanism behind it.
          </p>
        </BlurFade>
        <div className="space-y-3">
          {architectureContent.sections.map((section, index) => (
            <BlurFade key={section.title} delay={0.04 * index}>
              <details className="group border border-white/10 bg-white/[0.02]">
                <summary className="cursor-pointer list-none p-5 md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">Hook</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{section.title}</h3>
                  <p className="mt-2 text-base leading-7 text-zinc-300">{section.hook}</p>
                </summary>
                <div className="border-t border-white/10 px-5 pb-6 pt-4 md:px-7 md:pb-7">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">Technical Detail</p>
                  <p className="mt-3 text-sm leading-8 text-zinc-400 md:text-base">{section.tech}</p>
                </div>
              </details>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1400px] px-5 md:px-10">
        <BlurFade className="border border-white/10 bg-white/[0.02] p-7 md:p-12">
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Delivery Pipeline</p>
          <p className="mt-4 text-lg leading-8 text-zinc-300 md:text-2xl">
            Cricsheet Base <span className="text-zinc-500">→</span> Modal Serverless vCPUs <span className="text-zinc-500">→</span> Vertex AI Narrative Constraints <span className="text-zinc-500">→</span> Next.js Edge Rendering
          </p>
        </BlurFade>
      </section>
    </div>
  );
}
