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
          "flex min-w-max py-2 [animation:marquee_34s_linear_infinite]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex min-w-max gap-4 pr-4">{children}</div>
        <div className="flex min-w-max gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
