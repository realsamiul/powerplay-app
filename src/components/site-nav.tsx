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
      className="fixed left-1/2 z-50 w-[min(1100px,95vw)] -translate-x-1/2 transition-transform"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="nav-shape-border w-full">
        <div className="nav-shape-inner grid grid-cols-[1fr_auto] items-center gap-3 px-2 py-2 sm:px-3">
          <div className="grid w-full grid-cols-4 gap-1">
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
                      ? "bg-[var(--accent)] font-semibold text-[#FAF9F5] shadow-sm"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  )}
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  <span className="hidden sm:inline">{link.label}</span>
                  <span className="sm:hidden">{link.mobileLabel}</span>
                </Link>
              );
            })}
          </div>
          <div className="pr-2 font-mono text-xs text-[var(--bg)] opacity-70">{dateStamp}</div>
        </div>
      </div>
    </nav>
  );
}
