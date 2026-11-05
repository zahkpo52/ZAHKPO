"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Award, CalendarCheck, Clock, ShieldCheck, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { WaveTextAnimation } from "../text-animation/wave-text";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const trustSignals = [
  { icon: Timer, value: "5000+", label: "Hours Delivered" },
  { icon: Clock, value: "99%", label: "On-Time Delivery" },
  { icon: ShieldCheck, value: "GDPR", label: "Secure" },
  { icon: Award, value: "CA & ACCA", label: "Qualified" },
];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#031833]">
      {/* Office meeting backdrop with a navy wash that keeps copy readable */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <picture>
          <source media="(max-width: 639px)" type="image/webp" srcSet="/images/mobile/hero-team-mobile.webp" />
          <source media="(max-width: 639px)" type="image/jpeg" srcSet="/images/mobile/hero-team-mobile.jpg" />
          <source media="(min-width: 640px)" type="image/webp" srcSet="/images/home-hero.webp" />
          <img
            src="/images/home-hero.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-[center_72%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031833] via-[#031833]/80 to-[#031833]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031833]/90 via-transparent to-[#031833]/40" />
      </div>
      <div
        aria-hidden="true"
        className="absolute right-[-10%] top-[-20%] -z-10 size-36rem rounded-full bg-[#f8d509]/10 blur-3xl"
      />

      <Container>
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="flex max-w-3xl flex-col items-start py-24 md:py-32 lg:py-36"
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#f8d509]/30 bg-[#f8d509]/10 px-4 py-1.5 md:text-lg sm:text-md text-xs font-bold tracking-wide text-[#f8d509] backdrop-blur"
          >
            <WaveTextAnimation content="Think Outsourcing. Think ZAH." />
          </motion.span>

          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Trusted Outsourcing Partner for{" "}
            <span className="bg-[linear-gradient(120deg,#f8d509,#f5a800)] bg-clip-text text-transparent">
              UK Accounting Firms
            </span>
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80"
          >
            We help UK accounting firms save time, reduce costs and scale with confidence -
            through accurate, compliant and reliable back-office support.
          </motion.p>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-white/50"
          >
            Bookkeeping · Accounts · Tax · Payroll · Audit Support · CFO Advisory
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book a Discovery Call
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/10"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={reduce ? undefined : item}
            className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 backdrop-blur-sm sm:grid-cols-4"
          >
            {trustSignals.map((signal) => (
              <li
                key={signal.label}
                className="flex items-center gap-3 bg-[#051a37]/80 px-4 py-4 sm:px-5"
              >
                <signal.icon className="size-5 shrink-0 text-[#f8d509]" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold leading-tight text-white">{signal.value}</p>
                  <p className="text-xs leading-tight text-white/60">{signal.label}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
