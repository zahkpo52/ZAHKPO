import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Website Terms and Free Trial Terms",
  description: "Terms of use for zahkpo.com and the terms of the ZAH KPO three free trial jobs offer for UK accounting firms.",
  path: "/terms",
  keywords: ["terms of use", "free trial terms"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description="Terms of use for this website, and the terms of our three free trial jobs offer. Last updated 13 November 2026."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <Prose>
            <h2 id="free-trial">Three free trial jobs</h2>
            <ul>
              <li>The offer is for UK accounting firms that have not worked with ZAH KPO before - one offer per firm.</li>
              <li>You choose any three jobs from our services. We agree the scope of each job with you in writing before we start.</li>
              <li>
                Before you share any client data, we sign a data processing agreement and the UK transfer agreement with your
                firm - see <Link href="/gdpr">UK GDPR</Link>.
              </li>
              <li>The trial jobs are free of charge, and there is no obligation to continue afterwards.</li>
              <li>Your firm stays responsible for reviewing the work and for anything filed with HMRC or Companies House.</li>
              <li>We may change or withdraw the offer for new requests at any time; agreed trial jobs will still be completed.</li>
            </ul>
            <p>
              To claim the offer, <Link href="/contact?offer=free-trial">tell us about your practice</Link> and we will arrange a
              short discovery call.
            </p>

            <h2>Using this website</h2>
            <p>
              This website is run by Zah Professional Services Private Limited, trading as ZAH KPO, GF, First Floor,
              Radhavallabh Market, Khargone, Madhya Pradesh - 451001, India. By using it you accept these terms.
            </p>
            <h3>Information on the site</h3>
            <p>
              Our articles, guides and tools - including the tax deadlines calendar - are general information for accounting
              professionals, not advice for a particular situation. We work to keep them accurate, but rules and dates change, so
              please check the official HMRC and Companies House sources before relying on them.
            </p>
            <h3>Our services</h3>
            <p>Any work we do for your firm is governed by our signed engagement documents, not by this website.</p>
            <h3>Intellectual property</h3>
            <p>
              The content, design and logos on this website belong to ZAH KPO unless stated otherwise. Software names and logos
              belong to their owners and are shown only to describe the software we work with.
            </p>
            <h3>Links</h3>
            <p>We are not responsible for the content of other websites we link to.</p>
            <h3>Privacy</h3>
            <p>
              How we handle personal information is explained in our <Link href="/privacy">privacy notice</Link>.
            </p>
            <h3>Contact</h3>
            <p>
              Questions about these terms: <a href="mailto:info@zahkpo.com">info@zahkpo.com</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
