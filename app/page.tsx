import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { AnimatedCounter, Reveal, Stagger, StaggerItem } from "@/components/motion";
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
import { homeFaqs } from "@/content/home";
import { founders } from "@/content/team";
import { clientTestimonials } from "@/content/testimonials";
import { gdprHeadlines } from "@/content/trust";

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

const comparison: [string, string, string][] = [
  ["Time to start", "Advertising, interviews and notice periods often take months.", "A pilot batch as soon as secure access is set up."],
  ["Cost", "Salary, employer NI, pension, equipment, software and office space.", "Pay per hour, per job or for a dedicated team - nothing else."],
  ["Busy season", "Overtime, temps or work that slips past the deadline.", "Scale hours up for January or year-end, and back down after."],
  ["Holiday and sickness", "Work waits until the person is back.", "Cover from within our team, so deadlines still hold."],
  ["Quality checks", "Depends on how much time your seniors have to review.", "Prepared, then reviewed by a second ZAH accountant before it reaches you."],
  ["Visibility", "Status lives in emails, spreadsheets and people's heads.", "Every job, review point and deadline tracked in ZAH Nexus."],
];

const results = [
  { value: 100, suffix: "%", label: "VAT returns submitted on time" },
  { value: 0, suffix: "", label: "Penalties on returns we prepared" },
  { value: 35, suffix: "%", label: "Less processing time for a UK client firm" },
  { value: 24, suffix: "hr", label: "Typical response time to your queries" },
];

const industries: [string, string][] = [
  ["Construction and CIS", "CIS returns, subcontractor records and the domestic reverse charge."],
  ["Restaurants and takeaways", "Daily takings, card and delivery-app payouts, and VAT."],
  ["Property and landlords", "Rental accounts, MTD for Income Tax and Self Assessment."],
  ["Transport and chauffeur firms", "Payroll journals, vehicle costs and quarterly VAT."],
  ["Retail and fashion", "Supplier balances, stock and monthly management accounts."],
  ["Creative and media agencies", "Project income, VAT and year-end accounts."],
  ["Charities", "Annual charity accounts and fund reporting."],
  ["Owner-managed companies", "Bookkeeping, payroll, year-end and corporation tax."],
];

const trustExtras = [
  { title: "Encrypted company laptops", text: "Two-step login everywhere, USB storage blocked and screens that lock themselves." },
  { title: "Breach notice within 24 hours", text: "Where practicable, with everything you need to decide on any report to the ICO." },
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
          <LogoCloud label="We work in the software your clients already use" marquee />
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
              All 14 services
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
          <Reveal className="steps-progress mt-14 hidden lg:block" y={0}>
            <div className="relative h-px bg-border">
              <span className="steps-progress-bar absolute inset-y-0 left-0 bg-primary" />
              {howWeWork.map((step, i) => (
                <span
                  key={step.title}
                  className="steps-progress-dot absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-primary bg-background"
                  style={{ left: `calc(${(i / howWeWork.length) * 100}% + 1.75rem)`, transitionDelay: `${0.35 + i * 0.4}s` }}
                />
              ))}
            </div>
          </Reveal>
          <Stagger className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
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

      {/* In-house vs ZAH */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why outsource"
              title="Hiring another accountant, or working with ZAH"
              description="Both add capacity. Here is how they compare for a UK practice that needs reliable help through the year."
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <ul className="divide-y divide-border md:hidden">
              {comparison.map(([topic, inHouse, zah]) => (
                <li key={topic} className="p-5">
                  <p className="font-semibold text-foreground">{topic}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/70">In-house: </span>
                    {inHouse}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#2f8a57]" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">ZAH: </span>
                      {zah}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <table className="hidden w-full border-collapse text-left text-sm md:table">
              <caption className="sr-only">Comparison of hiring in-house and outsourcing to ZAH KPO</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-[26%] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:px-7">
                    &nbsp;
                  </th>
                  <th scope="col" className="w-[37%] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:px-7">
                    Hiring in-house
                  </th>
                  <th scope="col" className="w-[37%] bg-[#031833] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#e5b84a] md:px-7">
                    Working with ZAH
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([topic, inHouse, zah]) => (
                  <tr key={topic} className="border-b border-border last:border-0">
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-foreground md:px-7 md:py-5">
                      {topic}
                    </th>
                    <td className="px-5 py-4 align-top text-muted-foreground md:px-7 md:py-5">{inHouse}</td>
                    <td className="bg-[#031833]/[0.03] px-5 py-4 align-top text-foreground md:px-7 md:py-5">
                      <span className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#2f8a57]" aria-hidden="true" />
                        {zah}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </Section>

      {/* Results */}
      <section className="theme-navy relative overflow-hidden bg-[#031833] py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-dotted opacity-20 mask-fade-b" />
        <Container className="relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">Results from live engagements</p>
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-y-10 border-t border-white/15 pt-10 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={r.label} className={i % 2 === 1 ? "border-l border-white/15 pl-6 lg:pl-8" : i === 2 ? "pr-6 lg:border-l lg:border-white/15 lg:pl-8" : "pr-6 lg:pr-8"}>
                <dd className="font-serif text-5xl font-medium text-white md:text-6xl">
                  <AnimatedCounter value={r.value} suffix={r.suffix} duration={2} />
                </dd>
                <dt className="mt-3 max-w-[14rem] text-sm leading-snug text-white/65">{r.label}</dt>
              </div>
            ))}
          </dl>
          {clientTestimonials.slice(0, 1).map((t) => (
            <Reveal key={t.author} className="mt-16 md:mt-20">
              <figure className="max-w-4xl border-l-2 border-[#e5b84a] pl-6 md:pl-10">
                <blockquote className="text-pretty font-serif text-2xl font-normal leading-snug text-white md:text-[2rem] md:leading-[1.3]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-semibold text-white">{t.author}</span>
                  <span className="text-white/60"> - {t.role}</span>
                </figcaption>
              </figure>
              <Link
                href="/case-study"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-[6px] hover:decoration-[#e5b84a]"
              >
                Read the case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* GDPR and security */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="UK GDPR and security"
                title="Covered in writing, before you share a single file"
                description="Outsourcing to India is lawful under UK GDPR with the right contracts and safeguards. We provide them all - and the evidence behind our security."
              />
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button asChild>
                  <Link href="/gdpr">Our UK GDPR approach</Link>
                </Button>
                <Link
                  href="/security"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-primary"
                >
                  Security controls
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Stagger className="grid gap-x-10 sm:grid-cols-2">
              {[...gdprHeadlines, ...trustExtras].map((h) => (
                <StaggerItem key={h.title}>
                  <div className="flex gap-3 border-t border-border py-5">
                    <Check className="mt-1 size-4 shrink-0 text-[#2f8a57]" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section className="border-y border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Sectors we know"
              title="Experience across the clients UK practices serve"
              description="We already work on these sectors for UK firms, so we know the records, the VAT points and the questions to ask."
            />
            <Link
              href="/industries"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-primary"
            >
              Sector guides
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Stagger className="grid gap-x-10 sm:grid-cols-2">
            {industries.map(([name, detail]) => (
              <StaggerItem key={name}>
                <div className="border-t border-border py-5">
                  <h3 className="font-serif text-xl font-medium text-foreground">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Engagement models */}
      <Section>
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
      <Section className="border-y border-border bg-surface">
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

      {/* Inside ZAH */}
      <Section>
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
