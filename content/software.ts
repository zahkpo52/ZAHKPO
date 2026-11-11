import { CheckCircle2, Clock, Cloud, Gauge, Lock, ShieldCheck, TrendingUp, UserCheck } from "lucide-react";

import type { OfferingBase } from "@/types/content";

/**
 * Software pages - for firms searching "<software> bookkeeping outsourcing".
 * Rendered with the same layout as service pages (components/marketing/service-detail).
 */
export const softwarePages: OfferingBase[] = [
  {
    slug: "xero",
    title: "Xero",
    icon: Cloud,
    summary: "Bookkeeping, VAT and month-end work done directly in your clients' Xero files.",
    metaTitle: "Xero Bookkeeping Outsourcing for UK Firms",
    metaDescription:
      "Outsourced Xero bookkeeping for UK accountancy firms: reconciliations, bills, MTD VAT returns and month-end, reviewed before it reaches you.",
    hero: {
      eyebrow: "Xero outsourcing",
      heading: "Outsourced Xero bookkeeping for UK accountancy firms",
      subheading:
        "We work directly in your clients' Xero organisations - reconciling, coding, preparing VAT and month-end - so your team only reviews.",
    },
    deliverables: [
      { title: "Bank reconciliation", description: "Bank feeds reconciled with rules kept tidy and suspense cleared." },
      { title: "Bills and receipts", description: "Purchase bills captured from Dext or Hubdoc, coded and matched." },
      { title: "Sales and debtors", description: "Invoices and receipts matched, with aged debtors kept current." },
      { title: "MTD VAT returns", description: "VAT returns prepared in Xero for your review before submission." },
      { title: "Month-end and reports", description: "Accruals, prepayments and management reports from clean data." },
      { title: "Year-end handover", description: "Reconciled balances and schedules ready for year-end accounts." },
    ],
    process: [
      { title: "Access", description: "You invite us as a user in each client's Xero organisation." },
      { title: "Agree the routine", description: "We confirm coding rules, frequency and your review points." },
      { title: "Process and review", description: "Work is prepared, then checked by an independent reviewer." },
      { title: "Hand back", description: "You receive a short summary and one consolidated query list." },
    ],
    benefits: [
      { title: "Nothing new to learn", description: "We work in Xero exactly as your team does.", icon: CheckCircle2 },
      { title: "Controlled access", description: "Named user log-ins you can remove at any time.", icon: Lock },
      { title: "Flexible capacity", description: "Scale up for VAT quarters and year-end peaks.", icon: Gauge },
      { title: "More advisory time", description: "Your team reviews instead of keying data.", icon: TrendingUp },
    ],
    faqs: [
      { question: "How do we give you access to Xero?", answer: "You invite our team member as a user in each client's Xero organisation with the role you choose. Access stays under your control and can be removed at any time." },
      { question: "Do you use Dext or Hubdoc with Xero?", answer: "Yes. We work with Dext and Hubdoc to capture bills and receipts and publish them into Xero for coding and matching." },
      { question: "Can you file VAT returns from Xero?", answer: "We prepare the VAT return in Xero and flag anything that needs your judgement. Submission is made by your firm, or by us on your instruction." },
    ],
    related: ["bookkeeping", "vat-returns", "management-accounts"],
  },
  {
    slug: "quickbooks",
    title: "QuickBooks",
    icon: Cloud,
    summary: "Reconciliations, coding, VAT and reporting inside QuickBooks Online.",
    metaTitle: "QuickBooks Outsourcing for UK Accountants",
    metaDescription:
      "Outsourced QuickBooks Online bookkeeping for UK accountancy firms: bank rules, reconciliations, MTD VAT and month-end reports, reviewed every time.",
    hero: {
      eyebrow: "QuickBooks outsourcing",
      heading: "Outsourced QuickBooks bookkeeping for UK firms",
      subheading:
        "From bank rules to MTD VAT returns, we keep your clients' QuickBooks Online files clean and current - ready for your review.",
    },
    deliverables: [
      { title: "Bank feeds and rules", description: "Transactions categorised and reconciled to the statement." },
      { title: "Supplier bills", description: "Bills captured, coded and matched to payments." },
      { title: "Customer invoices", description: "Receipts matched to invoices so debtors are accurate." },
      { title: "Card payouts", description: "Stripe, SumUp and PayPal payouts matched to invoices, with fees posted." },
      { title: "MTD VAT returns", description: "VAT returns prepared in QuickBooks for your review." },
      { title: "Management reports", description: "Profit and loss, balance sheet and KPIs each month." },
    ],
    process: [
      { title: "Access", description: "You add us through QuickBooks Online Accountant or as a user." },
      { title: "Agree the routine", description: "We confirm the chart of accounts, rules and frequency." },
      { title: "Process and review", description: "Every file is prepared, then independently reviewed." },
      { title: "Hand back", description: "A short summary and one query list for anything unclear." },
    ],
    benefits: [
      { title: "Clean, reconciled files", description: "No growing pile of uncategorised transactions.", icon: CheckCircle2 },
      { title: "Controlled access", description: "Access sits under your QuickBooks account.", icon: Lock },
      { title: "On-time VAT", description: "Quarters worked back from the deadline.", icon: Clock },
      { title: "Scales with you", description: "Add clients without adding headcount.", icon: Gauge },
    ],
    faqs: [
      { question: "How do we give you access to QuickBooks?", answer: "Through your QuickBooks Online Accountant account or by inviting us as a user on each client file. You stay in control of who has access." },
      { question: "How do you handle Stripe, SumUp and PayPal payouts?", answer: "We check open invoices first. Where a payout pays an existing invoice, we receive it against the invoice and post the fee to bank charges, so sales and VAT are not counted twice." },
      { question: "Do you work in QuickBooks Desktop?", answer: "Our team works mainly in QuickBooks Online. Talk to us if some of your clients are still on desktop software." },
    ],
    related: ["bookkeeping", "vat-returns", "payroll"],
  },
  {
    slug: "sage",
    title: "Sage",
    icon: Cloud,
    summary: "Bookkeeping and VAT in Sage Accounting and Sage 50.",
    metaTitle: "Sage Bookkeeping Outsourcing for UK Firms",
    metaDescription:
      "Outsourced Sage bookkeeping for UK accountancy firms: reconciliations, VAT returns and month-end in Sage Accounting and Sage 50, reviewed before delivery.",
    hero: {
      eyebrow: "Sage outsourcing",
      heading: "Outsourced Sage bookkeeping for UK accountancy firms",
      subheading:
        "We keep Sage ledgers reconciled and VAT-ready for your clients - in Sage Accounting online, or Sage 50 through your remote access.",
    },
    deliverables: [
      { title: "Bank reconciliation", description: "Every bank and card account reconciled to statements." },
      { title: "Purchase and sales ledgers", description: "Invoices posted and allocated so balances are right." },
      { title: "VAT returns", description: "MTD VAT returns prepared from Sage for your review." },
      { title: "Nominal ledger", description: "Journals, accruals and corrections documented clearly." },
      { title: "Management reports", description: "Monthly reporting packs from reconciled data." },
      { title: "Year-end schedules", description: "Balances supported and ready for year-end accounts." },
    ],
    process: [
      { title: "Access", description: "A user on Sage Accounting, or secure remote access for Sage 50." },
      { title: "Agree the routine", description: "We confirm coding, frequency and review points." },
      { title: "Process and review", description: "Prepared by one accountant, checked by another." },
      { title: "Hand back", description: "A summary and a single consolidated query list." },
    ],
    benefits: [
      { title: "Works with your set-up", description: "Online or desktop, we fit around how clients use Sage.", icon: CheckCircle2 },
      { title: "Secure access", description: "Named log-ins and controlled remote access.", icon: ShieldCheck },
      { title: "Reliable deadlines", description: "VAT and month-end delivered to a set timetable.", icon: Clock },
      { title: "A dedicated contact", description: "One person who knows your clients' files.", icon: UserCheck },
    ],
    faqs: [
      { question: "Do you work in Sage 50 desktop?", answer: "Yes, through secure remote access that you set up, such as a remote desktop or hosted Sage environment, so data stays on your systems." },
      { question: "Can you prepare MTD VAT returns in Sage?", answer: "Yes. We prepare the return from the ledger and flag items that need your judgement before it is submitted." },
      { question: "Can you move clients from Sage to a cloud system?", answer: "We can help tidy up and reconcile the Sage data first, which makes any later move to Xero or QuickBooks far easier." },
    ],
    related: ["bookkeeping", "vat-returns", "year-end-accounts"],
  },
  {
    slug: "freeagent",
    title: "FreeAgent",
    icon: Cloud,
    summary: "Bookkeeping, VAT and Self Assessment support for FreeAgent clients.",
    metaTitle: "FreeAgent Bookkeeping Outsourcing UK",
    metaDescription:
      "Outsourced FreeAgent bookkeeping for UK accountancy firms: bank explanations, VAT, Self Assessment and MTD for Income Tax support for sole traders.",
    hero: {
      eyebrow: "FreeAgent outsourcing",
      heading: "Outsourced FreeAgent bookkeeping for UK firms",
      subheading:
        "Ideal for sole traders, contractors and small companies - we keep FreeAgent up to date so VAT, Self Assessment and MTD updates are ready for review.",
    },
    deliverables: [
      { title: "Bank explanations", description: "Every transaction explained and reconciled." },
      { title: "Bills and expenses", description: "Receipts and mileage recorded and categorised." },
      { title: "Invoices and receipts", description: "Sales matched so balances and VAT are right." },
      { title: "VAT returns", description: "MTD VAT returns prepared for your review." },
      { title: "Self Assessment support", description: "Records ready for returns and MTD for Income Tax updates." },
      { title: "Year-end support", description: "Company year-end data prepared for accounts." },
    ],
    process: [
      { title: "Access", description: "You give us access to client accounts through FreeAgent." },
      { title: "Agree the routine", description: "We set the frequency and the categories you prefer." },
      { title: "Process and review", description: "Prepared, then checked by an independent reviewer." },
      { title: "Hand back", description: "A short summary and one consolidated query list." },
    ],
    benefits: [
      { title: "MTD-ready records", description: "Digital records kept current for quarterly updates.", icon: CheckCircle2 },
      { title: "Controlled access", description: "Access managed through your FreeAgent practice account.", icon: Lock },
      { title: "Handles volume", description: "Many small clients, one consistent standard.", icon: Gauge },
      { title: "Fewer January peaks", description: "Records ready long before the deadline.", icon: Clock },
    ],
    faqs: [
      { question: "Is FreeAgent suitable for MTD for Income Tax?", answer: "FreeAgent supports Making Tax Digital for Income Tax. We keep clients' records up to date so quarterly updates can be prepared for your review." },
      { question: "Who is FreeAgent best suited to?", answer: "Sole traders, contractors, landlords and small limited companies - the type of clients where high volumes of simple records need a consistent routine." },
      { question: "How do we give you access?", answer: "Through your FreeAgent practice account, so you control which client accounts we can see and can remove access at any time." },
    ],
    related: ["bookkeeping", "personal-tax", "vat-returns"],
  },
];

export const softwareBySlug = Object.fromEntries(softwarePages.map((s) => [s.slug, s]));

export function getSoftware(slug: string): OfferingBase | undefined {
  return softwareBySlug[slug];
}
