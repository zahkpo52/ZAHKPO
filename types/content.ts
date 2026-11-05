import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "Core Finance & Accounting"
  | "Compliance"
  | "CFO & Advisory"
  | "Audit Support"
  | "Company Secretarial";

export interface Deliverable {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface QA {
  question: string;
  answer: string;
}

/** Shared shape for both service and specialty detail pages. */
export interface OfferingBase {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** short label used on cards / teasers */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  deliverables: Deliverable[];
  process?: ProcessStep[];
  benefits: Benefit[];
  faqs?: QA[];
  related?: string[];
}

export interface Service extends OfferingBase {
  category: ServiceCategory;
}

export interface Specialty extends OfferingBase {
  accent?: "primary" | "accent";
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  /** 1–5 star rating shown on review cards */
  rating?: number;
}

export interface Tool {
  name: string;
  /** brand logo under /public, SVG preferred */
  logo: string;
  /** intrinsic dimensions for next/image */
  width: number;
  height: number;
  /** show the name beside icon-only logos (e.g. Power BI) */
  showName?: boolean;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readingTime: number; // minutes
  related?: string[]; // service/specialty hrefs
}

export interface OpenRole {
  title: string;
  location: string;
  type: string;
  count: number;
}
