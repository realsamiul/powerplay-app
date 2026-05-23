"use client";

import { motion } from "framer-motion";

type BlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function BlurFade({ children, delay = 0, className }: BlurFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
