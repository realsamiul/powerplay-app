"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SitePreloader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (sessionStorage.getItem("cricsight-loaded") === "true") {
        setVisible(false);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (reduceMotion) {
      const id = window.setTimeout(() => {
        sessionStorage.setItem("cricsight-loaded", "true");
        setVisible(false);
      }, 250);
      return () => window.clearTimeout(id);
    }

    let cancelled = false;
    const startedAt = performance.now();

    const complete = () => {
      if (cancelled) return;
      setProgress(100);
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, 400 - elapsed);
      window.setTimeout(() => {
        if (cancelled) return;
        sessionStorage.setItem("cricsight-loaded", "true");
        setVisible(false);
      }, wait);
    };

    if (document.readyState === "complete") {
      complete();
    } else {
      const onLoad = () => complete();
      window.addEventListener("load", onLoad, { once: true });
      return () => {
        cancelled = true;
        window.removeEventListener("load", onLoad);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [reduceMotion, visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] border-b border-[var(--border-visible)] bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-6">
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-overline)] text-[var(--fg-faint)]">
              5.2M deliveries. 16,101 players. 0 guesses.
            </p>

            <div className="mt-8 w-full border border-[var(--border-subtle)] p-1">
              <motion.div
                className="h-2 bg-[var(--accent)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
            <p className="mt-2 text-right font-mono text-xs tabular-nums text-[var(--fg-muted)]">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
