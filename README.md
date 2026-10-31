# Company Profile Website

A modern, professional, static-first company profile website built with
Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide React.
It presents the company's own software products and its custom software
development services. Display-only: no backend, database, auth or contact form.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript check
npm run build      # Production build
npm run start      # Serve the production build
```

## Where to edit content

| What | File |
| --- | --- |
| Company name, tagline, email, URL, location, socials | `src/lib/site.ts` |
| Products | `src/lib/data/products.ts` |
| Services | `src/lib/data/services.ts` |
| Development process steps | `src/lib/data/process.ts` |
| Brand colour & fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| About / hero copy | `src/components/sections/About.tsx`, `Hero.tsx` |

All company-specific values are clearly-marked placeholders in
`src/lib/site.ts` — replace them before launch. Social links are hidden
until real URLs are added there.

## Structure

```
src/
  app/          Routes, layout, metadata, sitemap, robots, OG image
  components/
    layout/     Header, Footer
    sections/   Hero, Products, Services, Process, About, CTA
    ui/         Container, SectionHeading, ButtonLink
  lib/          site.ts config + typed data files
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. Deploy. Then set your real domain and update `siteConfig.url` in
   `src/lib/site.ts` so canonical URLs, sitemap and Open Graph point to it.
