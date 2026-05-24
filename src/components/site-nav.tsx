"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [dateStamp, setDateStamp] = useState("");

  useEffect(() => {
    const update = () => {
      const text = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        day: "2-digit",
        month: "2-digit",
      }).format(new Date());
      setDateStamp(text.replace("/", "."));
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <nav
      className="fixed left-1/2 z-50 w-[min(1100px,95vw)] -translate-x-1/2 border border-[var(--border-visible)] bg-[var(--surface-1)] px-2 py-2 shadow-[0_4px_24px_rgba(26,24,20,0.10)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))] sm:px-3"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-[1fr_auto] items-center gap-3">
        <div className="grid w-full grid-cols-3 gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={cn(
                  "flex min-h-[44px] items-center justify-center rounded-md px-2 py-2 text-center text-[11px] uppercase transition-all duration-200 sm:text-xs",
                  active
                    ? "bg-[var(--accent)] font-medium text-[var(--bg)] shadow-sm"
                    : "text-[var(--fg)] opacity-70 hover:bg-[var(--accent)]/10 hover:opacity-100",
                )}
                style={{ letterSpacing: "var(--tracking-label)" }}
              >
                <span className="hidden sm:inline">{link.label}</span>
                <span className="sm:hidden">{link.mobileLabel}</span>
              </Link>
            );
          })}
        </div>
        <div className="pr-2 font-mono text-xs text-[var(--fg-muted)]">{dateStamp}</div>
      </div>
    </nav>
  );
}
