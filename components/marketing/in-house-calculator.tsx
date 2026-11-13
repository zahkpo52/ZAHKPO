"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(Math.max(0, n));
const gbp2 = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Math.max(0, n));

/** Employer NIC: 15% above the £5,000 secondary threshold (rates from April 2025). */
const NIC_RATE = 0.15;
const NIC_THRESHOLD = 5_000;

type Inputs = {
  salary: number;
  pension: number;
  recruitment: number;
  tenure: number;
  overheads: number;
  training: number;
  hoursPerWeek: number;
  leaveDays: number;
  productive: number;
};

const defaults: Inputs = {
  salary: 32_000,
  pension: 3,
  recruitment: 15,
  tenure: 2,
  overheads: 3_500,
  training: 800,
  hoursPerWeek: 37.5,
  leaveDays: 33,
  productive: 75,
};

const fields: { key: keyof Inputs; label: string; hint: string; step: number; suffix?: string; prefix?: string }[] = [
  { key: "salary", label: "Annual salary", hint: "Gross pay for the role", step: 500, prefix: "£" },
  { key: "pension", label: "Employer pension", hint: "Auto-enrolment minimum is 3%", step: 0.5, suffix: "%" },
  { key: "recruitment", label: "Recruitment fee", hint: "Agency fee as a % of salary", step: 1, suffix: "%" },
  { key: "tenure", label: "Expected years in role", hint: "Spreads the recruitment fee", step: 0.5, suffix: "yrs" },
  { key: "overheads", label: "Desk, IT and software", hint: "Laptop, licences, space - per year", step: 100, prefix: "£" },
  { key: "training", label: "Training and CPD", hint: "Courses, memberships - per year", step: 100, prefix: "£" },
  { key: "hoursPerWeek", label: "Contracted hours a week", hint: "Typical practice contract", step: 0.5, suffix: "hrs" },
  { key: "leaveDays", label: "Holiday and bank holidays", hint: "UK statutory minimum is 28 days", step: 1, suffix: "days" },
  { key: "productive", label: "Chargeable time", hint: "Share of paid hours spent on client work", step: 5, suffix: "%" },
];

/** What an in-house hire really costs a UK practice, per year and per productive hour. */
export function InHouseCalculator() {
  const [v, setV] = React.useState<Inputs>(defaults);
  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    setV((p) => ({ ...p, [k]: Number.isFinite(n) ? n : 0 }));
  };

  const nic = Math.max(0, v.salary - NIC_THRESHOLD) * NIC_RATE;
  const pension = (v.salary * v.pension) / 100;
  const recruitment = (v.salary * v.recruitment) / 100 / Math.max(0.5, v.tenure);
  const total = v.salary + nic + pension + recruitment + v.overheads + v.training;
  const workingDays = Math.max(1, 52 * 5 - v.leaveDays);
  const paidHours = (workingDays * v.hoursPerWeek) / 5;
  const productiveHours = Math.max(1, (paidHours * v.productive) / 100);
  const perHour = total / productiveHours;
  const onCostPct = v.salary > 0 ? ((total - v.salary) / v.salary) * 100 : 0;

  const rows = [
    ["Salary", v.salary],
    ["Employer National Insurance", nic],
    ["Employer pension", pension],
    ["Recruitment fee (per year)", recruitment],
    ["Desk, IT and software", v.overheads],
    ["Training and CPD", v.training],
  ] as const;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-sm font-semibold text-foreground">Your hire</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.key} className="block">
              <span className="text-sm font-medium text-foreground">{f.label}</span>
              <span className="relative mt-1.5 flex items-center">
                {f.prefix ? <span className="pointer-events-none absolute left-3 text-sm text-muted-foreground">{f.prefix}</span> : null}
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={f.step}
                  value={v[f.key]}
                  onChange={set(f.key)}
                  className={
                    "h-11 w-full rounded-lg border border-input bg-background text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
                    (f.prefix ? "pl-7 pr-3" : "pl-3 pr-12")
                  }
                />
                {f.suffix ? <span className="pointer-events-none absolute right-3 text-xs text-muted-foreground">{f.suffix}</span> : null}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{f.hint}</span>
            </label>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setV(defaults)}
          className="mt-6 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Reset to typical figures
        </button>
      </div>

      <div className="theme-navy flex flex-col rounded-2xl border border-[#e5b84a]/30 bg-[#061c3a] p-6 text-white md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">True cost of the hire</p>
        <p className="mt-3 font-serif text-5xl font-medium tabular-nums text-white" aria-live="polite">
          {gbp(total)}
          <span className="ml-2 align-middle font-sans text-base font-normal text-white/60">a year</span>
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs text-white/60">Per productive hour</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-white">{gbp2(perHour)}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs text-white/60">On top of salary</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-white">+{Math.round(onCostPct)}%</p>
          </div>
        </div>
        <dl className="mt-6 divide-y divide-white/10 border-y border-white/10 text-sm">
          {rows.map(([k, n]) => (
            <div key={k} className="flex justify-between gap-4 py-2.5">
              <dt className="text-white/70">{k}</dt>
              <dd className="tabular-nums text-white">{gbp(n)}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-white/70">Productive hours a year</dt>
            <dd className="tabular-nums text-white">{Math.round(productiveHours).toLocaleString("en-GB")}</dd>
          </div>
        </dl>
        <p className="mt-5 text-sm leading-relaxed text-white/75">
          And you pay it all year - in quiet months as well as in January. With ZAH KPO you pay only for the work you
          send, per hour, per job or for a dedicated team.
        </p>
        <div className="mt-auto pt-6">
          <Link
            href="/contact?offer=free-trial"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#e5b84a] px-6 text-sm font-semibold text-[#0b1a33] transition-colors hover:bg-[#edc65f]"
          >
            Compare with a ZAH quote - first 3 jobs free
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
