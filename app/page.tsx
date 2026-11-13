import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Clock,
  Quote,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HomeHero } from "@/components/marketing/home-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { NexusBridge, nexusPoints } from "@/components/marketing/nexus";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { Icon } from "@/components/layout/social-links";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { servicesBySlug } from "@/content/services";
import { securityFeatures } from "@/content/about";
import { challenges, homeFaqs } from "@/content/home";
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
    icon: Clock,
    title: "Pay per hour",
    best: "Best for getting started",
    text: "Buy a block of hours and use them on whatever you need. Ideal for a first trial, ad-hoc work or overflow in busy weeks.",
  },
  {
    icon: ClipboardCheck,
    title: "Pay per job",
    best: "Best for defined work",
    text: "A fixed price per VAT return, set of year-end accounts or monthly bookkeeping client - so you know the cost before we start.",
  },
  {
    icon: UserCheck,
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
          <LogoCloud label="Working in the software your clients already use" />
          <p className="mt-8 text-center">
            <Link href="/software" className="text-sm font-medium text-primary hover:underline">
              How we work in each platform →
            </Link>
          </p>
        </Container>
      </section>

      {/* Services */}
      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="What we do"
                title="One partner for the whole back office"
                description="From day-to-day bookkeeping to year-end, audit support and CFO advisory - choose the services you need and add more as your practice grows."
              />
            </Reveal>
            <Button asChild variant="secondary" className="shrink-0">
              <Link href="/services">
                View all services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {featuredServices.map((s, i) => (
              <StaggerItem key={s.slug} className={i === 0 ? "md:row-span-2" : undefined}>
                <Link
                  href={`/services/${s.slug}`}
                  className={
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40 " +
                    (i === 0 ? "min-h-[20rem] justify-end" : "")
                  }
                >
                  {i === 0 ? (
                    <>
                      <Image
                        src="/images/office-workstations.webp"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-35 transition-opacity duration-300 group-hover:opacity-45"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#061c3a] via-[#061c3a]/70 to-transparent" />
                    </>
                  ) : null}
                  <div className="relative">
                    <s.icon className="size-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ZAH Nexus */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="ZAH Nexus"
              title="Bridging your UK team and ours"
              description="Distance is the biggest worry with offshore support. ZAH Nexus, our in-house platform, puts both teams in one workspace - every job, checklist, review point and deadline in one place."
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <NexusBridge />
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nexusPoints.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <p.icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Button asChild variant="secondary">
              <Link href="/nexus">
                See how ZAH Nexus works
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
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
                  <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
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
              eyebrow="Flexible pricing"
              title="Start small. Scale when you are ready."
              description="You do not have to hand over everything on day one. Begin with a few hours or a handful of jobs, and move to a dedicated team once you trust the quality."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {engagementModels.map((m) => (
              <StaggerItem key={m.title} className="h-full">
                <Card className="flex h-full flex-col p-7">
                  <IconTile icon={m.icon} />
                  <h3 className="mt-5 text-xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{m.best}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/contact">
                Get a quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/how-we-work">How engagements work</Link>
            </Button>
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
            <Reveal>
              <SectionHeading eyebrow="Client voices" title="What UK firms say about working with us" />
            </Reveal>
            <Stagger className="mx-auto mt-12 grid max-w-4xl gap-5">
              {clientTestimonials.map((t) => (
                <StaggerItem key={t.author}>
                  <Card className="relative p-8 md:p-12">
                    <Quote className="size-9 text-primary/60" aria-hidden="true" />
                    <blockquote className="mt-6 text-pretty text-xl leading-relaxed text-white md:text-2xl md:leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                      <span
                        aria-hidden="true"
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/15 text-base font-semibold text-primary"
                      >
                        {t.author
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      {/* Challenges */}
      <Section>
        <Container>
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Challenges we understand"
                title="The pressures UK practices face - and how we help"
                description="Every firm we speak to describes the same problems. Here is how ZAH takes each one off your plate."
              />
            </Reveal>
            <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {challenges.map((c) => (
                <StaggerItem key={c.challenge} className="h-full">
                  <div className="h-full bg-background px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {c.challenge}
                    </p>
                    <p className="mt-2 flex items-start gap-2 font-medium text-white">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {c.solution}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Security */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Security first"
              title="Your clients' data, protected"
              description="Security is the foundation of how we work. Here is how we keep every file you share safe."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <Card className="h-full p-7">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Inside ZAH */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our delivery centre"
              title="Inside ZAH"
              description="Our delivery centre in Khargone - a modern, secure workspace built for focused, confidential client work."
            />
          </Reveal>
          <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-[1.25fr_1fr] sm:auto-rows-[13rem] md:auto-rows-[16rem] md:gap-5">
            <StaggerItem className="sm:row-span-2">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-workstations.webp"
                  alt="Two team members working side by side at ZAH KPO workstations"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-team.webp"
                  alt="The ZAH KPO team at work in the open-plan office"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-cabin.webp"
                  alt="A ZAH KPO accountant working at a dual-screen desk in a private cabin"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      {/* Leadership */}
      <Section className="border-y border-border bg-surface">
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
                        <h3 className="text-xl font-semibold text-white">{f.name}</h3>
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

      <Section>
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
