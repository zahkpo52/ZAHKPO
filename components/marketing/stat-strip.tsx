"use client";

import { AnimatedCounter } from "@/components/motion";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types/content";

export function StatStrip({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-card p-6 text-center sm:p-8">
          <dd className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
          </dd>
          <dt className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
