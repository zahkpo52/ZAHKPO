import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How ZAH KPO collects, uses and protects your personal data, your rights under UK GDPR, and how to contact us about privacy.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "UK GDPR"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated 25 March 2026. This policy explains what personal data we collect, why, and the rights you have over it."
        crumbs={crumbs}
        image={{ src: "/images/city-skyline.jpg", mobileSrc: "/images/mobile/city-skyline-mobile.jpg" }}
      />

      <Section>
        <Container>
          <Prose>
            <h2>Information we collect</h2>
            <p>
              We collect information you give us directly - such as your name, company, email and
              phone number when you contact us or request a service - along with technical data like
              usage information and cookies gathered automatically when you visit this website.
            </p>

            <h2>How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and manage the services you request;</li>
              <li>Respond to enquiries and provide customer support;</li>
              <li>Improve our website and detect or fix technical issues;</li>
              <li>Send relevant updates where you have asked to hear from us.</li>
            </ul>

            <h2>Legal basis for processing</h2>
            <p>
              We process personal data on one or more of the following bases: your consent; the
              performance of a contract; compliance with a legal obligation; and our legitimate
              business interests, where these are not overridden by your rights.
            </p>

            <h2>Sharing your information</h2>
            <p>
              We do not sell your personal data. We may share it with trusted service providers who
              help us operate, in connection with a business transfer, or where we are required to do
              so by law.
            </p>

            <h2>Data security</h2>
            <p>
              We take reasonable and appropriate measures to protect your personal information,
              including strict confidentiality agreements, password-protected systems, controlled
              access to client data and secure, cloud-based file sharing with regular backups. No
              method of transmission over the internet is completely secure, but we work hard to
              protect your data and follow GDPR-aligned practices throughout.
            </p>

            <h2>Your data protection rights</h2>
            <p>
              Subject to applicable law, you may request to access, correct, erase, restrict, object
              to, or port your personal data. We aim to respond to valid requests within one month.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep personal data only for as long as necessary to fulfil the purposes it was
              collected for, including to satisfy legal, accounting or reporting requirements.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies to support core functionality, analytics, preferences and, where
              relevant, advertising. You can control or disable cookies through your browser settings.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page,
              so please review it periodically.
            </p>

            <h2>Governing law</h2>
            <p>This policy is governed by the laws of England and Wales.</p>

            <h2>Contact us</h2>
            <p>
              For any privacy question or to exercise your rights, email{" "}
              <a href={`mailto:${siteConfig.contact.khOffice.email}`}>{siteConfig.contact.khOffice.email}</a> or call{" "}
              <a href={`tel:${siteConfig.contact.khOffice.phoneHref}`}>{siteConfig.contact.khOffice.phone}</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
