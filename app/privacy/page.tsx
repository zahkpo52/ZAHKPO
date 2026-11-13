import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "How ZAH KPO (Zah Professional Services Private Limited) collects, uses and protects personal information through its website, and your rights under UK GDPR.",
  path: "/privacy",
  keywords: ["privacy notice", "data protection", "UK GDPR"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Notice" }];

/** Website privacy notice - published from framework document DP03 v1.0 (effective 20 September 2026). */
export default function PrivacyPage() {
  const email = siteConfig.contact.khOffice.email;
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Notice"
        description="Version 1.0, effective 20 September 2026. How we collect, use and protect personal information through this website, and the rights you have."
        crumbs={crumbs}
      />

      <Section>
        <Container>
          <Prose>
            <h2>1. Who we are</h2>
            <p>
              Zah Professional Services Private Limited, trading as ZAH KPO (&ldquo;ZAH KPO&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;), provides outsourced accounting and KPO services - including bookkeeping, year-end
              accounts, tax return support, payroll, VAT, audit support and management accounts - to accounting
              firms. Our registered office is GF, First Floor, Radhavallabh Market, Khargone, Madhya Pradesh -
              451001, India.
            </p>
            <p>
              For website visitors and people who contact us, we act as a data controller for the personal
              information we collect for our own business purposes. Where we process personal data on behalf of a
              client as part of our services, we act as a processor under a written contract with that client -
              see <Link href="/gdpr">UK GDPR</Link>.
            </p>

            <h2>2. Information we collect</h2>
            <p>Information you give us, such as:</p>
            <ul>
              <li>your name, job title and company;</li>
              <li>business email address and telephone number;</li>
              <li>the content of enquiries and messages, and the services you are interested in;</li>
              <li>information you provide when asking for a quote or a consultation.</li>
            </ul>
            <p>
              Information collected automatically when you visit, depending on your cookie choices: IP address,
              browser and device type, operating system, approximate location derived from technical data, pages
              visited, date and time of visits, referring website and diagnostic information. We limit this to what
              is reasonably necessary.
            </p>

            <h2>3. How we use it</h2>
            <ul>
              <li>to respond to enquiries and provide information about our services;</li>
              <li>to prepare quotes and proposals and arrange meetings;</li>
              <li>to establish and manage business relationships;</li>
              <li>to keep the website secure and prevent misuse or fraud;</li>
              <li>to understand how the website is used and improve it, where you have agreed to analytics;</li>
              <li>to keep business records and meet legal or regulatory obligations.</li>
            </ul>
            <p>We will not use your information for a purpose incompatible with the one it was collected for.</p>

            <h2>4. Our lawful bases</h2>
            <p>
              Depending on the purpose we rely on your <strong>consent</strong> (for example, optional cookies and
              newsletters - you can withdraw it at any time); steps you ask us to take <strong>before or under a
              contract</strong>; <strong>legal obligations</strong>; and our <strong>legitimate interests</strong> in
              responding to business enquiries, maintaining business communications, keeping the website secure and
              improving our services, where those interests are not overridden by your rights.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Essential storage keeps the site working and remembers your cookie choice. Google Analytics and our
              website chat (Botpress) are optional: they load only if you choose &ldquo;Accept optional
              cookies&rdquo;, and stay off if you reject them. You can change your choice at any time with
              &ldquo;Cookie settings&rdquo; in the footer, or through your browser settings.
            </p>

            <h2>6. Who we share it with</h2>
            <p>
              We share personal information only where reasonably necessary - with IT, cloud, hosting, form-handling
              and (if you accept them) analytics providers that support the website and our business; with
              professional advisers; with authorities where the law requires it; and where you ask us to. Where a
              provider processes information for us, we put appropriate contractual and security measures in place.
              We do not sell personal information.
            </p>

            <h2>7. International transfers</h2>
            <p>
              We are based in India and some of our service providers operate in other countries. Where data
              protection law requires safeguards for international transfers - including for personal information
              from the UK - we use an appropriate legal transfer mechanism and any supplementary measures needed.
            </p>

            <h2>8. How we protect it</h2>
            <p>
              We use technical and organisational measures including access controls, multi-factor authentication,
              encrypted company devices, secure business cloud services, staff confidentiality obligations and
              training, backup and recovery, secure disposal and incident response procedures. No method of
              transmission or storage is completely secure, but we take measures appropriate to the risk. See{" "}
              <Link href="/security">Security &amp; quality</Link>.
            </p>

            <h2>9. How long we keep it</h2>
            <p>
              Only as long as reasonably necessary for the purpose it was collected for, or longer where the law
              requires or permits it (for example, accounting records or legal claims). After that it is securely
              deleted or destroyed under our retention and disposal procedures.
            </p>

            <h2>10. Your rights</h2>
            <p>
              Subject to the law and the circumstances, you can ask to access, correct or delete your personal
              information, restrict or object to its processing, receive it in a portable format, and withdraw
              consent where we rely on it. Contact us at <a href={`mailto:${email}`}>{email}</a>.
            </p>

            <h2>11. Marketing</h2>
            <p>
              We send marketing only in line with privacy and electronic marketing rules, with consent where it is
              required. You can unsubscribe at any time.
            </p>

            <h2>12. Children</h2>
            <p>
              Our website is intended for business users. We do not knowingly collect personal information from
              children.
            </p>

            <h2>13. Data breaches</h2>
            <p>
              If a personal data breach affects information collected through this website, we manage it under our
              breach response policy and make any notifications that the law or our contracts require.
            </p>

            <h2>14. Other websites</h2>
            <p>We are not responsible for the privacy practices of websites we link to.</p>

            <h2>15. Changes</h2>
            <p>We review this notice at least once a year. The latest version is always on this page.</p>

            <h2>16. Contact and complaints</h2>
            <p>
              Zah Professional Services Private Limited, trading as ZAH KPO - GF, First Floor, Radhavallabh Market,
              Khargone, Madhya Pradesh - 451001, India. Email <a href={`mailto:${email}`}>{email}</a>. Our Data
              Protection Lead is Mustafa Bag.
            </p>
            <p>
              Please contact us first if you have a concern so we can put it right. Where UK data protection law
              applies, you also have the right to complain to the Information Commissioner&apos;s Office (
              <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer" target="_blank">
                ico.org.uk
              </a>
              ).
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
