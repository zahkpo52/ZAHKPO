import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { NexusMock } from "@/components/marketing/nexus";
import { WaveTextAnimation } from "../text-animation/wave-text";

const heroStats = [
  { value: "5000+", label: "Hours delivered" },
  { value: "99%", label: "On-time delivery" },
  { value: "0", label: "Penalty instances" },
  { value: "2-level", label: "Review on every job" },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#031833]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[38rem] w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(229,184,74,0.18),transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dotted opacity-50 mask-fade-b" />

      <Container className="relative pt-16 text-center md:pt-24">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-[#e5b84a]/30 bg-[#e5b84a]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#e5b84a] sm:text-sm">
          <WaveTextAnimation content="Think Outsourcing. Think ZAH." />
        </span>

        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Outsourced accounting for UK firms that works{" "}
          <span className="bg-[linear-gradient(120deg,#e5b84a,#c99a2e)] bg-clip-text text-transparent">
            like your own team.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          Bookkeeping, year-end accounts, VAT, payroll and tax for UK accountancy firms - prepared by
          qualified accountants, reviewed twice, and tracked end to end in ZAH Nexus, our shared
          workspace.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book a Discovery Call
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/5 text-white hover:bg-white/10"
          >
            <Link href="/services">
              Explore Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl md:mt-16">
          <NexusMock className="text-left" />
          <p className="mt-3 text-xs text-white/40">ZAH Nexus - illustrative screen with sample data</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 pb-16 md:grid-cols-4 md:gap-4 md:pb-20">
          {heroStats.map((s) => (
            <li key={s.label} className="rounded-2xl border border-white/10 bg-[#061c3a]/80 px-4 py-5">
              <p className="text-2xl font-semibold text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/60 md:text-sm">{s.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
