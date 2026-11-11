import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, FileCheck2, ListChecks, MessageSquareText, UserCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { securityFeatures } from "@/content/about";

export const metadata: Metadata = buildMetadata({
  title: "Data Security & Quality Control",
  description:
    "How ZAH protects UK firms' client data and checks every deliverable: NDAs, controlled access, GDPR-aligned procedures and two-level review.",
  path: "/security",
  keywords: ["accounting outsourcing data security", "GDPR outsourcing India", "quality control outsourcing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Security & quality" }];

const quality = [
  { icon: UserCheck, title: "Preparer and reviewer", text: "Every job is prepared by one accountant and checked by an independent reviewer." },
  { icon: BadgeCheck, title: "Founder-led review", text: "Our founders, including a Chartered Accountant, review the work on every engagement." },
  { icon: ListChecks, title: "Service checklists", text: "A short checklist for each service must be complete before work goes to review." },
  { icon: FileCheck2, title: "Documented SOPs", text: "Standard procedures mean the same standard on every job, whoever prepares it." },
  { icon: MessageSquareText, title: "Feedback acted on", text: "Your review points go back to the preparer and reviewer, so the same issue is not repeated." },
  { icon: ClipboardCheck, title: "One query list", text: "Questions come back to you in one clear list, not scattered emails." },
];

const faqs = [
  { question: "Where is our clients' data stored?", answer: "Wherever possible we work inside your own software and document portal, so the data stays on your systems and you control access." },
  { question: "Do your staff sign confidentiality agreements?", answer: "Yes. Every team member and associate is bound by strict NDA and confidentiality agreements." },
  { question: "What do we need for UK GDPR?", answer: "You remain the controller of your clients' data and we act on your instructions. You will usually need a data processing agreement and a transfer mechanism for data accessed from India. Our GDPR checklist guide explains the steps." },
  { question: "What happens if we stop working together?", answer: "You remove our access to your systems, and any working files we hold are returned or deleted as agreed." },
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
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Data security" title="How we protect client data" />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <Card className="h-full p-7">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

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
                  <h3 className="mt-4 font-semibold text-white">{q.title}</h3>
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
              description="Planning your UK GDPR paperwork? Our checklist covers contracts, transfer safeguards and what to tell clients."
            />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/blog/outsourcing-accounting-to-india-uk-gdpr-checklist">
                Read the GDPR checklist
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
