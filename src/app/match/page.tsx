"use client";

import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SlotHeadline } from "@/components/slot-headline";
import { 
  Activity, 
  BarChart3, 
  Compass, 
  CloudSun, 
  Flame, 
  TrendingUp, 
  Trophy, 
  Users, 
  ChevronRight,
  Zap
} from "lucide-react";

export default function MatchCenterPage() {
  const [activeTab, setActiveTab] = useState<"summary" | "wagonWheel" | "timeline">("summary");
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  // Real match stats: IPL Match 68 - May 25, 2026
  const matchInfo = {
    teams: {
      srh: { name: "Sunrisers Hyderabad", score: "278/3", overs: "20.0", rr: "13.90", abbrev: "SRH" },
      kkr: { name: "Kolkata Knight Riders", score: "168", overs: "18.4", rr: "9.00", abbrev: "KKR" }
    },
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    result: "Sunrisers Hyderabad won by 110 runs",
    toss: "Kolkata Knight Riders won the toss & elected to bowl",
    playerOfMatch: { name: "Travis Head", stats: "124 runs (46 balls) - 11x4, 9x6" }
  };

  const zones = [
    { id: 1, name: "Third Man", runs: 28, pct: "10%", color: "#00F2FF", coords: "top-left" },
    { id: 2, name: "Point", runs: 42, pct: "15%", color: "#C1FF72", coords: "left" },
    { id: 3, name: "Cover", runs: 68, pct: "24%", color: "#00F2FF", coords: "bottom-left" },
    { id: 4, name: "Mid Off", runs: 34, pct: "12%", color: "#C1FF72", coords: "bottom" },
    { id: 5, name: "Mid On", runs: 24, pct: "9%", color: "#00F2FF", coords: "bottom" },
    { id: 6, name: "Mid Wicket", runs: 52, pct: "19%", color: "#C1FF72", coords: "bottom-right" },
    { id: 7, name: "Square Leg", runs: 18, pct: "6%", color: "#00F2FF", coords: "right" },
    { id: 8, name: "Fine Leg", runs: 12, pct: "5%", color: "#C1FF72", coords: "top-right" }
  ];

  const recentOvers = [
    { ball: "18.4", bowler: "Pat Cummins", batsman: "Hasan Ali", result: "W", desc: "Clean bowled! Yorker length on leg stump, swings in. KKR all out!", highlight: true },
    { ball: "18.3", bowler: "Pat Cummins", batsman: "Hasan Ali", result: "0", desc: "Dot ball. Slower bouncer, beaten in the air." },
    { ball: "18.2", bowler: "Pat Cummins", batsman: "Hasan Ali", result: "6", desc: "SIX! Length ball, smashed over deep midwicket for a giant max!", highlight: true },
    { ball: "18.1", bowler: "Pat Cummins", batsman: "Suyash Sharma", result: "1", desc: "Single. Steered gently to deep third man." },
    { ball: "17.6", bowler: "T. Natarajan", batsman: "Suyash Sharma", result: "4", desc: "FOUR! Inside edge flies past the keeper to the boundary." }
  ];

  const srhBatsmen = [
    { name: "Travis Head", runs: 124, balls: 46, fours: 11, sixes: 9, sr: "269.56", status: "c Salt b Starc" },
    { name: "Abhishek Sharma", runs: 62, balls: 30, fours: 5, sixes: 4, sr: "206.67", status: "b Narine" },
    { name: "Heinrich Klaasen", runs: 81, balls: 32, fours: 4, sixes: 7, sr: "253.13", status: "not out" }
  ];

  return (
    <div className="mx-auto max-w-[1700px] px-4 pb-32 pt-12 sm:px-8 md:px-12 lg:px-16">
      
      {/* Page Header */}
      <section className="pb-10">
        <BlurFade variant="full">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase text-[var(--fg-faint)]" style={{ letterSpacing: "var(--tracking-label)" }}>
            <span>02 / Live Hub</span>
            <span className="h-px w-full bg-[var(--border-visible)]" />
          </p>
          <SlotHeadline
            text="IPL MATCH CENTER"
            elementTag="h1"
            triggerOnMount
            className="mt-5 text-[clamp(56px,10vw,168px)] leading-[0.86] text-[var(--fg)]"
          />
        </BlurFade>
      </section>

      {/* Main Glassmorphic Bento Grid */}
      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        
        {/* WIDGET 1: Hero Scoreboard Panel (Col Span: 8) */}
        <BlurFade variant="slide" className="col-span-12 lg:col-span-8">
          <div className="shape-border h-full">
            <div className="shape-inner relative overflow-hidden bg-gradient-to-br from-[var(--surface-0)]/90 to-[var(--surface-1)]/60 p-6 backdrop-blur-xl sm:p-10">
              
              {/* Header Ticker */}
              <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-subtle)] pb-6 gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-bright)] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Live Match concluded - IPL Match 68
                </span>
                <span className="font-mono text-[11px] text-[var(--fg-muted)]">
                  {matchInfo.venue}
                </span>
              </div>

              {/* Live Scores Grid */}
              <div className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-4 relative z-10">
                {/* Team 1 (SRH) */}
                <div className="border-l-4 border-[var(--accent)] pl-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-medium tracking-tight text-[var(--fg)]">{matchInfo.teams.srh.abbrev}</span>
                    <span className="rounded bg-[var(--accent)]/10 px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--accent)] font-semibold">Innings 1</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-[clamp(44px,6vw,68px)] font-bold leading-none text-[var(--fg)]">{matchInfo.teams.srh.score}</span>
                    <span className="text-lg text-[var(--fg-muted)]">({matchInfo.teams.srh.overs} ov)</span>
                  </div>
                  <p className="mt-3 font-mono text-xs text-[var(--fg-faint)]">Run Rate: {matchInfo.teams.srh.rr}</p>
                </div>

                {/* Team 2 (KKR) */}
                <div className="border-l-4 border-[var(--border-visible)] pl-5 opacity-85">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-medium tracking-tight text-[var(--fg)]">{matchInfo.teams.kkr.abbrev}</span>
                    <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--fg-muted)]">Innings 2</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-[clamp(44px,6vw,68px)] font-bold leading-none text-[var(--fg-muted)]">{matchInfo.teams.kkr.score}</span>
                    <span className="text-lg text-[var(--fg-faint)]">({matchInfo.teams.kkr.overs} ov)</span>
                  </div>
                  <p className="mt-3 font-mono text-xs text-[var(--fg-faint)]">Run Rate: {matchInfo.teams.kkr.rr}</p>
                </div>
              </div>

              {/* Progress Overlay bar */}
              <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)]" style={{ width: "100%" }}></div>
              </div>

              {/* Match Details & Toss */}
              <div className="grid gap-4 border-t border-[var(--border-subtle)] pt-6 sm:grid-cols-2 text-sm text-[var(--fg-muted)] font-sans">
                <div className="flex items-center gap-3">
                  <Trophy className="h-4 w-4 text-[var(--accent)]" />
                  <span><strong>{matchInfo.result}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-[var(--accent-bright)]" />
                  <span>{matchInfo.toss}</span>
                </div>
              </div>

            </div>
          </div>
        </BlurFade>

        {/* WIDGET 2: Real-time Win Probability (Col Span: 4) */}
        <BlurFade variant="slide" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="shape-border h-full">
            <div className="shape-inner flex flex-col justify-between bg-[var(--surface-0)]/90 backdrop-blur-xl p-6 sm:p-8">
              
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Win Probability</span>
                <TrendingUp className="h-4 w-4 text-[var(--accent)]" />
              </div>

              {/* Radial Visualization representation */}
              <div className="flex flex-col items-center justify-center py-8 relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  {/* Outer circle */}
                  <circle cx="80" cy="80" r="68" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                  {/* Glowing active win segment */}
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="68" 
                    fill="transparent" 
                    stroke="var(--accent)" 
                    strokeWidth="12" 
                    strokeDasharray="427" 
                    strokeDashoffset="0" // 100% complete
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_var(--accent)]"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[42px] font-bold leading-none text-[var(--fg)]">100%</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--accent)] mt-1.5 font-bold">SRH Victory</span>
                </div>
              </div>

              {/* Micro-metrics */}
              <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 text-xs font-mono text-[var(--fg-muted)]">
                <span>SRH: <strong className="text-[var(--fg)]">100%</strong></span>
                <span>KKR: <strong className="text-[var(--fg-faint)]">0%</strong></span>
              </div>

            </div>
          </div>
        </BlurFade>

        {/* WIDGET 3: 3D Wagon Wheel boundary zones (Col Span: 6) */}
        <BlurFade variant="slide" className="col-span-12 lg:col-span-6">
          <div className="shape-border h-full">
            <div className="shape-inner bg-[var(--surface-0)]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)] flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[var(--accent-bright)]" />
                  Boundary Zone Wagon Wheel
                </span>
                <span className="font-mono text-[10px] uppercase text-[var(--accent-bright)]">Hover Zones</span>
              </div>

              {/* Custom interactive wagon wheel field mockup */}
              <div className="relative h-64 w-full bg-white/[0.02] border border-white/[0.04] rounded-full overflow-hidden flex items-center justify-center">
                
                {/* Outer Field Ring */}
                <div className="absolute inset-4 border border-dashed border-white/10 rounded-full" />
                {/* Inner Ring (30 Yards) */}
                <div className="absolute inset-16 border border-white/5 rounded-full" />
                {/* Pitch */}
                <div className="absolute w-6 h-16 bg-white/[0.04] border border-white/10 rounded" />

                {/* Draw hit lines emanating from pitch to boundaries based on hovered zone */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {zones.map((zone) => {
                    const isHovered = hoveredZone === zone.id;
                    let targetX = "50%";
                    let targetY = "50%";
                    
                    if (zone.id === 1) { targetX = "20%"; targetY = "20%"; }
                    if (zone.id === 2) { targetX = "15%"; targetY = "50%"; }
                    if (zone.id === 3) { targetX = "25%"; targetY = "80%"; }
                    if (zone.id === 4) { targetX = "50%"; targetY = "90%"; }
                    if (zone.id === 5) { targetX = "50%"; targetY = "10%"; }
                    if (zone.id === 6) { targetX = "75%"; targetY = "80%"; }
                    if (zone.id === 7) { targetX = "85%"; targetY = "50%"; }
                    if (zone.id === 8) { targetX = "80%"; targetY = "20%"; }

                    return (
                      <line
                        key={`line-${zone.id}`}
                        x1="50%"
                        y1="50%"
                        x2={targetX}
                        y2={targetY}
                        stroke={zone.color}
                        strokeWidth={isHovered ? "3" : "1"}
                        opacity={isHovered ? "0.9" : "0.15"}
                        className="transition-all duration-300"
                        style={{ filter: isHovered ? `drop-shadow(0 0 4px ${zone.color})` : "none" }}
                      />
                    );
                  })}
                </svg>

                {/* Zone highlights text triggers */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-4">
                  {zones.map((zone) => {
                    let gridClass = "";
                    if (zone.id === 1) gridClass = "col-start-1 row-start-1 justify-self-start";
                    if (zone.id === 2) gridClass = "col-start-1 row-start-2 self-center justify-self-start";
                    if (zone.id === 3) gridClass = "col-start-1 row-start-3 self-end justify-self-start";
                    if (zone.id === 4) gridClass = "col-start-2 row-start-3 self-end justify-self-center";
                    if (zone.id === 5) gridClass = "col-start-2 row-start-1 justify-self-center";
                    if (zone.id === 6) gridClass = "col-start-3 row-start-3 self-end justify-self-end";
                    if (zone.id === 7) gridClass = "col-start-3 row-start-2 self-center justify-self-end";
                    if (zone.id === 8) gridClass = "col-start-3 row-start-1 justify-self-end";

                    return (
                      <div
                        key={zone.id}
                        className={`${gridClass} cursor-pointer z-10 transition-transform duration-200`}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone(null)}
                        style={{ transform: hoveredZone === zone.id ? "scale(1.1)" : "scale(1)" }}
                      >
                        <span 
                          className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider"
                          style={{ 
                            background: hoveredZone === zone.id ? zone.color : "rgba(255,255,255,0.03)", 
                            color: hoveredZone === zone.id ? "#000" : "rgba(255,255,255,0.6)" 
                          }}
                        >
                          {zone.name} ({zone.pct})
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Active Zone Readout */}
              <div className="mt-4 min-h-[30px] text-center font-mono text-xs text-[var(--fg-muted)]">
                {hoveredZone ? (
                  <span>Zone: <strong className="text-[var(--fg)]">{zones.find(z => z.id === hoveredZone)?.name}</strong> - Hit Value: <strong className="text-[var(--accent)]">{zones.find(z => z.id === hoveredZone)?.runs} Runs</strong></span>
                ) : (
                  <span className="text-[var(--fg-faint)]">Hover over a boundary zone to view scatter values</span>
                )}
              </div>

            </div>
          </div>
        </BlurFade>

        {/* WIDGET 4: Monospaced Player Performance Matrix (Col Span: 6) */}
        <BlurFade variant="slide" className="col-span-12 lg:col-span-6">
          <div className="shape-border h-full">
            <div className="shape-inner bg-[var(--surface-0)]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)] flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--accent)]" />
                  Primary Batsmen Strike Matrix
                </span>
                <span className="font-mono text-[10px] text-[var(--accent)] font-bold">SRH Batting</span>
              </div>

              {/* Player Stats Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/5 pb-2 text-[var(--fg-faint)] uppercase tracking-wider">
                      <th className="py-2">Batsman</th>
                      <th className="py-2 text-right">Runs</th>
                      <th className="py-2 text-right">Balls</th>
                      <th className="py-2 text-right">4s / 6s</th>
                      <th className="py-2 text-right">S/R</th>
                    </tr>
                  </thead>
                  <tbody>
                    {srhBatsmen.map((b) => (
                      <tr key={b.name} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                        <td className="py-3">
                          <p className="font-sans font-medium text-[var(--fg)]">{b.name}</p>
                          <p className="text-[10px] text-[var(--fg-faint)]">{b.status}</p>
                        </td>
                        <td className="py-3 text-right font-bold text-[var(--fg)]">{b.runs}</td>
                        <td className="py-3 text-right text-[var(--fg-muted)]">{b.balls}</td>
                        <td className="py-3 text-right text-[var(--fg-muted)]">{b.fours} / {b.sixes}</td>
                        <td className="py-3 text-right text-[var(--accent-bright)] font-semibold">{b.sr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Highlight of the Match */}
              <div className="mt-6 flex items-start gap-3 bg-[var(--surface-1)] p-4 rounded border border-white/5">
                <Flame className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-sans font-medium text-[var(--fg)]">Player of the Match: {matchInfo.playerOfMatch.name}</p>
                  <p className="text-[var(--fg-muted)] font-mono mt-1">{matchInfo.playerOfMatch.stats}</p>
                </div>
              </div>

            </div>
          </div>
        </BlurFade>

        {/* WIDGET 5: Live Ball-by-ball HUD Timeline (Col Span: 8) */}
        <BlurFade variant="slide" className="col-span-12 lg:col-span-8">
          <div className="shape-border h-full">
            <div className="shape-inner bg-[var(--surface-0)]/90 backdrop-blur-xl p-6 sm:p-8">
              
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)] flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[var(--accent-bright)]" />
                  Innings Ticker & Recent Events
                </span>
                <span className="font-mono text-[10px] uppercase text-[var(--accent-bright)]">Over 18 Ticker</span>
              </div>

              {/* Ball-by-ball feed */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {recentOvers.map((event, i) => (
                  <div 
                    key={`ball-${event.ball}`} 
                    className={`flex items-start gap-4 p-3 rounded transition-colors ${
                      event.highlight ? "bg-[var(--accent)]/5 border border-[var(--accent)]/10" : "bg-transparent"
                    }`}
                  >
                    {/* Ball Indicator badge */}
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-xs font-bold text-[var(--fg-muted)]">{event.ball}</span>
                      <span 
                        className={`mt-1.5 flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold ${
                          event.result === "W" 
                            ? "bg-red-500 text-white animate-pulse" 
                            : event.result === "6" || event.result === "4"
                            ? "bg-[var(--accent)] text-[var(--bg)]"
                            : "bg-white/5 text-[var(--fg-muted)]"
                        }`}
                      >
                        {event.result}
                      </span>
                    </div>

                    {/* Ball Details description */}
                    <div className="text-xs font-sans">
                      <p className="font-semibold text-[var(--fg)]">{event.bowler} to {event.batsman}</p>
                      <p className="text-[var(--fg-muted)] mt-1 font-mono text-[11px]">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </BlurFade>

        {/* WIDGET 6: Climate & Stadium HUD (Col Span: 4) */}
        <BlurFade variant="slide" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="shape-border h-full">
            <div className="shape-inner bg-[var(--surface-0)]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between h-full">
              
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)] flex items-center gap-2">
                  <CloudSun className="h-4 w-4 text-[var(--fg-muted)]" />
                  Stadium Condition HUD
                </span>
                <span className="font-mono text-[10px] text-[var(--fg-faint)]">Live Feed</span>
              </div>

              {/* Climate stats list */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.02] pb-3">
                  <span className="text-xs text-[var(--fg-muted)]">Temperature</span>
                  <span className="font-mono text-xs font-semibold text-[var(--fg)]">34.2 °C (Humid)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.02] pb-3">
                  <span className="text-xs text-[var(--fg-muted)]">Dew Factor</span>
                  <span className="font-mono text-xs font-semibold text-[var(--accent)]">High (Impacts 2nd bowl)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.02] pb-3">
                  <span className="text-xs text-[var(--fg-muted)]">Pitch Condition</span>
                  <span className="font-mono text-xs font-semibold text-[var(--accent-bright)]">Dry, Cracking</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs text-[var(--fg-muted)]">Attendance</span>
                  <span className="font-mono text-xs font-semibold text-[var(--fg)]">55,000 (Full House)</span>
                </div>
              </div>

              {/* Pitch Assessment block */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--fg-faint)] flex items-center justify-between gap-3">
                <span>Assessment: Batting Haven</span>
                <span>Update: 10 mins ago</span>
              </div>

            </div>
          </div>
        </BlurFade>

      </div>

    </div>
  );
}
