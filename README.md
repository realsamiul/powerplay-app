# CricSight PowerPlay

Three-route Next.js app:
- `/` Home
- `/insights`
- `/architecture`

Hidden staging routes:
- `/staging/player-images` (Wikimedia image pull + WebP + QA)
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

## Image Resolver Notes

Player images are resolved via:
1. Wikipedia search: `"<name> international cricketer"`
2. Wikidata `wikibase_item`
3. `P18` image
4. Commons WebP URL (`format=webp`)

If no `P18` exists, image is rejected.

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
