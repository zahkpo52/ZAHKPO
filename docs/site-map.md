# Site Map & Route Plan

## Old site (saskpo.co.uk) hierarchy
- Home
- About Us
- Services ▸ Accounting (Year-End, Management, iXBRL, Payroll, CIS, Bookkeeping) · Tax (VAT, Personal, Corporation) · Company Secretarial (Business Setup, Tax Registrations, Corporate Due Diligence)
- Specialties ▸ Cloud Accounting · MTD · AI Accounting · Marketing Services
- Resources ▸ Blogs · FAQ
- Life at SAS
- Contact Us
- Privacy Policy

## New site route map
```
/                              Home
/about                         About
/services                      Services overview (NEW landing/grid)
/services/year-end-accounts    Service detail (template)
/services/management-accounts
/services/bookkeeping
/services/payroll
/services/cis-returns
/services/ixbrl-tagging
/services/vat-returns
/services/personal-tax
/services/corporation-tax
/services/business-setup
/services/tax-registrations
/services/corporate-due-diligence
/specialties                   Specialties overview (NEW landing/grid)
/specialties/cloud-accounting  Specialty detail (template)
/specialties/mtd
/specialties/ai-accounting
/specialties/marketing-services
/blog                          Blog index (MDX-driven)
/blog/[slug]                   Blog post (template; 4–5 sample posts)
/faq                           FAQ (accordion, data-driven)
/life-at-sas                   Careers / culture
/contact                       Contact (form + offices + map)
/privacy                       Privacy policy (prose)
/thank-you                     Post-submit confirmation (NEW)
/search                        Site search (NEW)
/not-found                     404 (NEW, custom)
```

## Architecture decisions
- **Service & specialty pages are data-driven**: one typed content array + one shared `ServiceDetail` template → 12 services + 4 specialties render from `content/services.ts` & `content/specialties.ts`. DRY, reusable, consistent.
- **Services/Specialties overview pages** are NEW (the old site had only dropdowns) — improves discoverability and SEO.
- **Blog** uses local MDX in `content/blog/*.mdx` with typed frontmatter.
- **404 / Thank You / Search** are new utility routes the source lacked.
- Notes: screenshots intentionally skipped — this is a ground-up redesign, not a visual clone, so pixel references add little. Content briefs live in `content-raw.md` (serves as the content index); structured nav in `navigation.json`; SEO in `page-metadata.json`.
