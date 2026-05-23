import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  duration?: string;
};

export function Marquee({ children, reverse, className, duration = "40s" }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} role="region" aria-label="Live statistics ticker">
      <div
        className={cn(
          "flex min-w-max py-0 [animation:marquee_var(--marquee-duration)_linear_infinite] [transform:translateZ(0)] [will-change:transform]",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        <div className="flex min-w-max gap-4 pr-4">{children}</div>
        <div className="flex min-w-max gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
