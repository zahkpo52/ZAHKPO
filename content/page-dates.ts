/**
 * Last meaningful content change for each indexable page (YYYY-MM-DD).
 * Used for <lastmod> in sitemap.xml - update the date when a page's
 * content changes, so search engines get an honest freshness signal.
 * Blog posts use their own `date` (or `updated`) from the post meta.
 */
export const SITE_CONTENT_DATE = "2026-11-13";

export const pageDates: Record<string, string> = {
  "/": SITE_CONTENT_DATE,
  "/about": SITE_CONTENT_DATE,
  "/services": SITE_CONTENT_DATE,
  "/why-zah-kpo": SITE_CONTENT_DATE,
  "/blog": SITE_CONTENT_DATE,
  "/faq": SITE_CONTENT_DATE,
  "/careers": SITE_CONTENT_DATE,
  "/contact": SITE_CONTENT_DATE,
  "/privacy": "2026-11-13",
};

export function lastModifiedFor(path: string): string {
  return pageDates[path] ?? SITE_CONTENT_DATE;
}
