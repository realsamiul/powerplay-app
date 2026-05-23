import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { PixelPageTransition } from "@/components/pixel-page-transition";
import { SitePreloader } from "@/components/site-preloader";
import { SiteNav } from "@/components/site-nav";
import { fontPresetClass } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${fontPresetClass} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <SitePreloader />
        <div className="grain-overlay" />
        <PixelPageTransition />
        <SiteNav />
        <main className="pb-28">{children}</main>
      </body>
    </html>
  );
}
