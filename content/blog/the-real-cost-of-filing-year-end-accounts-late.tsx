import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "the-real-cost-of-filing-year-end-accounts-late",
  title: "The real cost of filing year-end accounts late",
  description:
    "Companies House penalties escalate fast - and the financial hit is only part of the story. Here's what late filing actually costs and how to avoid it.",
  category: "Year-End Accounts",
  date: "2025-12-01",
  readingTime: 4,
  related: ["/services/year-end-accounts", "/services/management-accounts"],
};

export default function Body() {
  return (
    <>
      <p>
        Missing a filing deadline rarely happens on purpose. It&apos;s usually a busy season, a late
        set of records, or a deadline that crept up. But Companies House penalties don&apos;t care
        about the reason - and they escalate quickly.
      </p>

      <h2>How the penalties stack up</h2>
      <p>For a private company, late filing of annual accounts currently attracts:</p>
      <ul>
        <li>Up to 1 month late - £150</li>
        <li>1 to 3 months late - £375</li>
        <li>3 to 6 months late - £750</li>
        <li>More than 6 months late - £1,500</li>
      </ul>
      <p>
        And there&apos;s a sting in the tail: if accounts are filed late in two successive years, the
        penalty is doubled. What started as an oversight can become a meaningful, recurring cost.
      </p>

      <h2>It&apos;s not just the fine</h2>
      <p>
        The penalty is the visible cost. The hidden ones often hurt more: time lost scrambling to
        pull records together, the stress that radiates through a small team, and the reputational
        risk - late filings are on the public record and can affect how lenders and partners view a
        business.
      </p>

      <h2>How to never miss again</h2>
      <p>
        The fix is rarely &ldquo;work harder in January&rdquo;. It&apos;s building a process that
        starts earlier and runs to a fixed timetable:
      </p>
      <ul>
        <li>Keep bookkeeping current so year-end isn&apos;t a reconstruction job.</li>
        <li>Agree a clear schedule with deadlines well before the statutory date.</li>
        <li>Use a two-level review so accuracy doesn&apos;t depend on one person&apos;s availability.</li>
      </ul>
      <p>
        That&apos;s the model behind our{" "}
        <Link href="/services/year-end-accounts">year-end accounts</Link> service: predictable
        turnaround, reviewed output and filing handled before the clock runs out. Keeping{" "}
        <Link href="/services/management-accounts">management accounts</Link> current through the year
        makes the year-end close almost a formality.
      </p>
    </>
  );
}
