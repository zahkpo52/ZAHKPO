export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaGroup {
  label: string;
  items: NavLink[];
}

/** Services grouped for the mega menu and the /services hub. */
export const serviceGroups: MegaGroup[] = [
  {
    label: "Core Finance & Accounting",
    items: [
      {
        label: "Bookkeeping",
        href: "/services/bookkeeping",
        description: "Reconciliations, AP/AR and ledger upkeep.",
      },
      {
        label: "Year-End Accounts",
        href: "/services/year-end-accounts",
        description: "FRS-compliant statutory accounts, filed on time.",
      },
      {
        label: "Management Accounts",
        href: "/services/management-accounts",
        description: "Monthly insight, variance analysis and forecasts.",
      },
    ],
  },
  {
    label: "Compliance",
    items: [
      {
        label: "VAT Returns",
        href: "/services/vat-returns",
        description: "MTD-compliant quarterly VAT, reviewed and filed.",
      },
      {
        label: "Payroll",
        href: "/services/payroll",
        description: "Fully managed, compliant, on schedule.",
      },
      {
        label: "CIS Returns",
        href: "/services/cis-returns",
        description: "Construction Industry Scheme, penalty-free.",
      },
      {
        label: "Corporation Tax",
        href: "/services/corporation-tax",
        description: "CT600 computations, risk-checked and filed.",
      },
      {
        label: "Personal Tax",
        href: "/services/personal-tax",
        description: "Self-Assessment without the January crunch.",
      },
      {
        label: "iXBRL Tagging",
        href: "/services/ixbrl-tagging",
        description: "HMRC-ready, machine-readable accounts.",
      },
    ],
  },
  {
    label: "CFO & Advisory",
    items: [
      {
        label: "CFO & Advisory",
        href: "/services/cfo-advisory",
        description: "Virtual CFO, forecasting and KPI reporting.",
      },
    ],
  },
  {
    label: "Audit Support",
    items: [
      {
        label: "Audit Support",
        href: "/services/audit-support",
        description: "Working papers, lead schedules and file prep.",
      },
    ],
  },
  {
    label: "Company Secretarial",
    items: [
      {
        label: "Business Setup",
        href: "/services/business-setup",
        description: "Formation to dissolution, fully supported.",
      },
      {
        label: "Tax Registrations",
        href: "/services/tax-registrations",
        description: "VAT, PAYE, SA and CIS - right first time.",
      },
      {
        label: "Corporate Due Diligence",
        href: "/services/corporate-due-diligence",
        description: "Director IDV, AML/KYC and statutory support.",
      },
    ],
  },
];

// export const specialtyLinks: NavLink[] = [
//   {
//     label: "Dental",
//     href: "/specialties/cloud-accounting",
//     description: "Migrate to the cloud without disruption.",
//   },
//   {
//     label: "Hospitality",
//     href: "/specialties/mtd",
//     description: "Stress-free digital tax compliance.",
//   },
//   {
//     label: "Construction",
//     href: "/specialties/ai-accounting",
//     description: "Automation with human quality control.",
//   },
//   {
//     label: "Pharma",
//     href: "/specialties/marketing-services",
//     description: "Branding, content and lead generation.",
//   },
// ];

// export const specialtiesGroup: MegaGroup = {
//   label: "Industries",
//   items: specialtyLinks,
// };

/**
 * Balanced columns for the desktop Services mega menu. Compliance is the tallest
 * group, so the short CFO & Advisory and Audit Support groups share a column -
 * and Specialties pairs with Company Secretarial - to keep the panel height even.
 */
export const serviceMenuColumns: MegaGroup[][] = [
  serviceGroups.filter((g) => g.label === "Core Finance & Accounting"),
  serviceGroups.filter((g) => g.label === "Compliance"),
  serviceGroups.filter((g) => g.label === "CFO & Advisory" || g.label === "Audit Support"),
  [...serviceGroups.filter((g) => g.label === "Company Secretarial")
    // , specialtiesGroup
    ],
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog", description: "Guides on outsourcing, tax and cloud." },
  { label: "FAQ", href: "/faq", description: "Answers to common outsourcing questions." },
];

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why ZAH", href: "/why-zah-kpo" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Year-End Accounts", href: "/services/year-end-accounts" },
      { label: "VAT Returns", href: "/services/vat-returns" },
      { label: "Payroll", href: "/services/payroll" },
      { label: "CFO & Advisory", href: "/services/cfo-advisory" },
      { label: "Audit Support", href: "/services/audit-support" },
    ],
  },
  // {
  //   title: "Industries",
  //   links: specialtyLinks.map(({ label, href }) => ({ label, href })),
  // },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why ZAH", href: "/why-zah-kpo" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
