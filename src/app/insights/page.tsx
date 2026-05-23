import { Activity, BarChart3, Sparkles, TrendingDown, Trophy, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ADVANCED_INSIGHTS, OPTA_STATS, TECHNIQUE_COPY, type AdvancedInsight } from "@/lib/cricsight-data";

const techniqueIcons: Record<AdvancedInsight["technique"], React.ComponentType<{ className?: string }>> = {
  wp_swing: TrendingDown,
  player_vs_self: Activity,
  league_rank: Trophy,
  vaep_analysis: WandSparkles,
  advanced_modeling: BarChart3,
};

export default function InsightsPage() {
  return (
    <div className="relative mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
      <DotPattern />
      <section className="relative pb-8 pt-14">
        <BlurFade>
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-zinc-400">Insights Engine</p>
          <WordPullUp
            words="CRICSIGHT INTELLIGENCE"
            className="text-4xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl"
          />
        </BlurFade>
      </section>

      <section className="space-y-3 pb-12">
        <Marquee>
          {OPTA_STATS.map((stat) => (
            <span
              key={`row-a-${stat.stat_id}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-200 backdrop-blur-md"
            >
              {stat.fact}
            </span>
          ))}
        </Marquee>
        <Marquee reverse>
          {OPTA_STATS.map((stat) => (
            <span
              key={`row-b-${stat.stat_id}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-200 backdrop-blur-md"
            >
              {stat.player}: {stat.value} {stat.metric}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="pb-16">
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-zinc-400">
          <Sparkles className="h-3.5 w-3.5" />
          Deep Context Models
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ADVANCED_INSIGHTS.map((insight, index) => {
            const Icon = techniqueIcons[insight.technique];
            return (
              <BlurFade key={insight.card_id} delay={0.02 * (index % 9)}>
                <MagicCard gradientColor="rgba(255,255,255,0.05)" className="h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline">{insight.technique}</Badge>
                    <Icon className="h-4 w-4 text-zinc-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">{insight.headline}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">{insight.text}</p>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">{TECHNIQUE_COPY[insight.technique]}</p>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
      </section>
    </div>
  );
}
