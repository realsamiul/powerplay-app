"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/insights", label: "Stats / Insights" },
  { href: "/architecture", label: "Architecture" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[min(980px,94vw)] -translate-x-1/2 border border-white/15 bg-black/75 px-3 py-3 backdrop-blur-xl [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-200">
          Cricsight
        </div>
        <div className="flex items-center gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-zinc-400 transition",
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
