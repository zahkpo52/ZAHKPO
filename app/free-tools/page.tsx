import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { FreeToolsGrid } from "@/components/marketing/free-tools-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Tools for UK Accountancy Practices",
  description:
    "Free tools for UK accounting firms: a live UK tax deadlines calendar, a year-end deadline calculator, an in-house vs outsourcing cost calculator and sample working papers.",
  path: "/free-tools",
  keywords: ["free tools for accountants UK", "UK tax deadline calculator", "cost of hiring an accountant calculator", "sample accounting working papers"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Free tools" }];

export default function FreeToolsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Free tools"
        title="Free tools for UK practices"
        description="Useful whether or not you work with us: deadlines, a year-end calculator, the true cost of a hire and the working papers we hand back."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <FreeToolsGrid />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
