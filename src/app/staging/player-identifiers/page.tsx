import { UNIQUE_PLAYER_NAMES } from "@/lib/cricsight-data";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PlayerIdentifiersPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-28 pt-16">
      <h1 className="text-3xl text-[var(--fg)]">Player Identifier Export</h1>
      <p className="mt-3 text-sm text-[var(--fg-muted)]">
        Identifier strategy: <span className="text-[var(--fg)]">player name string</span>. Total players: {UNIQUE_PLAYER_NAMES.length}.
      </p>
      <p className="mt-2 text-sm text-[var(--fg-muted)]">
        Raw JSON endpoint: <code className="text-[var(--fg)]">/api/player-identifiers</code>
      </p>
      <pre className="mt-6 max-h-[70vh] overflow-auto border border-[var(--border-subtle)] bg-[var(--surface-1)] p-4 text-xs leading-6 text-[var(--fg-muted)]">
        {JSON.stringify(UNIQUE_PLAYER_NAMES, null, 2)}
      </pre>
    </div>
  );
}
