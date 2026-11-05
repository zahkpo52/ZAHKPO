import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { SearchClient, type SearchDoc } from "@/components/search/search-client";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
// import { specialties } from "@/content/specialties";
import { posts } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Search",
  description: "Search the ZAH KPO website for services, industries and articles.",
  path: "/search",
  noindex: true,
});

const index: SearchDoc[] = [
  ...services.map((s) => ({
    title: s.title,
    description: s.summary,
    href: `/services/${s.slug}`,
    type: "Service",
  })),
  // ...specialties.map((s) => ({
  //   title: s.title,
  //   description: s.summary,
  //   href: `/specialties/${s.slug}`,
  //   type: "Industry",
  // })),
  ...posts.map((p) => ({
    title: p.meta.title,
    description: p.meta.description,
    href: `/blog/${p.meta.slug}`,
    type: "Article",
  })),
  { title: "About", description: "Our story, values and security.", href: "/about", type: "Page" },
  { title: "Contact", description: "Get in touch with the team.", href: "/contact", type: "Page" },
  { title: "FAQ", description: "Common questions about outsourcing.", href: "/faq", type: "Page" },
  { title: "Careers", description: "Careers and culture at ZAH.", href: "/careers", type: "Page" },
];

const crumbs = [{ label: "Home", href: "/" }, { label: "Search" }];

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you need"
        description="Search across our services, industries and articles."
        crumbs={crumbs}
        image={{ src: "/images/team-meeting-bright.jpg", mobileSrc: "/images/mobile/team-meeting-bright-mobile.jpg" }}
      />
      <Section>
        <Container>
          <SearchClient docs={index} initialQuery="" />
        </Container>
      </Section>
    </>
  );
}
