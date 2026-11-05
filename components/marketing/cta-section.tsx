"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";
import { useState } from "react";

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
  const [UKContactbutton, setUKContactbutton] = useState(false);

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#0f2c57] px-6 py-14 text-center text-white md:px-16 md:py-20">
          <Image
            src="/images/city-skyline.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="pointer-events-none object-cover object-center opacity-25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,44,87,0.92),rgba(29,74,138,0.82))]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-lg text-white/85">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="accent">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                onMouseEnter={()=>setUKContactbutton(true)}
                onMouseLeave={()=>setUKContactbutton(false)}
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:${siteConfig.contact.ukOffice.phoneHref}`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {UKContactbutton ? "Only for WhatsApp" : siteConfig.contact.ukOffice.phone}
                </a>
              </Button>
              <div className="sm:hidden">Only for WhatsApp</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
