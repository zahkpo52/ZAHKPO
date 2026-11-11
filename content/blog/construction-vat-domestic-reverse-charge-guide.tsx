import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "construction-vat-domestic-reverse-charge-guide",
  title: "Construction VAT reverse charge: practical guide",
  description:
    "When the VAT domestic reverse charge applies to building and construction services, the end-user exclusions, invoice wording and how to report it.",
  category: "VAT",
  date: "2026-11-11",
  readingTime: 6,
  related: ["/services/vat-returns", "/services/cis-returns", "/services/bookkeeping"],
};

export default function Body() {
  return (
    <>
      <p>
        The VAT domestic reverse charge for building and construction services has applied since
        1 March 2021, but it still causes more VAT errors in construction clients&apos; books than
        almost anything else. Here is a practical checklist for practices.
      </p>

      <h2>When the reverse charge applies</h2>
      <p>The supplier must use the reverse charge when all of these are true:</p>
      <ul>
        <li>Both the supplier and the customer are registered for VAT in the UK.</li>
        <li>The payment is reported under the Construction Industry Scheme (CIS).</li>
        <li>The services are standard-rated or reduced-rated.</li>
        <li>The customer is not an end user or intermediary supplier (see below).</li>
      </ul>
      <p>It does not apply to employment businesses supplying staff or workers.</p>

      <h2>End users and intermediary suppliers</h2>
      <p>
        An <strong>end user</strong> is a VAT- and CIS-registered business that does not make
        onward supplies of the construction services it buys - for example a property developer
        building for its own use. An <strong>intermediary supplier</strong> is connected to an end
        user, either through an interest in the same land or by being in the same corporate group.
        In both cases the customer should confirm its status in writing, and the supplier then
        charges VAT in the normal way.
      </p>

      <h2>The 5% disregard</h2>
      <p>
        Where the reverse-charge element is 5% or less of the total value of a supply, it can be
        ignored and normal VAT charged. This has to be agreed at the start, based on the overall
        contract value - not decided invoice by invoice.
      </p>

      <h2>What the invoice must show</h2>
      <p>
        The invoice needs the usual VAT invoice details plus a clear note that the domestic reverse
        charge applies - for example &quot;Reverse charge: VAT Act 1994 Section 55A applies&quot; or
        &quot;Customer to pay the VAT to HMRC&quot;. It should show the VAT rate or amount due under
        the reverse charge, but that VAT must not be added to the amount the customer pays.
      </p>

      <h2>How each side reports it</h2>
      <ul>
        <li>
          <strong>Supplier:</strong> includes the net value of the sale on the VAT return (box 6) but
          no output tax.
        </li>
        <li>
          <strong>Customer:</strong> accounts for the output VAT (box 1), reclaims it as input tax
          (box 4) if entitled to, and includes the net purchase in box 7 - not as a sale.
        </li>
      </ul>

      <h2>Scheme points that catch people out</h2>
      <ul>
        <li>The cash accounting scheme cannot be used for reverse-charge supplies or purchases.</li>
        <li>
          Flat rate scheme users exclude reverse-charge sales from their flat rate turnover, and
          account for and reclaim VAT on reverse-charge purchases outside the flat rate calculation.
        </li>
        <li>
          Suppliers who mainly make reverse-charge sales can end up in a regular repayment position,
          so monthly VAT returns may help cash flow.
        </li>
      </ul>

      <h2>A quick review checklist</h2>
      <ol>
        <li>Check each construction customer&apos;s VAT and CIS status and keep end-user notices on file.</li>
        <li>Confirm sales invoices carry the reverse charge wording and no VAT is collected.</li>
        <li>Check purchase invoices from subcontractors are posted with the reverse charge tax code.</li>
        <li>Review the VAT return boxes against the reverse-charge reports in the software.</li>
      </ol>

      <h2>How ZAH can help</h2>
      <p>
        Our <Link href="/services/vat-returns">VAT returns</Link>,{" "}
        <Link href="/services/cis-returns">CIS returns</Link> and{" "}
        <Link href="/services/bookkeeping">bookkeeping</Link> teams check reverse-charge coding every
        quarter and flag anything that needs your judgement before the return is filed.{" "}
        <Link href="/contact">Talk to us</Link> about your construction clients.
      </p>
      <p>
        <em>General information based on HMRC guidance at the time of writing - always check the latest GOV.UK guidance.</em>
      </p>
    </>
  );
}
