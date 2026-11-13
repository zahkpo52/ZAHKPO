import Link from "next/link";
import { ArrowRight, Phone, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { siteConfig } from "@/lib/site";
import type { OfferingBase } from "@/types/content";
import { HOURLY, fmtRange, servicePrices } from "@/content/pricing";
import { PageHero } from "./page-hero";
import { DeliverablesGrid } from "./deliverables-grid";
import { ProcessTimeline } from "./process-timeline";
import { FaqAccordion } from "./faq-section";
import { OfferingCard } from "./offering-card";
import { CTASection } from "./cta-section";
import { IconTile } from "./icon-tile";
import type { Crumb } from "./breadcrumb";

export interface ReadingItem {
  href: string;
  title: string;
  description: string;
}

export interface RelatedItem {
  href: string;
  title: string;
  summary: string;
  icon: LucideIcon;
}

export function ServiceDetail({
  offering,
  crumbs,
  related,
  reading = [],
}: {
  offering: OfferingBase;
  crumbs: Crumb[];
  related: RelatedItem[];
  reading?: ReadingItem[];
}) {
  const price = servicePrices[offering.slug];
  return (
    <>
      <PageHero
        eyebrow={offering.hero.eyebrow}
        title={offering.hero.heading}
        description={offering.hero.subheading}
        crumbs={crumbs}
        image={{ src: "/images/corporate-meeting.jpg" }}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Book a Discovery Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`tel:${siteConfig.contact.khOffice.phoneHref}`}>
            <Phone className="size-4" aria-hidden="true" />
            Call us now
          </a>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What we handle"
              title={`Everything in ${offering.title}, covered`}
              description="A clear scope of work, delivered to a dependable standard every time."
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-10">
            <DeliverablesGrid items={offering.deliverables} />
          </Reveal>
        </Container>
      </Section>

      {offering.process?.length ? (
        <Section className="border-y border-border bg-surface">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="How it works"
                  title="A simple, predictable process"
                  description="From handover to delivery, you always know exactly where things stand."
                />
              </Reveal>
              <Reveal delay={0.05}>
                <ProcessTimeline steps={offering.process} />
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why ZAH " title="Built to make your practice stronger" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offering.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <Card className="h-full p-6">
                  <IconTile icon={b.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {offering.faqs?.length ? (
        <Section className="border-t border-border bg-surface">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <SectionHeading eyebrow="FAQ" title="Common questions" />
              </Reveal>
              <Reveal delay={0.05} className="mt-8">
                <FaqAccordion items={offering.faqs} idPrefix={offering.slug} />
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      {reading.length ? (
        <Section className="border-t border-border">
          <Container>
            <Reveal>
              <SectionHeading align="left" eyebrow="Guides" title="Further reading" />
            </Reveal>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {reading.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group block h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                  >
                    <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read the guide <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="theme-navy rounded-2xl border border-[#e5b84a]/30 bg-[#061c3a] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e5b84a]">Indicative price</p>
              {price ? (
                <>
                  <p className="mt-3 font-serif text-3xl font-medium text-white">{fmtRange(price)}</p>
                  <p className="mt-1 text-sm text-white/70">{price.unit} · or £{HOURLY.lo} - £{HOURLY.hi} an hour</p>
                </>
              ) : (
                <>
                  <p className="mt-3 font-serif text-3xl font-medium text-white">£{HOURLY.lo} - £{HOURLY.hi}</p>
                  <p className="mt-1 text-sm text-white/70">an hour, or a fixed price per job</p>
                </>
              )}
              <Link href="/pricing-calculator" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#e5b84a] hover:text-[#f3d27a]">
                Estimate your cost <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <Link href="/sample-working-papers" className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">See the output</p>
              <p className="mt-3 font-serif text-xl font-medium text-foreground">Sample working papers</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Download the VAT, bank reconciliation and year-end files we hand back.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Download samples <ArrowRight className="size-4" aria-hidden="true" /></span>
            </Link>
            <Link href="/contact?offer=free-trial" className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Try us first</p>
              <p className="mt-3 font-serif text-xl font-medium text-foreground">Your first 3 jobs are free</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Prepared, reviewed twice and tracked in ZAH Nexus - judge the quality before you pay.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Claim the free trial <ArrowRight className="size-4" aria-hidden="true" /></span>
            </Link>
          </div>
        </Container>
      </Section>

      {related.length ? (
        <Section>
          <Container>
            <Reveal>
              <SectionHeading align="left" eyebrow="Related" title="You might also need" />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <OfferingCard
                  key={r.href}
                  href={r.href}
                  title={r.title}
                  summary={r.summary}
                  icon={r.icon}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTASection />
    </>
  );
}
