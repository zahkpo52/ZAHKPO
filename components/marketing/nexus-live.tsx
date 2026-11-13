"use client";

import * as React from "react";
import { BellRing, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

const menu = [
  { group: "My work", items: ["My Work Today", "My Tasks", "My Calendar", "My Priorities"] },
  { group: "Operations", items: ["Dashboard", "VAT Hub", "Clients", "Year-End Hub", "CIS Returns", "Management Accounts", "Self Assessment"] },
];

const kpis = [
  { label: "Active workload", value: "13", note: "23 total returns" },
  { label: "Overdue filings", value: "0", note: "Zero overdue filings" },
  { label: "Due in 14 days", value: "0", note: "No urgent deadlines" },
  { label: "Quality (FTR %)", value: "100%", note: "First-time-right" },
  { label: "Next deadline", value: "7 Dec", note: "Earliest HMRC due date" },
];

const pipeline = [
  ["Auto-created", "1. Period Created", 9, "bg-[#eaf1f8]"],
  ["Admin", "2. Assignment", 0, "bg-[#f1f1ee]"],
  ["Preparer", "3. Preparation", 4, "bg-[#fbf3e4]"],
  ["Reviewer", "4. Internal Review", 2, "bg-[#eaf3ea]"],
  ["Rework", "5. Changes Req.", 0, "bg-[#fbeceb]"],
  ["UK Partner", "6. UK Review", 3, "bg-[#eeeef2]"],
  ["Sign-off", "7. Ready to File", 1, "bg-[#f7f4ea]"],
  ["HMRC", "8. Filed", 10, "bg-[#e6f1e8]"],
] as const;

/** Workflow stages a sample return moves through, with the pipeline column each one counts in. */
const stages = [
  { label: "Not Started", cls: "bg-[#f1f1ee] text-[#6b7168]", col: 1 },
  { label: "In Progress", cls: "bg-[#fbf3e4] text-[#8a6418]", col: 2 },
  { label: "Internal Review", cls: "bg-[#eaf3ea] text-[#3f5a47]", col: 3 },
  { label: "UK Review", cls: "bg-[#eeeef2] text-[#4b4f6b]", col: 5 },
  { label: "Ready to File", cls: "bg-[#f7f4ea] text-[#7a6a2e]", col: 6 },
  { label: "Filed", cls: "bg-[#e6f1e8] text-[#2f6b45]", col: 7 },
];

const rows = [
  { client: "Sample Client A Ltd", period: "Aug-Oct 2026 Return", start: 3, days: "24 days" },
  { client: "Sample Client B Ltd", period: "Aug-Oct 2026 Return", start: 2, days: "24 days" },
  { client: "Sample Client C Ltd", period: "Aug-Oct 2026 Return", start: 1, days: "24 days" },
  { client: "Sample Client D Ltd", period: "Sep-Nov 2026 Return", start: 0, days: "55 days" },
];

const initial = rows.map((r) => r.start);

/** Advances one sample return a stage at a time while the screen is on view. */
function useNexusSimulation(ref: React.RefObject<HTMLDivElement | null>) {
  const [state, setState] = React.useState({ at: initial, moved: -1, step: 0 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    let visible = false;
    const tick = () => {
      setState((s) => {
        const order = [1, 0, 2, 3];
        for (let k = 0; k < order.length; k++) {
          const i = order[(s.step + k) % order.length];
          if (s.at[i] < stages.length - 1) {
            const at = s.at.slice();
            at[i] += 1;
            return { at, moved: i, step: s.step + k + 1 };
          }
        }
        return { at: initial, moved: -1, step: 0 };
      });
    };
    const start = () => {
      if (!timer) timer = window.setInterval(tick, 2600);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = 0;
    };
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { threshold: 0.25 },
    );
    const onVis = () => (document.hidden ? stop() : visible && start());
    io.observe(el);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ref]);

  return state;
}

function FloatCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "nexus-float absolute z-10 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#0a2548]/95 px-4 py-3 text-left shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur lg:flex",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * ZAH Nexus screen for marketing use. Mirrors the real VAT Hub layout,
 * with sample client names and figures - never real client data.
 */
export function NexusMock({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { at, moved } = useNexusSimulation(ref);
  const counts = pipeline.map(([, , n]) => n as number);
  at.forEach((s, i) => {
    counts[stages[rows[i].start].col] -= 1;
    counts[stages[s].col] += 1;
  });
  const activeCol = moved >= 0 ? stages[at[moved]].col : 5;
  const withUk = at.filter((s) => s === 3).length + 2;
  const event =
    moved >= 0
      ? { title: `${rows[moved].client}`, text: `Moved to ${stages[at[moved]].label}` }
      : { title: "Review point closed", text: "Clarified with workings" };

  return (
    <div ref={ref} className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="nexus-glow absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(229,184,74,0.22),rgba(56,189,248,0.08)_55%,transparent)] blur-3xl"
      />

      <FloatCard className="nexus-float-delay -right-40 top-28">
        <span className="grid size-9 place-items-center rounded-full bg-[#e5b84a]/15 text-[#e5b84a]">
          <BellRing className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-semibold text-foreground">{withUk} returns with UK team</span>
          <span className="block text-[11px] text-foreground/55">Ready for your review</span>
        </span>
      </FloatCard>
      <FloatCard className="nexus-float-slow -left-36 bottom-24">
        <span className="grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <span key={event.title + event.text} className="nexus-swap block">
          <span className="block text-xs font-semibold text-foreground">{event.title}</span>
          <span className="block text-[11px] text-foreground/55">{event.text}</span>
        </span>
      </FloatCard>

      <div className="nexus-frame rounded-[1.15rem] p-[1.5px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]">
        <div aria-hidden="true" className="flex overflow-hidden rounded-2xl bg-[#f6f4ed] text-left text-[#1f2a24]">
          {/* sidebar */}
          <div className="hidden w-44 shrink-0 flex-col border-r border-[#e4e0d4] bg-[#fbfaf5] p-3 md:flex">
            <div className="flex items-center gap-2 px-1">
              <span className="grid size-7 place-items-center rounded-md bg-[#0b2346] text-[9px] font-bold text-[#e5b84a]">ZH</span>
              <span className="leading-none">
                <span className="block text-[11px] font-bold">
                  ZAH <span className="text-[#c99a2e]">KPO</span>
                </span>
                <span className="mt-0.5 block text-[6px] font-semibold tracking-[0.14em] text-[#6b7168]">GROWTH BEYOND LIMITS</span>
              </span>
            </div>
            {menu.map((g) => (
              <div key={g.group} className="mt-4">
                <p className="px-2 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#8c9189]">{g.group}</p>
                <ul className="mt-1.5 space-y-0.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium",
                        it === "VAT Hub" ? "border-l-2 border-[#3f5a47] bg-[#e3ebe2] text-[#1f2a24]" : "text-[#4c534c]",
                      )}
                    >
                      <span className="size-2.5 rounded-[3px] border border-current opacity-60" />
                      {it}
                      {it === "VAT Hub" ? <span className="ml-auto rounded bg-white px-1 text-[8px]">23</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* main */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 border-b border-[#e4e0d4] bg-[#fbfaf5] px-4 py-2.5 text-[10px]">
              <span className="text-[#6b7168]">Your Practice</span>
              <span className="text-[#a9ada5]">&gt;</span>
              <span className="font-semibold">VAT Hub</span>
              <span className="ml-auto hidden w-40 rounded-md border border-[#e4e0d4] bg-white px-2 py-1 text-[#9a9e96] sm:block">
                Search anything in Zah Nexus...
              </span>
              <span className="ml-auto flex items-center gap-1.5 rounded-md border border-[#e4e0d4] bg-white px-2 py-1 font-medium sm:ml-0">
                <span className="relative flex size-1.5">
                  <span className="nexus-ping absolute inline-flex size-full rounded-full bg-emerald-500" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Clocked in
              </span>
              <span className="rounded-md bg-[#3f5a47] px-2.5 py-1 font-semibold text-foreground">+ Create</span>
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#6b7168]">— Your Practice</p>
              <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="text-2xl font-bold tracking-tight">VAT Hub</p>
                  <p className="mt-0.5 max-w-xs text-[10px] leading-snug text-[#6b7168]">
                    Quarterly VAT filing schedules, pipeline workflow and statutory compliance tracking.
                  </p>
                </div>
                <div className="flex gap-1.5 text-[9px] font-medium">
                  <span className="rounded-md border border-[#e4e0d4] bg-white px-2 py-1">Table List</span>
                  <span className="rounded-md border border-[#e4e0d4] px-2 py-1 text-[#6b7168]">Team Workload</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {kpis.map((k, i) => (
                  <div
                    key={k.label}
                    className={cn("rounded-lg border border-[#e4e0d4] bg-[#fffdf8] p-2.5", i === 4 && "col-span-2 sm:col-span-1")}
                  >
                    <p className="text-[7px] font-semibold uppercase tracking-[0.1em] text-[#6b7168]">{k.label}</p>
                    <p className="mt-1 text-lg font-bold leading-none">{k.value}</p>
                    <p className="mt-1 text-[8px] text-[#8c9189]">{k.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-[#e4e0d4] bg-[#fffdf8] p-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold">VAT Workflow Pipeline</p>
                  <p className="hidden text-[8px] text-[#8c9189] sm:block">From period creation to statutory filing</p>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-1 lg:grid-cols-8">
                  {pipeline.map(([who, stage, , tint], c) => (
                    <div
                      key={stage}
                      className={cn(
                        "rounded-md px-1.5 py-1.5 transition-shadow duration-500",
                        tint,
                        c === activeCol && "nexus-stage ring-1 ring-[#e5b84a]",
                      )}
                    >
                      <p className="truncate text-[7px] text-[#6b7168]">{who}</p>
                      <p className="truncate text-[8px] font-semibold">{stage}</p>
                      <p key={counts[c]} className="nexus-swap mt-0.5 text-xs font-bold tabular-nums">
                        {counts[c]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-lg border border-[#e4e0d4] bg-[#fffdf8]">
                <div className="grid grid-cols-[1.4fr_auto] gap-3 border-b border-[#e4e0d4] px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#8c9189] sm:grid-cols-[1.4fr_1.1fr_1fr_1.2fr_0.7fr]">
                  <span>Client entity</span>
                  <span className="hidden sm:block">Return period</span>
                  <span>Workflow status</span>
                  <span className="hidden sm:block">Assigned specialist</span>
                  <span className="hidden sm:block">Statutory due</span>
                </div>
                {rows.map((r, i) => (
                  <div
                    key={r.client}
                    className={cn(
                      "grid grid-cols-[1.4fr_auto] items-center gap-3 border-b border-[#efece2] px-3 py-2 text-[9px] transition-colors duration-700 last:border-0 sm:grid-cols-[1.4fr_1.1fr_1fr_1.2fr_0.7fr]",
                      i === moved && "bg-[#fdf6e3]",
                    )}
                  >
                    <span className="font-semibold">{r.client}</span>
                    <span className="hidden text-[#4c534c] sm:block">{r.period}</span>
                    <span>
                      <span
                        key={at[i]}
                        className={cn("nexus-swap inline-block rounded-full px-2 py-0.5 text-[8px] font-semibold", stages[at[i]].cls)}
                      >
                        {stages[at[i]].label}
                      </span>
                    </span>
                    <span className="hidden leading-tight text-[#6b7168] sm:block">
                      Preparer: ZAH accountant
                      <br />
                      Reviewer: ZAH reviewer
                    </span>
                    <span className="hidden sm:block">
                      <span className="block font-semibold">7 Dec 2026</span>
                      <span className="text-[8px] text-[#8c9189]">{r.days}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Screenshot-style illustration of the ZAH Nexus VAT Hub, showing workload, deadlines, an eight-stage
        workflow pipeline and a list of VAT returns with sample client names.
      </p>
    </div>
  );
}

