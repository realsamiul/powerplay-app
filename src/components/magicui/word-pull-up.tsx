"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  words: string;
  className?: string;
};

export function WordPullUp({ words, className }: Props) {
  const wordsArray = words.split(" ");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      window.dispatchEvent(new CustomEvent("headlineComplete"));
      return;
    }
    const id = window.setTimeout(
      () => window.dispatchEvent(new CustomEvent("headlineComplete")),
      Math.max(300, wordsArray.length * 50 + 560),
    );
    return () => window.clearTimeout(id);
  }, [wordsArray.length, reduceMotion]);

  return (
    <h1
      className={className}
      aria-label={words}
      style={{ letterSpacing: "var(--tracking-display)", fontFamily: "var(--font-display)" }}
    >
      {wordsArray.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pr-[0.25em]" aria-hidden="true">
          {reduceMotion ? (
            <span className="inline-block">{word}</span>
          ) : (
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {word}
            </motion.span>
          )}
        </span>
      ))}
    </h1>
  );
}
