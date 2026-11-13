import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search/", "/thank-you/"],
      },
      {
        // Search and AI answer engines - explicitly welcome so ZAH KPO can be cited in AI answers
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Applebot",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/search/", "/thank-you/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
