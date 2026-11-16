import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { NextDeadlines, YearEndCalculator } from "@/components/marketing/deadline-tools";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "UK Tax Deadline Calculator and Calendar 2026/27",
  description:
    "Free UK tax deadline calculator: enter a year-end for Companies House, CT600 and corporation tax dates, plus a live countdown to Self Assessment, MTD, VAT, payroll and CIS deadlines.",
  path: "/uk-tax-deadlines",
  keywords: ["UK tax deadline calculator", "tax deadline calculator UK", "UK tax deadlines 2026/27", "UK tax deadlines", "MTD for Income Tax deadlines", "corporation tax deadline calculator", "Companies House accounts deadline"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Free tools", href: "/free-tools" }, { label: "UK tax deadline calculator" }];

const faqs = [
  {
    question: "When is the corporation tax deadline for a UK company?",
    answer:
      "For companies that are not large, corporation tax is payable 9 months and 1 day after the end of the accounting period, and the CT600 return is due 12 months after the period ends. Enter the year-end in the calculator above to get the exact dates.",
  },
  {
    question: "When must a private company file its accounts at Companies House?",
    answer:
      "Usually 9 months after the end of its financial year. A company's first accounts are due 21 months after incorporation, so check the Companies House record for first periods.",
  },
  {
    question: "What is the Self Assessment deadline?",
    answer:
      "31 October for paper returns and 31 January for online returns, with the balancing payment and first payment on account due on 31 January and the second payment on account on 31 July.",
  },
  {
    question: "When are MTD for Income Tax quarterly updates due?",
    answer:
      "For standard quarters, 7 August, 7 November, 7 February and 7 May. The calendar above shows the next one counted down from today.",
  },
];

const rules = [
  ["VAT return and payment", "1 month and 7 days after the end of the VAT period"],
  ["Corporation tax payment", "9 months and 1 day after the accounting period ends (companies that are not large)"],
  ["Corporation tax return (CT600)", "12 months after the accounting period ends"],
  ["Companies House accounts", "9 months after the year end for private companies; first accounts 21 months after incorporation"],
  ["Confirmation statement", "Within 14 days of the end of the review period, at least once a year"],
  ["PAYE and NIC payment", "22nd of the following tax month when paid electronically"],
  ["CIS monthly return", "19th of each month, for the tax month ending on the 5th"],
  ["MTD for Income Tax updates", "7 August, 7 November, 7 February and 7 May for standard quarters"],
  ["Self Assessment", "31 October paper, 31 January online, with payments on account on 31 January and 31 July"],
  ["P11D and P11D(b)", "6 July after the end of the tax year"],
];

export default function DeadlinesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "UK tax deadline calculator",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
            url: "https://www.zahkpo.com/uk-tax-deadlines/",
          },
        ]}
      />
      <PageHero
        eyebrow="Free tool"
        title="UK tax deadline calculator and calendar"
        description="Enter a company year-end to get its Companies House, CT600 and corporation tax payment dates - and see the next UK tax deadlines counted down live. Free, no sign-up."
        crumbs={crumbs}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div id="calculator" className="scroll-mt-28 lg:order-2">
            <Reveal>
              <SectionHeading align="left" eyebrow="Calculator" title="Deadline calculator: enter a year-end" />
            </Reveal>
            <div className="mt-8">
              <YearEndCalculator />
            </div>
          </div>
          <div className="lg:order-1">
            <Reveal>
              <SectionHeading align="left" eyebrow="Coming up" title="The next eight deadlines" />
            </Reveal>
            <div className="mt-8">
              <NextDeadlines count={8} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="The rules" title="How each deadline is worked out" />
          </Reveal>
          <dl className="mt-10 grid gap-x-10 md:grid-cols-2">
            {rules.map(([k, v]) => (
              <div key={k} className="border-t border-border py-5">
                <dt className="font-semibold text-foreground">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            A general guide for UK accounting firms. Weekends and bank holidays, first periods and special cases can change
            a date, so always confirm against HMRC and Companies House. Want help hitting them?{" "}
            <Link href="/contact?offer=free-trial" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-primary">
              Try three jobs free
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading align="left" eyebrow="Questions" title="UK tax deadlines explained" />
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
