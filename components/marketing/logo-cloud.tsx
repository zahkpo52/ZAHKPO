import Image from "next/image";

import { cn } from "@/lib/utils";
import { tools } from "@/content/tools";

export function LogoCloud({
  className,
  label = "Working across the platforms your clients already use",
}: {
  className?: string;
  label?: string | null;
}) {
  return (
    <div className={className}>
      {label ? <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p> : null}
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {tools.map((tool) => (
          <li key={tool.name} className="group flex items-center gap-2.5" title={tool.name}>
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={tool.width}
              height={tool.height}
              loading="lazy"
              decoding="async"
              className={cn(
                "w-auto transition duration-300 group-hover:opacity-90",
                tool.name === "Xero" ? "opacity-60 grayscale" : "opacity-60 brightness-0 invert",
                tool.width === tool.height ? "h-9 md:h-10" : "h-6 md:h-7",
              )}
            />
            {tool.showName ? (
              <span className="text-lg font-semibold tracking-tight text-white/60 transition-colors group-hover:text-white/90">
                {tool.name}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
