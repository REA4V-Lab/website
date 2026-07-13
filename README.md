# REA4V-Lab

The portfolio site for [REA4V-Lab](https://github.com/REA4V-Lab) / EmanuelPlays — a one-person
dev lab shipping Minecraft mods, Discord bots, Tauri desktop apps, and encrypted infrastructure.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next/font (Unbounded + JetBrains Mono)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing project data

All project content lives in `lib/projects.ts` — add, remove, or edit entries there
and the grid on the homepage updates automatically.

## Deploy

This project deploys to Vercel with zero config:

```bash
vercel --prod
```
