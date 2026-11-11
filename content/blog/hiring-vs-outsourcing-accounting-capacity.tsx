import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "hiring-vs-outsourcing-accounting-capacity",
  title: "Hiring vs outsourcing for UK accountancy firms",
  description:
    "Recruiting is slow and the work is seasonal. A practical comparison of hiring in-house and outsourcing - and when a mix of both works best for UK firms.",
  category: "Outsourcing",
  date: "2026-11-11",
  readingTime: 5,
  related: ["/services", "/services/bookkeeping", "/services/year-end-accounts"],
};

export default function Body() {
  return (
    <>
      <p>
        Most UK practices are not short of work - they are short of people to do it. When the backlog
        builds, the instinct is to recruit. Sometimes that is right, but it is not the only option.
        Here is how hiring and outsourcing compare.
      </p>

      <h2>Speed</h2>
      <p>
        Recruiting a qualified accountant can take months between advertising, interviews, notice
        periods and training. An outsourcing partner that already has trained staff can usually
        start on a pilot batch within weeks, which matters when deadlines are fixed.
      </p>

      <h2>Cost and flexibility</h2>
      <p>
        A new hire is a fixed cost all year - salary, employer&apos;s National Insurance, pension,
        software, training and management time - whether January is busy or quiet. Outsourcing turns
        most of that into a variable cost that follows the work, so you can scale up for year-end and
        Self Assessment season and back down afterwards.
      </p>

      <h2>Quality and control</h2>
      <p>
        In-house staff learn your clients and your way of working over time. A good outsourcing
        partner closes that gap by working in your software, to your templates and through a
        documented process with its own review. Your firm keeps the final review and the client
        relationship either way.
      </p>

      <h2>Where in-house wins</h2>
      <p>
        Client-facing roles, advisory work, complex judgement and anything that relies on knowing the
        client personally are usually best kept in-house. These are also the roles that are most
        rewarding for your team and most valuable to your clients.
      </p>

      <h2>The mixed model</h2>
      <p>
        Many growing practices now combine the two: an in-house team that owns the client
        relationship, the review and the advice, supported by an outsourced team that prepares the
        process-driven work - bookkeeping, VAT, payroll, year-end accounts and tax returns. It adds
        capacity without the recruitment risk and gives your people more time for the work that
        grows the firm.
      </p>

      <h2>Questions to ask before you decide</h2>
      <ul>
        <li>Is the extra work steady through the year, or seasonal?</li>
        <li>Which tasks need client contact, and which can be prepared for review?</li>
        <li>How much manager time goes on training and supervising new staff today?</li>
        <li>What would your team do with the hours an outsourced team frees up?</li>
      </ul>

      <h2>How ZAH fits</h2>
      <p>
        ZAH works as the back office for UK accountancy firms across{" "}
        <Link href="/services">bookkeeping, accounts, tax, payroll and audit support</Link>. We
        work in your systems, every deliverable is reviewed before it reaches you, and you can start
        with a small batch - for example{" "}
        <Link href="/services/bookkeeping">monthly bookkeeping</Link> or{" "}
        <Link href="/services/year-end-accounts">year-end accounts</Link> - and grow from there.{" "}
        <Link href="/contact">Book a discovery call</Link> to talk it through.
      </p>
    </>
  );
}
