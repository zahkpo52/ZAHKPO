import type { Metadata } from "next";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqAccordion } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { faqCategories, faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about outsourcing your accounting to ZAH KPO - security, scope, pricing model, technology and more.",
  path: "/faq",
  keywords: ["accounting outsourcing FAQ", "is outsourcing safe", "outsourcing questions"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything firms usually want to know before outsourcing. Can't find what you're after? Get in touch - we're happy to talk it through."
        crumbs={crumbs}
        image={{ src: "/images/finance-desk.jpg", mobileSrc: "/images/mobile/finance-desk-mobile.jpg" }}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            {faqCategories.map((category) => {
              const items = faqs.filter((f) => f.category === category);
              if (!items.length) return null;
              return (
                <Reveal key={category}>
                  <SectionHeading align="left" title={category} as="h2" />
                  <FaqAccordion
                    idPrefix={category.toLowerCase().replace(/\s+/g, "-")}
                    items={items.map((f) => ({ question: f.question, answer: f.answer }))}
                    className="mt-4"
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection title="Still have a question?" primaryLabel="Ask the team" />
    </>
  );
}
