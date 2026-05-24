"use client";

import { useSyncExternalStore } from "react";
import { PixelPageTransition } from "@/components/pixel-page-transition";

function subscribe() {
  return () => {};
}

function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ClientOverlays() {
  const hydrated = useHydrated();

  if (!hydrated) return null;

  return (
    <>
      <PixelPageTransition />
    </>
  );
}
