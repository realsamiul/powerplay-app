import { PlayerImageStaging } from "@/components/player-image-staging";
import { ADVANCED_INSIGHTS } from "@/lib/cricsight-data";

export default function PlayerImageStagingPage() {
  const uniquePlayers = Array.from(
    new Map(
      ADVANCED_INSIGHTS.map((item) => [
        item.player.toLowerCase(),
        {
          player: item.player,
          headline: item.headline,
        },
      ]),
    ).values(),
  ).slice(0, 24);

  return <PlayerImageStaging candidates={uniquePlayers} />;
}
