import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "vat-registration-threshold-tests-explained",
  title: "VAT registration threshold: the £90,000 tests",
  description:
    "How the £90,000 VAT registration threshold works for UK clients: the 12-month look-back, the 30-day look-forward, what counts and the dates to register.",
  category: "VAT",
  date: "2026-11-16",
  readingTime: 5,
  related: ["/services/tax-registrations", "/services/vat-returns", "/services/bookkeeping"],
};

export default function Body() {
  return (
    <>
      <p>
        Late VAT registration is one of the easiest problems for a practice to miss and one of the
        most expensive for a client to fix. Growing clients rarely tell you the day they cross the
        line, so it pays to understand exactly how the two registration tests work and to check them
        as part of routine bookkeeping.
      </p>

      <h2>The threshold</h2>
      <p>
        A business must register for VAT if its VAT taxable turnover goes over £90,000. Businesses
        below that level can choose to register voluntarily.
      </p>

      <h2>Test 1: the 12-month look-back</h2>
      <p>
        A business must register if its total taxable turnover for the last 12 months goes over
        £90,000. This is a rolling test, not a tax-year or accounting-year test, so it needs checking
        at the end of every month.
      </p>
      <ul>
        <li>Register within 30 days of the end of the month in which the threshold was exceeded.</li>
        <li>The effective date of registration is the first day of the second month after that.</li>
        <li>
          GOV.UK&apos;s example: turnover passes £90,000 on 15 July, so the business registers by 30
          August and is registered from 1 September.
        </li>
      </ul>

      <h2>Test 2: the 30-day look-forward</h2>
      <p>
        A business must also register if it expects its taxable turnover to go over £90,000 in the
        next 30 days alone. This catches the client who signs one large contract.
      </p>
      <ul>
        <li>Register by the end of that 30-day period.</li>
        <li>The effective date is the date the business realised it would go over, not the date it actually did.</li>
        <li>
          GOV.UK&apos;s example: a £100,000 contract is agreed on 1 May, so the business applies by 30
          May and is registered from 1 May.
        </li>
      </ul>

      <h2>What counts as taxable turnover</h2>
      <p>
        Taxable turnover is everything the business sells that is not VAT exempt or outside the
        scope of VAT. That includes zero-rated and reduced-rated sales as well as standard-rated
        ones, goods hired or loaned to customers, business goods used for personal reasons and
        services received from overseas businesses under the reverse charge. Exempt and out-of-scope
        sales do not count towards the threshold.
      </p>

      <h2>If the threshold is only crossed temporarily</h2>
      <p>
        Where turnover goes over £90,000 only temporarily, the business can apply to HMRC for an
        exception from registration. HMRC considers the application and writes to confirm the
        outcome; if an exception is not granted, the business is registered.
      </p>

      <h2>Businesses based outside the UK</h2>
      <p>
        There is no threshold for a business based outside the UK that supplies goods or services
        in the UK, or expects to within the next 30 days. It must register whatever its turnover,
        unless all of its taxable supplies are zero-rated and it qualifies for exemption.
      </p>

      <h2>A simple monthly control for practices</h2>
      <ul>
        <li>For every unregistered client, keep a rolling 12-month total of taxable sales from the ledger.</li>
        <li>Flag anyone above about 80% of the threshold so you can talk to them before they cross it.</li>
        <li>Ask about large contracts or orders expected in the next 30 days.</li>
        <li>Exclude exempt and out-of-scope income only where you have checked the treatment.</li>
        <li>Record the date each test was checked, so the file shows why registration was or was not needed.</li>
      </ul>

      <h2>How ZAH can help</h2>
      <p>
        When we keep your clients&apos; <Link href="/services/bookkeeping">books</Link> we can run the
        rolling threshold check every month and flag anyone getting close, and our{" "}
        <Link href="/services/tax-registrations">tax registrations</Link> and{" "}
        <Link href="/services/vat-returns">VAT returns</Link> services pick up from there.{" "}
        <Link href="/contact">Talk to us</Link> about adding it to your monthly workflow.
      </p>
      <p>
        <em>
          This guide summarises GOV.UK guidance as at November 2026. Always check the current rules
          on GOV.UK before advising a client.
        </em>
      </p>
    </>
  );
}
