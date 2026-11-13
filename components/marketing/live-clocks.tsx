"use client";

import * as React from "react";

const zones = [
  { label: "London", note: "Your time", tz: "Europe/London" },
  { label: "Khargone, India", note: "Our delivery team", tz: "Asia/Kolkata" },
];

function fmt(tz: string, d: Date) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(d);
}

/** Live London / India clocks. Renders placeholders on the server, real times once hydrated. */
export function LiveClocks({ className }: { className?: string }) {
  const [now, setNow] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const tick = () => setNow(new Date());
    const first = requestAnimationFrame(tick);
    const id = window.setInterval(tick, 15_000);
    return () => {
      cancelAnimationFrame(first);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className={className}>
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
        <span className="relative flex size-2">
          <span className="live-ping absolute inline-flex size-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        Live
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-5">
        {zones.map((z) => (
          <div key={z.tz}>
            <dt className="text-xs text-white/60">{z.label}</dt>
            <dd className="mt-0.5 font-serif text-3xl font-medium tabular-nums text-white" suppressHydrationWarning>
              {now ? fmt(z.tz, now) : "--:--"}
            </dd>
            <dd className="mt-0.5 text-[11px] text-white/45">{z.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
