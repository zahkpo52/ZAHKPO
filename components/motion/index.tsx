"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/*
 * Lightweight scroll-reveal helpers. They used to run on framer-motion, which
 * shipped a large animation runtime to every page and was the main cost on
 * mobile. The same effects now use CSS transitions (see `.motion-*` in
 * globals.css) plus one IntersectionObserver per element, so the JavaScript
 * cost is tiny. Reduced-motion users get static content via CSS.
 */

function useInViewOnce<T extends Element>(amount: number) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return [ref, inView] as const;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Kept for API compatibility; reveals always run once. */
  once?: boolean;
}

/** Fade + rise into view. */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      data-shown={inView ? "" : undefined}
      className={cn("motion-reveal", className)}
      style={
        {
          "--motion-y": `${y}px`,
          transitionDelay: delay ? `${delay}s` : undefined,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}

/** Parent that staggers any <StaggerItem> descendants as they enter the viewport. */
export function Stagger({ children, className, gap = 0.08, delay = 0 }: StaggerProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.15);

  React.useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    el.querySelectorAll<HTMLElement>("[data-stagger-item]").forEach((item, i) => {
      item.style.transitionDelay = `${delay + i * gap}s`;
    });
  }, [inView, gap, delay, ref]);

  return (
    <div
      ref={ref}
      data-shown={inView ? "" : undefined}
      className={cn("motion-stagger", className)}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <div
      data-stagger-item=""
      className={cn("motion-item", className)}
      style={{ "--motion-y": `${y}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Counts up from 0 to `value` when scrolled into view. The final figure is
 * rendered in the server HTML (so crawlers and no-JS readers see the real
 * number); the count-up only runs in the browser once the counter is visible.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.5,
}: CounterProps) {
  const [ref, inView] = useInViewOnce<HTMLSpanElement>(0.5);
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const start = performance.now();
    const ms = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {Math.round(display).toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

/** Generic in-view fade for one-off elements. */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={cn("motion-fade", className)} delay={delay} y={0}>
      {children}
    </Reveal>
  );
}
