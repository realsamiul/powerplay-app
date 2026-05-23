# CricSight PowerPlay

## Hero Background

Add a high-resolution image at `/public/hero-bg.jpg` (recommended: 2400x1600px, landscape).
The image will appear full-bleed behind the white text panel on the homepage.
The panel uses backdrop-blur and white/92 opacity, so the image should have strong visual texture or content at the edges, not the center.

Three-route Next.js app:
- `/` Home
- `/insights`
- `/architecture`

Hidden staging routes:
- `/staging/player-identifiers` (exported unique player names)

## Local Run

```bash
npm install
npm run dev -- -p 3000
```

## Font Presets

Change one value in `src/lib/theme.ts`:

```ts
export const FONT_PRESET = "space-grotesk"; // "geist" | "space-grotesk" | "inter"
```

## Player Name Export

- JSON export endpoint: `/api/player-identifiers`
- Source identifier: exact player name string currently present in the data.

## Player Images

Player image assets are intentionally not wired yet. Add the direct-download image set later as local optimized assets and map them by the exact player name identifier exported above.

## Deploy To Vercel

1. Create repository and push:

```bash
git init
git add -A
git commit -m "initial cricsight powerplay"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. In Vercel:
- `Add New Project`
- Import the repository
- Framework detected: Next.js
- Build command: `npm run build`
- Output: default

3. Deploy.

References:
- https://vercel.com/kb/guide/deploying-next-and-userbase-with-vercel
- https://vercel.com/academy/ai-summary-app-with-nextjs/deploy-the-app
