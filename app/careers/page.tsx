import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { Testimonials } from "@/components/marketing/testimonials";
import { IconTile } from "@/components/marketing/icon-tile";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { cultureValues, openRoles, perks } from "@/content/careers";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers at ZAH KPO | Accounting jobs with UK client exposure",
  description:
    "Build an accounting career with UK client exposure, ACCA support and a collaborative, process-driven culture. See life at ZAH KPO and our current openings.",
  path: "/careers",
  keywords: ["accounting careers", "ACCA jobs", "ZAH KPO careers", "bookkeeper jobs Khargone", "ZAH KPO job openings"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Careers" }];

export default function CareersPage() {
  const applyHref = `mailto:${siteConfig.contact.careersEmail}?subject=Career%20application`;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Careers"
        title="Build your career with ZAH"
        description="A talent-focused team where you'll work directly with UK accounting firms, learn modern cloud and AI tools, and grow with people who have your back."
        crumbs={crumbs}
        image={{ src: "/images/team-collab.jpg", mobileSrc: "/images/mobile/team-collab-mobile.jpg" }}
      >
        <Button asChild size="lg" variant="accent">
          <a href={applyHref}>
            View open roles
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our culture" title="A place to do your best work" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((v) => (
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
            <SectionHeading eyebrow="Perks & benefits" title="What you get in return" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <Card className="flex h-full gap-4 p-6">
                  <IconTile icon={p.icon} size="sm" />
                  <div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="In their words" title="Life on the team" />
          </Reveal>
          <Reveal delay={0.05} className="mx-auto mt-12 max-w-3xl">
            <Testimonials items={testimonials} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Open roles"
              title="Join us"
              description="We're growing our UK accounts team. Send your CV and we'll be in touch."
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {openRoles.map((role) => (
              <Card key={role.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-foreground">{role.title}</h3>
                    <Badge variant="soft">
                      {role.count} {role.count > 1 ? "openings" : "opening"}
                    </Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {role.location} · {role.type}
                  </p>
                </div>
                <Button asChild variant="secondary" className="shrink-0">
                  <a href={`mailto:${siteConfig.contact.careersEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>
                    Apply now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Don't see the right role?"
        description="We're always glad to hear from talented accounting professionals. Send your CV and tell us what you're great at."
        primaryLabel="Send your CV"
        primaryHref={applyHref}
      />
    </>
  );
}
