import { ArrowLeftRight, CalendarClock, CircleDot, ListChecks, MessageSquareText } from "lucide-react";

import { cn } from "@/lib/utils";

const rows = [
  ["Client 01 Ltd", "Q3 VAT", "UK review", "bg-sky-400/15 text-sky-300"],
  ["Client 02 Ltd", "Year-end", "Internal review", "bg-amber-400/15 text-amber-300"],
  ["Client 03", "Self Assessment", "Preparing", "bg-white/10 text-white/70"],
  ["Client 04 Ltd", "Q3 VAT", "Completed", "bg-emerald-400/15 text-emerald-300"],
  ["Client 05 Ltd", "Bookkeeping", "Preparing", "bg-white/10 text-white/70"],
];

/** Illustrative ZAH Nexus screen (dummy data) for marketing use. */
export function NexusMock({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border shadow-2xl",
        light ? "border-slate-200 bg-[#051a37]" : "border-white/10 bg-[#061c3a]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs font-semibold tracking-wide text-white/80">
          ZAH <span className="text-[#e5b84a]">Nexus</span>
        </span>
        <span className="ml-auto rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-white/50">VAT Hub · Q3 2026</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/10 text-center">
        {[
          ["24", "In progress"],
          ["6", "With UK team"],
          ["18", "Completed"],
        ].map(([n, l]) => (
          <div key={l} className="bg-[#061c3a] py-3">
            <p className="text-lg font-semibold text-white">{n}</p>
            <p className="text-[10px] uppercase tracking-wider text-white/50">{l}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-white/5 px-4 py-2">
        {rows.map(([c, j, s, cls]) => (
          <li key={c} className="flex items-center gap-3 py-2.5 text-xs">
            <span className="size-6 shrink-0 rounded-md bg-white/5" />
            <span className="flex-1 text-white/85">{c}</span>
            <span className="hidden w-24 text-white/50 sm:block">{j}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", cls)}>{s}</span>
          </li>
        ))}
      </ul>
      <div className="m-4 mt-1 rounded-xl border border-[#e5b84a]/25 bg-[#e5b84a]/5 p-3 text-xs">
        <p className="font-semibold text-[#e5b84a]">Review point · Client 01 Ltd</p>
        <p className="mt-1 text-white/70">UK team: &ldquo;Please confirm the fuel scale charge.&rdquo;</p>
        <p className="mt-1 text-white/50">ZAH: Clarified with workings - point closed.</p>
      </div>
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

/** UK ⇄ Nexus ⇄ India bridge graphic. */
export function NexusBridge({ light = false }: { light?: boolean }) {
  const box = light ? "border-slate-200 bg-white text-slate-900" : "border-white/10 bg-white/[0.04] text-white";
  const sub = light ? "text-slate-500" : "text-white/55";
  return (
    <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
      <div className={cn("rounded-2xl border p-5 text-center", box)}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">UK</p>
        <p className="mt-2 font-semibold">Your practice</p>
        <p className={cn("mt-1 text-xs", sub)}>Review, approve, file</p>
      </div>
      <ArrowLeftRight className="mx-auto size-5 rotate-90 text-[#e5b84a] sm:rotate-0" />
      <div className="rounded-2xl border border-[#e5b84a]/40 bg-[#e5b84a]/10 p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">ZAH Nexus</p>
        <p className={cn("mt-2 font-semibold", light ? "text-slate-900" : "text-white")}>One shared workspace</p>
        <p className={cn("mt-1 text-xs", sub)}>Status · checklists · review points · deadlines</p>
      </div>
      <ArrowLeftRight className="mx-auto size-5 rotate-90 text-[#e5b84a] sm:rotate-0" />
      <div className={cn("rounded-2xl border p-5 text-center", box)}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">India</p>
        <p className="mt-2 font-semibold">ZAH delivery team</p>
        <p className={cn("mt-1 text-xs", sub)}>Prepare, review, deliver</p>
      </div>
    </div>
  );
}


