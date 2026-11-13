import { CalendarClock, CircleDot, ListChecks, MessageSquareText, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

export { NexusMock } from "@/components/marketing/nexus-live";

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
