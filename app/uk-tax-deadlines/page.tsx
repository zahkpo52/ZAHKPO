import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { NextDeadlines, YearEndCalculator } from "@/components/marketing/deadline-tools";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "UK Tax Deadlines Calendar for Accountants",
  description:
    "The next UK tax and filing deadlines, counted down live: Self Assessment, MTD for Income Tax, payroll, CIS, VAT, corporation tax and Companies House.",
  path: "/uk-tax-deadlines",
  keywords: ["UK tax deadlines", "MTD for Income Tax deadlines", "corporation tax deadline calculator", "Companies House accounts deadline"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "UK tax deadlines" }];

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
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Resource"
        title="UK tax deadlines, counted down live"
        description="The next deadlines your practice is working towards, plus a quick calculator for company year-ends. Bookmark it for the season."
        crumbs={crumbs}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading align="left" eyebrow="Coming up" title="The next eight deadlines" />
            </Reveal>
            <div className="mt-8">
              <NextDeadlines count={8} />
            </div>
          </div>
          <div id="calculator" className="scroll-mt-28">
            <Reveal>
              <SectionHeading align="left" eyebrow="Calculator" title="Company deadlines from a year-end" />
            </Reveal>
            <div className="mt-8">
              <YearEndCalculator />
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

      <CTASection />
    </>
  );
}
