import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { services } from "@/content/services";

export const dynamic = "force-static";
// import { specialties } from "@/content/specialties";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

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
  ];

  const formatUrl = (path: string) => {
    const formatted = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
    return `${base}${formatted}`;
  };

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: formatUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const offeringEntries: MetadataRoute.Sitemap = [
    ...services.map((s) => `/services/${s.slug}`),
    // ...specialties.map((s) => `/specialties/${s.slug}`),
  ].map((path) => ({
    url: formatUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: formatUrl(`/blog/${p.meta.slug}`),
    lastModified: new Date(p.meta.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...offeringEntries, ...blogEntries];
}
