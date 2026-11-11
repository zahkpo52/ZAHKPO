import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "companies-house-identity-verification-guide",
  title: "Companies House ID verification: a guide for firms",
  description:
    "Who must verify their identity with Companies House, when, and how - plus how accountancy practices can help directors and PSCs get it done on time.",
  category: "Company Secretarial",
  date: "2026-11-11",
  readingTime: 5,
  related: ["/services/business-setup", "/services/corporate-due-diligence", "/services/tax-registrations"],
};

export default function Body() {
  return (
    <>
      <p>
        Identity verification is now a legal requirement at Companies House. For accountancy
        practices it means a wave of client questions, blocked filings and a new piece of work to
        manage across the whole client list. Here is what practices need to know.
      </p>

      <h2>Who has to verify</h2>
      <p>
        Since 18 November 2025, identity verification has applied to company directors (including
        LLP members) and people with significant control (PSCs). A new director must verify before
        they can be appointed, and anyone forming a new company must do the same.
      </p>

      <h2>When existing directors and PSCs must verify</h2>
      <ul>
        <li>
          <strong>Existing directors:</strong> each director&apos;s personal code must be provided
          with the company&apos;s next confirmation statement. A company cannot file its confirmation
          statement until all of its directors are verified.
        </li>
        <li>
          <strong>PSCs who are also directors:</strong> the PSC verification is due within 14 days
          starting from the day after the company&apos;s confirmation statement date.
        </li>
        <li>
          <strong>PSCs who are not directors:</strong> they verify within the first 14 days of their
          birth month.
        </li>
        <li>
          <strong>New PSCs:</strong> when they are added to the register, or within 14 days of being
          added.
        </li>
      </ul>

      <h2>How to verify</h2>
      <p>There are two routes:</p>
      <ol>
        <li>
          <strong>Directly with Companies House</strong>, using the free GOV.UK One Login service.
        </li>
        <li>
          <strong>Through an Authorised Corporate Service Provider (ACSP)</strong> - for example an
          accountant registered with Companies House and supervised for anti-money laundering.
        </li>
      </ol>
      <p>
        Either way, the person receives a unique <strong>personal code</strong>. It is needed for
        confirmation statements, director appointments and PSC filings, and should be kept as
        securely as a UTR.
      </p>

      <h2>What happens if someone does not verify</h2>
      <p>
        Companies House can treat it as an offence, with a fine or financial penalty, and may note it
        against the person&apos;s name on the public register. In practice the first problem most
        clients hit is simpler: the confirmation statement cannot be filed.
      </p>

      <h2>A practical plan for your practice</h2>
      <ol>
        <li>List every client company with its confirmation statement date and every director and PSC.</li>
        <li>Record who is already verified and who holds a personal code.</li>
        <li>Work back from each confirmation statement date and contact clients well in advance.</li>
        <li>Decide whether your firm will verify clients as an ACSP or guide them through GOV.UK One Login.</li>
        <li>Collect personal codes securely and keep the tracker current as directors change.</li>
      </ol>

      <h2>How ZAH can help</h2>
      <p>
        Our <Link href="/services/business-setup">business setup and support</Link> and{" "}
        <Link href="/services/corporate-due-diligence">due diligence</Link> teams can build and run
        the tracker for your client list, prepare the reminders and organise the information
        directors need - so your team only handles the decisions.{" "}
        <Link href="/contact">Talk to us</Link>.
      </p>
      <p>
        <em>Based on Companies House guidance at the time of writing. Always check the latest GOV.UK guidance.</em>
      </p>
    </>
  );
}
