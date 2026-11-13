import type { Metadata } from "next";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { PricingEstimator } from "@/components/marketing/pricing-estimator";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Outsourced Accounting Pricing Calculator for UK Practices",
  description:
    "Estimate what outsourcing bookkeeping, VAT, year-end accounts, Self Assessment and payroll to ZAH KPO could cost your UK practice. Indicative ranges, two-level review included, first 3 jobs free.",
  path: "/pricing-calculator",
  keywords: ["outsourced accounting pricing UK", "outsourced bookkeeping cost for accountants", "offshore accounting price per hour", "white label accounting pricing UK"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Free tools", href: "/free-tools" }, { label: "Pricing calculator" }];

const models = [
  { name: "Per hour", range: "£10 - £16 an hour", text: "Pay only for the time worked. Good for ad-hoc work, catch-up projects and busy seasons." },
  { name: "Per job", range: "Fixed price per job", text: "A fixed fee per return or set of accounts, agreed before we start. No surprises at the end." },
  { name: "Dedicated team", range: "£1,100 - £1,800 a month", text: "A full-time qualified accountant working only for your practice, managed and reviewed by us." },
];

const jobs = [
  ["Bookkeeping", "£35 - £120 per client a month"],
  ["VAT return", "£25 - £60 per return"],
  ["Year-end accounts and CT600", "£150 - £350 per company"],
  ["Self Assessment return", "£50 - £120 per return"],
  ["Payroll", "£3 - £6 per payslip"],
  ["CIS return", "£15 - £35 per month"],
  ["Management accounts", "£60 - £180 per client a month"],
];

const faqs = [
  {
    question: "How much does it cost to outsource accounting work to ZAH KPO?",
    answer:
      "As a guide, £10 to £16 an hour, or a fixed price per job - for example £25 to £60 for a VAT return or £150 to £350 for small-company year-end accounts and CT600. Your exact quote depends on volume, software and the state of the records, and follows a short call.",
  },
  {
    question: "Why give a range rather than a price list?",
    answer:
      "Two clients with the same service can need very different time - a tidy Xero file with bank feeds is not the same as a year of cash receipts. A range is honest; your fixed quote comes once we have seen a sample.",
  },
  {
    question: "Is the review included in the price?",
    answer:
      "Yes. Every job is prepared by a qualified accountant and independently reviewed before it reaches you, with a checklist, working papers and live tracking in ZAH Nexus.",
  },
];

export default function PricingCalculatorPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="Pricing calculator"
        title="What would outsourcing cost your practice?"
        description="Tell us what you would send and how tidy the records usually are. You get an indicative monthly range - and every job comes prepared, reviewed twice and ready for your sign-off."
        crumbs={crumbs}
      />

      <Section>
        <Container>
          <PricingEstimator />
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Three ways to work" title="Pick the model that fits your practice" />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {models.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{m.name}</p>
                <p className="mt-3 font-serif text-2xl font-medium text-foreground">{m.range}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>

          <Reveal className="mt-16">
            <SectionHeading align="left" eyebrow="Per job" title="Typical ranges by service" />
          </Reveal>
          <dl className="mt-8 grid gap-x-10 md:grid-cols-2">
            {jobs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-t border-border py-4">
                <dt className="font-semibold text-foreground">{k}</dt>
                <dd className="text-right text-sm tabular-nums text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
            Indicative ranges for UK accounting firms, not a quote. Catch-up work, very high volumes or specialist sectors
            are priced on review.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading align="left" eyebrow="Questions" title="About our pricing" />
          </Reveal>
          <dl className="mt-8">
            {faqs.map((f) => (
              <div key={f.question} className="border-t border-border py-6">
                <dt className="font-semibold text-foreground">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
