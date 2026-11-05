import type { Stat } from "@/types/content";

/** "Challenges We Understand. Solutions We Deliver." - from the company profile. */
export const challenges: { challenge: string; solution: string }[] = [
  { challenge: "Talent shortages", solution: "Skilled accounting team" },
  { challenge: "Peak-season workload", solution: "Flexible staff support" },
  { challenge: "High costs", solution: "Cost-effective outsourcing" },
  { challenge: "Slow turnaround", solution: "Faster, SOP-driven delivery" },
  { challenge: "Partner overload", solution: "We handle the back-office work" },
  { challenge: "Quality risks", solution: "Multi-level checks" },
  { challenge: "Limited scalability", solution: "A scalable delivery model" },
  { challenge: "Tech gaps", solution: "Modern tools expertise" },
  { challenge: "Need a reliable partner", solution: "Transparent, accountable support" },
];

/** Case study: helping a UK firm clear its backlog. */
export const caseStudy = {
  client:
    "A UK-based accounting firm with 2 partners and 8 staff, serving SME clients on Xero, QuickBooks and Dext.",
  challenges: [
    "A large backlog of bookkeeping and VAT returns",
    "Delays in monthly management accounts",
    "Staff shortages during peak periods, increasing the owners' burden",
    "Rising operational costs",
    "No capacity to onboard new clients",
  ],
  approach: [
    "Deployed a dedicated offshore bookkeeping team",
    "Standardised processes using SOPs",
    "Managed VAT returns and monthly closing",
    "Handled data extraction with a multi-level review process",
    "Maintained regular coordination with the UK team",
  ],
  results: [
    { value: 1000, suffix: "+", label: "Hours Delivered" },
    { value: 99, suffix: "%", label: "On-Time Delivery" },
    { value: 2, label: "Countries Served" },
    { value: 70, prefix: "Up to ", suffix: "%", label: "Cost Reduction" },
  ] as Stat[],
};
