import type { Metadata } from "next";

import { siteConfig } from "./site";

interface BuildMetaArgs {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  noindex,
}: BuildMetaArgs): Metadata {
  const formattedPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: formattedPath },
    openGraph: {
      type: "website",
      url: formattedPath,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title, description },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export function organizationSchema() {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: contact.khOffice.email,
    telephone: contact.khOffice.phone,
    foundingDate: String(siteConfig.founded),
    legalName: siteConfig.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF 178, New Radhavallabh Market",
      addressLocality: "Khargone",
      addressRegion: "Madhya Pradesh",
      postalCode: "451001",
      addressCountry: "IN",
    },
    areaServed: ["GB"],
    sameAs: siteConfig.social.map((s) => s.url),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: ["GB"],
    url: `${siteConfig.url}${path}`,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${siteConfig.url}${it.href}` } : {}),
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    url: `${siteConfig.url}/blog/${slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}
