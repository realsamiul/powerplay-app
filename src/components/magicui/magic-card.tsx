"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  ariaLabelledBy?: string;
};

export function MagicCard({
  children,
  className,
  gradientColor = "rgba(0, 106, 78, 0.08)",
  ariaLabelledBy,
}: MagicCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <article
      ref={cardRef}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "group relative overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-1)] p-5 transition-colors duration-200 hover:bg-[var(--surface-2)] hover:border-l-2 hover:border-l-[var(--accent)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), ${gradientColor} 0%, rgba(0,0,0,0) 30%)`,
        }}
      />
      <div className="relative">{children}</div>
    </article>
  );
}
