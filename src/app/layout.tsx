import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";
import { ClientOverlays } from "@/components/client-overlays";
import { SiteNav } from "@/components/site-nav";
import { fontPresetClass } from "@/lib/theme";
import "./globals.css";

const displayFont = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const monoFont = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cricsight Intelligence",
  description: "Data-driven cricket intelligence across insights, match impact, and architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${fontPresetClass} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <ClientOverlays />
        <SiteNav />
        <main className="pb-28">{children}</main>
      </body>
    </html>
  );
}
