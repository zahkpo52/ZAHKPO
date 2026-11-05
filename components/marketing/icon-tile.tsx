import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function IconTile({
  icon: Icon,
  className,
  size = "md",
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "size-14 rounded-2xl" : size === "sm" ? "size-9 rounded-lg" : "size-11 rounded-xl";
  const glyph = size === "lg" ? "size-7" : size === "sm" ? "size-4" : "size-5";
  return (
    <span className={cn("inline-grid shrink-0 place-items-center bg-primary/10 text-primary", box, className)}>
      <Icon className={glyph} aria-hidden="true" />
    </span>
  );
}
