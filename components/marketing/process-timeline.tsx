import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types/content";

export function ProcessTimeline({ steps, className }: { steps: ProcessStep[]; className?: string }) {
  return (
    <ol className={cn("space-y-6", className)}>
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(120deg,var(--primary),var(--primary-strong))] text-sm font-semibold text-primary-foreground">
              {i + 1}
            </span>
            {i < steps.length - 1 ? (
              <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
            ) : null}
          </div>
          <div className="pb-2">
            <h3 className="font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
