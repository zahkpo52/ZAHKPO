import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Add capacity without adding headcount",
  description = "Tell us what's on your plate. We'll show you exactly how ZAH can take it on - accurately, securely and on time.",
  primaryLabel = "Book a Discovery Call",
  primaryHref = "/contact",
}: CTASectionProps) {
  const { ukOffice } = siteConfig.contact;
  const whatsappHref = `https://wa.me/${ukOffice.phoneHref.replace(/[^0-9]/g, "")}`;

  return (
    <section className="pb-20 pt-4 md:pb-24">
      <Container>
        <div className="theme-navy relative overflow-hidden rounded-3xl border border-primary/20 bg-[#0a2243] px-6 py-14 text-center text-foreground md:px-16 md:py-20">
          <Image
            src="/images/city-skyline.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="pointer-events-none object-cover object-center opacity-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,184,74,0.16),transparent_60%),linear-gradient(180deg,rgba(10,34,67,0.88),rgba(5,26,55,0.96))]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-medium tracking-[-0.01em] md:text-[2.5rem] md:leading-[1.15] font-serif">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-lg text-foreground/75">{description}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp {ukOffice.phone}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-foreground/50">Our UK number is for WhatsApp messages only.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
