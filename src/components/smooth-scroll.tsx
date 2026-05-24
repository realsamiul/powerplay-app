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
        lerp: 0.07,
        wheelMultiplier: 0.85,
        syncTouch: true,
        syncTouchLerp: 0.085,
        touchMultiplier: 1.08,
        touchInertiaExponent: 1.45,
      }}
    >
      {children}
    </ReactLenis>
  );
}
