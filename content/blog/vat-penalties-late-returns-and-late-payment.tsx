import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "vat-penalties-late-returns-and-late-payment",
  title: "VAT penalties: late returns and late payment",
  description:
    "How HMRC's VAT penalty points and late payment penalties work: thresholds by filing frequency, the £200 penalty, how points are removed and the 3% charges.",
  category: "VAT",
  date: "2026-11-25",
  readingTime: 5,
  related: ["/services/vat-returns", "/services/bookkeeping", "/services/tax-registrations"],
};

export default function Body() {
  return (
    <>
      <p>
        The old VAT default surcharge has gone. For VAT accounting periods starting on or after 1
        January 2023, HMRC uses two separate regimes: penalty points for returns filed late, and
        late payment penalties for VAT paid late. A client can be caught by one, the other or both,
        so it is worth knowing exactly how each works.
      </p>

      <h2>The deadline</h2>
      <p>
        A VAT return must be sent, and the VAT paid, by 1 month and 7 days after the end of the VAT
        period.
      </p>

      <h2>Late returns: penalty points</h2>
      <p>
        Each late return earns one penalty point. This includes nil returns and repayment returns,
        so a late return that owes nothing still counts. When the client reaches the threshold for
        their filing frequency, HMRC charges a £200 penalty, and another £200 for every further late
        return while they stay at the threshold.
      </p>
      <ul>
        <li>Annual returns: threshold of 2 points.</li>
        <li>Quarterly returns: threshold of 4 points.</li>
        <li>Monthly returns: threshold of 5 points.</li>
      </ul>

      <h2>How points are removed</h2>
      <p>
        Below the threshold, each point expires on its own, roughly two years after the month of the
        missed deadline. Once a client is at the threshold, points only come off when both of these
        are met:
      </p>
      <ul>
        <li>
          A period of compliance with every return on time: 24 months for annual filers, 12 months
          for quarterly filers and 6 months for monthly filers.
        </li>
        <li>All outstanding returns for the previous 24 months have been submitted.</li>
      </ul>
      <p>
        Filing on time while at the threshold avoids a new £200 penalty but does not remove the
        points by itself.
      </p>

      <h2>Late payment penalties</h2>
      <ul>
        <li>Paid in full within 15 days of the due date: no penalty.</li>
        <li>Paid between day 16 and day 30: 3% of the VAT owed at day 15.</li>
        <li>
          Still unpaid after day 30: 3% of what was owed at day 15 plus 3% of what was owed at day
          30, and a second penalty at a daily rate of 10% a year on the balance from day 31.
        </li>
      </ul>
      <p>
        These rates were increased in 2025; earlier periods used 2% and 4% a year. Late payment
        penalties do not apply to VAT payments on account or to instalments under the Annual
        Accounting Scheme.
      </p>

      <h2>Time to Pay and interest</h2>
      <p>
        A client who cannot pay can propose a Time to Pay arrangement at any time, and if HMRC agrees
        it can mean lower or no late payment penalties. If the arrangement is broken, HMRC can charge
        the penalties as if it had never been agreed. Separately, late payment interest is charged
        from the first day the VAT is overdue until it is paid, at the Bank of England base rate plus
        4%.
      </p>

      <h2>A simple control for practices</h2>
      <ul>
        <li>Diary every VAT client&apos;s period end and the 1 month and 7 days deadline, including nil returns.</li>
        <li>Check each client&apos;s penalty points in their VAT online account at least once a quarter.</li>
        <li>Treat any client at the threshold as high priority until the period of compliance is complete.</li>
        <li>Where a client cannot pay, raise Time to Pay before day 15 rather than after.</li>
        <li>Ask clients to send records early so the return is filed on time even if payment is tight.</li>
      </ul>

      <h2>How ZAH can help</h2>
      <p>
        We prepare <Link href="/services/vat-returns">VAT returns</Link> and keep the{" "}
        <Link href="/services/bookkeeping">books</Link> behind them for UK practices, with every
        client&apos;s VAT deadline tracked in ZAH Nexus so nothing slips into penalty points.{" "}
        <Link href="/contact">Talk to us</Link> about taking on part of your VAT workload.
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
