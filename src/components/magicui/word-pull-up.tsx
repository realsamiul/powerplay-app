"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  words: string;
  className?: string;
};

export function WordPullUp({ words, className }: Props) {
  const groups = words.match(/.{1,3}/g) ?? [words];
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      window.dispatchEvent(new CustomEvent("headlineComplete"));
      return;
    }
    const id = window.setTimeout(
      () => window.dispatchEvent(new CustomEvent("headlineComplete")),
      Math.max(300, groups.length * 35 + 560),
    );
    return () => window.clearTimeout(id);
  }, [groups.length, reduceMotion]);

  return (
    <h1 className={className} aria-label={words} style={{ letterSpacing: "var(--tracking-display)" }}>
      {groups.map((chunk, index) => (
        <span key={`${chunk}-${index}`} className="inline-block overflow-hidden" aria-hidden="true">
          {reduceMotion ? (
            <span className="inline-block">{chunk}</span>
          ) : (
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {chunk}
            </motion.span>
          )}
        </span>
      ))}
    </h1>
  );
}
