"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
  options?: Parameters<typeof useEmblaCarousel>[0];
  showArrows?: boolean;
  showDots?: boolean;
  ariaLabel?: string;
}

export function Carousel({
  children,
  className,
  slideClassName,
  options,
  showArrows = true,
  showDots = true,
  ariaLabel = "Carousel",
}: CarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "start", ...options });
  const [selected, setSelected] = React.useState(0);
  const [snaps, setSnaps] = React.useState<number[]>([]);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    /* eslint-disable react-hooks/set-state-in-effect -- one-time init sync with Embla (external system); later updates arrive via events */
    setSnaps(embla.scrollSnapList());
    onSelect();
    /* eslint-enable react-hooks/set-state-in-effect */
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  const slides = React.Children.toArray(children);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel ?? "Carousel"}
    >
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="-ml-4 flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showArrows && slides.length > 1 ? (
        <div className="mt-6 flex justify-center gap-3 sm:pointer-events-none sm:absolute sm:inset-y-0 sm:-left-5 sm:-right-5 sm:mt-0 sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous slide"
            className="pointer-events-auto grid size-10 place-items-center rounded-full border border-border bg-background text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            disabled={!canNext}
            aria-label="Next slide"
            className="pointer-events-auto grid size-10 place-items-center rounded-full border border-border bg-background text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {showDots && snaps.length > 1 ? (
        <div className="mt-6 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              onClick={() => embla?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selected ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
