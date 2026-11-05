import * as React from "react";
import Image from "next/image";

import { BrandHighlight } from "@/components/ui/brand";
import { Container, Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Breadcrumb, type Crumb } from "./breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
  /** Optional photographic backdrop; switches the hero to a dark navy treatment.
   *  `mobileSrc` is a portrait crop shown below the `sm` breakpoint, where wide
   *  landscape shots degrade into unrecognisable centre crops. */
  image?: { src: string; mobileSrc?: string };
}

function toWebpPath(src?: string) {
  if (!src) return undefined;
  return src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  className,
  image,
}: PageHeroProps) {
  const withImage = Boolean(image);
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        withImage && "dark bg-[#031833]",
        className,
      )}
    >
      {withImage ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <picture>
            {image!.mobileSrc ? (
              <>
                <source media="(max-width: 639px)" type="image/webp" srcSet={toWebpPath(image!.mobileSrc)} />
                <source media="(max-width: 639px)" srcSet={image!.mobileSrc} />
              </>
            ) : null}
            <source media="(min-width: 640px)" type="image/webp" srcSet={toWebpPath(image!.src)} />
            <img
              src={image!.src}
              alt=""
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-top"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#031833]/90 via-[#031833]/70 to-[#031833]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031833]/70 via-transparent to-[#031833]/30" />
        </div>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dotted opacity-50 mask-fade-b"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
        </>
      )}
      <Container className="relative py-14 md:py-20 lg:py-24">
        {crumbs ? <Breadcrumb items={crumbs} className="mb-6" /> : null}
        {eyebrow ? (
          <Eyebrow className={withImage ? "text-[#f8d509]" : undefined}>{eyebrow}</Eyebrow>
        ) : null}
        <h1
          className={cn(
            "mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl",
            withImage && "text-white",
          )}
        >
          <BrandHighlight>{title}</BrandHighlight>
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-pretty text-lg leading-relaxed",
              withImage ? "text-white/80" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}
