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
    body: "Traditional cricket analytics are broken. A strike rate of 150 means nothing if it happens when the match is already won. An economy rate of 6.0 is useless if you only bowl against the tail. PowerPlay does not count runs. It measures leverage through match state, win probability swings, and pressure thresholds across 5.2 million deliveries.",
  },
  features: [
    {
      title: "Match-Defining Leverage.",
      label: "Win Probability (WP) Swings",
      copy: "We do not care who scored the most runs. We care who caused an 85% drop in win probability the second they got out. PowerPlay isolates the exact delivery that broke the opposition's mathematical architecture.",
    },
    {
      title: "Behavioral Collapse Models.",
      label: "Player vs. Self (Pressure SR)",
      copy: "How does a top-order batter react when 3 wickets fall in the powerplay? Our engine creates baseline comparisons to prove who counter-attacks under duress and who fundamentally shells up.",
    },
    {
      title: "Action Value Generation.",
      label: "VAEP Wicket Threat",
      copy: "Advanced predictive modeling tracks underlying equity. We measure Action Value and Wicket Threat to expose the game's true disruptors.",
    },
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
    body: "Here is exactly how we turned a massive, messy cricket history into a queryable gold standard.",
  },
  sections: [
    {
      title: "The Gold Record Spine",
      hook: "Data is dirty. History is messier.",
      tech: "Before running a single algorithm, we built a deterministic state machine. Raw historical datasets are full of edge cases: penalty runs, retired hurts, DLS adjustments, and ball-tracking errors. Our Python physical-logic layer enforces the laws of cricket across millions of deliveries. If a ball violates sequence, the engine catches it. The result is a reproducible Gold Record standard.",
    },
    {
      title: "The XGBoost Threat Models",
      hook: "Not all runs are equal. We taught the machine to understand pressure.",
      tech: "To move beyond descriptive stats, we engineered combinatorial aggregations and VAEP. By mapping wickets down, required run rate, and phase context against baselines, we trained XGBoost models for dynamic win probability. The engine isolates match-altering anomalies and quantifies structural importance to a lineup.",
    },
    {
      title: "The Modal Compute Pivot",
      hook: "Local machines melted. So we went serverless.",
      tech: "Deep-context combinatorial logic at this scale breaks local memory. We migrated the pipeline to Modal and spun up 16 vCPU serverless instances for parallel bootstrapping and model training. The system evolved from a fragile script to distributed compute.",
    },
    {
      title: "Caging the Narrative Engine",
      hook: "AI writes terrible sports journalism. So we put it in a cage.",
      tech: "Standard LLMs hallucinate hype. We constrain the narrative engine to locked-fact JSON and a hard Three-Sentence Rule: exact finding, comparative context, sample-size caveat. Zero fluff. No hallucinations. Broadcast-grade signal only.",
    },
    {
      title: "Intellectual Honesty",
      hook: "True intelligence means admitting model limits.",
      tech: "We optimize for truth, not marketing. Pitch surface and weather degradation are not yet in verifiable public datasets, and Test win probabilities remain mostly descriptive due to draw equity and format game theory. We are explicit about what the model cannot yet see.",
    },
  ],
};
