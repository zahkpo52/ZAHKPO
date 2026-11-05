import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconTile } from "./icon-tile";

interface OfferingCardProps {
  href: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  eyebrow?: string;
  className?: string;
}

export function OfferingCard({ href, title, summary, icon, eyebrow, className }: OfferingCardProps) {
  return (
    <Link href={href} className={cn("group block rounded-2xl focus-visible:outline-none", className)}>
      <Card
        interactive
        className="h-full p-6 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background"
      >
        <IconTile icon={icon} />
        {eyebrow ? (
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        ) : null}
        <h3 className={cn("text-lg font-semibold tracking-tight text-foreground", eyebrow ? "mt-1" : "mt-4")}>
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Learn more
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Card>
    </Link>
  );
}
