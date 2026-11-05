import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        soft: "bg-primary/10 text-primary",
        accent: "bg-accent/12 text-accent-foreground dark:text-accent",
        outline: "border border-border text-muted-foreground",
        success: "bg-success/10 text-success",
        surface: "bg-surface-2 text-muted-foreground",
      },
      size: {
        sm: "px-2.5 py-0.5",
        md: "px-3 py-1",
      },
    },
    defaultVariants: { variant: "soft", size: "md" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
