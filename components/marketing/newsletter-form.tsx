"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";

import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field-error";

// Sign-ups open the visitor's email app with a subscribe request to info@zahkpo.com (no third-party form service).

export function NewsletterForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", website: "" },
  });

  function onSubmit(values: NewsletterValues) {
    if (values.website) return; // honeypot tripped
    setFailed(false);
    const subject = "Subscribe me to ZAH KPO updates";
    const body = `Please add ${values.email} to your practical outsourcing and compliance tips.`;
    window.location.assign(`mailto:info@zahkpo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-3.5 py-3 text-sm font-medium text-success"
      >
        <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
        Your email app has opened - press Send to subscribe.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-sm">
      <label htmlFor="newsletter-email" className="text-sm font-medium text-foreground">
        Stay in the loop
      </label>
      <p className="mt-1 text-xs text-muted-foreground">
        Practical outsourcing &amp; compliance tips. No spam, unsubscribe anytime.
      </p>
      <div className="mt-2.5 flex gap-2">
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@firm.co.uk"
          autoComplete="email"
          invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          {...register("email")}
        />
        <Button type="submit" aria-label="Subscribe" loading={isSubmitting} className="shrink-0 px-4">
          {!isSubmitting ? <Send className="size-4" aria-hidden="true" /> : null}
        </Button>
      </div>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />
      <div className="mt-1.5">
        <FieldError id="newsletter-email-error">
          {errors.email?.message ??
            (failed ? "Sorry, that didn't go through. Please try again or email info@zahkpo.com." : undefined)}
        </FieldError>
      </div>
    </form>
  );
}
