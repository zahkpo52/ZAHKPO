"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Gift, X } from "lucide-react";

const SEEN_KEY = "zah-trial-offer-seen";
const SHOW_AGAIN_AFTER_DAYS = 7;
const HIDDEN_ON = ["/contact", "/privacy", "/terms", "/accessibility", "/thank-you"];

function shouldShow() {
  try {
    const seen = Number(window.localStorage.getItem(SEEN_KEY) || 0);
    return !seen || Date.now() - seen > SHOW_AGAIN_AFTER_DAYS * 86_400_000;
  } catch {
    return true;
  }
}

function markSeen() {
  try {
    window.localStorage.setItem(SEEN_KEY, String(Date.now()));
  } catch {
    /* storage blocked - show again next visit */
  }
}

/** Short, tasteful fireworks on a full-screen canvas (gold, white, soft blue). */
function runFireworks(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const resize = () => {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  };
  resize();
  window.addEventListener("resize", resize);

  const colours = ["#e5b84a", "#f3d27a", "#ffffff", "#c99a2e", "#9fd3f5"];
  type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; c: string; size: number };
  type R = { x: number; y: number; vy: number; targetY: number; c: string };
  const particles: P[] = [];
  const rockets: R[] = [];
  const W = () => canvas.width;
  const H = () => canvas.height;

  const burst = (x: number, y: number, c: string) => {
    const n = 70 + Math.floor(Math.random() * 30);
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 * i) / n + Math.random() * 0.08;
      const s = (2.2 + Math.random() * 3.4) * dpr;
      particles.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        life: 0,
        max: 55 + Math.random() * 35,
        c: Math.random() < 0.25 ? "#ffffff" : c,
        size: (1.2 + Math.random() * 1.6) * dpr,
      });
    }
  };

  const launches = [0, 260, 520, 850, 1150, 1500, 1850];
  const start = performance.now();
  let launched = 0;
  let frame = 0;

  const tick = (now: number) => {
    const t = now - start;
    while (launched < launches.length && t >= launches[launched]) {
      rockets.push({
        x: W() * (0.15 + Math.random() * 0.7),
        y: H(),
        vy: -(10 + Math.random() * 4) * dpr,
        targetY: H() * (0.15 + Math.random() * 0.3),
        c: colours[launched % colours.length],
      });
      launched++;
    }

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.22)";
    ctx.fillRect(0, 0, W(), H());
    ctx.globalCompositeOperation = "lighter";

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.y += r.vy;
      r.vy *= 0.985;
      ctx.fillStyle = r.c;
      ctx.beginPath();
      ctx.arc(r.x, r.y, 2.2 * dpr, 0, Math.PI * 2);
      ctx.fill();
      if (r.y <= r.targetY || r.vy > -2) {
        burst(r.x, r.y, r.c);
        rockets.splice(i, 1);
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.975;
      p.vy = p.vy * 0.975 + 0.06 * dpr;
      const alpha = Math.max(0, 1 - p.life / p.max);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (p.life >= p.max) particles.splice(i, 1);
    }

    if (t < 4200 || particles.length || rockets.length) frame = requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, W(), H());
  };
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
  };
}

/**
 * Welcome offer: fireworks and "3 free trial jobs unlocked" on a visitor's first
 * visit (and again after a week). Static card for reduced-motion users.
 */
export function TrialOffer() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const claimRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (HIDDEN_ON.some((p) => pathname?.startsWith(p))) return;
    if (!shouldShow()) return;
    const id = window.setTimeout(() => setOpen(true), 1400);
    return () => window.clearTimeout(id);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;
    markSeen();
    claimRef.current?.focus({ preventScroll: true });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stop = !reduced && canvasRef.current ? runFireworks(canvasRef.current) : () => {};
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      stop();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close offer"
        className="trial-fade absolute inset-0 bg-[#031833]/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-title"
        className="trial-pop theme-navy relative w-full max-w-md overflow-hidden rounded-2xl border border-[#e5b84a]/40 bg-[#061c3a] p-7 text-center shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:p-9"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#e5b84a] to-transparent" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#e5b84a] text-[#0b1a33] shadow-[0_12px_30px_-8px_rgba(229,184,74,0.7)]">
          <Gift className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e5b84a]">Welcome offer unlocked</p>
        <h2 id="trial-title" className="mt-3 font-serif text-3xl font-medium leading-tight text-white sm:text-[2.1rem]">
          3 free trial jobs
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-white/75">
          Try us on any three jobs - bookkeeping, VAT, year-end, payroll or tax. Judge the quality and turnaround
          yourself before you pay a penny.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <Link
            ref={claimRef}
            href="/contact?offer=free-trial"
            onClick={() => setOpen(false)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#e5b84a] px-6 text-sm font-semibold text-[#0b1a33] transition-colors hover:bg-[#edc65f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Claim my 3 free jobs
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="h-10 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Maybe later
          </button>
        </div>
        <p className="mt-4 text-[11px] text-white/45">
          For UK accounting firms new to ZAH KPO.{" "}
          <Link href="/terms#free-trial" onClick={() => setOpen(false)} className="underline underline-offset-2 hover:text-white/70">
            Offer terms
          </Link>
        </p>
      </div>
    </div>
  );
}
