import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "making-tax-digital-income-tax-what-practices-need-to-do",
  title: "MTD for Income Tax: what practices must do now",
  description:
    "MTD for Income Tax started in April 2026 and widens in 2027 and 2028. Who is in scope, the quarterly deadlines and how practices can manage the extra work.",
  category: "Tax",
  date: "2026-11-11",
  readingTime: 6,
  related: ["/services/personal-tax", "/services/bookkeeping", "/services/vat-returns"],
};

export default function Body() {
  return (
    <>
      <p>
        Making Tax Digital for Income Tax is the biggest change to Self Assessment in a generation.
        It is already live for the first group of sole traders and landlords, and the number of
        clients in scope grows each year. Here is what practices need to have in place.
      </p>

      <h2>Who is in scope, and when</h2>
      <ul>
        <li>
          <strong>From 6 April 2026:</strong> sole traders and landlords with qualifying income over
          £50,000.
        </li>
        <li>
          <strong>From 6 April 2027:</strong> qualifying income over £30,000.
        </li>
        <li>
          <strong>From 6 April 2028:</strong> qualifying income over £20,000.
        </li>
      </ul>
      <p>
        Qualifying income is the total gross income from self-employment and property - turnover and
        rents before expenses, not profit. HMRC looks at the Self Assessment return from two tax years
        earlier, so the 2025-26 return decides who joins in April 2027. Check HMRC&apos;s current
        guidance for exemptions and special cases.
      </p>

      <h2>What changes for the client</h2>
      <p>
        Clients in MTD must keep digital records and send a quarterly update to HMRC through
        compatible software. For the standard quarters, updates are due by 7 August, 7 November,
        7 February and 7 May. The year still ends with a final declaration by 31 January, which
        replaces the traditional return.
      </p>

      <h2>What practices need to do</h2>
      <ol>
        <li>
          <strong>Segment your client list.</strong> Use the latest returns to group clients by
          qualifying income and by start date, so you know who joins in each year.
        </li>
        <li>
          <strong>Choose the software.</strong> Decide which MTD-compatible products you will support
          and move clients still on spreadsheets or paper records early.
        </li>
        <li>
          <strong>Sort out authorisations.</strong> Make sure you are authorised to act for each
          client for MTD for Income Tax through your agent services account.
        </li>
        <li>
          <strong>Reprice the work.</strong> Four updates a year plus a final declaration is more work
          than one annual return. Agree new fees and engagement letters before the first quarter.
        </li>
        <li>
          <strong>Plan the capacity.</strong> Quarterly deadlines turn a January peak into four
          smaller peaks plus the final declaration. Map out who will do the bookkeeping and updates
          each quarter.
        </li>
      </ol>

      <h2>Where outsourcing helps</h2>
      <p>
        The new work is mostly regular, process-driven bookkeeping and quarterly updates - exactly the
        kind of work that can be prepared by a trained outsourced team for your review. That keeps
        your own staff on advice and the final declaration. Our{" "}
        <Link href="/services/bookkeeping">bookkeeping</Link> and{" "}
        <Link href="/services/personal-tax">personal tax</Link> teams can keep clients&apos; digital
        records up to date and prepare quarterly updates and returns, alongside{" "}
        <Link href="/services/vat-returns">MTD VAT returns</Link>.{" "}
        <Link href="/contact">Talk to us</Link> about your MTD client list.
      </p>
      <p>
        <em>
          Thresholds and dates are as published by HMRC at the time of writing. Always check the
          latest GOV.UK guidance.
        </em>
      </p>
    </>
  );
}
