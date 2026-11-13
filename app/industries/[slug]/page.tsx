import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { industries, industriesBySlug } from "@/content/industries";
import { servicesBySlug } from "@/content/services";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesBySlug[slug];
  if (!ind) return {};
  return buildMetadata({
    title: ind.metaTitle,
    description: ind.metaDescription,
    path: `/industries/${slug}`,
    keywords: [`${ind.name.toLowerCase()} accounting outsourcing`, "outsourcing for accountants", "UK accountancy practices"],
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industriesBySlug[slug];
  if (!ind) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.name }];
  const services = ind.services.map((s) => servicesBySlug[s]).filter(Boolean);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(ind.faqs)]} />
      <PageHero eyebrow={ind.name} title={ind.heading} description={ind.intro} crumbs={crumbs}>
        <Button asChild size="lg">
          <Link href="/contact?offer=free-trial">Try 3 jobs free</Link>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="What we handle" title={`${ind.name}: the work we take on`} />
          </Reveal>
          <Stagger className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {ind.handle.map((h) => (
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
        </Container>
      </Section>

      <section className="theme-navy bg-[#031833] py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">In review</p>
            <h2 className="mt-4 font-serif text-[2rem] font-medium leading-tight text-white md:text-[2.5rem]">
              What our reviewers look for
            </h2>
            <p className="mt-4 text-white/65">
              The issues we see most often in this sector - checked on every file before it comes back to you.
            </p>
          </Reveal>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {ind.watch.map((w) => (
              <li key={w} className="flex items-center gap-4 py-4 text-white">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-[#e5b84a]">
                  <Search className="size-4" aria-hidden="true" />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Related services" title="Services these clients usually need" />
          </Reveal>
          <div className="mt-10 border-t border-border">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:bg-surface"
              >
                <span>
                  <span className="block font-serif text-xl font-medium text-foreground group-hover:text-primary">{s.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{s.summary}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/industries">
                All sectors
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion items={ind.faqs} idPrefix={ind.slug} />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
