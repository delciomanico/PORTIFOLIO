# Delcio Monarca — Portfolio

Personal portfolio of Delcio Monarca, backend developer based in Luanda, Angola.

Built with [Astro](https://astro.build), React, and [shadcn/ui](https://ui.shadcn.com), based on the free "Zolt" portfolio template from shadcn Studio (see `LICENSE.md`).

## Getting started

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env` and set `SITE_URL` to the real production domain before deploying.

## Scripts

- `pnpm dev` — start the local dev server
- `pnpm build` — build the static site
- `pnpm preview` — preview the production build
- `pnpm check-types` — type-check the project
- `pnpm lint` / `pnpm lint:fix` — lint the codebase

## Content

- `src/consts.ts` — site metadata, SEO defaults, and social links
- `src/components/home/experience/experience.tsx` — work & education timeline
- `src/content/case-studies/` — case studies (MDX)
- `src/content/blog/` — blog posts (MDX)
- `public/images/profile/` — personal photos used across the site

## Known limitations

- The contact form and the "select a service" booking flow are front-end only — there's no email backend wired up yet, so submissions currently only show a confirmation toast without actually sending anything. Wire up a real provider (e.g. Resend, Formspree) before relying on them.
- The hero 3D ID card, avatars, and "about" carousel use real personal photos, but a few decorative widgets (the music player, trip folder) still use generic placeholder art from the original template.
