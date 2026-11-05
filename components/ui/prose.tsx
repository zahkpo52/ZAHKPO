import * as React from "react";

import { cn } from "@/lib/utils";

/** Typographic wrapper for long-form HTML (privacy, blog bodies). */
export function Prose({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "max-w-[68ch] text-[1.0625rem] leading-[1.75] text-muted-foreground",
        "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
        "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground",
        "[&_p]:my-5",
        "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-primary",
        "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:my-2",
        "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-foreground",
        "[&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em]",
        "[&_hr]:my-10 [&_hr]:border-border",
        "[&_:first-child]:mt-0 [&_:last-child]:mb-0",
        className,
      )}
      {...props}
    />
  );
}
