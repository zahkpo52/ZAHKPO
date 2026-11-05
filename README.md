# SAS KPO Services — Website

A ground-up redesign of [saskpo.co.uk](https://saskpo.co.uk) built on **Next.js 16 + React 19**. It preserves the business intent, information architecture and SEO of the original site, but is a **completely new design and codebase** — no layouts, markup or copy were cloned. All content has been rewritten.

SAS KPO Services is an outsourced accounting/KPO partner for accountancy firms across the UK, USA and Ireland (bookkeeping, tax, payroll, year-end, company secretarial, plus cloud, MTD, AI and marketing specialties).

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React Server Components) |
| Language | TypeScript (strict) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Components | shadcn-style primitives on Radix UI + CVA |
| Animation | Framer Motion (reduced-motion aware) |
| Icons | lucide-react |
| Forms | React Hook Form + Zod |
| Carousel | Embla |
| Fonts | `next/font` (Inter) |
| Tooling | ESLint 9 (flat) · Prettier · pnpm |

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

### Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint over the project |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` / `format:check` | Prettier write / check |

## Project structure

```
app/                 # App Router routes (see docs/project-structure.md)
components/
  ui/                # Reusable primitives (Button, Card, Accordion, …)
  marketing/         # Composite sections (Hero, ServiceDetail, CTA, …)
  layout/            # Navbar, Footer, Logo, SocialLinks
  motion/            # Framer Motion wrappers (Reveal, Stagger, Counter)
  seo/               # JSON-LD helper
content/             # Typed content: services, industries, faqs, blog, …
lib/                 # site config, nav, seo helpers, utils, validations
types/               # Shared content types
docs/                # Discovery + strategy + design system docs
```

See **`docs/project-structure.md`** for the full tree and **`docs/component-library.md`** for the component inventory.

Service and industry pages are data-driven: each renders from a typed object through a shared `ServiceDetail` template.

- **Services** → `content/services.ts` (route, mega menu, sitemap and detail page update automatically)
- **Industries** → `content/specialties.ts`
- **FAQs** → `content/faqs.ts` (drives `/faq` and the `FAQPage` JSON-LD)
- **Blog posts** → add a `content/blog/<slug>.tsx` module and register it in `content/blog/index.ts`
- **Navigation & footer** → `lib/nav.ts` · **Contact details / socials** → `lib/site.ts`

## Theming

Design tokens are CSS variables in `app/globals.css` mapped to Tailwind via `@theme inline`. Change the brand by editing `--primary`, `--primary-strong` and `--accent`. The site uses a fixed dark theme.

Full design language: **`docs/design-system.md`**.

## Forms

Contact and newsletter forms use React Hook Form + Zod with full loading / error / success states and a honeypot. **Submission is client-side only** (per project decision) — the contact form confirms via `/thank-you`. To wire a real backend, add a Route Handler (e.g. `app/api/contact/route.ts`) and `fetch` it from the form's `onSubmit` (replace the simulated delay).

## SEO

- Per-route metadata via `lib/seo.ts` `buildMetadata()` (title template, canonical, OpenGraph, Twitter).
- JSON-LD: Organization + WebSite (root), Service, FAQPage, BreadcrumbList, BlogPosting.
- `app/sitemap.ts` and `app/robots.ts` enumerate every route; `/search` and `/thank-you` are `noindex`.

## Deployment

Deploys cleanly to **Vercel** (or any Node host). Set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for `metadataBase`, canonical URLs, sitemap and JSON-LD. Defaults to `https://saskpo.co.uk`.

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings, ARIA on overlays (Radix), labelled form fields, `prefers-reduced-motion` respected throughout.
- Server Components by default; client islands only where needed. `next/font`, `optimizePackageImports`, and SVG/CSS visuals (no raster hero images) keep payloads small. Almost every route is statically generated.

## Documentation

The `docs/` directory contains the project's research and design artifacts: `site-map.md`, `routes.json`, `navigation.json`, `content-raw.md`, `page-metadata.json`, `faq.json`, `ui-review.md`, `improvement-plan.md`, `design-system.md`, `seo.md`, `project-structure.md`, `component-library.md`.
