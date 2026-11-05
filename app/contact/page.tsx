import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { SocialLinks } from "@/components/layout/social-links";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact ZAH KPO | Book a call or send us a message  ",
  description:
    "Talk to ZAH KPO about outsourcing your accounting. Call +91 88899 84419, email info@theledgerbridge.com, or send us a message - we reply fast.",
  path: "/contact",
  keywords: ["ZAH KPO", "contact ZAH KPO", "accounting outsourcing enquiry", "book a call", "ZAH KPO Head Office"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export default function ContactPage() {
  const { contact } = siteConfig;
  const offices = [{ label: contact.ukOffice.label, lines: contact.ukOffice.address }, ...contact.deliveryOffices];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact"
        title="Let's grow together"
        description="Tell us what's on your plate and we'll show you how ZAH can help. We typically reply within one business day."
        crumbs={crumbs}
        image={{ src: "/images/handshake.jpg", mobileSrc: "/images/mobile/handshake-mobile.jpg" }}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in the form and the right person will be in touch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>

            <div className="space-y-8">
              <div className="space-y-3">
                <a
                  href={`tel:${contact.ukOffice.phoneHref}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Call us</span>
                    <span className="font-medium">{contact.ukOffice.phone}</span>
                    {/* <span className="block font-medium">{contact.phoneAlt}</span> */}
                  </span>
                </a>
                <a
                  href={`mailto:${contact.khOffice.email}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Email us</span>
                    <span className="font-medium">{contact.khOffice.email}</span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Offices
                </h3>
                <ul className="mt-4 space-y-4">
                  {offices.map((office) => (
                    <li key={office.label} className="flex gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm">
                        <span className="block font-medium text-foreground">{office.label}</span>
                        <span className="text-muted-foreground">{office.lines.join(", ")}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {siteConfig.social.length > 0 ? (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Follow us
                  </h3>
                  <SocialLinks className="mt-3" />
                </div>
              ) : null}

              <iframe 
                title="ZAH KPO head office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.17706230506!2d-0.3595827234556403!3d51.528312171818094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487612bc4fefde6f%3A0x309f7b635830f489!2s5%20Ruislip%20Rd%2C%20Greenford%20UB6%209QD%2C%20UK!5e0!3m2!1sen!2sin!4v1785865089630!5m2!1sen!2sin" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full rounded-2xl border border-border" 
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
