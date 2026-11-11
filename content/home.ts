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
  { question: "Is our clients' data safe with you?", answer: "Yes. Every team member is bound by NDAs and confidentiality agreements, access to client data is controlled and role-based, devices are password-protected, and we follow documented, GDPR-aligned procedures. Wherever possible we work inside your own systems." },
  { question: "Who checks the work before it reaches us?", answer: "Every deliverable is prepared by one accountant and checked by an independent reviewer, with founder review on every engagement, so you receive reviewed work rather than a first draft." },
  { question: "Which accounting software do you work in?", answer: "Xero, QuickBooks, Sage and FreeAgent, with Dext and Hubdoc for receipts and Power BI for reporting. We work in whatever your clients already use." },
  { question: "How do you keep track of jobs and deadlines?", answer: "Every job runs through ZAH Nexus, our in-house workflow platform, which tracks each job's status, service checklists and deadlines such as VAT quarters, year-ends and 31 January." },
  { question: "How is pricing structured?", answer: "Flexibly. Firms either pay as they use, so the cost follows the volume of work, or have a dedicated team for steady ongoing work. We agree a clear quote after the discovery call." },
  { question: "How quickly can we get started?", answer: "As soon as we have agreed the scope and set up secure access to your systems, we can begin with a pilot batch and scale up from there." },
];
