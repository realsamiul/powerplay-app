import { UNIQUE_PLAYER_NAMES } from "@/lib/cricsight-data";

export default function PlayerIdentifiersPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-28 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Player Identifier Export</h1>
      <p className="mt-3 text-sm text-zinc-400">
        Identifier strategy: <span className="text-zinc-200">player name string</span>. Total players: {UNIQUE_PLAYER_NAMES.length}.
      </p>
      <p className="mt-2 text-sm text-zinc-400">
        Raw JSON endpoint: <code className="text-zinc-300">/api/player-identifiers</code>
      </p>
      <pre className="mt-6 max-h-[70vh] overflow-auto border border-white/10 bg-black/50 p-4 text-xs leading-6 text-zinc-300">
        {JSON.stringify(UNIQUE_PLAYER_NAMES, null, 2)}
      </pre>
    </div>
  );
}
