import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "outline" | "soft";
};

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em]",
        variant === "outline" && "border-white/15 bg-transparent text-zinc-200",
        variant === "soft" && "border-white/10 bg-white/5 text-zinc-100",
        className,
      )}
      {...props}
    />
  );
}
