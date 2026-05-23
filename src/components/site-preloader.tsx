"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SitePreloader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      const id = window.setTimeout(() => setVisible(false), 250);
      return () => window.clearTimeout(id);
    }

    const startedAt = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, Math.floor((elapsed / 1600) * 100));
      setProgress(next);
      if (next >= 100) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 280);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] border-b border-white/10 bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">CricSight / Initialization</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold uppercase tracking-tight text-zinc-100 md:text-5xl">
              Building Match-State Context
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">Calibrating leverage models, pressure traces, and narrative gates.</p>

            <div className="mt-8 w-full border border-white/10 p-1">
              <motion.div
                className="h-2 bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
            <p className="mt-2 text-right text-xs tabular-nums text-zinc-400">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
