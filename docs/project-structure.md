# Project Structure

Feature-based, content-driven architecture. Routes are thin; logic and copy live in `content/` and `lib/`, and UI in composable `components/`.

```
app/
  layout.tsx                 # Root layout: fonts, theme provider, nav, footer, Org/WebSite JSON-LD
  globals.css                # Tailwind v4 import + design tokens (@theme) + keyframes
  page.tsx                   # Home
  not-found.tsx              # Custom 404
  sitemap.ts  robots.ts      # SEO routes
  about/page.tsx
  services/page.tsx                  # Services hub
  services/[slug]/page.tsx           # Service detail (12 pages via generateStaticParams)
  specialties/page.tsx               # Specialties hub
  specialties/[slug]/page.tsx        # Specialty detail (4 pages)
  blog/page.tsx                      # Blog index
  blog/[slug]/page.tsx               # Blog post (4 sample posts)
  faq/page.tsx
  life-at-sas/page.tsx
  contact/page.tsx
  privacy/page.tsx
  thank-you/page.tsx                 # noindex
  search/page.tsx                    # noindex, client-filtered

components/
  ui/            # Primitives: button, badge, card, section (Container/Section/Eyebrow/SectionHeading),
                 #   input, textarea, label, field-error, accordion, sheet, carousel, separator, prose
  marketing/     # Sections: home-hero, page-hero, offering-card, deliverables-grid, process-timeline,
                 #   stat-strip, logo-cloud, testimonials, blog-card, breadcrumb, faq-section,
                 #   cta-section, icon-tile, service-detail (shared template), contact-form, newsletter-form
  layout/        # navbar (Radix NavigationMenu mega menu + mobile Sheet), footer, logo, theme-toggle, social-links
  motion/        # index.tsx — Reveal, Stagger, StaggerItem, AnimatedCounter, FadeIn (reduced-motion aware)
  seo/           # json-ld.tsx
  theme-provider.tsx

content/
  services.ts          # 12 services (typed) + helpers
  specialties.ts       # 4 specialties + helpers
  faqs.ts              # FAQ items + categories
  stats.ts  tools.ts   # trust stats, software cloud
  testimonials.ts      # sourced testimonial(s)
  about.ts             # values, differentiators, security, timeline
  careers.ts           # culture, perks, open roles
  blog/
    index.ts           # post registry + helpers
    *.tsx              # one module per post (meta + body)

lib/
  site.ts          # siteConfig: name, url, contact, socials, markets
  nav.ts           # primary nav, mega-menu groups, footer columns
  seo.ts           # buildMetadata() + JSON-LD schema builders
  validations.ts   # Zod schemas (contact, newsletter)
  format.ts        # deterministic date formatting
  utils.ts         # cn()

types/
  content.ts       # Service, Specialty, Stat, Testimonial, BlogMeta, OpenRole, …

docs/              # research + strategy + design deliverables
public/            # static assets
```

## Conventions

- **Server Components by default.** `"use client"` only for interactivity (nav, forms, carousel, theme toggle, motion).
- **Data drives routes.** Service/specialty detail pages share `components/marketing/service-detail.tsx`; adding data adds pages.
- **Aliases.** `@/*` maps to the project root (see `tsconfig.json`).
- **Styling.** Tailwind utility classes + tokens; `cn()` merges conditional classes.
