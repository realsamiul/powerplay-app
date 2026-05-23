import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

export function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-max gap-4 py-2 [animation:marquee_34s_linear_infinite]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
