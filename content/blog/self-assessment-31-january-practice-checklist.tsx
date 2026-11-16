import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "self-assessment-31-january-practice-checklist",
  title: "Self Assessment 31 January: a practice checklist",
  description:
    "Key Self Assessment dates for 2025/26 returns, the penalties for late filing and payment, and a practical checklist to get through the January peak.",
  category: "Tax",
  date: "2026-11-16",
  readingTime: 5,
  related: ["/services/personal-tax", "/services/bookkeeping"],
};

export default function Body() {
  return (
    <>
      <p>
        For most UK practices, January is the busiest month of the year. The returns themselves are
        rarely difficult; the pressure comes from late records, client queries and a fixed deadline.
        Here are the dates and penalties to plan around, and a checklist to spread the work out.
      </p>

      <h2>The key dates for 2025/26 returns</h2>
      <ul>
        <li>
          <strong>30 December 2026:</strong> submit the online return by 11:59pm if the client wants
          the tax collected through their PAYE tax code (where they qualify).
        </li>
        <li>
          <strong>31 January 2027:</strong> online returns must be submitted, and the tax paid, by
          11:59pm.
        </li>
        <li>
          <strong>31 July:</strong> the second payment deadline for clients who make payments on
          account.
        </li>
      </ul>
      <p>The paper return deadline (31 October 2026) has already passed.</p>

      <h2>Late filing penalties</h2>
      <ul>
        <li>£100 as soon as the return is late.</li>
        <li>After 3 months, £10 a day, up to a maximum of £900.</li>
        <li>After 6 months, a further 5% of the tax due or £300, whichever is greater.</li>
        <li>After 12 months, another 5% or £300, whichever is greater.</li>
      </ul>

      <h2>Late payment penalties</h2>
      <p>
        HMRC charges a penalty of 5% of the tax unpaid at 30 days, at 6 months and at 12 months, and
        interest is charged on the amount owed. Clients who registered after 5 October and do not pay
        everything by 31 January may also face a penalty based on the amount still owed.
      </p>

      <h2>A checklist for the January peak</h2>
      <ul>
        <li>List every Self Assessment client and mark which records are in, part-received or missing.</li>
        <li>Chase missing records now with one clear list per client, not a series of emails.</li>
        <li>Prepare the simplest returns first so the queue shrinks early.</li>
        <li>Flag clients who want tax collected through PAYE: their deadline is 30 December.</li>
        <li>Estimate each client&apos;s balancing payment early so they can budget for 31 January.</li>
        <li>Keep review time free in the last two weeks for the late arrivals.</li>
      </ul>

      <h2>Where outsourcing helps</h2>
      <p>
        Preparation is the part that scales badly. If a trained team prepares the returns and the
        query lists in your software, your own team can stay on review, client calls and the
        difficult cases. Starting in November or December, rather than mid-January, makes the
        biggest difference.
      </p>

      <h2>How ZAH can help</h2>
      <p>
        Our <Link href="/services/personal-tax">personal tax</Link> service prepares Self Assessment
        returns in your software, with every return checked by a reviewer before it reaches you. See
        all key dates in our <Link href="/uk-tax-deadlines">UK tax deadlines</Link> calendar, or{" "}
        <Link href="/contact">talk to us</Link> about taking some of your January volume.
      </p>
      <p>
        <em>
          Dates and penalties are taken from GOV.UK as at November 2026. Always check the current
          rules on GOV.UK before advising a client.
        </em>
      </p>
    </>
  );
}
