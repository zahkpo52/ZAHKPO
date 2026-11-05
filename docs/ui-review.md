# UX Review — source site & redesign rationale

## Observations on saskpo.co.uk (what to improve)
- **Generic template feel** — stock layout/visuals, little brand distinction. → Build a custom, cohesive system with a strong trust-fintech identity.
- **Thin, repetitive copy** — service pages follow the same skeleton with vague benefit statements. → Rewrite into sharper, benefit-led, scannable copy; add concrete deliverables, process and proof.
- **Weak information scent** — Services/Specialties only exist as dropdowns; no overview/landing pages. → Add `/services` and `/specialties` hubs with filterable card grids.
- **Hierarchy & CTA** — CTAs ("Contact Us Now"/"Book a Call") repeat without visual priority; limited secondary paths. → Establish primary/secondary CTA hierarchy, consistent CTA section, sticky nav CTA.
- **Trust signals under-used** — strong assets (ACCA, ISO security, zero breaches, since-2021, multi-region) are buried. → Surface as a stat strip, security section, logo/credential cloud.
- **Little motion / interactivity** — static pages. → Add tasteful scroll-reveal, animated stats, hover states, accessible mega-menu.
- **Accessibility/responsive unknowns** — → Ship AA contrast, keyboard support, semantic landmarks, tested breakpoints 320→1920.
- **SEO** — decent topical coverage but generic titles and no visible structured data. → Per-route metadata, OG, and JSON-LD (Organization, Service, FAQ, Breadcrumb, BlogPosting).

## Redesign principles applied
1. One reusable design system; every section feels custom, none generic.
2. Benefit-first content; preserve all business facts, rewrite all wording.
3. Clear conversion paths on every page; one dominant CTA per view.
4. Evidence everywhere (stats, security, process, testimonial).
5. Fast, accessible, responsive by construction (RSC, next/image, next/font).
