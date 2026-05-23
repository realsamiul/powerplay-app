"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/insights", label: "Insights" },
  { href: "/architecture", label: "Architecture" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(980px,94vw)] -translate-x-1/2 border border-white/15 bg-black/75 px-2 py-2 backdrop-blur-xl [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))] sm:bottom-5 sm:px-3 sm:py-3">
      <div className="flex items-center justify-center gap-2 sm:justify-between">
        <div className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-zinc-200 sm:block">
          Cricsight
        </div>
        <div className="grid w-full grid-cols-3 gap-1 sm:flex sm:w-auto sm:items-center sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2 py-2 text-center text-[11px] uppercase tracking-[0.08em] text-zinc-400 transition sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]",
                  active && "bg-white/10 text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
