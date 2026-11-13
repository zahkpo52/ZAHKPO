export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export const faqs: Faq[] = [
  {
    category: "Getting started",
    question: "What does ZAH actually do?",
    answer:
      "We're a technology-driven KPO and the outsourced back office for UK accounting firms. We handle bookkeeping, year-end accounts, management accounts, VAT, payroll, CIS, corporation tax, audit support, CFO advisory and company secretarial work - so your team can focus on advice, relationships and growth.",
  },
  {
    category: "Getting started",
    question: "Why should a firm outsource its accounting work?",
    answer:
      "Outsourcing cuts cost and saves time while giving you qualified specialists on demand. You add capacity and improve accuracy and compliance without the expense and commitment of building an in-house team.",
  },
  {
    category: "Getting started",
    question: "Who do you work with?",
    answer:
      "We specialise in supporting UK accounting firms - acting as an extension of their team and working remotely through secure, cloud-based digital systems to UK standards.",
  },
  {
    category: "Security",
    question: "Is it safe to share our financial data with you?",
    answer:
      "Yes. Security is built into how we work: all team members are bound by strict NDAs and confidentiality agreements, devices and systems are password protected with credentials rotated regularly, files are shared and backed up securely in the cloud, and access to client data is controlled. We follow GDPR-aligned practices with documented SOPs for data handling.",
  },
  {
    category: "Services",
    question: "What are management accounts and why do they matter?",
    answer:
      "Management accounts are regular financial reports - usually monthly or quarterly - that track performance, monitor cash flow and surface the insight a business needs to plan and make confident decisions.",
  },
  {
    category: "Services",
    question: "Why are company secretarial services important?",
    answer:
      "They keep a company legally compliant: accurate statutory records, on-time filings and sound corporate governance that prevent penalties and protect the business's standing.",
  },
  {
    category: "AI & technology",
    question: "How does AI improve accounting?",
    answer:
      "AI automates repetitive tasks like data entry and reconciliation, processes large volumes quickly and surfaces real-time insight. Qualified accountants review the output, so you get speed and accuracy together.",
  },
  {
    category: "AI & technology",
    question: "Is AI accounting suitable for small businesses?",
    answer:
      "Absolutely. Automation helps smaller businesses manage their finances efficiently, reduce cost and gain clear financial visibility without needing a large in-house accounting team.",
  },
  {
    category: "AI & technology",
    question: "What's the future of AI in accounting?",
    answer:
      "Expect more automation of routine work, richer financial analysis and faster insight. The role of the accountant shifts further toward advice, interpretation and strategy.",
  },
  {
    category: "AI & technology",
    question: "Can AI help with financial forecasting?",
    answer:
      "Yes. AI analyses historical data to model forecasts that support budgeting, trend prediction and informed financial planning - always with human review of the assumptions.",
  },
  {
    category: "Marketing",
    question: "Why would an accountancy firm need digital marketing?",
    answer:
      "Digital marketing builds brand awareness, reaches the right clients online and generates qualified leads through SEO, paid, social and content - turning visibility into measurable growth.",
  },
  {
    category: "Marketing",
    question: "Why combine accounting and marketing support?",
    answer:
      "Together they fuel growth: organised, accurate finances on one side and a steady pipeline of new clients and revenue on the other - both managed by one partner.",
  },
  {
    category: "Pricing",
    question: "How much does outsourcing to ZAH KPO cost?",
    answer:
      "As a guide, £10 to £16 an hour, or a fixed price per job - for example £25 to £60 for a VAT return, £150 to £350 for small-company year-end accounts with the CT600, and £50 to £120 for a Self Assessment return. A dedicated full-time accountant is £1,100 to £1,800 a month. Use the pricing calculator on our website for your mix of work.",
  },
  {
    category: "Pricing",
    question: "Can we try ZAH KPO before paying?",
    answer:
      "Yes. UK accounting firms new to ZAH KPO get their first three jobs free, on any service, so you can judge the quality and turnaround first.",
  },
  {
    category: "Pricing",
    question: "Can we see a sample of your working papers?",
    answer:
      "Yes. Our sample VAT return working paper, bank reconciliation and year-end lead schedule can be downloaded free from the sample working papers page - fictional client, real format.",
  },
  {
    category: "Pricing",
    question: "Is it cheaper to outsource than to hire?",
    answer:
      "Usually, for seasonal or variable work. A new hire costs 30 to 40 per cent more than salary once employer NIC, pension, recruitment and equipment are added, and you pay it all year. Our in-house vs outsourcing calculator shows the figures for your practice.",
  },
];

export const faqCategories = [
  "Getting started",
  "Pricing",
  "Security",
  "Services",
  "AI & technology",
  "Marketing",
] as const;
