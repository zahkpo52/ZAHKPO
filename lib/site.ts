export const siteConfig = {
  name: "ZAH KPO",
  shortName: "ZAH KPO",
  legalName: "Zah Professional Services Private Limited",
  // Primary host is www.zahkpo.com. Canonicals, sitemap, robots, Open Graph and
  // schema all derive from this value; any trailing slash is stripped.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zahkpo.com").replace(/\/+$/, ""),
  logo: "/logo-mark.png",
  founded: 2025,
  tagline: "Growth Beyond Limit",
  description:
    "ZAH KPO is the outsourcing partner for UK accountancy firms: bookkeeping, year-end accounts, VAT, payroll, tax and audit support, reviewed and on time.",
  contact: {
    phoneAlt: "+91 79999 83500",
    phoneAltHref: "+917999983500",
    careersEmail: "info@zahkpo.com",
    ukOffice: {
      label: "UK Correspondence Address",
      whatsappOnly: true,
      phone: "+44 784 842 6766",
      email: "info@zahkpo.com",
      phoneHref: "+447848426766",
      address: [
        "5 Ruislip Road",
        "Greenford",
        "England",
        "UB6 9QD",
      ],
    },
    khOffice: {
      label: "India Delivery Centre",
      phone: "+91 88899 84419",
      email: "info@zahkpo.com",
      phoneHref: "+918889984419",
      address: [
        "GF 178, New Radhavallabh Market",
        "Khargone",
        "Madhya Pradesh 451001",
        "India",
      ],
    },
    deliveryOffices: [] as { label: string; lines: string[] }[],
  },
  social: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/112570412/",
    },
  ] as { platform: "LinkedIn" | "Facebook" | "Instagram" | "X"; url: string }[],
  // Company LinkedIn page URL, used
  // as the Organization's sameAs in schema (personal profiles go on each founder).
  companyLinkedIn:
    process.env.NEXT_PUBLIC_COMPANY_LINKEDIN ??
    "https://www.linkedin.com/company/112570412/",
  markets: ["United Kingdom"],
  // Search engine ownership tokens (content="..." value only). Paste the token
  // from Google Search Console / Bing Webmaster Tools here, or set the env vars.
  // Not needed if the site is verified by DNS (recommended: Cloudflare TXT record).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
