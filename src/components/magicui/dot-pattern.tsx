import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-40",
        "[background-image:radial-gradient(rgba(255,255,255,0.55)_0.6px,transparent_0.6px)]",
        "[background-size:14px_14px]",
        "[mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]",
        className,
      )}
    />
  );
}
