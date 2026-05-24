export const homeContent = {
  hero: {
    headline: "THE CRICSIGHT PROTOTYPE.",
    subHeadline: "We saw a gap in how cricket's hidden forces were measured. So we built a 5.2-million delivery proof-of-concept to test a new paradigm.",
    body: "Traditional scorecards count runs and wickets, but they fail to capture the invisible, structural pressures of the game. CricSight is an experimental intelligence engine. Powered by a dedicated 64GB VM, we processed 50 years of international cricket history to computationally quantify leverage, behavioral collapse, and true match-altering momentum.",
  },
  ticker: [
    "10,413 Matches Processed",
    "16,101 Player Profiles Enriched",
    "5.2 Million Deliveries Tagged",
    "64GB Local Compute Infrastructure",
    "0 AI Hallucinations Allowed",
  ],
  paradigm: {
    headline: "Exploring Beyond the Box Score.",
    body: "Cricket analytics are often broken by context. A strike rate of 150 means little if it happens in a dead rubber. An economy rate of 6.0 is misleading if bowled exclusively to the tail. We built this platform not as a flawless authority, but as a rigorous exploration. By running 5.2 million historical deliveries through predictive models, we set out to measure what fans inherently feel but scorecards ignore: win probability swings, behavioral responses under duress, and underlying delivery equity.",
  },
  duality: {
    headline: "The Architecture of Intelligence: Stats vs. Insights.",
    body: "CricSight separates raw data retrieval from synthesized intelligence. We output two distinct surfaces. 'The Stat Bank' provides canonical facts: leaderboards, timed queries, and exact threshold measurements. But data is not narrative. For that, we built 'The Insight Engine.' Insights are deep, synthesized narrative cards combining multiple models (e.g., Action Value + Archetype + Form). These are passed through a strict 'Narrative Cage' to ensure broadcast-grade signal, completely devoid of generic hype.",
  },
  guide: {
    headline: "How to Read the Engine.",
    body: "Every insight card on this platform is tagged with the specific machine learning technique that generated it. Here is how to interpret our underlying models:",
  },
  features: [
    {
      title: "Win Probability (WP) Swings",
      label: "Match-Defining Leverage",
      copy: "We trained XGBoost models to calculate dynamic Win Probability for every ball bowled since 1975. If you see this tag, we are not looking at runs; we are isolating the exact delivery that caused a massive WP delta, breaking the opposition's mathematical architecture.",
    },
    {
      title: "Player vs. Self (Collapse Models)",
      label: "Behavioral Baselines",
      copy: "How does a batter react when 3 wickets fall in the powerplay? We build individual behavioral baselines, comparing a player's standard strike rate to their collapse-scenario strike rate to prove who counter-attacks and who shells up.",
    },
    {
      title: "VAEP Wicket Threat",
      label: "Action Value Generation",
      copy: "Moving beyond descriptive stats, advanced predictive modeling tracks underlying equity. Action Value (VAEP) calculates the expected run/wicket value of a delivery, exposing the gap between bowlers who face easy conditions and those who genuinely disrupt an innings.",
    },
    {
      title: "Simpson's Paradox Scans",
      label: "Algorithmic Trend Reversals",
      copy: "Our flagship capability. The engine scans 5.2 million rows to find instances where a player's aggregated stats look mediocre, but their isolated phase-specific metrics reveal elite underlying performance. We hunt for hidden truths, not leaderboard echoes.",
    },
  ],
  numbers: [
    { value: "5.2M", label: "Deliveries Tagged", sub: "Phase + WP context" },
    { value: "16,101", label: "Player Profiles", sub: "R-CRAN enriched" },
    { value: "10,413", label: "Matches Processed", sub: "ODI, T20I, Test" },
    { value: "50yrs", label: "Historical Data", sub: "1975 to present" },
    { value: "6", label: "Player Archetypes", sub: "K-Means k=6 clusters" },
    { value: "2.0%", label: "Weather Coverage", sub: "Known data gap" },
  ],
  cta: {
    headline: "Honest. Traceable. Surprising.",
    body: "This is a prototype. We are incredibly proud of the depth and intricacy of the setup, but we know there is work to do. Dive into our methodology to see exactly how we engineered history.",
  },
};

export const architectureContent = {
  hero: {
    headline: "SYSTEM ARCHITECTURE.",
    subHeadline: "Transparent, intricate, and honestly imperfect.",
    body: "Building this prototype required a dedicated 64GB beast VM, a transition from flat files to semantic data marts, and a 17-step pipeline weaving heavy data engineering with advanced machine learning. Here is the technical breakdown of how we achieved analysis-ready state, the specific scripts and models we deployed, and our concessions regarding what the system cannot yet see.",
  },
  numbers: [
    { value: "64GB", label: "Compute VM", sub: "Local Beast Machine" },
    { value: "17", label: "Pipeline Scripts", sub: "Prep to Synthesis" },
    { value: "11", label: "ML Techniques", sub: "WP, VAEP, WAR, etc." },
    { value: "02", label: "LLM Synthesizers", sub: "Gemini Flash Engines" },
  ],
  sections: [
    {
      title: "1. The State Machine & Data Prep (Scripts 00-08)",
      hook: "Raw Cricsheet JSON is messy. We built a deterministic foundation before running a single algorithm.",
      tech: "Our Python physical-logic layer enforces the laws of cricket across 5.2M deliveries. To fix missing metadata, we injected the R `cricketdata` package via pre-compiled R-CRAN binaries to enrich 16,101 player registries. We built a dual-stage venue geocoding pipeline utilizing Nominatim (OpenStreetMap) followed by Gemini 2.5-Flash for high-volume grounds with naming variants. Finally, we deployed regex-based tournament taxonomy to assign Match Weights, ensuring World Cup finals are mathematically separated from bilateral dead rubbers.",
      vizData: {
        type: "pipeline",
        steps: ["Cricsheet JSON", "R-Registry Sync", "Dual-Stage Geocoding", "State Machine Validation", "Gold Record Store"],
      },
    },
    {
      title: "2. The Valuation Models (Scripts 11-12)",
      hook: "Moving from counting stats to structural match intelligence.",
      tech: "We engineered Wins Above Replacement (WAR) to be explicitly rate-normalized (war_per_match). We bypassed published cricWAR constants, instead deriving a Pythagorean 'runs_per_win' directly from our dataset's median match scores. Alongside WAR, we calculate VAEP (Valuing Actions by Estimating Probabilities) to measure the expected run/wicket equity of every single ball, rigorously validating it via AUC and Brier scoring before downstream use.",
      vizData: {
        type: "stat-grid",
        items: [
          { label: "Win Probability", value: "XGBoost" },
          { label: "WAR Normalization", value: "Rate-Based (Per Match)" },
          { label: "Replacement Level", value: "85th Percentile Baseline" },
          { label: "VAEP Quality", value: "Brier Score Validated" },
        ],
      },
    },
    {
      title: "3. Behavioral & Structural ML (Scripts 13-16)",
      hook: "Profiling players mathematically to enable true peer-to-peer benchmarking.",
      tech: "World-class analysis does not compare an opener to a finisher. We apply K-Means clustering (k=6) to generate Player Archetypes, ensuring all insights are contextualized by Cluster Centroids. For bowlers, we utilize a 6-dimensional radar model to create unique Fingerprints. We deployed Kaplan-Meier survival curves to analyze format-specific hazard rates (innings longevity), and a rolling 12-ball normalized curve to track instantaneous match Momentum.",
      vizData: {
        type: "two-col",
        left: { label: "Clustering & Survival", items: ["K-Means (k=6) Archetypes", "Kaplan-Meier Longevity", "6-Dim Bowler Radars"] },
        right: { label: "Contextual ML", items: ["Rolling 12-ball Momentum", "Peer Centroid Benchmarks", "Dynamic Phase Isolation"] },
      },
    },
    {
      title: "4. Semantic Marts & Synthesis (Script 17)",
      hook: "Flat files break down at scale. We evolved our intelligence layer to support Insight-Chain Synthesis.",
      tech: "Mid-project, we transitioned from flat parquet outputs to an RDBMS-style semantic mart. This allows us to feed 'Clusters' of insights to our LLM rather than isolated rows. For example, we combine [Player's High VAEP] + [Player's Archetype: 'Finisher'] + [Recent Form] into a single prompt. We constrain the Gemini Flash synthesizer inside a 'Narrative Cage,' enforcing a strict Three-Sentence Rule, locked-fact JSON validation, and a hard ban on generic hype phrases (e.g., 'rose to the occasion', 'proved his worth').",
      vizData: {
        type: "rule-list",
        items: [
          "Zero superlatives allowed (e.g., 'stepped up')",
          "Sentence 1: Exact statistical finding + number",
          "Sentence 2: Comparative context to Archetype Centroid",
          "Sentence 3: Sample size and algorithmic caveat",
        ],
      },
    },
    {
      title: "5. Intellectual Honesty & Deferred Items",
      hook: "A true proof-of-concept must document its flaws.",
      tech: "We are proud of this setup, but we concede its limits. Our Open-Meteo historical weather fetch proved too fragile, stalling at just 2.0% coverage; it requires a persistent Delta Lake for Phase 4, so weather insights are currently suppressed. We lack Pitch Surface mapping, the holy grail of cricket data. Test match Win Probability remains purely descriptive due to draw equity game theory. Finally, Bayesian hierarchical WAR and altitude-adjusted expected runs have been explicitly deferred to future iterations.",
      vizData: {
        type: "two-col",
        left: { label: "Robust & Deployed", items: ["XGBoost WP Swings", "VAEP Calculation", "Archetype Benchmarking", "Simpson's Paradox Scans"] },
        right: { label: "Conceded & Deferred", items: ["Weather Data Integration (2%)", "Pitch Surface Degradation", "Bayesian Hierarchical WAR", "Test Match Draw Equity"] },
      },
    },
  ],
};
