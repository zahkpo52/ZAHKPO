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
      {label ? <p className="text-center text-sm text-muted-foreground">{label}</p> : null}
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
                "w-auto opacity-80 saturate-[.85] transition duration-300 group-hover:opacity-100 group-hover:saturate-100",
                tool.width === tool.height ? "h-9 md:h-10" : "h-6 md:h-7",
              )}
            />
            {tool.showName ? (
              <span className="text-lg font-semibold tracking-tight text-muted-foreground/80 transition-colors group-hover:text-foreground">
                {tool.name}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
