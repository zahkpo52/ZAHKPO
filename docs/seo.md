# SEO Strategy

## Metadata
- Per-route `Metadata` via Next Metadata API. Central `lib/seo.ts` `buildMetadata({title, description, path, ...})` sets title (template `%s | SAS KPO Services`), description, canonical (`alternates.canonical`), OpenGraph (type, url, siteName, images), Twitter (`summary_large_image`), keywords. Source data: `docs/page-metadata.json` mirrored into `lib/site.ts`.
- `metadataBase` set from `NEXT_PUBLIC_SITE_URL` (fallback `https://saskpo.co.uk`).
- `/thank-you`, `/search` → `robots: { index: false }`.

## Open Graph images
- Dynamic OG via `app/opengraph-image.tsx` (and per-section where useful) using `next/og` ImageResponse — branded gradient, title, eyebrow.

## Structured data (JSON-LD components in `components/seo/`)
- **Organization** (+ ContactPoint, address, sameAs socials) — in root layout.
- **WebSite** + `SearchAction` (sitelinks search box) — root layout.
- **Service** — each service/specialty detail page.
- **FAQPage** — `/faq` (from `faq.json`) and service FAQ teasers.
- **BreadcrumbList** — all nested pages.
- **BlogPosting** — each blog post (from MDX frontmatter).

## Crawl & indexing
- `app/sitemap.ts` — enumerates all static routes + service/specialty/blog slugs.
- `app/robots.ts` — allow all, point to sitemap, disallow `/search`.
- Canonical URLs on every page; trailing-slash off (Next default).

## Internal linking
- Mega menu + footer expose all services/specialties.
- Service detail → "related services" (same category) + specialties cross-links.
- Blog posts → contextual links to the relevant service + CTA.
- Services/Specialties hubs interlink to every detail page.

## Content/On-page
- One `<h1>` per page; logical heading order; descriptive link text; alt text on imagery; semantic landmarks; fast LCP (priority hero image/text, preloaded font).
