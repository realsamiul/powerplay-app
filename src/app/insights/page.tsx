"use client";

import { type ComponentType, useEffect, useMemo, useRef, useState } from "react";
import { Activity, BarChart3, TrendingDown, Trophy, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { SlotHeadline } from "@/components/slot-headline";
import { ADVANCED_INSIGHTS, OPTA_STATS, type AdvancedInsight } from "@/lib/cricsight-data";
import { TECHNIQUE_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const techniqueIcons: Record<AdvancedInsight["technique"], ComponentType<{ className?: string }>> = {
  wp_swing: TrendingDown,
  player_vs_self: Activity,
  league_rank: Trophy,
  vaep_analysis: WandSparkles,
  advanced_modeling: BarChart3,
};

const getSpanClass = (index: number) => {
  if (index === 0) return "col-span-12 lg:col-span-8";
  if (index === 1 || index === 2) return "col-span-12 md:col-span-6 lg:col-span-4";
  if (index % 7 === 0) return "col-span-12 lg:col-span-8";
  if (index % 5 === 0) return "col-span-12 md:col-span-6 lg:col-span-4";
  return "col-span-12 md:col-span-6 lg:col-span-6";
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
      <section className="pb-12">
        <BlurFade variant="full">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
            <span>03 / Insights</span>
            <span className="h-px w-full bg-[var(--border-visible)]" />
          </p>
          <SlotHeadline
            text="CRICSIGHT INTELLIGENCE"
            elementTag="h1"
            triggerOnMount
            className="mt-5 text-[clamp(56px,10vw,168px)] leading-[0.86] text-[var(--fg)]"
          />
        </BlurFade>
      </section>

      <section className="space-y-2 pb-20 pt-4">
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
              {stat.player}: <span className="font-mono text-[var(--fg)]">{stat.value}</span> {stat.metric}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="pb-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {visibleInsights.map((insight, index) => {
            const Icon = techniqueIcons[insight.technique];
            return (
              <BlurFade
                key={insight.card_id}
                variant={index < 3 ? "slide" : "fade"}
                disabled={index > 2}
                className={cn(getSpanClass(index), "group")}
              >
                <article
                  className="flex h-full flex-col justify-between rounded-2xl p-7 transition-colors duration-300 hover:bg-[var(--surface-2)] sm:p-10"
                  aria-labelledby={`insight-${insight.card_id}`}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-bright)]">
                        {insight.player || "Target Analysis"}
                      </span>
                      <Icon className="h-5 w-5 text-[var(--fg-muted)] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div>
                      <h3
                        id={`insight-${insight.card_id}`}
                        className="text-[clamp(28px,3.5vw,48px)] font-medium leading-[1.05] tracking-tight text-[var(--fg)]"
                      >
                        {insight.headline}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
                        {insight.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-6">
                    <Badge variant="outline" className="bg-transparent text-[11px] uppercase tracking-widest text-[var(--fg-faint)]">
                      {TECHNIQUE_COPY[insight.technique]}
                    </Badge>
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
        <div ref={sentinelRef} className="mt-12 h-6 w-full" />
      </section>
    </div>
  );
}
