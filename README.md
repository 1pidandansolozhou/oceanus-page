# Future Signal Lab

[简体中文](./README.zh-CN.md)

An interactive personal site for Chenhao, designed as a "future workbench" instead of a static PDF resume page.
It packages personal signals, profile context, connection paths, and recent experiments into an explorable web experience.

## Included

- `/`: interactive homepage (Hero Signal Board, Audience Switcher, Timeline Reactor, Build Deck, Vibe Console, Bonjour Guide Card)
- `/resume`: recruiter-friendly resume view
- `app/opengraph-image.tsx`: share card generation
- `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`
- `data/site-content.ts`: single source of content truth

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Geist Sans / Geist Mono

## Local Setup

1. Install Node.js 20.9+.
2. Run:

```bash
npm install
npm run dev
```

3. Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click `Add New Project`.
3. Select this repo and keep the default Next.js preset.
4. If you have a production domain, set `NEXT_PUBLIC_SITE_URL`.

## Content Notes

- Current copy emphasizes `VC internship / coffee chat / vibe coding / AI taming / Europe backpacking`.
- `Bonjour` uses a copy-helper card instead of direct browser redirection.
- Phone number is private by default; add `contactAction` in `data/site-content.ts` if needed.

## Related Repositories

- OMX skill: [omx-cli-default-skill](https://github.com/1pidandansolozhou/omx-cli-default-skill)
- Hermes skill: [hermes-ai-digest-skill](https://github.com/1pidandansolozhou/hermes-ai-digest-skill)
