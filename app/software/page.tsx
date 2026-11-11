import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { softwarePages } from "@/content/software";
import { tools } from "@/content/tools";

export const metadata: Metadata = buildMetadata({
  title: "Accounting Software We Work In",
  description:
    "ZAH works inside the software your clients already use - Xero, QuickBooks, Sage and FreeAgent, with Dext, Hubdoc and Power BI. Outsourcing for UK firms.",
  path: "/software",
  keywords: ["xero outsourcing", "quickbooks outsourcing", "sage bookkeeping outsourcing", "freeagent outsourcing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Software" }];

export default function SoftwareHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Software"
        title="We work in the software your clients already use"
        description="No new systems for your team or your clients. We log in to the same Xero, QuickBooks, Sage or FreeAgent files you do, under access you control."
        crumbs={crumbs}
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="left" eyebrow="Platforms" title="Choose your platform" />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {softwarePages.map((s) => {
              const tool = tools.find((t) => t.name.toLowerCase() === s.title.toLowerCase());
              return (
                <StaggerItem key={s.slug} className="h-full">
                  <Link href={`/software/${s.slug}`} className="group block h-full">
                    <Card interactive className="flex h-full flex-col p-7">
                      {tool ? (
                        <Image
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          width={tool.width}
                          height={tool.height}
                          className={
                            "w-auto " +
                            (tool.name === "Xero" ? "h-10 opacity-80 grayscale" : "h-7 opacity-80 brightness-0 invert")
                          }
                        />
                      ) : null}
                      <h2 className="mt-6 text-xl font-semibold text-white">{s.hero.heading}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <LogoCloud label="Also working with" />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
