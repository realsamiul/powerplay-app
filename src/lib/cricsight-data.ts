import optaStats from "@/data/opta-stats.json";
import batch1 from "@/data/advanced-insights-batch-1.json";
import batch2 from "@/data/advanced-insights-batch-2.json";

export type OptaStat = {
  stat_id: string;
  player: string;
  metric: string;
  value: number;
  fact: string;
};

export type AdvancedInsight = {
  card_id: string;
  headline: string;
  player: string;
  technique: "wp_swing" | "player_vs_self" | "league_rank" | "vaep_analysis" | "advanced_modeling";
  text: string;
};

export const OPTA_STATS = optaStats as OptaStat[];
export const ADVANCED_INSIGHTS = [...(batch1 as AdvancedInsight[]), ...(batch2 as AdvancedInsight[])];
export const UNIQUE_PLAYER_NAMES = Array.from(
  new Set([...OPTA_STATS.map((item) => item.player), ...ADVANCED_INSIGHTS.map((item) => item.player)]),
).sort((a, b) => a.localeCompare(b));

export const TECHNIQUE_COPY: Record<AdvancedInsight["technique"], string> = {
  wp_swing: "Win probability swing",
  player_vs_self: "Pressure response",
  league_rank: "League outlier rank",
  vaep_analysis: "Value & wicket threat",
  advanced_modeling: "Baseline model delta",
};
