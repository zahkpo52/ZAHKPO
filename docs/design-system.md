# Design System — "Ledger" (SAS KPO redesign)

**Direction:** Deep Teal & Amber — warm, premium and dark-first. A deep teal brand with an amber/gold accent on a rich navy base. Sophisticated and editorial: generous whitespace, crisp typographic hierarchy, restrained purposeful motion. (Selected from a 4-way preview; replaces the original trust-fintech blue.)

**Principles**
1. Trust first — clarity, evidence (stats, security badges), no clutter.
2. Precision — tight type, aligned grids, consistent spacing rhythm.
3. Calm confidence — soft shadows, subtle gradients, no garish color.
4. Motion with meaning — reveal, never distract; always respect reduced-motion.

## Color tokens
Defined as CSS variables in `app/globals.css` and exposed to Tailwind v4 via `@theme inline`.

### Light (default)
| Token | Value | Use |
|---|---|---|
| `--background` | `#ffffff` | page |
| `--surface` | `#f8fafc` | sections, cards-alt |
| `--surface-2` | `#f1f5f9` | subtle fills |
| `--foreground` | `#0a0f1e` | primary text |
| `--muted-foreground` | `#51607a` | secondary text |
| `--border` | `#e6eaf2` | hairlines |
| `--primary` | `#2563eb` | brand (blue-600) |
| `--primary-strong` | `#4f46e5` | gradient end (indigo-600) |
| `--primary-foreground` | `#ffffff` | text on brand |
| `--accent` | `#06b6d4` | cyan highlight |
| `--ring` | `#2563eb` | focus |
| `--success` `--warning` `--danger` | `#059669` `#d97706` `#dc2626` | semantic |

### Dark
`--background #0a0f1e` · `--surface #0f172a` · `--surface-2 #131c30` · `--foreground #f8fafc` · `--muted-foreground #94a3b8` · `--border rgba(255,255,255,.08)` · `--primary #3b82f6` · `--primary-strong #6366f1` · `--accent #22d3ee`.

**Brand gradient:** `linear-gradient(135deg, var(--primary), var(--primary-strong))`. Hero/section ambience: faint dotted grid + radial brand glow at low opacity.

## Typography
- **Font:** Inter (variable) via `next/font/google`, `--font-sans`. `tabular-nums` for stats.
- **Fluid scale** (clamp):
  - display `clamp(2.75rem,6vw,4.5rem)` / lh 1.05 / tracking −0.03em / 600
  - h1 `clamp(2.25rem,4vw,3.25rem)` / 1.1 / −0.02em / 600
  - h2 `clamp(1.75rem,3vw,2.5rem)` / 1.15 / −0.02em / 600
  - h3 `1.5rem` / 1.25 / 600 · h4 `1.25rem` / 600
  - body-lg `1.125rem` / 1.7 · body `1rem` / 1.7 · small `0.875rem`
  - eyebrow `0.8125rem` / uppercase / tracking 0.08em / 600 / primary
- Prose max width `65ch`; headings `text-balance`, leads `text-pretty`.

## Spacing & layout
4px base scale. Section vertical rhythm `py-20 md:py-28 lg:py-32`. Container `max-w-[1200px]` with `px-4 sm:px-6 lg:px-8`. 12-col mental grid; cards in 2/3/4 col responsive grids.

## Radius
`--radius` = 12px base. sm 8 · md 12 · lg 16 · xl 20 · 2xl 28 · full. Cards 16–20, buttons 12 (pills = full), inputs 10.

## Shadows (light)
- xs `0 1px 2px rgba(16,24,40,.06)`
- sm `0 1px 3px rgba(16,24,40,.08),0 1px 2px rgba(16,24,40,.04)`
- md `0 4px 16px -4px rgba(16,24,40,.10)`
- lg `0 12px 32px -8px rgba(16,24,40,.14)`
- glow `0 8px 40px -12px rgba(37,99,235,.45)`
Dark mode leans on borders + surface contrast, shadows kept subtle.

## Icons
Lucide React, stroke 1.75, sizes 18/20/24. Icon tiles: `size-11 rounded-xl bg-primary/10 text-primary grid place-items-center`.

## Motion
- Durations: fast 150 · base 250 · slow 400 · slower 600 (ms).
- Easing: `cubic-bezier(0.22,1,0.36,1)` (ease-out-quint) for entrances.
- Patterns: scroll-reveal (opacity 0→1 + y 16→0, stagger 60–80ms); hero staggered entrance; animated stat counters; card hover lift (`-4px` + shadow-lg); link underline grow; mega-menu fade+scale; route fade transitions.
- **prefers-reduced-motion:** wrappers render static (opacity 1, no transform); counters show final value; no parallax.

## Component variants (built in `components/ui` + `components/marketing`)
- **Button** — primary (gradient), secondary (surface+border), outline, ghost, link; sizes sm/md/lg/icon; `pill`; loading state; `asChild` (Radix Slot).
- **Card** — base (border+surface, hover lift), feature (gradient border via mask), stat.
- **Badge** — soft / outline / accent.
- **Layout atoms** — Container, Section, Eyebrow, SectionHeading, GradientText, Prose.
- **Primitives** — Input, Textarea, Select, Checkbox, Label, FieldError; Accordion, Tabs, Tooltip, Dialog (modal), Sheet (drawer), Carousel (Embla).
- **Marketing blocks** — Navbar+MegaMenu, MobileNav (Sheet), Footer, Hero, FeatureGrid, ServiceCard, StatStrip (counters), Testimonials (carousel), ProcessTimeline, CTASection, Newsletter, LogoCloud (software/tools), BlogCard, Breadcrumb, Pagination, FAQAccordion, SearchCommand.

Accessibility baked in: visible focus ring (`--ring`), semantic landmarks, Radix for keyboardable overlays, color contrast ≥ AA.
