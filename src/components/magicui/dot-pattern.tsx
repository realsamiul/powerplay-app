import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70",
        "[mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]",
        className,
      )}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="dot-grid" width="2" height="2" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.16" fill="rgba(0,168,120,0.25)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}
