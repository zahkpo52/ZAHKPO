import {
  BellRing,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ListChecks,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

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
  ["Auto-created", "1. Period Created", "9", "bg-[#eaf1f8]"],
  ["Admin", "2. Assignment", "0", "bg-[#f1f1ee]"],
  ["Preparer", "3. Preparation", "4", "bg-[#fbf3e4]"],
  ["Reviewer", "4. Internal Review", "2", "bg-[#eaf3ea]"],
  ["Rework", "5. Changes Req.", "0", "bg-[#fbeceb]"],
  ["UK Partner", "6. UK Review", "3", "bg-[#eeeef2]"],
  ["Sign-off", "7. Ready to File", "1", "bg-[#f7f4ea]"],
  ["HMRC", "8. Filed", "10", "bg-[#e6f1e8]"],
] as const;

const rows = [
  ["Sample Client A Ltd", "Aug-Oct 2026 Return", "UK Review", "bg-[#eeeef2] text-[#4b4f6b]", "24 days"],
  ["Sample Client B Ltd", "Aug-Oct 2026 Return", "Internal Review", "bg-[#eaf3ea] text-[#3f5a47]", "24 days"],
  ["Sample Client C Ltd", "Aug-Oct 2026 Return", "In Progress", "bg-[#fbf3e4] text-[#8a6418]", "24 days"],
  ["Sample Client D Ltd", "Sep-Nov 2026 Return", "Not Started", "bg-[#f1f1ee] text-[#6b7168]", "55 days"],
] as const;

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
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="nexus-glow absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(229,184,74,0.22),rgba(56,189,248,0.08)_55%,transparent)] blur-3xl"
      />

      <FloatCard className="nexus-float-delay -right-40 top-28">
        <span className="grid size-9 place-items-center rounded-full bg-[#e5b84a]/15 text-[#e5b84a]">
          <BellRing className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-semibold text-foreground">3 returns with UK team</span>
          <span className="block text-[11px] text-foreground/55">Ready for your review</span>
        </span>
      </FloatCard>
      <FloatCard className="nexus-float-slow -left-36 bottom-24">
        <span className="grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-semibold text-foreground">Review point closed</span>
          <span className="block text-[11px] text-foreground/55">Clarified with workings</span>
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
                  {pipeline.map(([who, stage, n, tint]) => (
                    <div
                      key={stage}
                      className={cn("rounded-md px-1.5 py-1.5", tint, stage === "6. UK Review" && "nexus-stage ring-1 ring-[#e5b84a]")}
                    >
                      <p className="truncate text-[7px] text-[#6b7168]">{who}</p>
                      <p className="truncate text-[8px] font-semibold">{stage}</p>
                      <p className="mt-0.5 text-xs font-bold">{n}</p>
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
                {rows.map(([c, period, status, cls, days]) => (
                  <div
                    key={c}
                    className="grid grid-cols-[1.4fr_auto] items-center gap-3 border-b border-[#efece2] px-3 py-2 text-[9px] last:border-0 sm:grid-cols-[1.4fr_1.1fr_1fr_1.2fr_0.7fr]"
                  >
                    <span className="font-semibold">{c}</span>
                    <span className="hidden text-[#4c534c] sm:block">{period}</span>
                    <span>
                      <span className={cn("rounded-full px-2 py-0.5 text-[8px] font-semibold", cls)}>{status}</span>
                    </span>
                    <span className="hidden leading-tight text-[#6b7168] sm:block">
                      Preparer: ZAH accountant
                      <br />
                      Reviewer: ZAH reviewer
                    </span>
                    <span className="hidden sm:block">
                      <span className="block font-semibold">7 Dec 2026</span>
                      <span className="text-[8px] text-[#8c9189]">{days}</span>
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

export const nexusPoints = [
  {
    icon: CircleDot,
    title: "Live status on every job",
    text: "Assigned, preparing, internal review, your review, completed - your UK team always knows where work stands.",
  },
  {
    icon: ListChecks,
    title: "A checklist for every service",
    text: "VAT, bookkeeping, year-end and Self Assessment each have a short checklist that must be complete before review.",
  },
  {
    icon: MessageSquareText,
    title: "Review points in one place",
    text: "Your queries are logged against the job, answered and closed - and lessons carry forward to the next period.",
  },
  {
    icon: CalendarClock,
    title: "Deadlines tracked for you",
    text: "VAT quarters, year-ends and 31 January worked back from the due date, so nothing is left to memory.",
  },
];

function Beam({ reverse = false }: { reverse?: boolean }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-10 w-px sm:h-px sm:w-full sm:min-w-16">
      <span className="absolute inset-0 bg-gradient-to-b from-[#e5b84a]/10 via-[#e5b84a]/60 to-[#e5b84a]/10 sm:bg-gradient-to-r" />
      <span className={cn("nexus-dot absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-[#e5b84a] shadow-[0_0_12px_3px_rgba(229,184,74,0.7)] sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0", reverse && "nexus-dot-rev")} />
      <span className={cn("nexus-dot nexus-dot-late absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_10px_2px_rgba(125,211,252,0.7)] sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0", !reverse && "nexus-dot-rev")} />
    </div>
  );
}

/** UK <-> Nexus <-> India bridge graphic with animated data flow. */
export function NexusBridge() {
  return (
    <div className="grid items-center gap-2 sm:grid-cols-[1fr_minmax(4rem,0.5fr)_1.25fr_minmax(4rem,0.5fr)_1fr] sm:gap-0">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
        <p className="text-2xl" aria-hidden="true">🇬🇧</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">United Kingdom</p>
        <p className="mt-2 text-lg font-semibold text-foreground">Your practice</p>
        <p className="mt-1 text-sm text-foreground/55">Review · approve · file</p>
      </div>
      <Beam />
      <div className="relative isolate">
        <div aria-hidden="true" className="nexus-glow absolute -inset-1 -z-10 sm:-inset-6 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(229,184,74,0.45),transparent)] blur-2xl" />
        <div className="nexus-frame rounded-[1.6rem] p-px">
          <div className="rounded-3xl bg-[#0a2243] px-6 py-8 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#e5b84a] text-[#0b1a33] shadow-[0_10px_30px_-6px_rgba(229,184,74,0.7)]">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e5b84a]">ZAH Nexus</p>
            <p className="mt-2 text-xl font-semibold text-foreground">One shared workspace</p>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {["Status", "Checklists", "Review points", "Deadlines"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground/75">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Beam reverse />
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
        <p className="text-2xl" aria-hidden="true">🇮🇳</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">India</p>
        <p className="mt-2 text-lg font-semibold text-foreground">ZAH delivery team</p>
        <p className="mt-1 text-sm text-foreground/55">Prepare · review · deliver</p>
      </div>
    </div>
  );
}
