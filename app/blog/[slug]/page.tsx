import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { type RelatedItem } from "@/components/marketing/service-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, blogPostingSchema, breadcrumbSchema } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { getPost, posts } from "@/content/blog";
import { servicesBySlug } from "@/content/services";
// import { specialtiesBySlug } from "@/content/specialties";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
    keywords: [post.meta.category.toLowerCase(), "accounting", "outsourcing"],
  });
}

function resolveRelated(href: string): RelatedItem | null {
  const [, type, slug] = href.split("/");
  const offering =
    type === "services" ? servicesBySlug[slug] : undefined;
    //  type === "specialties" ? specialtiesBySlug[slug] :
  return offering ? { href, title: offering.title, summary: offering.summary, icon: offering.icon } : null;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, Body } = post;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: meta.title },
  ];
  const related = (meta.related ?? [])
    .map(resolveRelated)
    .filter((x): x is RelatedItem => x !== null);

  return (
    <article>
      <JsonLd
        data={[
          blogPostingSchema({
            title: meta.title,
            description: meta.description,
            slug: meta.slug,
            date: meta.date,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero eyebrow={meta.category} title={meta.title} crumbs={crumbs}>
        <p className="text-sm text-muted-foreground">
          {formatDate(meta.date)} · {meta.readingTime} min read
        </p>
      </PageHero>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Prose>
              <Body />
            </Prose>
          </div>

          {related.length ? (
            <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
              <Reveal>
                <SectionHeading align="left" eyebrow="Related services" title="How we can help" />
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <OfferingCard
                    key={r.href}
                    href={r.href}
                    title={r.title}
                    summary={r.summary}
                    icon={r.icon}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <CTASection />
    </article>
  );
}
