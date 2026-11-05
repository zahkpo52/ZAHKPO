# Component Library

shadcn-style: Radix primitives + `class-variance-authority` + `cn()`. All components are typed and reusable.

## Primitives (`components/ui`)

| Component | Notes |
| --- | --- |
| `Button` | Variants: `primary` (gradient), `secondary`, `outline`, `ghost`, `subtle`, `link`. Sizes `sm/md/lg/icon`, `pill`, `loading`, `asChild` (Radix Slot). |
| `Badge` | `soft / accent / outline / success / surface`, sizes `sm/md`. |
| `Card` | `interactive` prop adds hover lift. + `CardHeader/Title/Description/Content/Footer`. |
| `Container` / `Section` | Page width + vertical rhythm. `as` polymorphic. |
| `Eyebrow` / `SectionHeading` | Section intros; `align` left/center, `as` h1–h3. |
| `Input` / `Textarea` | `invalid` state styling; forwardRef for RHF. |
| `Label` | Radix Label. |
| `FieldError` | `role="alert"` error text, renders nothing when empty. |
| `Accordion` | Radix; animated height (`--radix-accordion-content-height`). |
| `Sheet` | Radix Dialog drawer (mobile nav). Slide + fade animations. |
| `Carousel` | Embla; arrows + dots, keyboard/aria, auto-hides controls for single slide. |
| `Separator`, `Prose` | Divider; long-form typography wrapper. |

## Marketing sections (`components/marketing`)

| Component | Purpose |
| --- | --- |
| `HomeHero` | Animated hero (staggered entrance, reduced-motion safe). |
| `PageHero` | Inner-page hero with eyebrow, breadcrumb, decorative grid/glow. |
| `OfferingCard` | Linked card for a service/specialty (icon, eyebrow, summary). |
| `DeliverablesGrid` | "What we handle" checklist grid. |
| `ProcessTimeline` | Numbered, connected step list. |
| `StatStrip` | Animated counters in a bordered grid. |
| `LogoCloud` | Software/tools wordmarks. |
| `Testimonials` | Carousel of quotes. |
| `BlogCard` | Article card (featured + standard). |
| `Breadcrumb` | Accessible breadcrumb (+ BreadcrumbList JSON-LD via `lib/seo`). |
| `FaqAccordion` | Single-open accordion of Q&A. |
| `CTASection` | Gradient call-to-action band. |
| `IconTile` | Branded icon container (sm/md/lg). |
| `ServiceDetail` | **Shared template** powering all service & specialty pages. |
| `ContactForm` / `NewsletterForm` | RHF + Zod, full states, honeypot. |

## Layout (`components/layout`)

`Navbar` (Radix NavigationMenu mega menu + scroll-aware glass header + mobile `Sheet` with accordion), `Footer` (columns, newsletter, contact, socials), `Logo`, `SocialLinks`.

## Motion (`components/motion`)

`Reveal`, `Stagger` + `StaggerItem`, `AnimatedCounter`, `FadeIn`. All check `useReducedMotion()` and render statically when reduced motion is preferred.

## Usage example

```tsx
import { Section, Container, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { OfferingCard } from "@/components/marketing/offering-card";

<Section>
  <Container>
    <Reveal>
      <SectionHeading eyebrow="What we do" title="One partner for the whole back office" />
    </Reveal>
    <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
      {items.map((s) => (
        <StaggerItem key={s.slug}>
          <OfferingCard href={`/services/${s.slug}`} title={s.title} summary={s.summary} icon={s.icon} />
        </StaggerItem>
      ))}
    </Stagger>
  </Container>
</Section>
```
