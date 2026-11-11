import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CircleDot, ClipboardList, KeyRound, ListChecks, Users, Workflow } from "lucide-react";

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

export const metadata: Metadata = buildMetadata({
  title: "How Outsourcing With ZAH Works",
  description:
    "How UK firms work with ZAH: discovery call, pilot batch, secure set-up in your systems and reviewed delivery - pay as you use or with a dedicated team.",
  path: "/how-we-work",
  keywords: ["how accounting outsourcing works", "dedicated offshore accountant", "outsourcing engagement model"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "How we work" }];

const steps = [
  { title: "Discovery call", text: "We learn how your practice works, the services you want to hand over, your software and your deadlines." },
  { title: "Scope and quote", text: "We agree what is in scope, your house style and review points, and send a clear quote." },
  { title: "Secure set-up", text: "You give our team named access to your software and document portal. Nothing is copied outside your systems unless agreed." },
  { title: "Pilot batch", text: "We start with a small set of jobs so you can judge quality, turnaround and communication before scaling up." },
  { title: "Reviewed delivery", text: "Every job is prepared, then checked by an independent reviewer, and comes back with one consolidated query list." },
  { title: "Regular check-ins", text: "We review feedback and review points with you so each period is smoother than the last." },
];

const models = [
  {
    icon: ClipboardList,
    title: "Pay as you use",
    text: "Send jobs as you need them - a VAT quarter, a batch of year-ends, monthly bookkeeping for a set of clients. Cost follows the volume of work.",
    points: ["Ideal for seasonal peaks", "Start with a single service", "No long-term commitment to headcount"],
  },
  {
    icon: Users,
    title: "Dedicated team",
    text: "A dedicated ZAH accountant or team works on your clients every day, learns your processes and becomes part of your practice.",
    points: ["Same people on your clients", "Works to your daily priorities", "Best for steady, ongoing volume"],
  },
];

const needs = [
  "Access to the client files in your accounting software",
  "Your templates, checklists and house style",
  "A named contact for queries at your firm",
  "Your preferred deadlines and review points",
];

const faqs = [
  { question: "How long does it take to get started?", answer: "Once the scope is agreed and secure access is set up, we can start on a pilot batch. The pace after that is up to you." },
  { question: "Do we have to commit to a minimum volume?", answer: "No. Many firms start with a small pilot batch or a single service and add more once they are happy with the quality." },
  { question: "Who talks to our clients?", answer: "Usually your firm does. We send our queries to you in one consolidated list, and you decide what goes to the client." },
  { question: "Can we switch between pay-as-you-use and a dedicated team?", answer: "Yes. Many firms start pay-as-you-use and move to a dedicated team once their volume is steady." },
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="How we work"
        title="A simple, low-risk way to add capacity"
        description="From the first call to regular delivery, here is exactly how working with ZAH works - and the two ways firms choose to engage us."
        crumbs={crumbs}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book a Discovery Call
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="The process" title="From first call to reviewed delivery" />
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="h-full bg-background p-7">
                  <span className="text-sm font-semibold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Engagement models" title="Two ways to work with us" />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {models.map((m) => (
              <StaggerItem key={m.title} className="h-full">
                <Card className="h-full p-8">
                  <IconTile icon={m.icon} />
                  <h3 className="mt-5 text-xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  <ul className="mt-5 space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-white/85">
                        <CircleDot className="size-3.5 text-primary" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="ZAH Nexus"
              title="One workspace for your UK team and ours"
              description="We run every job through ZAH Nexus, our in-house workflow platform. Each job has a status, an owner, a service checklist and a deadline - and your UK team logs in to see progress, review the work and raise review points in the same place."
            />
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {[
              [Workflow, "Tracked stages", "Assigned, preparing, internal review and delivered."],
              [ListChecks, "Service checklists", "Each service has a checklist completed before review."],
              [CalendarCheck, "Deadlines", "VAT quarters, year-ends and 31 January planned in advance."],
              [KeyRound, "Clear ownership", "A named preparer and reviewer on every job."],
              [Users, "UK team login", "Your team logs in to track jobs and review the work."],
              [ClipboardList, "Review points", "Your queries are answered and closed against the job."],
            ].map(([I, t, d]) => {
              const Icon = I as typeof Workflow;
              return (
                <StaggerItem key={t as string} className="h-full">
                  <Card className="h-full p-6">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 font-semibold text-white">{t as string}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Getting ready" title="What we need from you" />
            <ul className="mt-8 space-y-3">
              {needs.map((n) => (
                <li key={n} className="flex items-start gap-3 text-white/85">
                  <CircleDot className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/security">
                How we protect your data
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={faqs} idPrefix="how" />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
