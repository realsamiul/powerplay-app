"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const BLOCKS = 48;

export function PixelPageTransition() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const previousPath = useRef(pathname);
  const [transitionKey, setTransitionKey] = useState<string | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    if (previousPath.current.split("#")[0] === pathname.split("#")[0]) return;

    previousPath.current = pathname;
    const start = window.setTimeout(() => setTransitionKey(pathname), 0);
    const stop = window.setTimeout(() => setTransitionKey(null), 550);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(stop);
    };
  }, [pathname, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence mode="wait">
      {transitionKey ? (
        <motion.div
          key={transitionKey}
          className="pointer-events-none fixed inset-0 z-[60] bg-[rgba(244,239,230,0.7)]"
          initial="hidden"
          animate="exit"
          exit="done"
          variants={{
            hidden: { opacity: 0 },
            exit: {
              opacity: 1,
              transition: {
                delayChildren: 0.04,
                staggerChildren: 0.008,
                staggerDirection: -1,
              },
            },
            done: { opacity: 0, transition: { duration: 0.35 } },
          }}
        >
          <div className="grid h-full grid-cols-8 gap-[1px]">
            {Array.from({ length: BLOCKS }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-[var(--fg)]"
                variants={{
                  hidden: { opacity: 0, scale: 0.2 },
                  exit: {
                    opacity: 1,
                    scale: [0.2, 1],
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              />
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
