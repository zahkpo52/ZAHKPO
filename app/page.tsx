import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HomeHero } from "@/components/marketing/home-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { NexusMock, nexusPoints } from "@/components/marketing/nexus";
import { CTASection } from "@/components/marketing/cta-section";
import { Icon } from "@/components/layout/social-links";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { servicesBySlug } from "@/content/services";
import { securityFeatures } from "@/content/about";
import { homeFaqs } from "@/content/home";
import { founders } from "@/content/team";
import { clientTestimonials } from "@/content/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "ZAH KPO | Accounting Outsourcing for UK Accountancy Firms",
  absoluteTitle: true,
  description:
    "Outsourced bookkeeping, year-end accounts, VAT, payroll and tax support for UK accountancy firms. Reviewed work, delivered on time by ZAH KPO.",
  path: "/",
  keywords: [
    "accounting outsourcing UK",
    "accountancy firm outsourcing",
    "bookkeeping outsourcing",
    "white label accounting",
  ],
});

const featuredServices = [
  "bookkeeping",
  "year-end-accounts",
  "vat-returns",
  "payroll",
  "management-accounts",
  "corporation-tax",
].map((slug) => servicesBySlug[slug]);

const howWeWork = [
  {
    title: "Discovery call",
    description: "We learn how your practice works, the services you need and the deadlines that matter.",
  },
  {
    title: "Pilot batch",
    description: "We start with a small set of jobs so you can judge the quality before scaling up.",
  },
  {
    title: "Secure set-up",
    description: "We work inside your software and templates, with controlled access to client data.",
  },
  {
    title: "Reviewed delivery",
    description: "Every job is checked before it reaches you, with queries sent back in one clear list.",
  },
];

const engagementModels = [
  {
    title: "Pay per hour",
    best: "Best for getting started",
    text: "Buy a block of hours and use them on whatever you need. Ideal for a first trial, ad-hoc work or overflow in busy weeks.",
  },
  {
    title: "Pay per job",
    best: "Best for defined work",
    text: "A fixed price per VAT return, set of year-end accounts or monthly bookkeeping client - so you know the cost before we start.",
  },
  {
    title: "Dedicated team",
    best: "Best for steady volume",
    text: "A ZAH accountant or team works on your clients every day, learns your processes and becomes part of your practice.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(homeFaqs)]} />
      <HomeHero />

      <section className="border-b border-border bg-background py-12">
        <Container>
          <LogoCloud label="We work in the software your clients already use" />
          <p className="mt-8 text-center">
            <Link href="/software" className="text-sm font-medium text-primary hover:underline">
              How we work in each platform →
            </Link>
          </p>
        </Container>
      </section>

      {/* Services */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="What we do"
              title="One partner for the whole back office"
              description="Hand over one service or all of them. Every job is prepared in your software, to your templates, and checked before it comes back."
            />
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-[6px] hover:decoration-primary"
            >
              All 15 services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Stagger className="border-t border-border">
            {featuredServices.map((s, i) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-border py-6 transition-colors hover:bg-surface md:py-7"
                >
                  <span className="text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-primary">
                      {s.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm leading-relaxed text-muted-foreground">{s.summary}</span>
                  </span>
                  <ArrowRight
                    className="size-5 self-center text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ZAH Nexus */}
      <Section className="theme-navy overflow-hidden bg-[#031833]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="ZAH Nexus"
                title="You can see every job, without asking"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The usual worry with an offshore team is not knowing what is happening. ZAH Nexus is the
                workflow platform we built and use every day. Your UK team logs in to the same workspace
                we do.
              </p>
              <Link
                href="/nexus"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-[6px] hover:decoration-primary"
              >
                How ZAH Nexus works
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="mx-auto mt-14 max-w-5xl">
            <NexusMock />
            <p className="mt-4 text-center text-xs text-foreground/40">The ZAH Nexus VAT Hub - shown with sample client names</p>
          </Reveal>
          <Stagger className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {nexusPoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="border-t border-white/20 pt-5">
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* How we work */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="Up and running in four steps"
              description="A simple, low-risk way to start - and a process that stays the same as you grow."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((step, i) => (
              <StaggerItem key={step.title} className="h-full">
                <div className="h-full bg-background p-7">
                  <span className="text-sm font-semibold tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Engagement models */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Flexible pricing"
              title="Start small. Scale when you are ready."
              description="You do not have to hand over everything on day one. Begin with a few hours or a handful of jobs, and move to a dedicated team once you trust the quality."
            />
          </Reveal>
          <Stagger className="mt-14 grid border-t border-border md:grid-cols-3 md:divide-x md:divide-border">
            {engagementModels.map((m, i) => (
              <StaggerItem key={m.title} className="h-full">
                <div className={"h-full border-b border-border py-8 md:border-b-0 md:py-10 " + (i === 0 ? "md:pr-10" : "md:px-10")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{m.best}</p>
                  <h3 className="mt-3 font-serif text-3xl font-medium text-foreground">{m.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild>
              <Link href="/contact">Get a quote</Link>
            </Button>
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-[6px] hover:decoration-primary"
            >
              How engagements work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Intro video */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Meet ZAH KPO - outsourced accounting for UK accountancy firms",
          description:
            "A one-minute introduction to ZAH KPO: how we help UK practices save time, reduce cost and grow with confidence, with clear SOPs, multi-level review and GDPR-aligned practices.",
          thumbnailUrl: [`${siteConfig.url}/videos/zah-kpo-intro-poster.webp`],
          contentUrl: `${siteConfig.url}/videos/zah-kpo-intro.mp4`,
          uploadDate: "2026-11-13",
          duration: "PT56S",
          publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }}
      />
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Meet ZAH KPO"
              title="Who we are, in under a minute"
              description="Hear from our co-founder, Mustafa, about how we work with UK accountancy firms - and why practices trust us with their clients' work."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Save time, reduce cost and grow with confidence",
                "Clear SOPs and multi-level review on every engagement",
                "AI-assisted speed with qualified accountant review",
                "GDPR-aligned practices you can rely on",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-muted-foreground">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a discovery call <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto w-full max-w-[22rem] overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-primary/20">
              <video
                className="aspect-[9/16] w-full bg-black object-cover"
                controls
                playsInline
                preload="none"
                poster="/videos/zah-kpo-intro-poster.webp"
                aria-label="Meet ZAH KPO - introduction video"
              >
                <source src="/videos/zah-kpo-intro.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Client voice */}
      {clientTestimonials.length > 0 ? (
        <Section className="border-y border-border bg-surface">
          <Container>
            {clientTestimonials.slice(0, 1).map((t) => (
              <Reveal key={t.author}>
                <figure className="mx-auto max-w-4xl border-l-2 border-primary pl-6 md:pl-10">
                  <blockquote className="text-pretty font-serif text-2xl font-normal leading-snug text-foreground md:text-[2.1rem] md:leading-[1.3]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 text-sm">
                    <span className="font-semibold text-foreground">{t.author}</span>
                    <span className="text-muted-foreground"> - {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </Container>
        </Section>
      ) : null}

      {/* Security */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Security"
              title="Your clients' data stays protected"
              description="We work inside your systems, under NDA, with access limited to the people on your account."
            />
            <Link
              href="/security"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-[6px] hover:decoration-primary"
            >
              Security and quality in detail
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Stagger className="grid gap-x-10 sm:grid-cols-2">
            {securityFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="border-t border-border py-5">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Inside ZAH */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our delivery centre"
              title="Inside ZAH"
              description="Our delivery centre in Khargone - a modern, secure workspace built for focused, confidential client work."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5">
            {[
              ["/images/office-team.webp", "The ZAH KPO team at work in the open-plan office"],
              ["/images/office-cabin.webp", "A ZAH KPO accountant working at a dual-screen desk in a private cabin"],
            ].map(([src, alt]) => (
              <StaggerItem key={src}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Leadership */}
      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Leadership"
                title="Led by qualified professionals"
                description="ZAH is run by its founders, who stay close to every engagement and review the work that goes back to your firm."
              />
            </Reveal>
            <Button asChild variant="secondary" className="shrink-0">
              <Link href="/about">
                About ZAH
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {founders.map((f) => (
              <StaggerItem key={f.name} className="h-full">
                <Card className="flex h-full flex-col gap-6 p-7 sm:flex-row">
                  <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={f.headshot}
                      alt={f.image.alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{f.name}</h3>
                        <p className="text-sm text-muted-foreground">{f.role}</p>
                      </div>
                      {f.linkedin ? (
                        <Link
                          href={f.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${f.name} on LinkedIn`}
                          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <Icon platform="LinkedIn" />
                        </Link>
                      ) : null}
                    </div>
                    <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <BadgeCheck className="size-3.5" aria-hidden="true" />
                      {f.credential}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title="Questions UK firms ask us"
                description="The things practices usually want to know before they outsource. Can't see yours? Ask us on a discovery call."
              />
              <Button asChild variant="secondary" className="mt-8">
                <Link href="/faq">
                  All FAQs
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.05}>
              <FaqAccordion items={homeFaqs} idPrefix="home" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
