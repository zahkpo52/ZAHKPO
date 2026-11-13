import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "How we make zahkpo.com accessible, and how to tell us if something does not work for you.",
  path: "/accessibility",
  keywords: ["accessibility statement"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Accessibility" }];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility statement"
        description="We want everyone to be able to use this website. Last reviewed 13 November 2026."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <Prose>
            <h2>What we do</h2>
            <ul>
              <li>Pages use clear headings and landmarks, so screen readers can move around them.</li>
              <li>Text and buttons are designed for readable colour contrast on both light and dark sections.</li>
              <li>Everything can be reached with a keyboard, with a visible focus outline and a &ldquo;skip to content&rdquo; link.</li>
              <li>Images that carry meaning have text descriptions; decorative images are hidden from screen readers.</li>
              <li>
                Animations - including the live ZAH Nexus screen, logo scroll and welcome offer - switch off if your device is
                set to reduce motion.
              </li>
              <li>The site works on phones and when zoomed to 200%.</li>
            </ul>
            <h2>Known limits</h2>
            <p>
              Some third-party content, such as embedded videos and the optional website chat, is provided by other companies and
              may not meet the same standard.
            </p>
            <h2>Tell us about a problem</h2>
            <p>
              If anything on the site is hard to use, email <a href="mailto:info@zahkpo.com">info@zahkpo.com</a> with the page and the
              problem. We aim to reply within two working days and will send the information in another format if you need it.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
