import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { BlogCard } from "@/components/marketing/blog-card";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogCategories, posts } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights",
  description:
    "Practical guidance on outsourcing, compliance, cloud and tax from the ZAH KPO team - written for UK accountancy firms and the businesses they serve.",
  path: "/blog",
  keywords: ["accounting blog", "outsourcing insights", "tax compliance articles"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Blog"
        title="Insights for modern accountancy firms"
        description="Practical, no-fluff guidance on outsourcing, compliance, cloud and tax - written by the people who do the work."
        crumbs={crumbs}
        image={{ src: "/images/laptop-analytics.jpg", mobileSrc: "/images/mobile/laptop-analytics-mobile.jpg" }}
      />

      <Section>
        <Container>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <Badge key={c} variant="surface">
                {c}
              </Badge>
            ))}
          </div>

          {featured ? (
            <Reveal className="mt-8">
              <BlogCard post={featured.meta} featured />
            </Reveal>
          ) : null}

          {rest.length ? (
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <StaggerItem key={p.meta.slug}>
                  <BlogCard post={p.meta} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : null}
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
