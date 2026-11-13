import { CalendarClock, Calculator, FileSpreadsheet, Hourglass } from "lucide-react";

/** Free tools for UK practices - shown on the home page, /free-tools and in the menu. */
export const freeTools = [
  {
    icon: CalendarClock,
    title: "UK tax deadlines calendar",
    text: "The next Self Assessment, MTD, payroll, CIS and VAT deadlines, counted down live.",
    href: "/uk-tax-deadlines",
    cta: "See the deadlines",
  },
  {
    icon: Hourglass,
    title: "Year-end deadline calculator",
    text: "Enter a company year-end and get the Companies House, CT600 and corporation tax payment dates.",
    href: "/uk-tax-deadlines#calculator",
    cta: "Work out the dates",
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
