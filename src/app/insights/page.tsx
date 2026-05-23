"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, BarChart3, TrendingDown, Trophy, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ADVANCED_INSIGHTS, OPTA_STATS, type AdvancedInsight } from "@/lib/cricsight-data";
import { TECHNIQUE_COPY } from "@/lib/constants";

const techniqueIcons: Record<AdvancedInsight["technique"], React.ComponentType<{ className?: string }>> = {
  wp_swing: TrendingDown,
  player_vs_self: Activity,
  league_rank: Trophy,
  vaep_analysis: WandSparkles,
  advanced_modeling: BarChart3,
};

const getSpanClass = (index: number) => {
  if (index === 0) return "col-span-12 md:col-span-7";
  if (index === 1 || index === 2) return "col-span-12 md:col-span-5";
  if (index % 7 === 0) return "col-span-12 md:col-span-7";
  if (index % 5 === 0) return "col-span-12 md:col-span-4";
  return "col-span-12 md:col-span-5 xl:col-span-4";
};

export default function InsightsPage() {
  const [sliceEnd, setSliceEnd] = useState(12);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const visibleInsights = useMemo(() => ADVANCED_INSIGHTS.slice(0, sliceEnd), [sliceEnd]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries[0];
        if (!hit?.isIntersecting) return;
        setSliceEnd((prev) => Math.min(prev + 12, ADVANCED_INSIGHTS.length));
      },
      { threshold: 0.1, rootMargin: "-20px" },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-[1700px] px-4 pb-20 pt-12 sm:px-8 md:px-12 lg:px-16">
      <section className="pb-8">
        <BlurFade variant="full">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
            <span>03 / Insights</span>
            <span className="h-px w-full bg-[var(--border-visible)]" />
          </p>
          <WordPullUp words="CRICSIGHT INTELLIGENCE" className="mt-5 text-[clamp(56px,10vw,168px)] leading-[0.86] text-[var(--fg)]" />
        </BlurFade>
      </section>

      <section className="space-y-2 pb-10">
        <Marquee duration="36s">
          {OPTA_STATS.map((stat) => (
            <span
              key={`row-a-${stat.stat_id}`}
              className="whitespace-nowrap border-l-2 border-[var(--accent)] bg-[var(--surface-1)] px-5 py-2 text-sm text-[var(--fg)]"
            >
              {stat.fact}
            </span>
          ))}
        </Marquee>
        <Marquee reverse duration="52s">
          {OPTA_STATS.map((stat) => (
            <span
              key={`row-b-${stat.stat_id}`}
              className="whitespace-nowrap border-l-2 border-[var(--border-visible)] bg-[var(--surface-0)] px-5 py-2 text-sm text-[var(--fg-muted)]"
            >
              {stat.player}: {stat.value} {stat.metric}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="pb-16">
        <div className="grid grid-cols-12 gap-4">
          {visibleInsights.map((insight, index) => {
            const Icon = techniqueIcons[insight.technique];
            return (
              <BlurFade
                key={insight.card_id}
                variant={index < 3 ? "slide" : "fade"}
                disabled={index > 2}
                className={getSpanClass(index)}
              >
                <MagicCard className="h-full" ariaLabelledBy={`insight-${insight.card_id}`}>
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline">{TECHNIQUE_COPY[insight.technique]}</Badge>
                    <Icon className="h-4 w-4 text-[var(--fg-muted)]" />
                  </div>
                  <h3 id={`insight-${insight.card_id}`} className="mb-2 text-xl leading-tight text-[var(--fg)]">{insight.headline}</h3>
                  <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-[var(--fg-muted)] md:line-clamp-none">{insight.text}</p>
                  <p className="hidden text-[11px] uppercase text-[var(--fg-faint)] md:block" style={{ letterSpacing: "var(--tracking-label)" }}>
                    {TECHNIQUE_COPY[insight.technique]}
                  </p>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
        <div ref={sentinelRef} className="mt-6 h-6 w-full" />
      </section>
    </div>
  );
}
