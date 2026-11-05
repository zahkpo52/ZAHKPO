import { Check } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Deliverable } from "@/types/content";

export function DeliverablesGrid({ items, className }: { items: Deliverable[]; className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <Card key={item.title} className="flex gap-4 p-5">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Check className="size-4" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-medium text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
