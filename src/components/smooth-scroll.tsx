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
        lerp: 0.04,
        wheelMultiplier: 0.9,
        syncTouch: true,
        touchMultiplier: 2.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
