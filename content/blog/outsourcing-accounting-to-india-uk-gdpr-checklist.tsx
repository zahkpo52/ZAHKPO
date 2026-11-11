import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "outsourcing-accounting-to-india-uk-gdpr-checklist",
  title: "Outsourcing accounts to India: a UK GDPR checklist",
  description:
    "What UK accountancy firms need before sharing client data with an offshore team - contracts, transfer safeguards, client notices and security.",
  category: "Data Security",
  date: "2026-11-11",
  readingTime: 6,
  related: ["/services/bookkeeping", "/services/year-end-accounts", "/why-zah-kpo"],
};

export default function Body() {
  return (
    <>
      <p>
        Working with an offshore team can add capacity quickly, but it also means client personal
        data leaves the UK. Under UK GDPR that is perfectly possible - as long as the right steps are
        in place. Use this checklist before you start, and take legal advice for your own firm&apos;s
        circumstances.
      </p>

      <h2>1. Be clear on roles</h2>
      <p>
        In a typical outsourcing arrangement your firm remains the controller of client data and the
        outsourcing provider acts as your processor. That means you decide what is done with the
        data, and you need a written contract with the provider that covers the points required by
        Article 28 of UK GDPR - acting only on your instructions, confidentiality, security,
        sub-processors, assistance with data subject requests, deletion or return of data and audit
        rights.
      </p>

      <h2>2. Treat it as a restricted transfer</h2>
      <p>
        The UK has not made adequacy regulations for India, so sending or giving access to personal
        data there is a restricted transfer. In practice that usually means putting in place one of
        the ICO-approved transfer mechanisms - the International Data Transfer Agreement (IDTA) or
        the UK Addendum to the EU standard contractual clauses - and carrying out a transfer risk
        assessment. The ICO&apos;s international transfers guidance sets out the steps.
      </p>

      <h2>3. Tell your clients</h2>
      <p>
        Your privacy notice should say that you use third-party processors, including outside the UK,
        and how the data is protected. Many firms also cover outsourcing in their engagement letters.
        Check your professional body&apos;s guidance on confidentiality and outsourcing, as some
        expect clients to be informed.
      </p>

      <h2>4. Keep data in your systems where you can</h2>
      <p>
        The safest set-up is for the offshore team to work inside your own practice software and your
        clients&apos; cloud ledgers using individual log-ins, rather than downloading and storing
        copies. You keep one source of truth, an audit trail of who accessed what, and the ability
        to remove access in minutes.
      </p>

      <h2>5. Ask the right security questions</h2>
      <ul>
        <li>Are all staff bound by confidentiality agreements and trained on data protection?</li>
        <li>Is access role-based, with multi-factor authentication and regular password changes?</li>
        <li>Are devices managed and protected, and is local saving of client files restricted?</li>
        <li>How are files transferred, backed up and deleted at the end of the engagement?</li>
        <li>How quickly will they tell you about a suspected breach, and who is the contact?</li>
        <li>Do they use any sub-processors, and where are those based?</li>
      </ul>

      <h2>6. Record it</h2>
      <p>
        Update your record of processing activities, keep copies of the contract, transfer mechanism
        and risk assessment, and review the arrangement at least once a year or when the scope
        changes.
      </p>

      <h2>How we work</h2>
      <p>
        At ZAH every team member is bound by strict confidentiality agreements, access to client data
        is controlled and we follow documented, GDPR-aligned procedures for handling it. We are happy
        to work inside your systems so your data stays where you can see it. Read more about{" "}
        <Link href="/why-zah-kpo">why firms choose ZAH</Link> or{" "}
        <Link href="/contact">ask us about our data handling</Link>.
      </p>
      <p>
        <em>
          This article is general information, not legal advice. Check the ICO&apos;s current
          guidance and take advice on your own arrangements.
        </em>
      </p>
    </>
  );
}
