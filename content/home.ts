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
    { value: 5000, suffix: "+", label: "Hours Delivered" },
    { value: 99, suffix: "%", label: "On-Time Delivery" },
    { value: 2, label: "Countries Served" },
    { value: 70, prefix: "Up to ", suffix: "%", label: "Cost Reduction" },
  ] as Stat[],
};

/** Home page FAQ (also output as FAQPage structured data). */
export const homeFaqs: { question: string; answer: string }[] = [
  { question: "How does outsourcing to ZAH work?", answer: "We start with a discovery call to understand your practice, then agree the scope and begin with a small pilot batch. Our team works inside your software and templates, and every job is reviewed before it comes back to you." },
  { question: "Will we lose control of the work or our clients?", answer: "No. You keep the client relationship, the final review and the sign-off. We work to your instructions and your house style, so the output goes out under your name." },
  { question: "Is our clients' data safe with you?", answer: "Yes. We sign an Article 28 data processing agreement and the ICO's International Data Transfer Agreement (or UK Addendum) with every firm, backed by a UK-to-India transfer risk assessment. Everyone signs confidentiality agreements, uses MFA and encrypted company laptops with USB storage blocked, and works inside your own systems wherever possible." },
  { question: "Who checks the work before it reaches us?", answer: "Every deliverable is prepared by one accountant and checked by an independent reviewer, with founder review on every engagement, so you receive reviewed work rather than a first draft." },
  { question: "Which accounting software do you work in?", answer: "Xero, QuickBooks, Sage and FreeAgent, with Dext and Hubdoc for receipts and Power BI for reporting. We work in whatever your clients already use." },
  { question: "How do you keep track of jobs and deadlines?", answer: "Every job runs through ZAH Nexus, our in-house workflow platform. It tracks each job's status, service checklists and deadlines such as VAT quarters, year-ends and 31 January, and your UK team can log in to review the work and raise review points." },
  { question: "How is pricing structured?", answer: "Flexibly. You can pay per hour, pay a fixed price per job, or have a dedicated team for steady ongoing work. Many practices start with a few hours or a small batch and scale up. We do not publish a price list - tell us about your work and we send a clear quote, usually after a short discovery call." },
  { question: "Do you offer a free trial?", answer: "Yes. UK accounting firms new to ZAH KPO get their first three jobs free - any service, such as bookkeeping, VAT, year-end, payroll or tax - so you can judge the quality and turnaround before you pay anything." },
  { question: "How quickly can we get started?", answer: "As soon as we have agreed the scope and set up secure access to your systems, we can begin with a pilot batch and scale up from there." },
];
