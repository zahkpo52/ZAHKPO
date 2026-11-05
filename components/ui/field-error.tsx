import * as React from "react";

import { cn } from "@/lib/utils";

export function FieldError({
  children,
  id,
  className,
}: {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className={cn("text-sm text-danger", className)}>
      {children}
    </p>
  );
}
