"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArchViz, type VizData } from "@/components/arch-viz";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SlotHeadline } from "@/components/slot-headline";
import { ADVANCED_INSIGHTS } from "@/lib/cricsight-data";
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

      <section className="relative z-10 mx-auto max-w-[1700px] px-4 pb-16 pt-20 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="full">
          <p className="font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-overline)" }}>
            Architecture
          </p>
          <SlotHeadline
            text={architectureContent.hero.headline}
            triggerOnMount
            className="mt-4 text-[clamp(56px,10vw,168px)] leading-[0.86] text-[var(--fg)]"
          />
          <p className="mt-6 text-xl leading-relaxed text-[var(--fg)]">{architectureContent.hero.subHeadline}</p>
          <p className="mt-4 max-w-[1200px] text-xl leading-relaxed text-[var(--fg-muted)]">{architectureContent.hero.body}</p>
        </BlurFade>
      </section>

      <section className="relative z-10 w-full border-y border-[var(--border-visible)] bg-[var(--surface-1)] py-20">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-px border border-[var(--border-visible)] bg-[var(--border-visible)] md:grid-cols-4">
            {architectureContent.numbers.map((num) => (
              <div key={num.label} className="bg-[var(--bg)] p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-faint)]">{num.label}</p>
                <p className="mt-3 text-5xl leading-none text-[var(--fg)]">{num.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-bright)]">{num.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-12 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="border border-[var(--border-visible)] bg-[var(--surface-1)] p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-faint)]">End-to-End Pipeline</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {[
              "Cricsheet Raw JSON",
              "Physical-Logic Layer",
              "Gold Record Store",
              "XGBoost WP Models",
              "VAEP Calculator",
              "Narrative Cage",
              "Next.js Edge",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="whitespace-nowrap border border-[var(--border-visible)] bg-[var(--surface-0)] px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--fg)]">
                    {step}
                  </span>
                </div>
                {i < arr.length - 1 ? <span className="hidden text-[var(--accent)] sm:block">-&gt;</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
        <BlurFade variant="slide">
          <SlotHeadline text="System Breakdown" className="text-4xl text-[var(--fg)] md:text-6xl" />
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
                  className="w-full cursor-pointer px-1 py-10 text-left"
                  style={{ minHeight: 44, touchAction: "manipulation" }}
                  aria-expanded={open}
                >
                  <h3 className="text-[clamp(40px,5vw,80px)] leading-[0.9] text-[var(--fg)]">{section.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--fg-muted)]">{section.hook}</p>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-l-2 border-[var(--accent)] pb-8 pl-6 pr-4 pt-4">
                        <p className="max-w-[120ch] text-lg leading-relaxed text-[var(--fg-muted)]">{section.tech}</p>
                        {section.vizData ? <ArchViz data={section.vizData as VizData} /> : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mt-16 w-full border-t border-[var(--border-visible)] bg-[#DCD4C4] py-24">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="p-8">
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
        </div>
      </section>
    </div>
  );
}
