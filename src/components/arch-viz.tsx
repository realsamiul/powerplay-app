import type { FC } from "react";

type PipelineViz = { type: "pipeline"; steps: string[] };
type BarViz = { type: "bar"; label: string; items: { name: string; value: number }[] };
type StatGridViz = { type: "stat-grid"; items: { label: string; value: string }[] };
type RuleListViz = { type: "rule-list"; items: string[] };
type TwoColViz = {
  type: "two-col";
  left: { label: string; items: string[] };
  right: { label: string; items: string[] };
};

export type VizData = PipelineViz | BarViz | StatGridViz | RuleListViz | TwoColViz;

export const ArchViz: FC<{ data: VizData }> = ({ data }) => {
  if (data.type === "pipeline") {
    return (
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {data.steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="border border-[var(--border-visible)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[var(--fg)]">
              {step}
            </span>
            {i < data.steps.length - 1 ? <span className="text-sm text-[var(--accent)]">-&gt;</span> : null}
          </div>
        ))}
      </div>
    );
  }

  if (data.type === "bar") {
    const max = Math.max(...data.items.map((d) => d.value));
    return (
      <div className="mt-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-faint)]">{data.label}</p>
        <div className="mt-3 space-y-2">
          {data.items.map((item) => (
            <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-3">
              <div className="h-5 overflow-hidden bg-[var(--border-subtle)]">
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-700"
                  style={{ width: `${(item.value / max) * 100}%` }}
                />
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-[var(--fg)]">{item.value}%</span>
                <span className="ml-2 text-[10px] text-[var(--fg-faint)]">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (data.type === "stat-grid") {
    return (
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {data.items.map((item) => (
          <div key={item.label} className="border border-[var(--border-subtle)] bg-[var(--surface-0)] p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-faint)]">{item.label}</p>
            <p className="mt-2 text-3xl text-[var(--fg)]">{item.value}</p>
          </div>
        ))}
      </div>
    );
  }

  if (data.type === "rule-list") {
    return (
      <ol className="mt-6 space-y-2">
        {data.items.map((item, i) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-xs text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-[var(--fg)]">{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (data.type === "two-col") {
    return (
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[data.left, data.right].map((col, ci) => (
          <div key={col.label} className={`border border-[var(--border-subtle)] p-5 ${ci === 1 ? "opacity-60" : ""}`}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
              {ci === 0 ? "OK" : "--"} {col.label}
            </p>
            <ul className="mt-3 space-y-1.5">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-[var(--fg)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
