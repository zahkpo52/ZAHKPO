import {
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  FileCode,
  FileSearch,
  Gauge,
  HardHat,
  LineChart,
  Lock,
  PieChart,
  PoundSterling,
  ReceiptText,
  Rocket,
  Scale,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";

import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "year-end-accounts",
    title: "Year-End Accounts",
    category: "Core Finance & Accounting",
    icon: ClipboardCheck,
    summary: "Year-End Accounts (FRS 102 & UK GAAP)",
    metaTitle: "Year-End Accounts Outsourcing",
    metaDescription:
      "FRS-compliant year-end accounts prepared by qualified accountants - working papers, draft accounts, iXBRL and filing support, delivered to deadline.",
    hero: {
      eyebrow: "Core Finance & Accounting",
      heading: "Year-end accounts, off your desk and on time",
      subheading:
        "Hand us the trial balance and we hand back clean, FRS-compliant statutory accounts - fully reviewed, iXBRL-ready and filed before the deadline.",
    },
    deliverables: [
      { title: "Extended trial balance", description: "Reviewed income, expenses and control accounts with everything reconciled." },
      { title: "Working papers", description: "Audit-ready schedules and supporting reconciliations for every balance." },
      { title: "Adjusting entries", description: "Accruals, prepayments and corrections posted and clearly documented." },
      { title: "FRS-format financial statements", description: "Statutory accounts prepared to the correct reporting standard." },
      { title: "Draft accounts (PDF + iXBRL)", description: "Client-ready drafts plus a tagged file ready for HMRC." },
      { title: "Filing support", description: "Companies House and HMRC submission handled or supported end to end." },
    ],
    process: [
      { title: "Review", description: "We check income, expenses and control accounts against your records." },
      { title: "Prepare", description: "Working papers and reconciliations are built and adjusting entries posted." },
      { title: "Draft", description: "We generate statutory accounts and a tagged iXBRL file." },
      { title: "Two-level QA", description: "Every set passes a preparer and an independent reviewer." },
      { title: "Finalise & file", description: "Approved accounts are filed with Companies House and HMRC on time." },
    ],
    benefits: [
      { title: "No deadline panic", description: "Predictable turnaround so filing season stops being a scramble.", icon: Clock },
      { title: "Lower overheads", description: "Senior capacity without the cost of another full-time hire.", icon: PoundSterling },
      { title: "Compliance you can trust", description: "Two-level review keeps accuracy and standards high.", icon: ShieldCheck },
      { title: "Capacity to grow", description: "Free your team for advisory work that actually earns fees.", icon: TrendingUp },
    ],
    faqs: [
      { question: "Which accounting standards do you work to?", answer: "We prepare accounts to the appropriate FRS standard for the entity, including micro and small-company regimes, and produce a tagged iXBRL file ready for submission." },
      { question: "Do you work in our software?", answer: "Yes. We work inside your existing systems and templates so the output matches your house style and slots straight into your workflow." },
      { question: "Can you handle filing as well as preparation?", answer: "We can prepare drafts for your review and, once approved, support or complete the Companies House and HMRC submissions." },
    ],
    related: ["management-accounts", "bookkeeping", "ixbrl-tagging"],
  },
  {
    slug: "management-accounts",
    title: "Management Accounts",
    category: "Core Finance & Accounting",
    icon: LineChart,
    summary: "Monthly insight, variance analysis and forecasts that drive decisions.",
    metaTitle: "Management Accounts Outsourcing",
    metaDescription:
      "Monthly and quarterly management accounts with variance analysis, cash-flow monitoring and custom MIS - turn financial data into decisions clients can act on.",
    hero: {
      eyebrow: "Core Finance & Accounting",
      heading: "Numbers your clients can actually act on",
      subheading:
        "Timely monthly and quarterly management accounts - with the analysis that turns a set of figures into a clear story about the business.",
    },
    deliverables: [
      { title: "Monthly & quarterly reports", description: "Consistent, on-time reporting packs tailored to each client." },
      { title: "Variance analysis", description: "Actuals against budget with the drivers behind the movement." },
      { title: "Cash-flow monitoring", description: "Rolling visibility of cash position and short-term runway." },
      { title: "Budgeting & forecasting", description: "Forward-looking models that support planning conversations." },
      { title: "Balance-sheet reconciliations", description: "Clean, reconciled balances you can rely on each period." },
      { title: "Custom MIS", description: "KPI dashboards and management information built to your spec." },
    ],
    process: [
      { title: "Scope", description: "We agree the reporting pack, KPIs and timetable with you." },
      { title: "Build", description: "Data is reconciled and the management pack is prepared." },
      { title: "Analyse", description: "We add variance commentary and the insight behind the numbers." },
      { title: "Deliver", description: "Reviewed packs land on schedule, every period." },
    ],
    benefits: [
      { title: "Decision-ready insight", description: "Clear analysis, not just a data dump.", icon: LineChart },
      { title: "Reliable cadence", description: "Reports arrive on the same day every month.", icon: Clock },
      { title: "Advisory headroom", description: "Free your team to advise rather than assemble.", icon: TrendingUp },
      { title: "Lower cost to serve", description: "Add reporting clients without adding headcount.", icon: PoundSterling },
    ],
    faqs: [
      { question: "How quickly after month-end can we have packs?", answer: "We agree a fixed timetable up front and deliver to it - typically within a few working days of receiving complete data." },
      { question: "Can you match our existing report format?", answer: "Yes. We replicate your house template and KPIs so clients see a seamless, consistent pack." },
    ],
    related: ["year-end-accounts", "bookkeeping", "vat-returns"],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    category: "Core Finance & Accounting",
    icon: BookOpen,
    summary: "Accurate reconciliations and ledger upkeep, ready for reporting.",
    metaTitle: "Bookkeeping Outsourcing",
    metaDescription:
      "Accurate, compliant bookkeeping for UK accounting firms - reconciliations, AP/AR, ledger upkeep, fixed asset registers and reporting. Take on more clients without adding overhead.",
    hero: {
      eyebrow: "Core Finance & Accounting",
      heading: "Clean books, every month, without the headcount",
      subheading:
        "Reliable day-to-day bookkeeping that keeps ledgers accurate and reporting-ready - so month-end and year-end run smoothly.",
    },
    deliverables: [
      { title: "Bank & card reconciliation", description: "Every account reconciled and tied back to source." },
      { title: "Accounts payable", description: "Purchase invoices captured, coded and ready to pay." },
      { title: "Accounts receivable", description: "Sales invoicing and receipts tracked and matched." },
      { title: "General ledger upkeep", description: "Coded transactions and a tidy, trustworthy ledger." },
      { title: "Fixed asset register", description: "Asset registers maintained with depreciation kept current." },
      { title: "P&L and balance sheet", description: "Period statements prepared from clean underlying data." },
    ],
    benefits: [
      { title: "Fewer month-end surprises", description: "Issues are caught early, not at year-end.", icon: CheckCircle2 },
      { title: "Scalable capacity", description: "Flex up or down as your client base moves.", icon: Gauge },
      { title: "Bank-grade security", description: "Encrypted handling and controlled access throughout.", icon: Lock },
      { title: "More billable time", description: "Your team focuses on advice, not data entry.", icon: TrendingUp },
    ],
    faqs: [
      { question: "What do you need to get started?", answer: "Access to the accounting software, prior-year working papers, and any documented procedures or coding rules so we can match how you work." },
      { question: "How is pricing structured?", answer: "Flexibly - many firms use a pay-as-you-use model that scales with transaction volume rather than a fixed in-house cost." },
    ],
    related: ["management-accounts", "year-end-accounts", "payroll"],
  },
  {
    slug: "payroll",
    title: "Payroll",
    category: "Compliance",
    icon: Wallet,
    summary: "Fully managed, compliant payroll - accurate and on schedule.",
    metaTitle: "Payroll Outsourcing",
    metaDescription:
      "Fully managed payroll - salary processing, statutory deductions, pensions and reporting - handled securely and on schedule, with a dedicated point of contact.",
    hero: {
      eyebrow: "Compliance",
      heading: "Payroll that runs like clockwork",
      subheading:
        "Accurate salary processing, statutory deductions and pension handling - delivered securely, on time, with a named contact who knows your account.",
    },
    deliverables: [
      { title: "Salary processing", description: "Accurate pay runs with all calculations checked." },
      { title: "Tax & statutory deductions", description: "PAYE, NIC and statutory pay handled correctly." },
      { title: "Pension contributions", description: "Auto-enrolment and contributions managed and reported." },
      { title: "Time & attendance", description: "Hours, overtime and absences factored into each run." },
      { title: "Payroll reporting", description: "Clear payslips, summaries and period reports." },
      { title: "New-joiner setup", description: "Starters, leavers and documentation handled cleanly." },
    ],
    process: [
      { title: "Secure transfer", description: "Employee and pay data is shared through encrypted channels." },
      { title: "Prepare & approve", description: "We prepare the run and send it to you for sign-off." },
      { title: "Pay on schedule", description: "Payments and filings are processed to the agreed calendar." },
      { title: "Report", description: "Payslips and reports are delivered with full clarity." },
    ],
    benefits: [
      { title: "Always compliant", description: "Calculations kept current with changing regulations.", icon: ShieldCheck },
      { title: "A named contact", description: "One person who knows your payroll inside out.", icon: UserCheck },
      { title: "Fewer errors", description: "Automation and review cut mistakes to a minimum.", icon: CheckCircle2 },
      { title: "Time back", description: "Reclaim the hours payroll quietly eats every cycle.", icon: Clock },
    ],
    faqs: [
      { question: "Can you run weekly and monthly payrolls?", answer: "Yes. We work to whatever pay calendar your clients need and build the schedule around their deadlines." },
      { question: "Do you handle auto-enrolment pensions?", answer: "We manage contributions and reporting and keep enrolment obligations on track each period." },
    ],
    related: ["bookkeeping", "cis-returns", "management-accounts"],
  },
  {
    slug: "cis-returns",
    title: "CIS Returns",
    category: "Compliance",
    icon: HardHat,
    summary: "Construction Industry Scheme returns, accurate and penalty-free.",
    metaTitle: "CIS Returns Outsourcing",
    metaDescription:
      "Construction Industry Scheme returns made simple - monthly calculations, deduction verification and HMRC-aligned submissions that keep contractors penalty-free.",
    hero: {
      eyebrow: "Compliance",
      heading: "CIS compliance without the monthly stress",
      subheading:
        "Monthly CIS returns calculated, verified and submitted in line with HMRC rules - so contractors stay compliant and penalty-free.",
    },
    deliverables: [
      { title: "Monthly CIS calculations", description: "Deductions worked out accurately for every subcontractor." },
      { title: "Subcontractor verification", description: "Status and deduction rates verified with HMRC." },
      { title: "HMRC submission", description: "Returns filed correctly and on time each month." },
      { title: "Deduction statements", description: "Clear statements issued for subcontractor records." },
      { title: "Compliance monitoring", description: "Ongoing checks that keep filings accurate." },
    ],
    benefits: [
      { title: "No late-filing penalties", description: "Returns land before the monthly deadline.", icon: ShieldCheck },
      { title: "Accurate deductions", description: "Right rates, verified status, fewer disputes.", icon: CheckCircle2 },
      { title: "Less admin", description: "The monthly cycle is handled end to end.", icon: Clock },
      { title: "Full transparency", description: "Clear reporting on every return submitted.", icon: LineChart },
    ],
    faqs: [
      { question: "Do you verify subcontractors with HMRC?", answer: "Yes. We confirm subcontractor status and the correct deduction rate before each return so figures are right first time." },
      { question: "Can you handle contractors of any size?", answer: "From a handful of subcontractors to large monthly schedules, the process scales to your clients' volume." },
    ],
    related: ["payroll", "bookkeeping", "vat-returns"],
  },
  {
    slug: "ixbrl-tagging",
    title: "iXBRL Tagging",
    category: "Compliance",
    icon: FileCode,
    summary: "HMRC-ready, machine-readable accounts with validated tagging.",
    metaTitle: "iXBRL Tagging Outsourcing",
    metaDescription:
      "Convert financial statements into HMRC-compliant, machine-readable iXBRL with automated validation and careful review - faster filing, fewer errors.",
    hero: {
      eyebrow: "Compliance",
      heading: "Turn statements into clean, compliant iXBRL",
      subheading:
        "Accurate iXBRL tagging that meets HMRC requirements - converted, validated and reviewed so submissions go through first time.",
    },
    deliverables: [
      { title: "Accurate tagging", description: "Financial statements converted to compliant iXBRL." },
      { title: "Automated validation", description: "Tagging checked against the taxonomy to catch errors." },
      { title: "HMRC-aligned output", description: "Files prepared to current HMRC tagging requirements." },
      { title: "Careful review", description: "A human check on top of automated validation." },
      { title: "Filing support", description: "Tagged files delivered ready for submission." },
    ],
    benefits: [
      { title: "Faster submissions", description: "Tagged files ready to file without rework.", icon: Gauge },
      { title: "Fewer rejections", description: "Validation reduces errors and resubmissions.", icon: CheckCircle2 },
      { title: "Full compliance", description: "Output aligned to HMRC's latest requirements.", icon: ShieldCheck },
      { title: "Lower cost", description: "Skip the licences and the in-house learning curve.", icon: PoundSterling },
    ],
    related: ["year-end-accounts", "corporation-tax", "management-accounts"],
  },
  {
    slug: "vat-returns",
    title: "VAT Returns",
    category: "Compliance",
    icon: ReceiptText,
    summary: "VAT Returns & Compliance",
    metaTitle: "VAT Returns Outsourcing",
    metaDescription:
      "Quarterly VAT prepared, reviewed and filed under Making Tax Digital - accurate input/output calculations, error checks and advisory support. Never miss a deadline.",
    hero: {
      eyebrow: "Compliance",
      heading: "Quarterly VAT, prepared and filed under MTD",
      subheading:
        "Input and output VAT calculated, reviewed and submitted to HMRC under Making Tax Digital - accurate every quarter, never late.",
    },
    deliverables: [
      { title: "VAT preparation", description: "Input and output VAT calculated from clean data." },
      { title: "MTD-compliant filing", description: "Returns submitted through approved digital channels." },
      { title: "Error review", description: "Workings checked before anything reaches HMRC." },
      { title: "Approval workflow", description: "Reports shared for your sign-off before submission." },
      { title: "VAT advisory", description: "Guidance on schemes, edge cases and treatment." },
      { title: "Enquiry support", description: "Help responding to HMRC VAT queries." },
    ],
    process: [
      { title: "Use your systems", description: "We work inside the client's existing bookkeeping." },
      { title: "Calculate & review", description: "VAT workings are prepared and double-checked." },
      { title: "Approve", description: "You review the figures before we submit." },
      { title: "File & support", description: "Returns are filed under MTD with ongoing support." },
    ],
    benefits: [
      { title: "No missed deadlines", description: "Quarterly filing handled on a reliable calendar.", icon: Clock },
      { title: "Fewer penalties", description: "Accurate, reviewed figures reduce HMRC risk.", icon: ShieldCheck },
      { title: "Retain control", description: "Nothing is filed without your approval.", icon: CheckCircle2 },
      { title: "Scalable", description: "Handle more VAT clients without adding staff.", icon: Gauge },
    ],
    faqs: [
      { question: "Are your filings MTD compliant?", answer: "Yes. All VAT returns are prepared and submitted through Making Tax Digital-compatible processes." },
      { question: "Do you review before filing?", answer: "Always. We share the workings for your approval and only submit once you've signed off." },
    ],
    related: ["personal-tax", "corporation-tax", "bookkeeping"],
  },
  {
    slug: "personal-tax",
    title: "Personal Tax",
    category: "Compliance",
    icon: UserCheck,
    summary: "Self-Assessment without the January crunch.",
    metaTitle: "Personal Tax Returns Outsourcing",
    metaDescription:
      "Self-Assessment prepared and reviewed by UK & Ireland tax specialists - kill the January crunch, hit every deadline and free your team for advisory work.",
    hero: {
      eyebrow: "Compliance",
      heading: "Self-Assessment season, minus the crunch",
      subheading:
        "Accurate personal tax returns prepared and reviewed ahead of deadline - so the January rush stops dominating your practice.",
    },
    deliverables: [
      { title: "Return preparation", description: "Self-Assessment returns prepared from client records." },
      { title: "Peak-season capacity", description: "Extra hands exactly when you need them most." },
      { title: "Two-level review", description: "Every return checked by preparer and reviewer." },
      { title: "Deadline monitoring", description: "Filing dates tracked so nothing slips." },
      { title: "Secure document handling", description: "Sensitive data managed under strict controls." },
    ],
    benefits: [
      { title: "Beat the rush", description: "Returns delivered early, not at the wire.", icon: Clock },
      { title: "Predictable cost", description: "Turn seasonal overtime into a fixed cost.", icon: PoundSterling },
      { title: "Scale on demand", description: "Add capacity for the season without hiring.", icon: Gauge },
      { title: "Advisory focus", description: "Free seniors for higher-value client work.", icon: TrendingUp },
    ],
    faqs: [
      { question: "Can you absorb our January peak?", answer: "Yes - peak-season support is exactly what this service is built for, with capacity that flexes to your volume." },
      { question: "Who reviews the returns?", answer: "Each return goes through a two-level review before it comes back to you, ready to file." },
    ],
    related: ["vat-returns", "corporation-tax", "tax-registrations"],
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax",
    category: "Compliance",
    icon: Building2,
    summary: "CT600 computations, risk-checked and filed on time.",
    metaTitle: "Corporation Tax Outsourcing",
    metaDescription:
      "CT600 computations and corporation tax returns prepared, risk-checked and filed on time by specialists - compliance and confidence without peak-season strain.",
    hero: {
      eyebrow: "Compliance",
      heading: "Corporation tax, computed and filed with confidence",
      subheading:
        "CT600 computations and returns prepared, risk-checked and submitted on time - current with the rules, light on your team.",
    },
    deliverables: [
      { title: "CT computations", description: "Corporation tax calculated from the statutory accounts." },
      { title: "CT600 returns", description: "Returns prepared accurately and ready to file." },
      { title: "Risk checks", description: "Reviewed for exposure before submission." },
      { title: "Timely filing", description: "Submitted to HMRC ahead of deadline." },
      { title: "Planning support", description: "Guidance on reliefs and treatment where relevant." },
    ],
    benefits: [
      { title: "Fewer errors & penalties", description: "Risk-checked computations reduce exposure.", icon: ShieldCheck },
      { title: "Deadlines met", description: "Filing handled to a dependable timetable.", icon: Clock },
      { title: "Specialist expertise", description: "Current technical knowledge on tap.", icon: Scale },
      { title: "Simpler administration", description: "One less complex task on your plate.", icon: CheckCircle2 },
    ],
    related: ["vat-returns", "personal-tax", "ixbrl-tagging"],
  },
  {
    slug: "business-setup",
    title: "Business Setup & Support",
    category: "Company Secretarial",
    icon: Rocket,
    summary: "Company formation to dissolution, fully supported.",
    metaTitle: "Business Setup & Support",
    metaDescription:
      "Company formation to dissolution - registrations, statutory documentation, confirmation statements and virtual admin - one accountable partner for the whole lifecycle.",
    hero: {
      eyebrow: "Company Secretarial",
      heading: "Company formation to closure, handled",
      subheading:
        "End-to-end corporate lifecycle support - from incorporation and registrations through ongoing compliance to a clean strike-off.",
    },
    deliverables: [
      { title: "Company formation", description: "Registration, director/shareholder setup and registered office." },
      { title: "Statutory documentation", description: "Share certificates and incorporation paperwork prepared." },
      { title: "Ongoing compliance", description: "Annual accounts, confirmation statements and filings maintained." },
      { title: "Confirmation statements", description: "PSC, share capital and registered-office details kept current." },
      { title: "Virtual admin support", description: "Document prep, data entry and back-office coordination." },
      { title: "Company dissolution", description: "Strike-off, final accounts and authority liaison." },
    ],
    benefits: [
      { title: "One accountable partner", description: "A single point of ownership across the lifecycle.", icon: UserCheck },
      { title: "Compliant from day one", description: "Registrations and filings done right first time.", icon: ShieldCheck },
      { title: "No missed statutory dates", description: "Deadlines tracked and met throughout.", icon: Clock },
      { title: "Cost-effective", description: "Lifecycle support without a full-time hire.", icon: PoundSterling },
    ],
    related: ["tax-registrations", "corporate-due-diligence", "corporation-tax"],
  },
  {
    slug: "tax-registrations",
    title: "Tax Registrations & Filings",
    category: "Company Secretarial",
    icon: ClipboardList,
    summary: "VAT, PAYE, SA and CIS registrations - right first time.",
    metaTitle: "Tax Registrations & Filings",
    metaDescription:
      "VAT, PAYE, Self-Assessment and CIS registrations, statutory filings and HMRC correspondence handled correctly first time - compliant from day one.",
    hero: {
      eyebrow: "Company Secretarial",
      heading: "Registrations and filings, correct first time",
      subheading:
        "VAT, PAYE, Self-Assessment and CIS registrations plus statutory filings and HMRC correspondence - set up properly so nothing comes back to bite you.",
    },
    deliverables: [
      { title: "VAT registration", description: "Standard, flat-rate or voluntary registration handled." },
      { title: "PAYE employer setup", description: "Employer registration for running payroll." },
      { title: "Self-Assessment & CIS", description: "Director UTRs and contractor/subcontractor enrolment." },
      { title: "Statutory filings", description: "Annual and dormant accounts and CT600 submissions." },
      { title: "Companies House", description: "Deadline tracking and on-time filing." },
      { title: "HMRC correspondence", description: "Letters, penalty disputes and Time to Pay support." },
    ],
    benefits: [
      { title: "Compliant from launch", description: "References issued correctly the first time.", icon: ShieldCheck },
      { title: "No penalty risk", description: "Statutory deadlines tracked and met.", icon: Clock },
      { title: "Expert handling", description: "Specialist support without an internal hire.", icon: Scale },
      { title: "Less founder admin", description: "We absorb the back-office paperwork.", icon: CheckCircle2 },
    ],
    related: ["business-setup", "corporate-due-diligence", "vat-returns"],
  },
  {
    slug: "corporate-due-diligence",
    title: "Corporate Due Diligence",
    category: "Company Secretarial",
    icon: ShieldCheck,
    summary: "Director IDV, AML/KYC and statutory support, done securely.",
    metaTitle: "Corporate Due Diligence & Statutory Support",
    metaDescription:
      "Director ID verification, PSC checks, AML/KYC due diligence and ICO correspondence - Companies House-compliant statutory support, handled securely.",
    hero: {
      eyebrow: "Company Secretarial",
      heading: "Identity, due diligence and statutory support",
      subheading:
        "Director ID verification, PSC checks, AML/KYC due diligence and ICO correspondence - handled accurately and securely to meet Companies House requirements.",
    },
    deliverables: [
      { title: "Director ID verification", description: "Document collection, validation and Companies House filing." },
      { title: "PSC verification", description: "Persons with Significant Control identified and checked." },
      { title: "AML / KYC", description: "Client and enhanced due diligence with documentation." },
      { title: "Ongoing monitoring", description: "Compliance kept current as circumstances change." },
      { title: "ICO correspondence", description: "Data-protection notices and queries drafted and resolved." },
    ],
    benefits: [
      { title: "Regulatory assurance", description: "Confidence that statutory duties are met.", icon: ShieldCheck },
      { title: "Secure handling", description: "Sensitive documents managed under strict controls.", icon: Lock },
      { title: "Reputation protected", description: "Verified records reduce filing and AML risk.", icon: CheckCircle2 },
      { title: "Capacity freed", description: "Time-consuming checks taken off your team.", icon: Users },
    ],
    related: ["business-setup", "tax-registrations", "corporation-tax"],
  },
  {
    slug: "cfo-advisory",
    title: "CFO & Advisory",
    category: "CFO & Advisory",
    icon: Briefcase,
    summary: "Virtual CFO support, forecasting and KPI reporting that drive decisions.",
    metaTitle: "Virtual CFO & Advisory Services",
    metaDescription:
      "Virtual CFO support for UK firms and their clients - budgeting, cash-flow forecasting, financial modelling, KPI dashboards and business performance reviews that turn numbers into decisions.",
    hero: {
      eyebrow: "CFO & Advisory",
      heading: "Senior financial insight, on demand",
      subheading:
        "Give your clients CFO-level thinking without the CFO salary - budgeting, forecasting, financial modelling and KPI reporting that turn the numbers into a clear plan.",
    },
    deliverables: [
      { title: "Virtual CFO", description: "Strategic financial oversight and a senior sounding board for key decisions." },
      { title: "Budgeting & forecasting", description: "Forward-looking budgets and rolling forecasts that support planning." },
      { title: "Cash-flow forecasting", description: "Rolling visibility of cash position and short-term runway." },
      { title: "Financial modelling", description: "Scenario models for growth, funding and investment decisions." },
      { title: "KPI dashboard reporting", description: "The metrics that matter, presented clearly and on schedule." },
      { title: "Business performance reviews", description: "Regular reviews that surface what's working and what needs attention." },
    ],
    process: [
      { title: "Understand", description: "We learn the business, its goals and the decisions ahead." },
      { title: "Model", description: "Budgets, forecasts and scenarios are built from clean data." },
      { title: "Report", description: "KPI dashboards and reviews are delivered on a fixed cadence." },
      { title: "Advise", description: "We translate the numbers into clear, actionable recommendations." },
    ],
    benefits: [
      { title: "CFO insight, lower cost", description: "Senior advisory capacity without a full-time hire.", icon: PoundSterling },
      { title: "Decision-ready numbers", description: "Forecasts and KPIs you can act on with confidence.", icon: LineChart },
      { title: "Forward visibility", description: "See cash and performance before issues arise.", icon: TrendingUp },
      { title: "Stronger client relationships", description: "Offer advisory value that deepens client trust.", icon: Briefcase },
    ],
    faqs: [
      { question: "Is this a fully outsourced CFO?", answer: "It's flexible - from periodic advisory and reporting through to a virtual CFO acting as an ongoing senior financial partner for your client." },
      { question: "Can you build dashboards in our tools?", answer: "Yes. We build KPI dashboards and reports using Power BI, Excel and Power Query, tailored to the metrics each client cares about." },
    ],
    related: ["management-accounts", "year-end-accounts", "audit-support"],
  },
  {
    slug: "audit-support",
    title: "Audit Support",
    category: "Audit Support",
    icon: FileSearch,
    summary: "Working papers, lead schedules and audit file preparation, done right.",
    metaTitle: "Audit Support Services",
    metaDescription:
      "Outsourced audit support for UK firms - audit working papers, lead schedules, sampling support, audit file preparation and financial statement drafting, prepared to your standards.",
    hero: {
      eyebrow: "Audit Support",
      heading: "Audit-ready files, prepared off your desk",
      subheading:
        "Free your audit team from the heavy preparation work - working papers, lead schedules, sampling and file build handled accurately, so they can focus on judgement and review.",
    },
    deliverables: [
      { title: "Audit working papers", description: "Structured, referenced working papers prepared to your file standards." },
      { title: "Lead schedules", description: "Lead schedules built and tied back to the trial balance." },
      { title: "Sampling support", description: "Sample selection and testing support documented clearly." },
      { title: "Audit file preparation", description: "Complete audit files assembled and ready for review." },
      { title: "Financial statement drafting", description: "Statutory financial statements drafted to the correct standard." },
    ],
    benefits: [
      { title: "Capacity for busy season", description: "Extra hands through the audit peak, without hiring.", icon: Gauge },
      { title: "Reviewer-ready files", description: "Clean, referenced files that speed up review.", icon: CheckCircle2 },
      { title: "Consistent quality", description: "SOP-driven preparation and multi-level checks.", icon: ShieldCheck },
      { title: "Senior time freed", description: "Your auditors focus on judgement, not assembly.", icon: PieChart },
    ],
    faqs: [
      { question: "Do you perform the audit?", answer: "No - we provide preparation and support work under your firm's direction and methodology. Audit opinion, review and sign-off remain entirely with you." },
      { question: "Can you work to our audit file structure?", answer: "Yes. We follow your templates, referencing and methodology so files slot straight into your review process." },
    ],
    related: ["year-end-accounts", "cfo-advisory", "corporation-tax"],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}

export const serviceCategories = [
  "Core Finance & Accounting",
  "Compliance",
  "CFO & Advisory",
  "Audit Support",
  "Company Secretarial",
] as const;
