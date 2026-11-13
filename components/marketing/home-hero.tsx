import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/motion";
import { LiveClocks } from "@/components/marketing/live-clocks";

const facts = [
  { value: 5000, suffix: "+", label: "hours delivered for UK firms" },
  { value: 99, suffix: "%", label: "of jobs delivered on time" },
  { value: 0, suffix: "", label: "filing penalties on our work" },
];

export function HomeHero() {
  return (
    <section className="theme-navy bg-[#031833]">
      <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-medium text-[#e5b84a]">Outsourcing for UK accountancy firms</p>

          <h1 className="mt-5 text-balance font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.015em] text-foreground sm:text-6xl lg:text-[4.25rem]">
            Outsourced accounting that works like <em className="font-normal text-[#e5b84a]">your own team.</em>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/75">
            Bookkeeping, year-end accounts, VAT, payroll and tax - prepared by qualified accountants in
            your software, reviewed twice before it reaches you, and tracked job by job in ZAH Nexus.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-[#e5b84a]"
            >
              See how it works
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/70">
            <span className="mr-2 rounded-full bg-[#e5b84a]/15 px-2.5 py-1 text-xs font-semibold text-[#e5b84a]">New firms</span>
            Your first 3 jobs are free.{" "}
            <Link href="/contact?offer=free-trial" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#e5b84a]">
              Claim the free trial
            </Link>
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
            {facts.map((f, i) => (
              <div key={f.label} className={i === 0 ? "pr-4" : "px-4"}>
                <dd className="font-serif text-3xl font-medium text-foreground md:text-4xl">
                  <AnimatedCounter value={f.value} suffix={f.suffix} duration={1.8} />
                </dd>
                <dt className="mt-1.5 text-xs leading-snug text-foreground/60 md:text-sm">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/office-workstations.webp"
              alt="Two ZAH KPO accountants working at their desks in the Khargone delivery centre"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="hero-drift object-cover"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031833]/85 to-transparent" />
            <LiveClocks className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-[#031833]/75 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5" />
          </div>
          <figcaption className="mt-3 text-xs text-foreground/50">Our delivery centre in Khargone, India</figcaption>
        </figure>
      </Container>
    </section>
  );
}
