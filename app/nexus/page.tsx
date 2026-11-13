import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  ListChecks,
  MessageSquareText,
  NotebookPen,
  TrendingUp,
  UserCheck,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { NexusBridge, NexusMock } from "@/components/marketing/nexus";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ZAH Nexus - One Workspace for Your UK Team and Ours",
  description:
    "ZAH Nexus is our in-house workflow platform. UK accountancy firms see every outsourced job, checklist, review point and deadline in one shared workspace.",
  path: "/nexus",
  keywords: ["outsourced accounting workflow", "accounting outsourcing portal", "offshore accounting team visibility"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "ZAH Nexus" }];

const gaps = [
  {
    worry: "“We never know where a job stands.”",
    answer: "Every job shows a live stage - assigned, preparing, internal review, with your team, completed.",
  },
  {
    worry: "“Queries get lost in long email chains.”",
    answer: "Review points are logged against the job, answered there and closed - nothing sits in an inbox.",
  },
  {
    worry: "“The same mistake comes back next quarter.”",
    answer: "Feedback stays on the client record, so the preparer sees last period's points before starting.",
  },
  {
    worry: "“Deadlines depend on someone remembering.”",
    answer: "VAT quarters, year-ends and 31 January are planned back from the due date for every client.",
  },
];

const features = [
  { icon: Workflow, title: "Live job status", text: "Each job moves through the same tracked stages, so your UK team always knows what is being prepared, what is in review and what is ready." },
  { icon: ListChecks, title: "A checklist for every service", text: "VAT, bookkeeping, year-end and Self Assessment each have a short checklist. A job cannot go to review until it is complete." },
  { icon: BadgeCheck, title: "Two levels of review", text: "Work is prepared, then checked by a ZAH reviewer, before it reaches your team for final review." },
  { icon: MessageSquareText, title: "Review points in one place", text: "Raise a point on the job. We reply with workings - clarifications are answered, genuine mistakes are acknowledged and fixed." },
  { icon: CalendarClock, title: "Deadlines tracked for you", text: "Every client's VAT quarters, year-end and tax deadlines sit on one calendar, with work scheduled ahead of the due date." },
  { icon: UserCheck, title: "Clear ownership", text: "A named preparer and reviewer on every job, so you always know who to speak to." },
  { icon: NotebookPen, title: "Call notes become tasks", text: "Action points from our catch-up calls are recorded and turned into tasks, so what we agree actually gets done." },
  { icon: TrendingUp, title: "Lessons carry forward", text: "Feedback is kept against each client, so quality improves period after period rather than starting from scratch." },
];

const flow = [
  { title: "You send the work", text: "Records arrive in your software or portal as usual. We log the job in Nexus with its deadline." },
  { title: "We prepare", text: "A named accountant works through the service checklist inside your accounting software." },
  { title: "We review", text: "A ZAH reviewer checks the work and clears any points before it leaves us." },
  { title: "Your team reviews", text: "Your UK team sees the job in Nexus, reviews it and raises any review points." },
  { title: "Close and file", text: "Points are answered and closed. You approve and file from your own software." },
];

const faqs = [
  { question: "Do we need to install anything to use ZAH Nexus?", answer: "No. ZAH Nexus runs in the browser. Your UK team is given its own login to track jobs and raise review points." },
  { question: "Does ZAH Nexus replace Xero, QuickBooks or our practice software?", answer: "No. The accounting work is still done in your own software. Nexus sits alongside it and tracks the workflow - who is doing what, where each job stands and what is due next." },
  { question: "Who files returns with HMRC and Companies House?", answer: "Your firm does, from your own software, once you have reviewed and approved the work. ZAH prepares and reviews; you stay in control of filing." },
  { question: "Can we still use email and calls?", answer: "Of course. Nexus keeps the job record and review points in one place, and we still speak regularly so nothing depends on a screen alone." },
];

export default function NexusPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="ZAH Nexus"
        title="One workspace for your UK team and ours"
        description="Distance is the biggest worry with offshore support. ZAH Nexus, our in-house workflow platform, closes that gap - every job, checklist, review point and deadline visible to both teams."
        crumbs={crumbs}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            <CalendarCheck className="size-4" aria-hidden="true" />
            See it on a discovery call
          </Link>
        </Button>
      </PageHero>

      <section className="theme-navy relative overflow-hidden bg-[#031833] pb-20 pt-4 md:pb-28">
        <div aria-hidden="true" className="absolute inset-0 bg-dotted opacity-40 mask-fade-b" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl">
            <NexusMock />
            <p className="mt-4 text-center text-xs text-foreground/40">The ZAH Nexus VAT Hub - shown with sample client names</p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why we built it"
              title="Outsourcing fails on visibility, not on skill"
              description="Most firms that give up on outsourcing do so because they could not see what was happening. We built ZAH Nexus around the questions UK partners ask us most."
            />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {gaps.map((g) => (
              <StaggerItem key={g.worry} className="h-full">
                <Card className="h-full p-7">
                  <p className="text-lg font-medium italic text-foreground/60">{g.worry}</p>
                  <p className="mt-4 flex items-start gap-2.5 text-foreground">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    {g.answer}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The bridge"
              title="Your practice and our delivery team, on the same page"
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <NexusBridge />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What it does"
              title="Built around how UK accounting work actually flows"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <Card className="h-full p-6">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-5 font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="A job in Nexus" title="From your records to a filed return" />
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="h-full bg-surface p-6">
                  <span className="text-sm font-semibold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
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
              title="Questions about ZAH Nexus"
              description="Want to see it in action? We will walk you through it on a discovery call."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href="/how-we-work">
                  <ClipboardList className="size-4" aria-hidden="true" />
                  How we work
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/security">
                  Security &amp; quality
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={faqs} idPrefix="nexus" />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
