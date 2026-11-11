import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail, type RelatedItem } from "@/components/marketing/service-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { servicesBySlug } from "@/content/services";
import { getSoftware, softwarePages } from "@/content/software";
import { posts } from "@/content/blog";

export function generateStaticParams() {
  return softwarePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSoftware(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/software/${slug}`,
    keywords: [`${page.title.toLowerCase()} bookkeeping outsourcing`, `outsourced ${page.title.toLowerCase()} bookkeeping`, "UK accountancy firms"],
  });
}

export default async function SoftwarePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSoftware(slug);
  if (!page) notFound();

  const related: RelatedItem[] = (page.related ?? [])
    .map((rs) => {
      const r = servicesBySlug[rs];
      return r ? { href: `/services/${r.slug}`, title: r.title, summary: r.summary, icon: r.icon } : null;
    })
    .filter((x): x is RelatedItem => x !== null);

  const reading = posts
    .filter((p) => (page.related ?? []).some((rs) => p.meta.related?.includes(`/services/${rs}`)))
    .slice(0, 3)
    .map((p) => ({ href: `/blog/${p.meta.slug}`, title: p.meta.title, description: p.meta.description }));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Software", href: "/software" },
    { label: page.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: page.metaTitle, description: page.metaDescription, path: `/software/${slug}` }),
          breadcrumbSchema(crumbs),
          ...(page.faqs?.length ? [faqSchema(page.faqs)] : []),
        ]}
      />
      <ServiceDetail offering={page} crumbs={crumbs} related={related} reading={reading} />
    </>
  );
}
