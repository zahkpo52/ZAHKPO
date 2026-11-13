import type { Metadata } from "next";
import { Download, FileSpreadsheet } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sample Accounting Working Papers - VAT, Bank Rec, Year-End",
  description:
    "Download sample working papers from ZAH KPO: a VAT return working paper, a bank reconciliation and a year-end lead schedule, with review points and sign-off. Fictional client, real format.",
  path: "/sample-working-papers",
  keywords: ["sample working papers accounting", "VAT return working paper template", "bank reconciliation template UK", "year end lead schedule template"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Free tools", href: "/free-tools" }, { label: "Sample working papers" }];

const papers = [
  {
    title: "VAT return working paper",
    file: "/samples/sample-vat-return-working-paper.xlsx",
    text: "Boxes 1 to 9 from ledger to return, adjustments explained, VAT control account agreed to Box 5, and review points with their status.",
    cols: "grid-cols-[2.5rem_1fr_6rem]",
    head: ["Box", "Description", "Per return (£)"],
    rows: [
      ["1", "Sales VAT", "18,450.20"],
      ["4", "Input VAT reclaimed", "7,095.65"],
      ["5", "Net VAT payable", "11,354.55"],
      ["", "Difference to VAT control", "Nil"],
    ],
  },
  {
    title: "Bank reconciliation",
    file: "/samples/sample-bank-reconciliation.xlsx",
    text: "Statement to ledger, with deposits in transit and unpresented payments listed and cleared after the year end - difference nil.",
    cols: "grid-cols-[2.5rem_1fr_6rem]",
    head: ["", "Description", "Amount (£)"],
    rows: [
      ["", "Balance per bank statement", "24,680.15"],
      ["+", "Deposits in transit", "3,265.40"],
      ["-", "Unpresented payments", "(3,534.36)"],
      ["", "Balance per ledger", "24,411.19"],
    ],
  },
  {
    title: "Year-end lead schedule",
    file: "/samples/sample-year-end-lead-schedule.xlsx",
    text: "Current and prior year side by side, movements and percentages, an explanation for every significant movement and open review points.",
    cols: "grid-cols-[6.5rem_4rem_1fr]",
    head: ["Area", "Movement", "Comment"],
    rows: [
      ["Turnover", "+11.2%", "New contract"],
      ["Debtors", "+14.6%", "Debtor days 41"],
      ["Cash", "+22.9%", "Agrees to bank rec"],
      ["Corporation tax", "+22.8%", "Per CT computation"],
    ],
  },
];

const standards = [
  ["One format, every job", "Same layout, numbering and sign-off block whoever prepares the work."],
  ["Every figure traced", "Ledger to return, statement to ledger, prior year to current year."],
  ["Review points kept", "Each query logged with its status, so nothing is lost between periods."],
  ["Two sign-offs", "Prepared and independently reviewed at ZAH before it reaches your partner."],
];

export default function SampleWorkingPapersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Free download"
        title="See the working papers before you send a job"
        description="The files we hand back to UK practices - prepared, reviewed and ready for your sign-off. The client and figures are fictional; the format is exactly what you would receive."
        crumbs={crumbs}
      />

      <Section>
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {papers.map((p) => (
              <StaggerItem key={p.file}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="border-b border-border bg-surface p-4">
                    <div className="overflow-hidden rounded-lg border border-[#bfbfbf] bg-white text-[11px] text-[#1b1b1b] shadow-sm" style={{ fontFamily: "Verdana, sans-serif" }}>
                      <div className={"grid bg-[#1f4e79] font-bold text-white " + p.cols}>
                        {p.head.map((h, i) => (
                          <span key={i} className="px-2 py-1.5">{h}</span>
                        ))}
                      </div>
                      {p.rows.map((r, i) => (
                        <div key={i} className={"grid border-t border-[#d9d9d9] " + p.cols + " " + (i === p.rows.length - 1 ? "bg-[#f2f2f2] font-bold" : "")}>
                          {r.map((c, j) => (
                            <span key={j} className={"truncate px-2 py-1.5 " + (j === 2 ? "text-right tabular-nums" : "")}>{c}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="flex items-center gap-2 font-serif text-xl font-medium text-foreground">
                      <FileSpreadsheet className="size-5 text-primary" aria-hidden="true" />
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <a
                      href={p.file}
                      download
                      className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#061c3a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0a2243]"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Download Excel sample
                    </a>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Our standard" title="What every ZAH working paper has" />
          </Reveal>
          <dl className="mt-10 grid gap-x-10 md:grid-cols-2">
            {standards.map(([k, v]) => (
              <div key={k} className="border-t border-border py-5">
                <dt className="font-semibold text-foreground">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
