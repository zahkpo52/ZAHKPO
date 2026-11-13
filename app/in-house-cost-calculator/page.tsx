import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { InHouseCalculator } from "@/components/marketing/in-house-calculator";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "In-House vs Outsourcing Cost Calculator for UK Accountants",
  description:
    "Work out what a new accountant really costs a UK practice - salary, employer NIC, pension, recruitment, overheads and chargeable hours - and compare it with outsourcing.",
  path: "/in-house-cost-calculator",
  keywords: ["cost of hiring an accountant UK", "in-house vs outsourcing accounting", "employer cost calculator UK practice", "outsourced accounting cost"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Free tools", href: "/free-tools" }, { label: "In-house vs outsourcing" }];

const faqs = [
  {
    question: "How much does it really cost to employ an accountant in the UK?",
    answer:
      "Usually 20 to 35 per cent more than the salary once employer National Insurance (15% above £5,000 a year), pension, recruitment fees, equipment and training are added - and more again per productive hour, because holidays, training and admin time are paid but not chargeable.",
  },
  {
    question: "Is outsourcing cheaper than hiring for a UK practice?",
    answer:
      "Often, because you pay only for the work you send rather than a full salary all year. ZAH KPO works per hour, per job or as a dedicated team, and new firms can try their first three jobs free to compare quality and cost.",
  },
  {
    question: "What rates does this calculator use?",
    answer:
      "Employer National Insurance at 15% above the £5,000 secondary threshold, which applies from April 2025. Employment Allowance, apprenticeship levy and salary sacrifice are not included.",
  },
];

export default function InHouseCostPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "In-house vs outsourcing cost calculator",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
            url: "https://www.zahkpo.com/in-house-cost-calculator/",
          },
        ]}
      />
      <PageHero
        eyebrow="Free tool"
        title="What does a new hire really cost?"
        description="Salary is only the start. Add employer NIC, pension, recruitment and the hours that are paid but not chargeable - then compare it with paying only for the work you send."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <InHouseCalculator />
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
            A guide only, using employer NIC at 15% above £5,000 a year. Employment Allowance, the apprenticeship levy,
            salary sacrifice, sick pay and management time are not included - so the real figure is usually higher.
          </p>
        </Container>
      </Section>
      <Section className="border-t border-border bg-surface">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading align="left" eyebrow="Questions" title="Hiring vs outsourcing" />
          </Reveal>
          <dl className="mt-8">
            {faqs.map((f) => (
              <div key={f.question} className="border-t border-border py-6">
                <dt className="font-semibold text-foreground">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            Read more:{" "}
            <Link href="/blog/hiring-vs-outsourcing-accounting-capacity" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-primary">
              Hiring vs outsourcing accounting capacity
            </Link>
          </p>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
