export type MatchTeam = {
  name: string;
  abbrev: string;
  score: string;
  overs: string;
  rr: string;
  innings: string;
};

export type PlayerStat = {
  name: string;
  status: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  sr: string;
};

export type BowlingStat = {
  name: string;
  figures: string; // overs-maidens-runs-wickets
};

export type MatchData = {
  id: string;
  title: string;
  venue: string;
  date: string;
  result: string;
  toss: string;
  playerOfMatch: { name: string; stats: string };
  teams: {
    battingFirst: MatchTeam;
    chasing: MatchTeam;
  };
  scorecard: {
    batting: PlayerStat[];
    bowling: BowlingStat[];
  };
  highlights: string[];
};

export const RECENT_MATCHES: MatchData[] = [
  {
    id: "match-68",
    title: "IPL Match 68 - Blockbuster Final Stage",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    date: "May 25, 2026",
    result: "Sunrisers Hyderabad won by 110 runs",
    toss: "Kolkata Knight Riders won the toss & elected to bowl",
    playerOfMatch: { name: "Travis Head", stats: "124 runs (46 balls) - 11x4, 9x6" },
    teams: {
      battingFirst: { name: "Sunrisers Hyderabad", abbrev: "SRH", score: "278/3", overs: "20.0", rr: "13.90", innings: "Innings 1" },
      chasing: { name: "Kolkata Knight Riders", abbrev: "KKR", score: "168", overs: "18.4", rr: "9.00", innings: "Innings 2" }
    },
    scorecard: {
      batting: [
        { name: "Travis Head", status: "c Salt b Starc", runs: 124, balls: 46, fours: 11, sixes: 9, sr: "269.56" },
        { name: "Abhishek Sharma", status: "b Narine", runs: 62, balls: 30, fours: 5, sixes: 4, sr: "206.67" },
        { name: "Heinrich Klaasen", status: "not out", runs: 81, balls: 32, fours: 4, sixes: 7, sr: "253.13" }
      ],
      bowling: [
        { name: "Pat Cummins", figures: "3.4-0-28-3" },
        { name: "T. Natarajan", figures: "4-0-32-2" },
        { name: "Mayank Markande", figures: "4-0-45-1" }
      ]
    },
    highlights: [
      "Travis Head smashed an explosive century (124 off 46 balls), reaching his 100 in just 37 deliveries.",
      "Sunrisers Hyderabad recorded the 2nd highest total in IPL history (278/3).",
      "Pat Cummins cleaned up the tail, finishing with 3 for 28 as KKR collapsed to 168 all out."
    ]
  },
  {
    id: "match-67",
    title: "IPL Match 67 - Dramatic Run Chase",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    date: "May 22, 2026",
    result: "Mumbai Indians won by 6 wickets",
    toss: "Mumbai Indians won the toss & elected to bowl",
    playerOfMatch: { name: "Tilak Varma", stats: "75* runs (33 balls) - 6x4, 5x6" },
    teams: {
      battingFirst: { name: "Punjab Kings", abbrev: "PBKS", score: "200/8", overs: "20.0", rr: "10.00", innings: "Innings 1" },
      chasing: { name: "Mumbai Indians", abbrev: "MI", score: "205/4", overs: "19.5", rr: "10.33", innings: "Innings 2" }
    },
    scorecard: {
      batting: [
        { name: "Prabhsimran Singh", status: "c Bosch b Shardul", runs: 57, balls: 32, fours: 6, sixes: 4, sr: "178.12" },
        { name: "Azmatullah Omarzai", status: "c Jacks b Chahar", runs: 38, balls: 17, fours: 2, sixes: 4, sr: "223.52" },
        { name: "Tilak Varma", status: "not out", runs: 75, balls: 33, fours: 6, sixes: 5, sr: "227.27" },
        { name: "Ryan Rickelton", status: "c Arya b Omarzai", runs: 48, balls: 23, fours: 4, sixes: 3, sr: "208.69" }
      ],
      bowling: [
        { name: "Shardul Thakur", figures: "4-0-39-4" },
        { name: "Deepak Chahar", figures: "4-0-36-2" },
        { name: "Azmatullah Omarzai", figures: "4-0-36-2" }
      ]
    },
    highlights: [
      "Shardul Thakur registered crucial figures of 4 for 39 to restrict PBKS to 200.",
      "Tilak Varma led a masterclass chase, hammering an unbeaten 75 runs off just 33 balls.",
      "Mumbai Indians chased down 200 with 1 ball to spare to seal a 6-wicket victory."
    ]
  },
  {
    id: "match-66",
    title: "IPL Match - High-scoring Classic",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    date: "April 5, 2026",
    result: "Royal Challengers Bengaluru won by 43 runs",
    toss: "Chennai Super Kings won the toss & elected to bowl",
    playerOfMatch: { name: "Tim David", stats: "70* runs (25 balls) - 3x4, 8x6" },
    teams: {
      battingFirst: { name: "Royal Challengers Bengaluru", abbrev: "RCB", score: "250/3", overs: "20.0", rr: "12.50", innings: "Innings 1" },
      chasing: { name: "Chennai Super Kings", abbrev: "CSK", score: "207", overs: "19.4", rr: "10.51", innings: "Innings 2" }
    },
    scorecard: {
      batting: [
        { name: "Tim David", status: "not out", runs: 70, balls: 25, fours: 3, sixes: 8, sr: "280.00" },
        { name: "Devdutt Padikkal", status: "b Kamboj", runs: 50, balls: 29, fours: 5, sixes: 2, sr: "172.41" },
        { name: "Sarfaraz Khan", status: "b Bhuvi", runs: 50, balls: 25, fours: 8, sixes: 2, sr: "200.00" },
        { name: "Prashant Veer", status: "b Krunal", runs: 43, balls: 29, fours: 6, sixes: 1, sr: "148.27" }
      ],
      bowling: [
        { name: "Bhuvneshwar Kumar", figures: "4-0-41-3" },
        { name: "Abhinandan Singh", figures: "3.4-0-30-2" },
        { name: "Anshul Kamboj", figures: "4-0-52-1" }
      ]
    },
    highlights: [
      "Tim David smashed 70* off just 25 balls, hitting 8 massive sixes, crossing 400 career T20 sixes.",
      "Bhuvneshwar Kumar claimed 3 wickets for 41, becoming only the second bowler in history to reach 200 IPL wickets.",
      "RCB hit 19 sixes in their innings, setting a new record for most sixes hit against CSK."
    ]
  }
];
