import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "corporation-tax-deadlines-pay-file-penalties",
  title: "Corporation Tax deadlines: pay, file, penalties",
  description:
    "Corporation Tax is due 9 months and 1 day after the period ends and the CT600 at 12 months: key dates, interest and the higher 2026 late filing penalties.",
  category: "Corporation Tax",
  date: "2026-11-25",
  readingTime: 5,
  related: ["/services/corporation-tax", "/services/year-end-accounts", "/services/ixbrl-tagging"],
};

export default function Body() {
  return (
    <>
      <p>
        Corporation Tax has an unusual shape: the tax is due before the return. Clients who wait for
        the Company Tax Return to find out what they owe often pay late without realising it. Here
        is how the deadlines fit together, what late payment and late filing now cost, and a simple
        control for your practice.
      </p>

      <h2>The three company deadlines</h2>
      <ul>
        <li>
          <strong>Pay Corporation Tax:</strong> 9 months and 1 day after the end of the accounting
          period, for companies with taxable profits up to £1.5 million.
        </li>
        <li>
          <strong>File the Company Tax Return (CT600):</strong> 12 months after the end of the
          accounting period it covers. Returns must be filed online.
        </li>
        <li>
          <strong>File annual accounts with Companies House:</strong> 9 months after the financial
          year ends, or 21 months after incorporation for a company&apos;s first accounts.
        </li>
      </ul>
      <p>
        The accounting period for Corporation Tax is usually the same as the company&apos;s financial
        year, but a company can have two accounting periods in the year it is set up.
      </p>

      <h2>A worked example</h2>
      <p>For a company with a 31 March 2026 year end:</p>
      <ul>
        <li>Accounts to Companies House by 31 December 2026.</li>
        <li>Corporation Tax paid on or before 1 January 2027.</li>
        <li>Company Tax Return filed by 31 March 2027.</li>
      </ul>
      <p>
        Our free <Link href="/uk-tax-deadlines">UK tax deadline calculator</Link> works these dates
        out for any year end.
      </p>

      <h2>Large companies pay earlier</h2>
      <p>
        Companies with taxable profits over £1.5 million pay by quarterly instalments instead.
        Separate rules apply between £1.5 million and £20 million and, for very large companies,
        above £20 million, so check these clients early in the year rather than at the year end.
      </p>

      <h2>Making the payment on time</h2>
      <ul>
        <li>
          If the deadline falls on a weekend or bank holiday, the payment must reach HMRC by the last
          working day before it, unless it is sent by Faster Payments.
        </li>
        <li>Faster Payments, CHAPS, card payments and paying through the bank usually arrive the same or next day.</li>
        <li>Bacs and an existing Direct Debit take 3 working days; a new Direct Debit takes 5.</li>
        <li>Corporation Tax cannot be paid by post.</li>
      </ul>

      <h2>Interest on late payment</h2>
      <p>
        HMRC charges late payment interest from the due date. Since 6 April 2025 the rate has been
        the Bank of England base rate plus 4% (it was base rate plus 2.5% before). If a company pays
        early, HMRC may pay it interest instead.
      </p>

      <h2>Late filing penalties, higher from April 2026</h2>
      <p>
        Fixed late filing penalties increased for returns with a filing date on or after 1 April
        2026:
      </p>
      <ul>
        <li>1 day late: £200 (previously £100).</li>
        <li>More than 3 months late: £400 in total (previously £200).</li>
        <li>Late for the third time in a row: £1,000, or £2,000 if more than 3 months late (previously £500 and £1,000).</li>
      </ul>
      <p>
        On top of these, if the return is 6 months late HMRC estimates the tax due (a &lsquo;tax
        determination&rsquo;, which cannot be appealed) and adds 10% of the unpaid tax, with a further
        10% at 12 months. A company with a reasonable excuse can appeal a penalty, but only after it
        has filed the return.
      </p>

      <h2>A simple control for practices</h2>
      <ul>
        <li>Diary three dates for every company client: Companies House, payment and CT600.</li>
        <li>Aim to finalise the accounts and tax computation before the 9-month payment date, not the 12-month filing date.</li>
        <li>Where the final figure is not ready, have the client pay an estimate to stop interest building up.</li>
        <li>Flag any client whose profits may go over £1.5 million so instalments are not missed.</li>
        <li>Keep a note of who has been late before, as a third late return now costs £1,000 or more.</li>
      </ul>

      <h2>How ZAH can help</h2>
      <p>
        We prepare <Link href="/services/year-end-accounts">year-end accounts</Link>, tax
        computations and <Link href="/services/corporation-tax">Corporation Tax returns</Link> for UK
        practices, with every deadline tracked in ZAH Nexus so the payment date is not lost behind
        the filing date. <Link href="/contact">Talk to us</Link> about taking some of your company
        work this year end.
      </p>
      <p>
        <em>
          This guide summarises GOV.UK and HMRC guidance as at November 2026. Always check the
          current rules on GOV.UK before advising a client.
        </em>
      </p>
    </>
  );
}
