import {
  Award,
  FileLock2,
  type LucideIcon,
  KeyRound,
  Leaf,
  ListChecks,
  Lock,
  ScrollText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCog,
  Users,
} from "lucide-react";

interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** ZAH KPO's guiding principle: "People First. Process Driven. Technology Enabled. Value Focused." */
export const aboutValues: IconItem[] = [
  { title: "People first", description: "Skilled accounting professionals who work as an extension of your team.", icon: Users },
  { title: "Process driven", description: "SOP-led workflows and multi-level quality control on every engagement.", icon: ListChecks },
  { title: "Technology enabled", description: "Xero, QuickBooks, Sage, Dext, Hubdoc and cloud-based collaboration.", icon: Sparkles },
  { title: "Value focused", description: "Reduce operational workload and improve practice efficiency.", icon: TrendingUp },
];

/** From the profile: "What differentiates us?" */
export const differentiators: IconItem[] = [
  { title: "Proactive approach", description: "We anticipate what your practice needs and move on it before it becomes a problem.", icon: Award },
  { title: "Quality & consistency", description: "Multi-level review on every deliverable keeps accuracy and standards high.", icon: ShieldCheck },
  { title: "SOP-driven approach", description: "Standardised, documented processes mean dependable, repeatable delivery.", icon: ListChecks },
  { title: "Helps grow client practice", description: "We handle the back office so you can focus on advice, relationships and growth.", icon: TrendingUp },
];

/** Our commitment to data security - straight from the company profile. */
export const securityFeatures: IconItem[] = [
  { title: "Confidentiality agreements", description: "Everyone signs a confidentiality agreement and a data protection undertaking before getting access.", icon: FileLock2 },
  { title: "Two-step login", description: "Named accounts and multi-factor authentication on our systems - no shared logins.", icon: KeyRound },
  { title: "Encrypted devices", description: "Company laptops only, with full-disk encryption, antivirus and USB storage blocked.", icon: Lock },
  { title: "Least-privilege access", description: "Access approved in writing, reviewed regularly and removed within 24 hours of anyone leaving.", icon: UserCog },
  { title: "UK GDPR contracts", description: "Article 28 DPA and the ICO's IDTA or UK Addendum for every client, with a transfer risk assessment.", icon: ShieldCheck },
  { title: "Documented framework", description: "Around 110 policies, procedures and registers, approved by both directors.", icon: ScrollText },
];

export const whoWeAre =
  "ZAH is a trusted outsourcing partner for UK accounting firms, delivering accurate, scalable and high-quality accounting support. Acting as an extension of our clients' teams, we combine skilled professionals, efficient processes and modern technology to improve turnaround times, maintain quality and support sustainable growth.";

export const vision =
  "To become the most trusted outsourcing partner for accounting firms by combining skilled professionals, structured processes, modern technology and AI-driven efficiencies - delivering exceptional value while creating a positive impact on businesses, people and the environment.";

export const mission =
  "To help accounting firms scale efficiently through accurate delivery, SOP-driven operations, continuous process improvement and responsible use of technology and AI. We are committed to reliable support, meaningful business insights, sustainable growth, and contributing to society through initiatives that promote environmental and community well-being.";

export const sustainability = {
  icon: Leaf,
  title: "A tree for every engagement",
  description:
    "For every new engagement, ZAH plants a tree - supporting environmental sustainability and responsible growth.",
};

export const timeline: { year: string; title: string; description: string }[] = [
  {
    year: "2025",
    title: "Founded",
    description:
      "Zah Professional Services Private Limited launches ZAH in Khargone, India - a technology-driven KPO built to give UK accounting firms a back office they can rely on.",
  },
  {
    year: "Built on experience",
    title: "Founder-led delivery",
    description:
      "Co-founders Husain Sangam (CA) and Mustafa Bag bring 12+ combined years in UK accounting, audit and compliance to every engagement.",
  },
  {
    year: "People · Process · Technology",
    title: "A structured model",
    description:
      "SOP-driven operations, multi-level quality checks and modern cloud, automation and AI tools combine to deliver accurate, scalable support.",
  },
  {
    year: "Growth beyond limits",
    title: "Responsible scaling",
    description:
      "From bookkeeping to CFO advisory - plus a commitment to GDPR-aligned security and planting a tree for every new engagement.",
  },
];
