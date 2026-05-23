"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  words: string;
  className?: string;
};

export function WordPullUp({ words, className }: Props) {
  const tokens = words.split(" ");
  const reduceMotion = useReducedMotion();

  return (
    <h1 className={className}>
      {tokens.map((token, index) => (
        <span key={`${token}-${index}`} className="inline-block overflow-hidden pr-[0.25em]">
          {reduceMotion ? (
            <span className="inline-block">{token}</span>
          ) : (
            <motion.span
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {token}
            </motion.span>
          )}
        </span>
      ))}
    </h1>
  );
}
