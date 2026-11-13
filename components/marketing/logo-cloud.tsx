import Image from "next/image";

import { cn } from "@/lib/utils";
import { tools } from "@/content/tools";

function Logo({ tool, hidden = false }: { tool: (typeof tools)[number]; hidden?: boolean }) {
  return (
    <li className="group flex shrink-0 items-center gap-2.5" title={tool.name} aria-hidden={hidden || undefined}>
      <Image
        src={tool.logo}
        alt={hidden ? "" : `${tool.name} logo`}
        width={tool.width}
        height={tool.height}
        loading="lazy"
        decoding="async"
        className={cn("w-auto opacity-90 transition duration-300 group-hover:opacity-100", tool.width === tool.height ? "h-9 md:h-10" : "h-6 md:h-7")}
      />
      {tool.showName ? (
        <span className="text-lg font-semibold tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
          {tool.name}
        </span>
      ) : null}
    </li>
  );
}

export function LogoCloud({
  className,
  label = "Working across the platforms your clients already use",
  marquee = false,
}: {
  className?: string;
  label?: string | null;
  /** Slowly scroll the logos in a loop (pauses on hover, static for reduced motion). */
  marquee?: boolean;
}) {
  return (
    <div className={className}>
      {label ? <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p> : null}
      {marquee ? (
        <div className="logo-marquee mask-fade-x mt-8 overflow-hidden">
          <ul className="logo-marquee-track flex w-max items-center gap-x-16">
            {tools.map((tool) => (
              <Logo key={tool.name} tool={tool} />
            ))}
            {tools.map((tool) => (
              <Logo key={`${tool.name}-copy`} tool={tool} hidden />
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {tools.map((tool) => (
            <Logo key={tool.name} tool={tool} />
          ))}
        </ul>
      )}
    </div>
  );
}
