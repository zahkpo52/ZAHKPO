import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Cloud,
  Quote,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { AnimatedCounter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HomeHero } from "@/components/marketing/home-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { OfferingCard } from "@/components/marketing/offering-card";
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
import { deliveryMetrics, deliveryStandards } from "@/content/stats";

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
  "management-accounts",
  "vat-returns",
  "cfo-advisory",
  "audit-support",
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

const standardIcons = [ShieldCheck, UserCheck, ClipboardCheck, Cloud];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(homeFaqs)]} />
      <HomeHero />

      <section className="border-b border-border bg-background py-12">
        <Container>
          <LogoCloud label="Platforms we work in" />
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
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <OfferingCard
                  href={`/services/${s.slug}`}
                  title={s.title}
                  summary={s.summary}
                  icon={s.icon}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="border-y border-border bg-surface">
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
                <div className="h-full bg-surface p-7">
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

      {/* Numbers */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why firms trust ZAH"
              title="Our delivery in numbers"
              description="Real results from live engagements - measured on the work, not promised in a pitch."
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-14">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <dl className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {deliveryMetrics.map((m) => (
                  <div key={m.label} className="px-6 py-10 text-center">
                    <dd className="text-5xl font-semibold tracking-tight text-primary md:text-6xl">
                      <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                    </dd>
                    <dt className="mt-3 text-sm text-muted-foreground">{m.label}</dt>
                  </div>
                ))}
              </dl>
              <ul className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {deliveryStandards.map((s, i) => {
                  const StandardIcon = standardIcons[i] ?? BadgeCheck;
                  return (
                    <li key={s.value} className="flex items-start gap-3 bg-card px-6 py-6">
                      <StandardIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-white">{s.value}</p>
                        <p className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Challenges */}
      <Section className="border-y border-border bg-surface">
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
                  <div className="h-full bg-surface px-6 py-5">
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
      <Section>
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
              description="Hear from our leadership about how we work with UK accountancy firms - and why practices trust us with their clients' work."
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

      {/* Inside ZAH */}
      <Section className="border-y border-border bg-surface">
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
                      src={f.image.src}
                      alt={f.image.alt}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
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

      {clientTestimonials.length > 0 ? (
        <Section className="border-y border-border bg-surface">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Client voices" title="What our clients say" />
            </Reveal>
            <Stagger className="mt-12 grid gap-5 lg:grid-cols-2">
              {clientTestimonials.slice(0, 2).map((t) => (
                <StaggerItem key={t.author} className="h-full">
                  <Card className="relative h-full p-8">
                    <Quote className="absolute right-7 top-7 size-6 text-primary/50" aria-hidden="true" />
                    <div className="flex gap-1" aria-label={`${t.rating || 5} out of 5 stars`}>
                      {Array.from({ length: t.rating || 5 }, (_, i) => (
                        <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-6 text-lg leading-relaxed text-white">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="mt-6 font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

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
