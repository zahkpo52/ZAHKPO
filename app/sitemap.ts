import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { services } from "@/content/services";
import { softwarePages } from "@/content/software";
import { posts } from "@/content/blog";
import { lastModifiedFor } from "@/content/page-dates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/why-zah-kpo",
    "/blog",
    "/faq",
    "/careers",
    "/contact",
    "/privacy",
    "/software",
    "/how-we-work",
    "/security",
    "/nexus",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: lastModifiedFor(path),
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => {
    const path = `/services/${s.slug}`;
    return {
      url: absoluteUrl(path),
      lastModified: lastModifiedFor(path),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.meta.slug}`),
    lastModified: p.meta.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const softwareEntries: MetadataRoute.Sitemap = softwarePages.map((s) => {
    const path = `/software/${s.slug}`;
    return {
      url: absoluteUrl(path),
      lastModified: lastModifiedFor(path),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticEntries, ...serviceEntries, ...softwareEntries, ...blogEntries];
}
