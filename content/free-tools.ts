import { CalendarClock, Calculator, FileSpreadsheet, PoundSterling } from "lucide-react";

/** Free tools for UK practices - shown on the home page, /free-tools and in the menu. */
export const freeTools = [
  {
    icon: PoundSterling,
    title: "Pricing calculator",
    text: "Pick the work you would send and see an indicative monthly range - review included, first 3 jobs free.",
    href: "/pricing-calculator",
    cta: "Estimate my cost",
  },
  {
    icon: CalendarClock,
    title: "UK tax deadlines calendar",
    text: "Live countdown to the next UK deadlines, plus a year-end calculator for Companies House and CT600 dates.",
    href: "/uk-tax-deadlines",
    cta: "See the deadlines",
  },
  {
    icon: Calculator,
    title: "In-house vs outsourcing calculator",
    text: "What a new hire really costs your practice once NIC, pension, recruitment and downtime are added.",
    href: "/in-house-cost-calculator",
    cta: "Run the numbers",
  },
  {
    icon: FileSpreadsheet,
    title: "Sample working papers",
    text: "Download the VAT, bank reconciliation and year-end files we hand back - fictional client, real format.",
    href: "/sample-working-papers",
    cta: "Download samples",
  },
];
