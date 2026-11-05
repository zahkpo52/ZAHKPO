import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail, type RelatedItem } from "@/components/marketing/service-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { getService, services, servicesBySlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: [service.title.toLowerCase(), "outsourcing", "UK accountancy firms", "ZAH KPO"],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related: RelatedItem[] = (service.related ?? [])
    .map((rs) => {
      const r = servicesBySlug[rs];
      return r
        ? { href: `/services/${r.slug}`, title: r.title, summary: r.summary, icon: r.icon }
        : null;
    })
    .filter((x): x is RelatedItem => x !== null);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${slug}`,
          }),
          breadcrumbSchema(crumbs),
          ...(service.faqs?.length ? [faqSchema(service.faqs)] : []),
        ]}
      />
      <ServiceDetail offering={service} crumbs={crumbs} related={related} />
    </>
  );
}
