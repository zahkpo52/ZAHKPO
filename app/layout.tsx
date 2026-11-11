import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultOgImage, founderSchemas, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import WhatsAppIcon from "@/components/marketing/whatsApp-icon";
import { ConsentScripts } from "@/components/consent/consent-scripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Accounting Outsourcing for UK Accountancy Firms`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "accounting outsourcing",
    "accountancy firm outsourcing",
    "bookkeeping outsourcing",
    "payroll outsourcing",
    "tax outsourcing UK",
    "white label accounting",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Accounting Outsourcing for UK Accountancy Firms`,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Accounting Outsourcing for UK Accountancy Firms`,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  ...(siteConfig.verification.google || siteConfig.verification.bing
    ? {
        verification: {
          ...(siteConfig.verification.google ? { google: siteConfig.verification.google } : {}),
          ...(siteConfig.verification.bing
            ? { other: { "msvalidate.01": siteConfig.verification.bing } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#051a37",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} dark`}>
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema(), ...founderSchemas()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <WhatsAppIcon />
        <Footer />
        <ConsentScripts />
      </body>
    </html>
  );
}
