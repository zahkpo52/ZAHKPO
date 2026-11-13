import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { freeTools } from "@/content/free-tools";

export function FreeToolsGrid() {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {freeTools.map((t) => (
        <StaggerItem key={t.href}>
          <Link
            href={t.href}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(6,28,58,0.45)]"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-[#061c3a] text-[#e5b84a]">
              <t.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="mt-5 block font-serif text-xl font-medium text-foreground">{t.title}</span>
            <span className="mt-2 block flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              {t.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
