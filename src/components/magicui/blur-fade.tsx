"use client";

import { motion, useReducedMotion } from "framer-motion";

type BlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  disabled?: boolean;
  variant?: "full" | "slide" | "fade";
  once?: boolean;
};

export function BlurFade({
  children,
  delay = 0,
  className,
  disabled = false,
  variant = "fade",
  once = true,
}: BlurFadeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion || disabled) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    variant === "full"
      ? { opacity: 0, y: 16, filter: "blur(6px)" }
      : variant === "slide"
        ? { opacity: 0, y: 16 }
        : { opacity: 0 };

  const animate =
    variant === "full"
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : variant === "slide"
        ? { opacity: 1, y: 0 }
        : { opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
