import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { AnimatedCounter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { caseStudy } from "@/content/home";

export const metadata: Metadata = buildMetadata({
  title: "Case Study: Clearing a UK Practice's Backlog",
  description:
    "How a dedicated ZAH KPO team cleared a UK accounting firm's bookkeeping and VAT backlog: 100% on-time VAT submissions, no penalties and 35% less processing time.",
  path: "/case-study",
  keywords: ["accounting outsourcing case study", "UK accountancy practice outsourcing results"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Case study" }];

const results = [
  { value: 100, suffix: "%", label: "VAT returns submitted on time" },
  { value: 0, suffix: "", label: "Penalties on returns we prepared" },
  { value: 35, suffix: "%", label: "Less time spent processing" },
  { value: 5000, suffix: "+", label: "Hours delivered" },
];

export default function CaseStudyPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Case study"
        title="From backlog to on time, every quarter"
        description={caseStudy.client}
        crumbs={crumbs}
      />

      <section className="theme-navy bg-[#031833] pb-20 pt-4 md:pb-24">
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 border-t border-white/15 pt-10 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={r.label} className={i % 2 === 1 ? "border-l border-white/15 pl-6 lg:pl-8" : i === 2 ? "pr-6 lg:border-l lg:border-white/15 lg:pl-8" : "pr-6"}>
                <dd className="font-serif text-5xl font-medium text-white md:text-6xl">
                  <AnimatedCounter value={r.value} suffix={r.suffix} duration={2} />
                </dd>
                <dt className="mt-3 text-sm text-white/65">{r.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="The challenge" title="More work than the team could take on" />
            <ul className="mt-8 space-y-3">
              {caseStudy.challenges.map((c) => (
                <li key={c} className="flex gap-3 border-t border-border pt-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading align="left" eyebrow="What we did" title="A dedicated team, working their way" />
            <Stagger className="mt-8 space-y-3">
              {caseStudy.approach.map((a) => (
                <StaggerItem key={a}>
                  <p className="flex gap-3 border-t border-border pt-3 text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#2f8a57]" aria-hidden="true" />
                    {a}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </Container>
      </Section>


      <Section>
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            align="left"
            eyebrow="Your practice"
            title="See the difference on three jobs first"
            description="New firms get their first three jobs free - any service. Judge the quality before you commit."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact?offer=free-trial">Claim 3 free jobs</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/how-we-work">
                How we work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
