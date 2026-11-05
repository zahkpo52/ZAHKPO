import * as React from "react";

import { BrandHighlight } from "@/components/ui/brand";
import { cn } from "@/lib/utils";

export function Container({
  className,
  as: Comp = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  return <Comp className={cn("container-page", className)} {...props} />;
}

export function Section({
  className,
  as: Comp = "section",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  return <Comp className={cn("py-20 md:py-28 lg:py-32", className)} {...props} />;
}

export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-primary",
        className,
      )}
      {...props}
    />
  );
}

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        <BrandHighlight>{title}</BrandHighlight>
      </Heading>
      {description ? (
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
