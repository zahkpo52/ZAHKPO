import type { Metadata } from "next";

import { founders } from "@/content/team";
import { services } from "@/content/services";
import { DEDICATED, HOURLY, servicePrices } from "@/content/pricing";
import { siteConfig } from "./site";

/** Default branded share card (1200×630) used on every page. */
export const defaultOgImage = {
  url: "/og/zah-kpo-share.png",
  width: 1200,
  height: 630,
  alt: "ZAH KPO – accounting outsourcing for UK accountancy firms",
};

interface BuildMetaArgs {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
  /** Use the title as-is, without the "| ZAH KPO" template suffix. */
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
}

export function formatPath(path: string) {
  return path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${formatPath(path)}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  noindex,
  absoluteTitle,
  ogType = "website",
}: BuildMetaArgs): Metadata {
  const formattedPath = formatPath(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: formattedPath },
    openGraph: {
      type: ogType,
      url: formattedPath,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      locale: "en_GB",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [defaultOgImage.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const orgId = `${siteConfig.url}/#organization`;

function personId(name: string) {
  return `${siteConfig.url}/about/#${name.toLowerCase().replace(/[^a-z]+/g, "-")}`;
}

export function organizationSchema() {
  const { contact } = siteConfig;
  const uk = contact.ukOffice;
  const india = contact.khOffice;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${defaultOgImage.url}`,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    email: india.email,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    address: [
      {
        "@type": "PostalAddress",
        name: uk.label,
        streetAddress: uk.address[0],
        addressLocality: uk.address[1],
        postalCode: uk.address[3],
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        name: india.label,
        streetAddress: india.address[0],
        addressLocality: india.address[1],
        addressRegion: "Madhya Pradesh",
        postalCode: "451001",
        addressCountry: "IN",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: uk.phone,
        email: uk.email,
        areaServed: "GB",
        availableLanguage: ["en-GB"],
        description: "WhatsApp only",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: india.phone,
        email: india.email,
        availableLanguage: ["en"],
      },
    ],
    founder: founders.map((f) => ({ "@id": personId(f.name) })),
    foundingDate: String(siteConfig.founded),
    knowsAbout: [
      "Outsourced bookkeeping for UK accountancy firms",
      "Year-end accounts (FRS 102 and FRS 105)",
      "VAT returns and Making Tax Digital",
      "MTD for Income Tax",
      "Payroll and CIS returns",
      "Corporation tax and Self Assessment",
      "UK GDPR for outsourcing to India",
      "Xero, QuickBooks, Sage and FreeAgent",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outsourced accounting services for UK accountancy firms",
      itemListElement: services.map((s) => {
        const p = servicePrices[s.slug];
        return {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `${siteConfig.url}/services/${s.slug}/` },
          ...(p
            ? {
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: p.lo,
                  maxPrice: p.hi,
                  priceCurrency: "GBP",
                  description: `Indicative, ${p.unit}`,
                },
              }
            : {}),
        };
      }),
    },
    priceRange: `£${HOURLY.lo}-£${HOURLY.hi} per hour`,
    makesOffer: [
      {
        "@type": "Offer",
        name: "Outsourced accounting by the hour",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: HOURLY.lo,
          maxPrice: HOURLY.hi,
          priceCurrency: "GBP",
          unitText: "hour",
        },
        url: `${siteConfig.url}/pricing-calculator/`,
      },
      {
        "@type": "Offer",
        name: "Dedicated accountant for your practice",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: DEDICATED.lo,
          maxPrice: DEDICATED.hi,
          priceCurrency: "GBP",
          unitText: "month",
        },
        url: `${siteConfig.url}/how-we-work/`,
      },
      {
      "@type": "Offer",
      name: "Three free trial jobs",
      description:
        "UK accounting firms new to ZAH KPO get their first three jobs free - any service - before committing.",
      price: "0",
      priceCurrency: "GBP",
      eligibleCustomerType: "Business",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${siteConfig.url}/terms/#free-trial`,
      },
    ],
    sameAs: [siteConfig.companyLinkedIn, siteConfig.googleBusinessProfile].filter(Boolean),
  };
}

export function founderSchemas() {
  return founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(f.name),
    name: f.name,
    jobTitle: f.role,
    image: `${siteConfig.url}${f.image.src}`,
    worksFor: { "@id": orgId },
    knowsAbout: f.expertise,
    sameAs: [f.linkedin],
  }));
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: "en-GB",
    publisher: { "@id": orgId },
  };
}

export function serviceSchema({
  name,
  description,
  path,
  price,
}: {
  name: string;
  description: string;
  path: string;
  price?: { lo: number; hi: number; unit: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": orgId, "@type": "Organization", name: siteConfig.name, url: `${siteConfig.url}/` },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: { "@type": "BusinessAudience", audienceType: "UK accountancy firms" },
    url: absoluteUrl(path),
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: price.lo,
              maxPrice: price.hi,
              priceCurrency: "GBP",
              description: `Indicative, ${price.unit}. Exact quote after a short call; first three jobs free for new firms.`,
            },
            url: absoluteUrl("/pricing-calculator"),
          },
        }
      : {}),
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
      ...(it.href ? { item: absoluteUrl(it.href) } : {}),
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
    dateModified: date,
    inLanguage: "en-GB",
    url: absoluteUrl(`/blog/${slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
    image: `${siteConfig.url}${defaultOgImage.url}`,
    author: { "@id": orgId, "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@id": orgId,
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.logo}` },
    },
  };
}
