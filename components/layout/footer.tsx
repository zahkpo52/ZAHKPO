import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/ui/section";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { footerColumns } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { CookieSettingsButton } from "@/components/consent/consent-scripts";

const linkClass =
  "inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-primary";

export function Footer() {
  const year = new Date().getFullYear();
  const { ukOffice, khOffice } = siteConfig.contact;
  const whatsappHref = `https://wa.me/${ukOffice.phoneHref.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="theme-navy border-t border-border bg-[#031833]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-3 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.3fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The outsourcing partner for UK accountancy firms. Skilled people, SOP-driven processes
              and modern technology - work delivered accurately and on time.
            </p>
            <NewsletterForm />
            <SocialLinks />
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {ukOffice.label}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{ukOffice.address.join(", ")}</span>
                </li>
                <li>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-primary">
                    <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {ukOffice.phone} (WhatsApp only)
                  </a>
                </li>
                <li>
                  <a href={`mailto:${ukOffice.email}`} className="flex items-start gap-3 transition-colors hover:text-primary">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {ukOffice.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {khOffice.label}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{khOffice.address.slice(0, 3).join(", ")}</span>
                </li>
                <li>
                  <a href={`tel:${khOffice.phoneHref}`} className="flex items-start gap-3 transition-colors hover:text-primary">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {khOffice.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5">
            <Link href="/privacy" className="inline-block py-2 transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="inline-block py-2 transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="/accessibility" className="inline-block py-2 transition-colors hover:text-primary">
              Accessibility
            </Link>
            <Link href="/faq" className="inline-block py-2 transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="inline-block py-2 transition-colors hover:text-primary">
              Contact
            </Link>
            <CookieSettingsButton className="inline-block py-2 transition-colors hover:text-primary" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
