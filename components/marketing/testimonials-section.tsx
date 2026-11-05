"use client";

import * as React from "react";
import { Play, Quote, Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { clientTestimonials, videoTestimonial } from "@/content/testimonials";
import type { Testimonial } from "@/types/content";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "size-4 fill-[#d97706] text-[#d97706]" : "size-4 text-border"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <Card interactive className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={t.rating} />
        <Quote className="size-6 text-primary/25" aria-hidden="true" />
      </div>
      <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(120deg,var(--primary),var(--primary-strong))] text-xs font-bold text-primary-foreground"
        >
          {initials(t.company ?? t.author)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{t.author}</p>
          <p className="truncate text-xs text-muted-foreground">
            {t.role}
            {t.company ? ` · ${t.company}` : ""}
          </p>
        </div>
      </figcaption>
    </Card>
  );
}

function VideoReview() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    // defer until the controls state applies
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full overflow-hidden bg-[#031833]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={videoTestimonial.poster}
          controls={playing}
          preload="none"
          playsInline
        >
          <source src={videoTestimonial.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        {!playing ? (
          <button
            type="button"
            onClick={play}
            aria-label={`Play video review from ${videoTestimonial.author}`}
            className="absolute inset-0 grid place-items-center bg-gradient-to-t from-[#031833]/80 via-[#031833]/20 to-transparent transition-colors hover:bg-[#031833]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          >
            <span className="grid size-16 place-items-center rounded-full bg-[#f8d509] shadow-[0_12px_40px_-8px_rgba(245,193,0,0.7)] transition-transform duration-300 ease-out-quint group-hover:scale-110">
              <Play className="ml-1 size-7 fill-[#1c1600] text-[#1c1600]" aria-hidden="true" />
            </span>
            <span className="absolute bottom-4 left-5 right-5 text-left">
              <span className="block text-sm font-semibold text-white">
                {videoTestimonial.author}
              </span>
              <span className="block text-xs text-white/70">{videoTestimonial.role}</span>
            </span>
          </button>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Play className="size-3" aria-hidden="true" />
          Video review
        </span>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
          {videoTestimonial.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {videoTestimonial.description}
        </p>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by growing UK practices"
            description="Partners and practice managers on what changed after they moved their back office to ZAH."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1.6fr]">
          <Reveal className="h-full">
            <VideoReview />
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {clientTestimonials.map((t) => (
              <StaggerItem key={t.author} className="h-full">
                <ReviewCard t={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="text-center text-sm text-muted-foreground">
            Firms across the UK rely on ZAH KPO
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clientTestimonials.map((t) => (
              <li
                key={t.company}
                className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-muted-foreground/80"
              >
                <span
                  aria-hidden="true"
                  className="grid size-7 place-items-center rounded-lg border border-border bg-card text-[0.65rem] font-bold text-primary"
                >
                  {initials(t.company ?? t.author)}
                </span>
                {t.company}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
