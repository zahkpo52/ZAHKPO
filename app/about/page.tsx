import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Leaf, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
// import { StatStrip } from "@/components/marketing/stat-strip";
import { CTASection } from "@/components/marketing/cta-section";
import { FounderCard } from "@/components/marketing/founder-card";
import { IconTile } from "@/components/marketing/icon-tile";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  aboutValues,
  differentiators,
  mission,
  securityFeatures,
  // sustainability,
  timeline,
  vision,
  whoWeAre,
} from "@/content/about";
import { founders } from "@/content/team";
// import { stats } from "@/content/stats";

export const metadata: Metadata = buildMetadata({
  title: "About ZAH KPO | The back office UK accounting firms count on",
  description:
    "Founded in 2025, ZAH KPO (Zah Professional Services Pvt Ltd) helps UK accounting firms scale with skilled professionals, SOP-driven processes, modern technology and GDPR-aligned security.",
  path: "/about",
  keywords: ["about ZAH KPO", "accounting outsourcing partner UK", "KPO for accountants"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="About"
        title="The back office UK accounting firms count on"
        description="ZAH is a technology-driven KPO, founded in 2025, built on a simple belief: firms do their best work when the routine compliance load is handled by people they can trust."
        crumbs={crumbs}
        image={{ src: "/images/office-discussion.jpg", mobileSrc: "/images/mobile/office-discussion-mobile.jpg" }}
      >
        <Button asChild size="lg" variant="accent">
          <Link href="/contact">
            Work with us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {/* <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{whoWeAre}</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-primary">
              People First · Process Driven · Technology Enabled · Value Focused
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <StatStrip stats={stats} />
          </Reveal>
        </Container>
      </Section> */}

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Founders"
              title="Led by qualified accountants"
              description="ZAH is founder-led, combining 12+ years of UK accounting, audit and compliance experience."
            />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <StaggerItem key={founder.name}>
                <FounderCard founder={founder} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <IconTile icon={Eye} />
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  Our vision
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{vision}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="h-full p-8">
                <IconTile icon={Target} />
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  Our mission
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{mission}</p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Growth beyond limits"
                description="A technology-driven KPO, built on relationships and a reputation for getting the detail right."
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="space-y-8">
                {timeline.map((t, i) => (
                  <li key={t.year} className="flex gap-5">
                    <div className="flex flex-col items-center pt-1">
                      <span
                        className="size-3 rounded-full bg-primary ring-4 ring-primary/15"
                        aria-hidden="true"
                      />
                      {i < timeline.length - 1 ? (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t.year}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground">{t.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we stand for" title="The values behind the work" />
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
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why firms choose us" title="A partner, not just a provider" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <Card className="h-full p-6">
                  <IconTile icon={d.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section> */}

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Security first"
              title="Built on trust and protection"
              description="Confidentiality, controlled access and GDPR-aligned practices are built into how we work."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <Card className="h-full p-6">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Leaf className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
              {sustainability.title}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {sustainability.description}
            </p>
          </Reveal>
        </Container>
      </Section> */}

      <CTASection />
    </>
  );
}
