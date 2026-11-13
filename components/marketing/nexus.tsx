import { CalendarClock, CircleDot, ListChecks, MessageSquareText } from "lucide-react";

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

/** Cable height across the main span (quadratic curve between the two towers). */
function cableY(x: number) {
  const t = (x - 250) / 500;
  return 60 * (1 - t) ** 2 + 2 * 250 * t * (1 - t) + 60 * t ** 2;
}

const hangers = Array.from({ length: 19 }, (_, i) => 275 + i * 25).filter((x) => Math.abs(x - 500) > 70);
const sideHangers = [90, 130, 170, 210, 790, 830, 870, 910];
const sideCable = (x: number) => (x < 500 ? 196 - ((x - 60) / 190) * 136 : 60 + ((x - 750) / 190) * 136);

/** UK <-> ZAH Nexus <-> India, drawn as a suspension bridge with work flowing both ways. */
export function NexusBridge() {
  return (
    <div className="theme-navy relative overflow-hidden rounded-3xl border border-[#e5b84a]/25 bg-[#061c3a] px-4 pb-8 pt-8 text-white shadow-[0_40px_100px_-40px_rgba(6,28,58,0.8)] sm:px-10 sm:pb-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(229,184,74,0.16),transparent)]" />
      <svg
        viewBox="0 0 1000 300"
        role="img"
        aria-labelledby="bridge-title"
        className="relative mx-auto block h-auto w-full max-w-5xl"
      >
        <title id="bridge-title">A bridge from your UK practice to the ZAH delivery team in India, with ZAH Nexus at its centre</title>
        <defs>
          <linearGradient id="br-water" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0d3566" stopOpacity="0.9" />
            <stop offset="1" stopColor="#061c3a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="br-gold" x1="0" x2="1">
            <stop offset="0" stopColor="#c99a2e" />
            <stop offset="0.5" stopColor="#f3d27a" />
            <stop offset="1" stopColor="#c99a2e" />
          </linearGradient>
          <filter id="br-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* water */}
        <rect x="0" y="232" width="1000" height="68" fill="url(#br-water)" />
        {[248, 262, 278].map((y, i) => (
          <path key={y} d={`M${40 + i * 30} ${y} H${960 - i * 30}`} stroke="#9fd3f5" strokeOpacity={0.12 - i * 0.03} strokeWidth="2" strokeDasharray="18 14" />
        ))}

        {/* towers */}
        {[250, 750].map((x) => (
          <g key={x}>
            <rect x={x - 9} y="48" width="18" height="190" rx="3" fill="#0f2e57" stroke="#e5b84a" strokeOpacity="0.55" />
            <rect x={x - 14} y="44" width="28" height="10" rx="2" fill="#e5b84a" />
            <rect x={x - 9} y="110" width="18" height="4" fill="#e5b84a" fillOpacity="0.5" />
            <rect x={x - 9} y="160" width="18" height="4" fill="#e5b84a" fillOpacity="0.5" />
          </g>
        ))}

        {/* hangers */}
        {hangers.map((x) => (
          <line key={x} x1={x} x2={x} y1={cableY(x)} y2="206" stroke="#e5b84a" strokeOpacity="0.35" strokeWidth="1.5" />
        ))}
        {sideHangers.map((x) => (
          <line key={x} x1={x} x2={x} y1={sideCable(x)} y2="206" stroke="#e5b84a" strokeOpacity="0.3" strokeWidth="1.5" />
        ))}

        {/* main cables */}
        <path d="M60 196 L250 60 Q500 250 750 60 L940 196" fill="none" stroke="url(#br-gold)" strokeWidth="3.5" strokeLinecap="round" />

        {/* deck */}
        <rect x="40" y="204" width="920" height="12" rx="3" fill="#123866" stroke="#e5b84a" strokeOpacity="0.5" />
        <path d="M40 222 H960" stroke="#e5b84a" strokeOpacity="0.25" strokeWidth="2" />

        {/* work flowing UK -> India (gold) and India -> UK (blue) */}
        <g className="bridge-flow">
          {[0, 1.3, 2.6].map((d) => (
            <circle key={`g${d}`} r="5" cy="210" fill="#fff4cf" stroke="#e5b84a" strokeWidth="3">
              <animate attributeName="cx" from="70" to="930" dur="4s" begin={`${d}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin={`${d}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {[0.65, 1.95, 3.25].map((d) => (
            <circle key={`b${d}`} r="4" cy="210" fill="#e8f6ff" stroke="#7cc4f0" strokeWidth="3">
              <animate attributeName="cx" from="930" to="70" dur="4s" begin={`${d}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin={`${d}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* ends */}
        <g>
          <circle cx="40" cy="210" r="26" fill="#0a2243" stroke="#e5b84a" strokeWidth="2" />
          <text x="40" y="216" textAnchor="middle" fontSize="16" fontWeight="700" fill="#f3d27a" fontFamily="system-ui, sans-serif">UK</text>
          <circle cx="960" cy="210" r="26" fill="#0a2243" stroke="#9fd3f5" strokeWidth="2" />
          <text x="960" y="216" textAnchor="middle" fontSize="16" fontWeight="700" fill="#cfe9fb" fontFamily="system-ui, sans-serif">IN</text>
        </g>

        {/* Nexus hub at mid-span */}
        <g>
          <circle cx="500" cy="186" r="46" fill="#e5b84a" opacity="0.18" filter="url(#br-glow)">
            <animate attributeName="r" values="40;52;40" dur="3s" repeatCount="indefinite" />
          </circle>
          <rect x="446" y="160" width="108" height="56" rx="14" fill="#0a2243" stroke="#e5b84a" strokeWidth="2" />
          <path d="M470 176 l10 -4 l10 4 v7 c0 6 -4 10 -10 12 c-6 -2 -10 -6 -10 -12 z" fill="#e5b84a" />
          <path d="M475 183 l4 4 l7 -8" fill="none" stroke="#0a2243" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="498" y="184" fontSize="13" fontWeight="700" fill="#ffffff" fontFamily="system-ui, sans-serif">ZAH</text>
          <text x="498" y="200" fontSize="13" fontWeight="700" fill="#f3d27a" fontFamily="system-ui, sans-serif">Nexus</text>
        </g>
      </svg>

      <div className="relative mt-6 grid gap-4 text-center sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b84a]">United Kingdom</p>
          <p className="mt-2 text-lg font-semibold text-white">Your practice</p>
          <p className="mt-1 text-sm text-white/70">Send work · review · approve · file</p>
        </div>
        <div className="rounded-2xl border border-[#e5b84a]/40 bg-[#e5b84a]/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f3d27a]">ZAH Nexus</p>
          <p className="mt-2 text-lg font-semibold text-white">One shared workspace</p>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {["Status", "Checklists", "Review points", "Deadlines"].map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white/85">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9fd3f5]">India</p>
          <p className="mt-2 text-lg font-semibold text-white">ZAH delivery team</p>
          <p className="mt-1 text-sm text-white/70">Prepare · second review · deliver</p>
        </div>
      </div>
    </div>
  );
}
