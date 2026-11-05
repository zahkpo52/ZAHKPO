import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { serviceCategories, services } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Outsourced Accounting Services",
  description:
    "Explore ZAH KPO's full range of outsourced services for UK firms - core accounting, compliance, CFO advisory, audit support and company secretarial - built to add capacity without adding headcount.",
  path: "/services",
  keywords: ["outsourced accounting services", "audit support outsourcing", "virtual CFO services"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

const categoryCopy: Record<string, string> = {
  "Core Finance & Accounting": "Keep the books accurate and every report on time.",
  Compliance: "VAT, payroll, CIS and tax - prepared, reviewed and filed on time.",
  "CFO & Advisory": "Forecasting, modelling and KPI insight that drive decisions.",
  "Audit Support": "Working papers and file preparation, ready for your review.",
  "Company Secretarial": "Stay compliant across the whole company lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Services"
        title="Accounting, compliance, advisory & audit support"
        description="Pick the services your practice needs and plug them straight in. Every job is delivered by skilled people, SOP-driven, multi-level reviewed and handled on secure systems."
        crumbs={crumbs}
        image={{ src: "/images/desk-planning.jpg", mobileSrc: "/images/mobile/desk-planning-mobile.jpg" }}
      >
        <Button asChild size="lg" variant="accent">
          <Link href="/contact">
            Book a Discovery Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {serviceCategories.map((category, i) => {
        const items = services.filter((s) => s.category === category);
        return (
          <Section
            key={category}
            className={i % 2 === 1 ? "border-y border-border bg-surface" : undefined}
          >
            <Container>
              <Reveal>
                <SectionHeading align="left" eyebrow={category} title={categoryCopy[category]} />
              </Reveal>
              <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <StaggerItem key={s.slug}>
                    <OfferingCard
                      href={`/services/${s.slug}`}
                      title={s.title}
                      summary={s.summary}
                      icon={s.icon}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <CTASection />
    </>
  );
}
