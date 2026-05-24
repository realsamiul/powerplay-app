"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        wheelMultiplier: 0.88,
        syncTouch: false,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
