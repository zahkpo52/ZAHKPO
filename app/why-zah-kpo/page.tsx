import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { StatStrip } from "@/components/marketing/stat-strip";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { csrInitiatives, whyDifferentiators } from "@/content/why";
import { aboutValues } from "@/content/about";
import { challenges } from "@/content/home";
import { stats } from "@/content/stats";

export const metadata: Metadata = buildMetadata({
  title: "Why ZAH KPO | The accounting outsourcing partner UK firms trust",
  description:
    "What differentiates ZAH KPO - a proactive way of working, guaranteed quality and consistency, SOP-driven delivery and a model built to grow your client practice.",
  path: "/why-zah-kpo",
  keywords: [
    "why outsource accounting",
    "accounting outsourcing partner",
    "SOP-driven accounting outsourcing",
  ],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Why ZAH" }];

export default function WhyZAHKPOPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Why ZAH"
        title="What Differentiates Us"
        description="Plenty of providers can process work. We built ZAH around the four things UK firms told us actually matter: Proactivity, Consistent Quality, Documented Process and Growth for your Practice."
        crumbs={crumbs}
        image={{ src: "/images/city-skyline.jpg", mobileSrc: "/images/mobile/city-skyline-mobile.jpg" }}
      >
        <Button asChild size="lg" variant="accent">
          <Link href="/contact">
            Book a Discovery Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {whyDifferentiators.map((d, i) => (
              <StaggerItem key={d.title} className="h-full">
                <Card interactive className="relative flex h-full flex-col overflow-hidden p-8">
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-5 text-6xl font-bold leading-none text-primary/8 dark:text-primary/15"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconTile icon={d.icon} />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {d.tagline}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                    {d.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {d.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Built for UK Accounting Firms."
              // title="People first. Process driven. Technology enabled. Value focused."
              description="Qualified professionals, proven processes and modern technology working together to deliver reliable, scalable accounting support."
              // description="Four principles behind every engagement — and the reason firms stay with us."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="h-full p-6">
                  <IconTile icon={v.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-12">
            <StatStrip stats={stats} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Challenges we solve"
              title="The problems that bring firms to us"
              description="If any of these sound familiar, a discovery call is the fastest way to see what changes."
            />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <StaggerItem key={c.challenge}>
                <Card className="h-full p-5">
                  <p className="text-sm font-medium text-muted-foreground line-through decoration-border">
                    {c.challenge}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {c.solution}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Corporate social responsibility"
              title="Growth that gives back"
              description="Our mission goes beyond accurate delivery - we're committed to creating a positive impact on businesses, people and the environment."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {csrInitiatives.map((c) => (
              <StaggerItem key={c.title}>
                <Card className="h-full p-6">
                  <IconTile icon={c.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
