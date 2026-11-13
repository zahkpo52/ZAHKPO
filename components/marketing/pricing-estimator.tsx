"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";

type Freq = "month" | "quarter" | "year";
type Service = { id: string; name: string; unit: string; freq: Freq; lo: number; hi: number; start: number };

/** Indicative ranges per unit. The exact price depends on volume, software and the state of the records. */
const services: Service[] = [
  { id: "bk", name: "Bookkeeping", unit: "clients", freq: "month", lo: 35, hi: 120, start: 5 },
  { id: "vat", name: "VAT returns", unit: "returns a quarter", freq: "quarter", lo: 25, hi: 60, start: 5 },
  { id: "ye", name: "Year-end accounts + CT600", unit: "companies a year", freq: "year", lo: 150, hi: 350, start: 10 },
  { id: "sa", name: "Self Assessment returns", unit: "returns a year", freq: "year", lo: 50, hi: 120, start: 20 },
  { id: "pay", name: "Payroll", unit: "payslips a month", freq: "month", lo: 3, hi: 6, start: 0 },
  { id: "cis", name: "CIS returns", unit: "returns a month", freq: "month", lo: 15, hi: 35, start: 0 },
  { id: "ma", name: "Management accounts", unit: "clients", freq: "month", lo: 60, hi: 180, start: 0 },
];

const levels = [
  { id: "simple", label: "Tidy", hint: "Bank feeds, few transactions", from: 0, to: 0.5 },
  { id: "standard", label: "Typical", hint: "Mixed records, some queries", from: 0.2, to: 0.75 },
  { id: "complex", label: "Messy", hint: "Catch-up, high volume, cash", from: 0.5, to: 1 },
] as const;

const perMonth: Record<Freq, number> = { month: 1, quarter: 1 / 3, year: 1 / 12 };
const round = (n: number) => Math.round(n / 10) * 10;
const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

const included = [
  "Prepared by a qualified accountant",
  "Independent second review before it reaches you",
  "Service checklist and working papers in your format",
  "Every job tracked live in ZAH Nexus",
  "UK GDPR data processing agreement",
  "No contract lock-in - scale up or down monthly",
];

export function PricingEstimator() {
  const [qty, setQty] = React.useState<Record<string, number>>(() =>
    Object.fromEntries(services.map((s) => [s.id, s.start])),
  );
  const [level, setLevel] = React.useState<(typeof levels)[number]["id"]>("standard");
  const L = levels.find((l) => l.id === level)!;

  const lines = services
    .filter((s) => qty[s.id] > 0)
    .map((s) => {
      const span = s.hi - s.lo;
      const lo = (s.lo + span * L.from) * qty[s.id] * perMonth[s.freq];
      const hi = (s.lo + span * L.to) * qty[s.id] * perMonth[s.freq];
      return { s, lo, hi };
    });
  const lo = round(lines.reduce((a, l) => a + l.lo, 0));
  const hi = round(lines.reduce((a, l) => a + l.hi, 0));

  const set = (id: string, n: number) => setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(999, Math.round(n) || 0)) }));

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-sm font-semibold text-foreground">1. What would you send us?</p>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.id} className="flex items-center justify-between gap-4 py-3.5">
              <span>
                <span className="block font-medium text-foreground">{s.name}</span>
                <span className="block text-xs text-muted-foreground">{s.unit}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label={`Fewer ${s.name}`}
                  onClick={() => set(s.id, qty[s.id] - 1)}
                  className="grid size-9 place-items-center rounded-lg border border-input text-foreground hover:bg-surface"
                >
                  <Minus className="size-4" aria-hidden="true" />
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  aria-label={`${s.name} - ${s.unit}`}
                  value={qty[s.id]}
                  onChange={(e) => set(s.id, Number(e.target.value))}
                  className="h-9 w-16 rounded-lg border border-input bg-background text-center text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="button"
                  aria-label={`More ${s.name}`}
                  onClick={() => set(s.id, qty[s.id] + 1)}
                  className="grid size-9 place-items-center rounded-lg border border-input text-foreground hover:bg-surface"
                >
                  <Plus className="size-4" aria-hidden="true" />
                </button>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-7 text-sm font-semibold text-foreground">2. How are the records, usually?</p>
        <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup" aria-label="State of the records">
          {levels.map((l) => (
            <button
              key={l.id}
              type="button"
              role="radio"
              aria-checked={level === l.id}
              onClick={() => setLevel(l.id)}
              className={
                "rounded-xl border p-3 text-left transition-colors " +
                (level === l.id ? "border-[#061c3a] bg-[#061c3a] text-white" : "border-input bg-background text-foreground hover:bg-surface")
              }
            >
              <span className="block text-sm font-semibold">{l.label}</span>
              <span className={"mt-0.5 block text-[11px] leading-snug " + (level === l.id ? "text-white/70" : "text-muted-foreground")}>{l.hint}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="theme-navy flex flex-col rounded-2xl border border-[#e5b84a]/30 bg-[#061c3a] p-6 text-white md:p-8 lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">Indicative monthly range</p>
        {lines.length ? (
          <>
            <p className="mt-3 font-serif text-4xl font-medium tabular-nums text-white sm:text-5xl" aria-live="polite">
              {gbp(lo)} <span className="text-white/50">-</span> {gbp(hi)}
            </p>
            <p className="mt-2 text-sm text-white/65">
              About {gbp(lo * 12)} to {gbp(hi * 12)} a year · VAT and annual work spread monthly
            </p>
          </>
        ) : (
          <p className="mt-3 text-white/70">Add the work you would send to see a range.</p>
        )}

        <p className="mt-7 text-sm font-semibold text-white">Included in every job</p>
        <ul className="mt-3 space-y-2">
          {included.map((i) => (
            <li key={i} className="flex gap-2.5 text-sm text-white/80">
              <Check className="mt-0.5 size-4 shrink-0 text-[#e5b84a]" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>

        <div className="mt-7 rounded-xl border border-[#e5b84a]/40 bg-[#e5b84a]/10 p-4">
          <p className="text-sm font-semibold text-white">Your first 3 jobs are free</p>
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            Judge the quality before you pay anything. Your fixed quote follows a 20-minute call.
          </p>
        </div>

        <Link
          href="/contact?offer=free-trial"
          className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#e5b84a] px-6 text-sm font-semibold text-[#0b1a33] transition-colors hover:bg-[#edc65f]"
        >
          Get my exact quote
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-3 text-[11px] leading-relaxed text-white/50">
          A guide, not a quote. Prices exclude VAT where applicable and depend on volume, software and the state of the
          records. Per-hour and dedicated-team options are also available.
        </p>
      </div>
    </div>
  );
}
