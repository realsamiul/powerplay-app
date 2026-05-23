"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const BLOCKS = 72;

export function PixelPageTransition() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="pointer-events-none fixed inset-0 z-[60] bg-black/55"
        initial="hidden"
        animate="exit"
        exit="done"
        variants={{
          hidden: { opacity: 0 },
          exit: {
            opacity: 1,
            transition: {
              delayChildren: 0.04,
              staggerChildren: 0.01,
              staggerDirection: -1,
            },
          },
          done: { opacity: 0, transition: { duration: 0.35 } },
        }}
      >
        <div className="grid h-full grid-cols-12 gap-[1px]">
          {Array.from({ length: BLOCKS }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-zinc-100/85"
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                exit: {
                  opacity: [0, 1, 0],
                  scale: [0.2, 1, 0.6],
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
