"use client";

import * as React from "react";

type Item = { date: Date; title: string; detail: string; kind: "Self Assessment" | "Payroll" | "CIS" | "MTD" | "Tax year" };

const fmt = (d: Date) =>
  new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }).format(d);

function annual(year: number): Item[] {
  const d = (m: number, day: number) => new Date(year, m - 1, day);
  return [
    { date: d(1, 31), title: "Self Assessment online deadline", detail: "Online returns, balancing payment and first payment on account", kind: "Self Assessment" },
    { date: d(2, 7), title: "MTD for Income Tax quarterly update", detail: "Quarter to 5 January", kind: "MTD" },
    { date: d(4, 5), title: "End of the tax year", detail: "Last day of the tax year", kind: "Tax year" },
    { date: d(5, 7), title: "MTD for Income Tax quarterly update", detail: "Quarter to 5 April", kind: "MTD" },
    { date: d(5, 31), title: "P60s to employees", detail: "Give every employee their P60", kind: "Payroll" },
    { date: d(7, 6), title: "P11D and P11D(b)", detail: "Benefits in kind returns to HMRC and employees", kind: "Payroll" },
    { date: d(7, 22), title: "Class 1A NIC payment", detail: "Electronic payment for benefits in kind", kind: "Payroll" },
    { date: d(7, 31), title: "Second payment on account", detail: "Self Assessment payment on account", kind: "Self Assessment" },
    { date: d(8, 7), title: "MTD for Income Tax quarterly update", detail: "Quarter to 5 July", kind: "MTD" },
    { date: d(10, 5), title: "Register for Self Assessment", detail: "New taxpayers for the previous tax year", kind: "Self Assessment" },
    { date: d(10, 31), title: "Paper Self Assessment returns", detail: "Paper returns for the previous tax year", kind: "Self Assessment" },
    { date: d(11, 7), title: "MTD for Income Tax quarterly update", detail: "Quarter to 5 October", kind: "MTD" },
    { date: d(12, 30), title: "Online return to pay through PAYE code", detail: "Where the client wants tax collected through their tax code", kind: "Self Assessment" },
  ];
}

function monthly(year: number, month: number): Item[] {
  return [
    { date: new Date(year, month, 19), title: "CIS monthly return", detail: "Return for the tax month ending on the 5th", kind: "CIS" },
    { date: new Date(year, month, 22), title: "PAYE, NIC and CIS payment", detail: "Electronic payment for the previous tax month", kind: "Payroll" },
  ];
}

/** The next upcoming UK deadlines, counted from today in the visitor's browser. */
export function NextDeadlines({ count = 8 }: { count?: number }) {
  const [today, setToday] = React.useState<Date | null>(null);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      const n = new Date();
      setToday(new Date(n.getFullYear(), n.getMonth(), n.getDate()));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!today) {
    return <div className="h-96 animate-pulse rounded-2xl border border-border bg-surface" aria-hidden="true" />;
  }

  const y = today.getFullYear();
  const items: Item[] = [...annual(y), ...annual(y + 1)];
  for (let k = 0; k < 4; k++) {
    const m = new Date(y, today.getMonth() + k, 1);
    items.push(...monthly(m.getFullYear(), m.getMonth()));
  }
  const upcoming = items
    .filter((i) => i.date >= today)
    .sort((a, b) => +a.date - +b.date)
    .slice(0, count);

  return (
    <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {upcoming.map((i) => {
        const days = Math.round((+i.date - +today) / 86_400_000);
        return (
          <li key={i.title + i.date.toISOString()} className="grid grid-cols-[5.5rem_1fr] items-center gap-4 px-5 py-4 sm:grid-cols-[7rem_1fr_auto] md:px-7">
            <span
              className={
                "rounded-lg px-2 py-1.5 text-center text-xs font-semibold tabular-nums " +
                (days <= 7 ? "bg-[#fbeceb] text-[#a3362b]" : days <= 30 ? "bg-[#fbf3e4] text-[#8a6418]" : "bg-surface text-foreground/70")
              }
            >
              {days === 0 ? "Today" : days === 1 ? "Tomorrow" : `${days} days`}
            </span>
            <span>
              <span className="block font-semibold text-foreground">{i.title}</span>
              <span className="mt-0.5 block text-sm text-muted-foreground">
                {fmt(i.date)} · {i.detail}
              </span>
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:block">{i.kind}</span>
          </li>
        );
      })}
    </ol>
  );
}

function addMonths(d: Date, months: number) {
  const isMonthEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getDate() === 1;
  if (isMonthEnd) return new Date(d.getFullYear(), d.getMonth() + months + 1, 0);
  const t = new Date(d.getFullYear(), d.getMonth() + months, d.getDate());
  if (t.getDate() !== d.getDate()) return new Date(d.getFullYear(), d.getMonth() + months + 1, 0);
  return t;
}

/** Company deadlines worked out from a year-end date. */
export function YearEndCalculator() {
  const [value, setValue] = React.useState("");
  const ye = value ? new Date(value + "T00:00:00") : null;
  const valid = ye && !Number.isNaN(+ye);
  const rows = valid
    ? [
        { label: "Companies House accounts", date: addMonths(ye!, 9), note: "Private company, after its first accounts" },
        { label: "Corporation tax payment", date: new Date(+addMonths(ye!, 9) + 86_400_000), note: "9 months and 1 day after the period end, for companies that are not large" },
        { label: "Corporation tax return (CT600)", date: addMonths(ye!, 12), note: "12 months after the period end" },
      ]
    : [];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <label htmlFor="ye" className="text-sm font-semibold text-foreground">
        Company year-end date
      </label>
      <input
        id="ye"
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 h-11 w-full max-w-xs rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      {valid ? (
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <dt>
                <span className="block font-semibold text-foreground">{r.label}</span>
                <span className="block text-sm text-muted-foreground">{r.note}</span>
              </dt>
              <dd className="font-serif text-xl font-medium text-foreground">{fmt(r.date)}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">Pick a year-end to see the filing and payment deadlines.</p>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        A guide only - first accounts, changed year-ends and large companies follow different rules. Always check the
        Companies House and HMRC records for the client.
      </p>
    </div>
  );
}
