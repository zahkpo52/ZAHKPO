import Link from "next/link";
import { ArrowRight, Phone, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { siteConfig } from "@/lib/site";
import type { OfferingBase } from "@/types/content";
import { PageHero } from "./page-hero";
import { DeliverablesGrid } from "./deliverables-grid";
import { ProcessTimeline } from "./process-timeline";
import { FaqAccordion } from "./faq-section";
import { OfferingCard } from "./offering-card";
import { CTASection } from "./cta-section";
import { IconTile } from "./icon-tile";
import type { Crumb } from "./breadcrumb";

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
}: {
  offering: OfferingBase;
  crumbs: Crumb[];
  related: RelatedItem[];
}) {
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
