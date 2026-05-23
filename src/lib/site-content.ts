export const homeContent = {
  hero: {
    headline: "THE POWERPLAY ENGINE.",
    subHeadline: "Cricket is measured in runs. We measured the pressure between them.",
    body: "We did not just parse 50 years of cricket history. We computationally engineered it. Introducing PowerPlay by CricSight, a fully deterministic Cricket Intelligence Engine.",
  },
  ticker: [
    "10,413 Matches Processed",
    "16,101 Player Profiles",
    "5.2 Million Deliveries",
    "0 AI Hallucinations",
  ],
  paradigm: {
    headline: "The Era of Counting Stats is Dead.",
    body: "Traditional cricket analytics are broken. A strike rate of 150 means nothing if it happens when the match is already won. An economy rate of 6.0 is useless if you only bowl against the tail. PowerPlay does not count runs. It measures leverage through match state, win probability swings, pressure thresholds, and behavioral baselines across 5.2 million deliveries spanning fifty years of international cricket.",
  },
  features: [
    {
      title: "Match-Defining Leverage.",
      label: "Win Probability (WP) Swings",
      copy: "We do not care who scored the most runs. We care who caused an 85% drop in win probability the second they got out. PowerPlay isolates the exact delivery that broke the opposition's mathematical architecture. Every wicket in our database is tagged with the instantaneous WP delta it generated, separating decorative statistics from structural match events.",
    },
    {
      title: "Behavioral Collapse Models.",
      label: "Player vs. Self (Pressure SR)",
      copy: "How does a top-order batter react when 3 wickets fall in the powerplay? Our engine builds individual behavioral baselines from career data, then identifies which players counter-attack under duress and which ones shell up. The delta between a player's standard strike rate and their collapse-scenario strike rate is one of the most predictive indicators in cricket.",
    },
    {
      title: "Action Value Generation.",
      label: "VAEP Wicket Threat",
      copy: "Advanced predictive modeling tracks underlying equity per delivery. We calculate Action Value, the win probability contribution of every ball bowled, and Wicket Threat independently. This exposes the gap between economy-rate leaders who simply face easy batting conditions, and those who genuinely disrupt the mathematical engine of the opposition innings.",
    },
  ],
  numbers: [
    { value: "10,413", label: "Matches Processed", sub: "ODI, T20I, Test" },
    { value: "5.2M", label: "Deliveries Tagged", sub: "With phase + WP context" },
    { value: "16,101", label: "Player Profiles", sub: "Across all formats" },
    { value: "0", label: "AI Hallucinations", sub: "Locked-fact output only" },
    { value: "85%", label: "Max WP Swing Isolated", sub: "Per match event" },
    { value: "50yrs", label: "Historical Coverage", sub: "1975 to present" },
  ],
  cta: {
    headline: "Stop Guessing. Start Computing.",
    body: "We built a machine that respects the laws of physics, the laws of cricket, and the rigor of deep-context data science.",
  },
};

export const architectureContent = {
  hero: {
    headline: "CRICSIGHT ARCHITECTURE.",
    subHeadline: "True intelligence is completely transparent.",
    body: "Here is exactly how we turned a massive, messy fifty-year cricket history into a queryable gold standard. Every model, every pipeline step, every deliberate design decision is documented, auditable, and honest about what it cannot yet see.",
  },
  numbers: [
    { value: "03", label: "Data Input Blocks", sub: "Opta + 2 insight batches" },
    { value: "104", label: "Total Records", sub: "Normalized & typed" },
    { value: "05", label: "Model Techniques", sub: "WP -> VAEP -> modeling" },
    { value: "16", label: "Modal vCPUs", sub: "Parallel compute instances" },
  ],
  sections: [
    {
      title: "The Gold Record Spine",
      hook: "Data is dirty. History is messier.",
      tech: "Before running a single algorithm, we built a deterministic state machine. Raw historical datasets are full of edge cases: penalty runs, retired hurts, DLS adjustments, and ball-tracking errors. Our Python physical-logic layer enforces the laws of cricket across millions of deliveries. If a ball violates sequence, the engine catches it. The result is a reproducible Gold Record standard.",
      vizData: {
        type: "pipeline",
        steps: ["Raw Cricsheet JSON", "Physical-Logic Layer", "Sequence Validation", "Gold Record Store"],
      },
    },
    {
      title: "The XGBoost Threat Models",
      hook: "Not all runs are equal. We taught the machine to understand pressure.",
      tech: "To move beyond descriptive stats, we engineered combinatorial aggregations and VAEP. By mapping wickets down, required run rate, and phase context against baselines, we trained XGBoost models for dynamic win probability. The engine isolates match-altering anomalies and quantifies structural importance to a lineup.",
      vizData: {
        type: "bar",
        label: "Win Probability Swing - Top Dismissals",
        items: [
          { name: "Iram Javed vs WI", value: 99 },
          { name: "GM Hamilton vs Kenya", value: 98 },
          { name: "NND de Silva vs ENG", value: 98 },
          { name: "MS Dhoni vs WI", value: 92 },
          { name: "H Kaur vs SA", value: 90 },
        ],
      },
    },
    {
      title: "The Modal Compute Pivot",
      hook: "Local machines melted. So we went serverless.",
      tech: "Deep-context combinatorial logic at this scale breaks local memory. We migrated the pipeline to Modal and spun up 16 vCPU serverless instances for parallel bootstrapping and model training. The system evolved from a fragile script to distributed compute.",
      vizData: {
        type: "stat-grid",
        items: [
          { label: "vCPUs Provisioned", value: "16" },
          { label: "Parallelism Factor", value: "8x" },
          { label: "Memory per Job", value: "32GB" },
          { label: "Avg Batch Duration", value: "4.2min" },
        ],
      },
    },
    {
      title: "Caging the Narrative Engine",
      hook: "AI writes terrible sports journalism. So we put it in a cage.",
      tech: "Standard LLMs hallucinate hype. We constrain the narrative engine to locked-fact JSON and a hard Three-Sentence Rule: exact finding, comparative context, sample-size caveat. Zero fluff. No hallucinations. Broadcast-grade signal only.",
      vizData: {
        type: "rule-list",
        items: [
          "Exact statistical finding only",
          "Comparative context required",
          "Sample-size caveat mandatory",
          "Zero superlatives or hype",
        ],
      },
    },
    {
      title: "Intellectual Honesty",
      hook: "True intelligence means admitting model limits.",
      tech: "We optimize for truth, not marketing. Pitch surface and weather degradation are not yet in verifiable public datasets, and Test win probabilities remain mostly descriptive due to draw equity and format game theory. We are explicit about what the model cannot yet see.",
      vizData: {
        type: "two-col",
        left: {
          label: "In Model",
          items: ["Win probability by phase", "Death-overs strike rates", "Batting collapse response", "VAEP action values"],
        },
        right: {
          label: "Not Yet",
          items: ["Pitch surface degradation", "Weather adjustment factors", "Test match draw equity", "DRS outcome modeling"],
        },
      },
    },
  ],
};
