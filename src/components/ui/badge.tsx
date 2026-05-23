import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "outline" | "soft";
};

function formatLabel(label: string) {
  return label.replace(/_/g, " ");
}

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  const label =
    typeof props.children === "string" ? formatLabel(props.children) : props.children;

  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[11px] uppercase",
        variant === "outline" && "border-[var(--border-visible)] bg-transparent text-[var(--fg)]",
        variant === "soft" && "border-[var(--border-subtle)] bg-[var(--surface-2)] text-[var(--fg)]",
        className,
      )}
      style={{ letterSpacing: "var(--tracking-label)" }}
      {...props}
    >
      {label}
    </span>
  );
}
