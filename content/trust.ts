/**
 * Data protection and security facts shown on /gdpr, /security and the home page.
 * Every line here must match a control that is in place and evidenced in the
 * GDPR & Information Security framework (Client Assurance Pack CA04 / evidence EV01-EV44).
 * Remove a line before publishing if the control lapses.
 */

export const assurancePackHref =
  "mailto:info@zahkpo.com?subject=Request%3A%20ZAH%20KPO%20Client%20Assurance%20Pack&body=Hello%20ZAH%20KPO%2C%0A%0APlease%20send%20your%20Client%20Assurance%20Pack%20(we%20are%20happy%20to%20sign%20an%20NDA).%0A%0AFirm%20name%3A%0AContact%20name%3A%0A";

/** Headline proof points (home page + GDPR page). */
export const gdprHeadlines: { title: string; text: string }[] = [
  {
    title: "Article 28 Data Processing Agreement",
    text: "Signed before work starts. We act only on your documented instructions.",
  },
  {
    title: "ICO transfer agreement for UK to India",
    text: "The ICO's International Data Transfer Agreement or UK Addendum, backed by a written transfer risk assessment.",
  },
  {
    title: "A full GDPR and security framework",
    text: "Around 110 policies, procedures and registers, approved by both directors with digital signatures.",
  },
  {
    title: "Client Assurance Pack",
    text: "Our security measures, data flow, continuity plans and questionnaire answers - shared under NDA.",
  },
];

/** Documents a UK firm receives from us. */
export const gdprDocuments: { title: string; text: string }[] = [
  { title: "Data Processing Agreement", text: "UK GDPR Article 28 terms: instructions, confidentiality, security, sub-processors, assistance, deletion and audit." },
  { title: "International Data Transfer Agreement", text: "The ICO's IDTA, or the UK Addendum to the EU clauses, for access to data from India." },
  { title: "Transfer risk assessment", text: "Our documented UK-to-India assessment of the transfer and the safeguards around it." },
  { title: "Sub-processor schedule", text: "Every service that touches your data, with advance notice before any change." },
  { title: "Security schedule (TOMs)", text: "The technical and organisational measures we apply, attached to the DPA as an annex." },
  { title: "Data flow diagram", text: "Where your clients' data goes, who can see it and where it is stored." },
  { title: "Security questionnaire", text: "Ready answers to the due-diligence questions firms and insurers usually ask." },
  { title: "Continuity and incident summaries", text: "How we keep delivering through an outage, and how we handle and report an incident." },
];

export const gdprSteps: { title: string; text: string }[] = [
  { title: "Due diligence", text: "We send our Client Assurance Pack under NDA and answer your questionnaire before you share any data." },
  { title: "Sign the paperwork", text: "We sign the DPA, the transfer agreement and the security schedule with your firm before any data is shared." },
  { title: "Tell your clients", text: "Mention outsourcing and overseas processing in your privacy notice and engagement letters. Our checklist shows the wording to cover." },
  { title: "Set up access", text: "You give named ZAH users access to your software with two-step login. No shared logins, nothing copied outside your systems unless agreed." },
  { title: "Keep it under review", text: "We notify sub-processor changes in advance, report incidents quickly and review the arrangement with you each year." },
];

export const gdprCommitments: { value: string; label: string }[] = [
  { value: "24 hours", label: "Initial notice to you of a personal data breach, where practicable" },
  { value: "2 working days", label: "To pass on any data subject request we receive about your clients" },
  { value: "180 days", label: "Minimum retention of security audit logs" },
  { value: "On exit", label: "Data returned or deleted, with a deletion certificate on request" },
];

/** Security controls, grouped. Each item is in place and evidenced. */
export const securityGroups: { title: string; items: string[] }[] = [
  {
    title: "Access",
    items: [
      "A named account for every person - no shared logins",
      "Two-step login (MFA) on our Microsoft 365 for every user",
      "Least-privilege access, approved through a written access request",
      "Access removed within 24 hours when someone leaves",
    ],
  },
  {
    title: "Devices",
    items: [
      "Company laptops only for client work",
      "Full-disk encryption (BitLocker) on every laptop",
      "Real-time antivirus, firewall and automatic updates",
      "USB storage blocked; screens lock after 5 minutes",
    ],
  },
  {
    title: "Email and cloud",
    items: [
      "Business Microsoft 365 with SPF, DKIM and DMARC on our domain",
      "Anti-phishing and malware filtering on all mail",
      "File sharing limited to named people, with expiring links",
      "Audit logs kept for at least 180 days; backups with tested restores",
    ],
  },
  {
    title: "Office",
    items: [
      "Dedicated office in Khargone with CCTV and a visitor log",
      "Clean desk and clear screen rules",
      "Locked storage and shredding for any paper",
      "Secured office Wi-Fi with changed admin credentials",
    ],
  },
  {
    title: "People",
    items: [
      "Confidentiality agreement and data protection undertaking for everyone",
      "Data protection training based on the ICO's own course",
      "Acceptable use and AI policy - client data never goes into free AI tools",
      "Exit declaration and data return when anyone leaves",
    ],
  },
  {
    title: "Incidents and continuity",
    items: [
      "Written incident response plan with a named incident coordinator",
      "Breach and incident registers - nothing recorded to date",
      "Business continuity and disaster recovery plans",
      "Retention schedule and secure deletion, with deletion records",
    ],
  },
];

export const neverDo: string[] = [
  "Use personal phones or laptops for client work",
  "Copy client files to USB drives",
  "Put client data into free AI tools",
  "Share files with 'anyone with the link'",
  "Keep copies of your data after the engagement ends",
];
