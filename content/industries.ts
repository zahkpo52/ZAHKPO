export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  handle: { title: string; text: string }[];
  watch: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

/** Sector pages. Facts kept general enough to stay correct as rates and thresholds change. */
export const industries: Industry[] = [
  {
    slug: "construction-cis",
    name: "Construction and CIS",
    metaTitle: "Outsourced Accounting for Construction and CIS Clients",
    metaDescription:
      "CIS returns, subcontractor verification, deduction statements and the VAT domestic reverse charge - outsourced support for UK practices with construction clients.",
    heading: "Construction and CIS work, handled by people who know the scheme",
    intro:
      "Construction clients bring monthly CIS returns, subcontractor checks and the VAT domestic reverse charge on top of the usual books. We prepare it all in your software, ready for you to review and file.",
    handle: [
      { title: "Monthly CIS returns", text: "Prepared from the payment records and ready before the 19th, including nil-return checks." },
      { title: "Subcontractor verification", text: "Verification records kept up to date so the right deduction rate is applied." },
      { title: "Deduction statements", text: "Statements for subcontractors prepared alongside each monthly return." },
      { title: "Domestic reverse charge", text: "Sales and purchase invoices checked and coded correctly for reverse-charge VAT." },
      { title: "CIS suffered", text: "Deductions suffered by limited-company subcontractors tracked for offset against PAYE." },
      { title: "Self Assessment for subcontractors", text: "CIS income and deductions reconciled for sole-trader tax returns." },
    ],
    watch: [
      "Payments to unverified subcontractors taken at the wrong rate",
      "Reverse-charge invoices coded as standard-rated VAT",
      "Materials not separated from labour on subcontractor invoices",
      "CIS deductions suffered missing from the tax return",
    ],
    services: ["cis-returns", "vat-returns", "bookkeeping", "personal-tax"],
    faqs: [
      { question: "Do you file the CIS return with HMRC?", answer: "We prepare it in your software and you review and submit it, unless you ask us to handle submission under your agent credentials." },
      { question: "Can you handle the VAT domestic reverse charge?", answer: "Yes. We check which supplies fall within it and make sure invoices and VAT codes are set up correctly." },
      { question: "Do you work with CIS clients on Xero and QuickBooks?", answer: "Yes - and on Sage and FreeAgent. We work in whichever software your client already uses." },
    ],
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants and takeaways",
    metaTitle: "Outsourced Bookkeeping for Restaurants, Cafés and Takeaways",
    metaDescription:
      "Daily takings, card and delivery-app payouts, tips and VAT for hospitality clients - outsourced bookkeeping and VAT support for UK accountancy practices.",
    heading: "Restaurant and takeaway books that actually reconcile",
    intro:
      "Hospitality clients mean daily takings, card machines, delivery apps, cash and tips - and VAT that depends on what was sold and how. We untangle it every month so the year-end is not a rescue job.",
    handle: [
      { title: "Daily takings", text: "Till and EPOS reports matched to bank, card and cash records." },
      { title: "Card machine payouts", text: "SumUp, Stripe and similar payouts matched to sales, with the fees posted correctly." },
      { title: "Delivery platforms", text: "Uber Eats, Deliveroo and Just Eat statements split into gross sales, commission and payout." },
      { title: "VAT on food", text: "Hot, cold, eat-in and takeaway sales treated correctly for VAT." },
      { title: "Payroll and tips", text: "Staff payroll prepared, with tips and service charge handled as you instruct." },
      { title: "Supplier accounts", text: "Food and drink supplier balances reconciled so purchases and VAT are complete." },
    ],
    watch: [
      "Card payouts posted as sales when an invoice already exists",
      "Delivery-app income booked net of commission",
      "Cash takings that never reach the books",
      "Supplier statements that do not match the ledger",
    ],
    services: ["bookkeeping", "vat-returns", "payroll", "year-end-accounts"],
    faqs: [
      { question: "Can you work from EPOS reports?", answer: "Yes. We use the reports your client's system produces and reconcile them to the bank and card payouts." },
      { question: "How do you handle delivery-app income?", answer: "We record the gross sale, the platform's commission and the net payout separately, so turnover and VAT are right." },
      { question: "Do you prepare hospitality payroll?", answer: "Yes, including irregular hours and tips handled the way your firm instructs." },
    ],
  },
  {
    slug: "property-landlords",
    name: "Property and landlords",
    metaTitle: "Outsourced Accounting for Landlord and Property Clients",
    metaDescription:
      "Rental accounts, Making Tax Digital for Income Tax, Self Assessment and property company year-ends - outsourced support for UK practices with landlord clients.",
    heading: "Landlord clients ready for Making Tax Digital",
    intro:
      "Landlords are among the first clients brought into Making Tax Digital for Income Tax. We keep their rental records digital and up to date, prepare the quarterly updates, and get the year-end right.",
    handle: [
      { title: "Rental accounts", text: "Income and expenses per property, from bank feeds, agent statements and receipts." },
      { title: "MTD for Income Tax", text: "Digital records kept and quarterly updates prepared for you to review and submit." },
      { title: "Jointly owned property", text: "Income and costs split correctly between owners." },
      { title: "Finance costs", text: "Mortgage interest treated correctly for individual landlords and for companies." },
      { title: "Self Assessment", text: "Property pages and the full return prepared for your review." },
      { title: "Property companies", text: "Year-end accounts and corporation tax for property investment companies." },
    ],
    watch: [
      "Capital costs claimed as repairs",
      "Mortgage capital repayments treated as an expense",
      "Agent fees and deductions missing from the income figure",
      "Joint ownership splits that do not match the legal position",
    ],
    services: ["personal-tax", "bookkeeping", "year-end-accounts", "corporation-tax"],
    faqs: [
      { question: "Can you prepare MTD quarterly updates?", answer: "Yes. We keep the digital records and prepare each quarterly update in your software for you to review and submit." },
      { question: "Do you work from letting agent statements?", answer: "Yes. We reconcile agent statements to the bank so gross rent, fees and deductions are all captured." },
      { question: "Do you handle property limited companies?", answer: "Yes - bookkeeping, year-end accounts and corporation tax returns." },
    ],
  },
  {
    slug: "charities",
    name: "Charities",
    metaTitle: "Outsourced Charity Accounts Preparation for UK Practices",
    metaDescription:
      "Charity accounts under the Charities SORP, fund accounting and Gift Aid support - outsourced preparation for UK practices with charity clients.",
    heading: "Charity accounts, prepared to the SORP",
    intro:
      "Charity work needs fund accounting and SORP-format accounts that stand up to independent examination or audit. We prepare the numbers and the working papers so your team can focus on the review.",
    handle: [
      { title: "SORP accounts", text: "Statement of financial activities, balance sheet and notes prepared under the Charities SORP." },
      { title: "Fund accounting", text: "Restricted, unrestricted and endowment funds tracked through the year." },
      { title: "Bookkeeping", text: "Donations, grants and project costs coded to the right fund." },
      { title: "Gift Aid", text: "Donation records organised to support Gift Aid claims." },
      { title: "Working papers", text: "A clear file ready for independent examination or audit." },
      { title: "Trustees' report support", text: "Financial review figures prepared for the trustees' annual report." },
    ],
    watch: [
      "Restricted income spent on unrestricted costs",
      "Grants recognised in the wrong period",
      "Support costs not allocated to activities",
      "Gift Aid claimed on ineligible donations",
    ],
    services: ["year-end-accounts", "bookkeeping", "audit-support"],
    faqs: [
      { question: "Do you prepare accounts under the Charities SORP?", answer: "Yes. We prepare SORP-format accounts with fund analysis and notes for your review." },
      { question: "Can you prepare files for an independent examiner?", answer: "Yes. We prepare working papers so the examination or audit runs smoothly." },
      { question: "Do you work with small charities?", answer: "Yes - from small charities on receipts and payments to larger charities on full accruals accounts." },
    ],
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
