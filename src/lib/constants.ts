import type { AdvancedInsight } from "@/lib/cricsight-data";

export const NAV_LINKS = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/insights", label: "Insights", mobileLabel: "Stats" },
  { href: "/architecture", label: "Architecture", mobileLabel: "Arch." },
] as const;

export const TECHNIQUE_COPY: Record<AdvancedInsight["technique"], string> = {
  wp_swing: "Win Probability Swing",
  player_vs_self: "Pressure Response",
  league_rank: "League Outlier Rank",
  vaep_analysis: "Value & Wicket Threat",
  advanced_modeling: "Baseline Model Delta",
};
