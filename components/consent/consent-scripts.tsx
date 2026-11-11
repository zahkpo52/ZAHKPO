"use client";

import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import { Button } from "@/components/ui/button";

/**
 * Cookie consent (UK GDPR / PECR). Google Analytics and the Botpress chat
 * widget set cookies/storage, so neither loads until the visitor accepts.
 * The choice is kept in localStorage; "Cookie settings" in the footer reopens it.
 */
const GA_ID = "G-2E5MF17EDZ";
const STORAGE_KEY = "zah-cookie-consent";
const OPEN_EVENT = "zah:open-cookie-settings";

type Choice = "accepted" | "rejected" | null;

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* storage blocked - choice applies to this page view only */
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function ConsentScripts() {
  const [choice, setChoice] = React.useState<Choice>(null);
  const [ready, setReady] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Read the stored choice after hydration (server HTML has no banner).
    const timer = window.setTimeout(() => {
      const stored = readChoice();
      setChoice(stored);
      setOpen(stored === null);
      setReady(true);
    }, 0);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  function decide(next: Exclude<Choice, null>) {
    const wasAccepted = choice === "accepted";
    saveChoice(next);
    setChoice(next);
    setOpen(false);
    // Withdrawing consent: reload so already-loaded scripts are dropped.
    if (wasAccepted && next === "rejected") window.location.reload();
  }

  const accepted = choice === "accepted";

  return (
    <>
      {accepted ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
          <Script src="https://cdn.botpress.cloud/webchat/v3.7/inject.js" strategy="lazyOnload" />
          <Script
            src="https://files.bpcontent.cloud/2026/09/09/09/20260909094715-V501IO0Q.js"
            strategy="lazyOnload"
          />
        </>
      ) : null}

      {ready && open ? (
        <section
          aria-label="Cookie preferences"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:left-auto sm:right-6 sm:mx-0"
        >
          <p className="font-semibold text-foreground">Cookies on zahkpo.com</p>
          <p className="mt-2 leading-relaxed">
            We use optional cookies for Google Analytics and our website chat, to understand how the
            site is used. They only load if you accept. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button type="button" onClick={() => decide("accepted")} className="min-h-11">
              Accept optional cookies
            </Button>
            <Button type="button" variant="outline" onClick={() => decide("rejected")} className="min-h-11">
              Reject
            </Button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie settings
    </button>
  );
}
