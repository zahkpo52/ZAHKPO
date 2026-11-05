import Link from "next/link";

import type { BlogMeta } from "@/types/content";

export const meta: BlogMeta = {
  slug: "does-ir35-apply-to-non-uk-companies",
  title: "Does IR35 apply to non-UK companies?",
  description:
    "IR35 and the overseas question explained in plain terms - when the off-payroll rules bite, when they don't, and where it gets complicated.",
  category: "IR35",
  date: "2025-08-21",
  readingTime: 5,
  related: ["/services/personal-tax", "/services/corporation-tax"],
};

export default function Body() {
  return (
    <>
      <p>
        IR35 - the off-payroll working rules - is one of the most misunderstood areas of UK tax,
        especially when there&apos;s a cross-border element. This is general guidance, not advice on
        a specific arrangement, but it should help frame the question.
      </p>

      <h2>What IR35 is actually about</h2>
      <p>
        At its core, IR35 asks a simple question: if you stripped away the intermediary (typically a
        personal service company), would the worker look like an employee of the client? If yes, the
        engagement is &ldquo;inside&rdquo; IR35 and should be taxed broadly like employment.
      </p>

      <h2>The overseas question</h2>
      <p>
        Where the end client is based matters. Broadly, the responsibility for assessing status and
        operating the rules sits with the UK-based party in the chain. When the end client is wholly
        overseas with no UK presence, the obligation to make a status determination may not fall on
        them in the same way - which can shift responsibility back to the worker&apos;s own company.
      </p>
      <p>
        That is not the same as &ldquo;IR35 doesn&apos;t apply&rdquo;. It changes <em>who</em> is
        responsible, not necessarily whether the underlying rules are relevant.
      </p>

      <h2>Where it gets complicated</h2>
      <ul>
        <li>A UK branch or fixed presence of an overseas client can bring obligations back into scope.</li>
        <li>Agencies and other intermediaries in the chain can change who is responsible.</li>
        <li>Company size tests determine whether the client or the worker makes the determination.</li>
      </ul>

      <h2>The practical takeaway</h2>
      <p>
        Cross-border contracting is exactly the situation where assumptions get expensive. The safe
        move is to document the working arrangement clearly and get the status assessed properly for
        the specific facts.
      </p>
      <p>
        Our team can help with the personal and corporate side of this through our{" "}
        <Link href="/services/personal-tax">personal tax</Link> and{" "}
        <Link href="/services/corporation-tax">corporation tax</Link> services - and point you to
        specialist status advice where a determination is needed.
      </p>
    </>
  );
}
