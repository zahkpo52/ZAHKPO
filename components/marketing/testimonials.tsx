"use client";

import { Quote } from "lucide-react";

import { Carousel } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/content";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const multiple = items.length > 1;
  return (
    <Carousel
      ariaLabel="What people say about ZAH"
      slideClassName="sm:basis-full"
      showArrows={multiple}
      showDots={multiple}
    >
      {items.map((t, i) => (
        <figure key={`${t.author}-${i}`} className="h-full">
          <Card className="h-full p-8 md:p-10">
            <Quote className="size-8 text-primary/30" aria-hidden="true" />
            <blockquote className="mt-4 text-pretty text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-foreground">{t.author}</span>
              <span className="text-muted-foreground">
                {" "}
                - {t.role}
                {t.company ? `, ${t.company}` : ""}
              </span>
            </figcaption>
          </Card>
        </figure>
      ))}
    </Carousel>
  );
}
