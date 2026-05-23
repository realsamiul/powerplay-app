"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
};

export function MagicCard({
  children,
  className,
  gradientColor = "rgba(255,255,255,0.06)",
}: MagicCardProps) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <article
      className={cn(
        "relative overflow-hidden border border-white/10 bg-white/5 p-5 backdrop-blur-md",
        className,
      )}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${gradientColor} 0%, rgba(0,0,0,0) 45%)`,
        }}
      />
      <div className="relative">{children}</div>
    </article>
  );
}
