import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { industries } from "@/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Sectors We Support for UK Accountancy Practices",
  description:
    "Outsourced accounting support for UK practices with construction and CIS, hospitality, landlord and charity clients.",
  path: "/industries",
  keywords: ["sector accounting outsourcing", "CIS outsourcing", "charity accounts outsourcing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Industries" }];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Industries"
        title="Sector knowledge your clients need"
        description="We already prepare work in these sectors for UK practices, so we know the records, the VAT points and the questions to ask."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {industries.map((i) => (
              <StaggerItem key={i.slug} className="h-full">
                <Link href={`/industries/${i.slug}`} className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface">
                  <h2 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary">{i.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{i.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    See how we help
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
