"use client";

import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { ADVANCED_INSIGHTS, OPTA_STATS } from "@/lib/cricsight-data";
import { architectureContent } from "@/lib/site-content";

const techniqueLabels = ["wp_swing", "player_vs_self", "league_rank", "vaep_analysis", "advanced_modeling"] as const;

export default function ArchitecturePage() {
  const [openIndex, setOpenIndex] = useState(0);
  const countByTechnique = techniqueLabels.map((label) => ({
    label,
    count: ADVANCED_INSIGHTS.filter((item) => item.technique === label).length,
  }));

  return (
    <div className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-16 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
            Architecture
          </p>
          <WordPullUp
            words={architectureContent.hero.headline}
            className="mt-4 text-[clamp(56px,10vw,168px)] leading-[0.86] text-[var(--fg)]"
          />
          <p className="mt-6 text-xl leading-relaxed text-[var(--fg)]">{architectureContent.hero.subHeadline}</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--fg-muted)]">{architectureContent.hero.body}</p>
        </BlurFade>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1700px] gap-4 px-4 sm:px-8 md:grid-cols-3 md:px-12 lg:px-16">
        {[
          { title: "Input Blocks", value: "03", text: "One Opta stats block + two advanced-insight blocks." },
          { title: "Normalized Records", value: `${OPTA_STATS.length + ADVANCED_INSIGHTS.length}`, text: "Combined records available for render and model stratification." },
          { title: "Model Techniques", value: `${techniqueLabels.length}`, text: "Techniques mapped to presentation and narrative structure." },
        ].map((metric, index) => (
          <BlurFade key={metric.title} variant={index === 0 ? "slide" : "fade"} disabled={index > 0} className="border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6">
            <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
              {metric.title}
            </p>
            <p className="mt-3 text-5xl leading-none text-[var(--fg)]">{metric.value}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--fg-muted)]">{metric.text}</p>
          </BlurFade>
        ))}
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="slide">
          <h2 className="text-4xl text-[var(--fg)] md:text-6xl">System Breakdown</h2>
        </BlurFade>
        <div className="mt-4 h-px w-full bg-[var(--border-visible)]" />
        <div className="mt-4 space-y-1">
          {architectureContent.sections.map((section, index) => {
            const open = openIndex === index;
            return (
              <article key={section.title} className="border-b border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full cursor-pointer px-1 py-4 text-left"
                  style={{ minHeight: 44, touchAction: "manipulation" }}
                  aria-expanded={open}
                >
                  <h3 className="text-[clamp(40px,5vw,80px)] leading-[0.9] text-[var(--fg)]">{section.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--fg-muted)]">{section.hook}</p>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open ? 360 : 0 }}
                >
                  <div className="border-l-2 border-[var(--accent)] pb-6 pl-5 pr-2 pt-2">
                    <p className="text-sm leading-8 text-[var(--fg-muted)]">{section.tech}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="border border-[var(--border-subtle)] bg-[var(--surface-1)] p-8">
          <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
            Technique Distribution
          </p>
          <div className="mt-5 space-y-3">
            {countByTechnique.map((row) => (
              <div key={row.label} className="grid gap-2 sm:grid-cols-[200px_1fr_56px] sm:items-center">
                <p className="font-mono text-[11px] uppercase text-[var(--fg-muted)]" style={{ letterSpacing: "var(--tracking-label)" }}>
                  {row.label}
                </p>
                <div className="h-2 bg-[var(--border-subtle)]">
                  <div className="h-full bg-[var(--accent)]" style={{ width: `${Math.max(6, (row.count / ADVANCED_INSIGHTS.length) * 100)}%` }} />
                </div>
                <p className="text-right text-sm text-[var(--fg)]">{row.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
