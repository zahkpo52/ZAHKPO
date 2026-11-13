import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, ClipboardCheck, FileCheck2, ListChecks, Mail, MessageSquareText, UserCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { assurancePackHref, neverDo, securityGroups } from "@/content/trust";

export const metadata: Metadata = buildMetadata({
  title: "Data Security & Quality Control",
  description:
    "How ZAH KPO protects UK firms' client data: MFA, encrypted company laptops, USB blocked, audit logs, signed DPA and IDTA - and two-level review on every deliverable.",
  path: "/security",
  keywords: ["accounting outsourcing data security", "GDPR outsourcing India", "quality control outsourcing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Security & quality" }];

const quality = [
  { icon: UserCheck, title: "Preparer and reviewer", text: "Every job is prepared by one accountant and checked by an independent reviewer." },
  { icon: BadgeCheck, title: "Founder-led review", text: "Our founders, including a Chartered Accountant, review the work on every engagement." },
  { icon: ListChecks, title: "Service checklists", text: "A short checklist for each service must be complete before work goes to review." },
  { icon: FileCheck2, title: "Documented SOPs", text: "Standard procedures mean the same standard on every job, whoever prepares it." },
  { icon: MessageSquareText, title: "Review points in ZAH Nexus", text: "Your UK team raises review points in ZAH Nexus; we answer and close each one, and lessons carry into the next period." },
  { icon: ClipboardCheck, title: "One query list", text: "Questions come back to you in one clear list, not scattered emails." },
];

const faqs = [
  { question: "Where is our clients' data stored?", answer: "Wherever possible we work inside your own software and document portal, so the data stays on your systems and you control access. Any working files are kept only in our business Microsoft 365 and on encrypted company laptops." },
  { question: "Do your staff sign confidentiality agreements?", answer: "Yes. Everyone signs a confidentiality agreement and a data protection undertaking before they get access, and an exit declaration when they leave." },
  { question: "Can our team audit your controls?", answer: "Yes. Our Client Assurance Pack covers our security measures with evidence, and the DPA gives you information and audit rights. Ask us for the pack - we share it under NDA." },
  { question: "Do you use AI tools on client data?", answer: "Only approved business tools under our written AI policy. Client data is never put into free or consumer AI tools." },
  { question: "What do we need for UK GDPR?", answer: "An Article 28 data processing agreement and a transfer safeguard for access from India - the ICO's IDTA or the UK Addendum - with a transfer risk assessment. We provide all of them. See our UK GDPR page for the detail." },
  { question: "What happens if we stop working together?", answer: "You remove our access to your systems, and any working files we hold are returned or deleted, with a deletion certificate on request." },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="Security & quality"
        title="Your clients' data protected, every deliverable checked"
        description="Trust is the whole job. Here is how we keep your clients' information safe and make sure the work you receive is right."
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
            <Link href="/gdpr">UK GDPR</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Data security"
                title="Controls we can show you, not just describe"
                description="Each control below is written into our policies and backed by evidence in our Client Assurance Pack."
              />
            </Reveal>
            <Button asChild variant="secondary" className="shrink-0">
              <a href={assurancePackHref}>
                <Mail className="size-4" aria-hidden="true" />
                Request the evidence
              </a>
            </Button>
          </div>
          <Stagger className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {securityGroups.map((g) => (
              <StaggerItem key={g.title}>
                <div className="border-t-2 border-foreground/80 pt-5 pb-6">
                  <h3 className="font-serif text-2xl font-medium text-foreground">{g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#2f8a57]" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <section className="theme-navy bg-[#031833] py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">House rules</p>
            <h2 className="mt-4 font-serif text-[2rem] font-medium leading-tight text-white md:text-[2.5rem]">
              What we never do with your clients&apos; data
            </h2>
            <p className="mt-4 text-white/65">
              Written into our policies, signed by every member of the team, and checked on every laptop.
            </p>
          </Reveal>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {neverDo.map((n) => (
              <li key={n} className="flex items-center gap-4 py-4 text-lg text-white">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 text-[#f0a8a0]">
                  <X className="size-4" aria-hidden="true" />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Quality control" title="How we check every deliverable" />
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {quality.map((q) => (
              <StaggerItem key={q.title} className="h-full">
                <div className="h-full bg-surface p-7">
                  <q.icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-foreground">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Security questions"
              description="DPA, transfer agreement and transfer risk assessment - see how we cover UK GDPR for outsourcing to India."
            />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/gdpr">
                Our UK GDPR approach
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={faqs} idPrefix="security" />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
