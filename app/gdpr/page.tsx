import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FileText, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  assurancePackHref,
  gdprCommitments,
  gdprDocuments,
  gdprHeadlines,
  gdprSteps,
} from "@/content/trust";

export const metadata: Metadata = buildMetadata({
  title: "UK GDPR for Outsourcing to India",
  description:
    "How ZAH KPO covers UK GDPR when you outsource accounting to India: Article 28 DPA, the ICO's IDTA or UK Addendum, transfer risk assessment and a Client Assurance Pack.",
  path: "/gdpr",
  keywords: [
    "UK GDPR outsourcing India",
    "IDTA India accounting",
    "data processing agreement outsourcing",
    "is outsourcing to India GDPR compliant",
  ],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "UK GDPR" }];

const roles = [
  {
    who: "Your firm",
    role: "Controller",
    text: "You decide why and how your clients' data is used. For some work you may yourself be a processor for your client - in that case we are your sub-processor.",
  },
  {
    who: "ZAH KPO",
    role: "Processor",
    text: "We process data only to deliver the work you instruct, under the DPA, and never for our own purposes.",
  },
];

const faqs = [
  {
    question: "Is it lawful to outsource accounting work to India under UK GDPR?",
    answer:
      "Yes. India does not have UK adequacy regulations, so access to UK personal data from India is a restricted transfer. It is lawful when an approved safeguard is in place - the ICO's International Data Transfer Agreement (IDTA) or the UK Addendum - backed by a transfer risk assessment, and when the processor is bound by an Article 28 contract. We provide all three.",
  },
  {
    question: "Who is the controller and who is the processor?",
    answer:
      "Your firm is the controller for your clients' data (or a processor for your client, with ZAH as your sub-processor). ZAH KPO is a processor and acts only on your documented instructions.",
  },
  {
    question: "Do we need to tell our clients that work is outsourced?",
    answer:
      "Your privacy notice should say that you use carefully selected service providers, including some outside the UK, and how that data is protected. Many firms also mention it in engagement letters. Our UK GDPR checklist sets out what to cover.",
  },
  {
    question: "Where will our clients' data be held?",
    answer:
      "Wherever possible we work inside your own accounting software and document portal, so the data stays in your systems. Any working files we need are kept only in our business Microsoft 365, on encrypted company laptops, and are deleted when no longer needed.",
  },
  {
    question: "What happens if there is a data breach?",
    answer:
      "We follow a written incident response plan. We notify you without undue delay - with an initial notice within 24 hours where practicable - and give you the information you need to decide on any report to the ICO or to your clients.",
  },
  {
    question: "Can we see your policies before we sign?",
    answer:
      "Yes. Our Client Assurance Pack covers our security measures, data flow, continuity plans, incident handling and a completed security questionnaire. We share it under NDA, and can show the full policies on request.",
  },
  {
    question: "Do you also follow Indian data protection law?",
    answer:
      "Yes. We follow CERT-In directions - including keeping security logs for 180 days and synchronising our systems to Indian time servers - and track India's Digital Personal Data Protection Act 2023 and its Rules as they come into force.",
  },
  {
    question: "Who is your data protection contact?",
    answer:
      "Our Data Protection Lead is co-founder Mustafa Bag. You can reach him at info@zahkpo.com.",
  },
];

export default function GdprPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="UK GDPR"
        title="UK GDPR, covered in writing before work starts"
        description="Outsourcing to India is lawful under UK GDPR when the right contracts and safeguards are in place. We provide every one of them, and we can show you the evidence."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={assurancePackHref}>
              <Mail className="size-4" aria-hidden="true" />
              Request our assurance pack
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/security">How we secure data</Link>
          </Button>
        </div>
      </PageHero>

      {/* Headlines */}
      <Section>
        <Container>
          <Stagger className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {gdprHeadlines.map((h, i) => (
              <StaggerItem key={h.title} className="h-full">
                <div className={"h-full border-b border-border py-7 lg:border-b-0 " + (i === 0 ? "lg:pr-8" : "lg:px-8")}>
                  <span className="grid size-8 place-items-center rounded-full bg-[#2f8a57]/10 text-[#2f8a57]">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-serif text-xl font-medium text-foreground">{h.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Roles */}
      <Section className="border-y border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who does what"
              title="You stay in control of your clients' data"
              description="The roles are set out in the DPA, so there is no doubt about who decides and who acts."
            />
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {roles.map((r) => (
              <StaggerItem key={r.who} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{r.role}</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-foreground">{r.who}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Documents */}
      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="The paperwork"
                title="Everything your file needs, ready to sign"
                description="These are the documents UK firms, their insurers and their own clients most often ask for."
              />
            </Reveal>
            <Button asChild variant="secondary" className="shrink-0">
              <a href={assurancePackHref}>
                <Mail className="size-4" aria-hidden="true" />
                Request the pack
              </a>
            </Button>
          </div>
          <Stagger className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {gdprDocuments.map((d) => (
              <StaggerItem key={d.title}>
                <div className="flex gap-4 border-t border-border py-5">
                  <FileText className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Commitments */}
      <section className="theme-navy bg-[#031833] py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">Our commitments in the DPA</p>
          </Reveal>
          <dl className="mt-10 grid gap-y-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {gdprCommitments.map((c, i) => (
              <div key={c.label} className={i === 0 ? "lg:pr-8" : "lg:border-l lg:border-white/15 lg:px-8"}>
                <dd className="font-serif text-4xl font-medium text-white">{c.value}</dd>
                <dt className="mt-3 max-w-[15rem] text-sm leading-snug text-white/65">{c.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Steps */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Getting set up"
              title="Five steps to a compliant arrangement"
              description="A simple process that stays the same as your work with us grows."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {gdprSteps.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="h-full bg-background p-6">
                  <span className="text-sm font-semibold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-sm text-muted-foreground">
            Want the detail for your own file?{" "}
            <Link
              href="/blog/outsourcing-accounting-to-india-uk-gdpr-checklist"
              className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-primary"
            >
              Read our UK GDPR checklist for outsourcing to India
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="UK GDPR questions firms ask us"
              description="Something else your compliance team needs? Ask us and we will answer in writing."
            />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/security">
                Security and quality
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={faqs} idPrefix="gdpr" />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
