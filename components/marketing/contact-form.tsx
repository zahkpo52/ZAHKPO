"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { contactSchema, contactTopics, type ContactValues } from "@/lib/validations";

/** Enquiries go straight to this inbox from the visitor's own email - no third-party form service. */
const TO = "info@zahkpo.com";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {optional ? <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span> : null}
      </Label>
      {children}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

function compose(v: ContactValues) {
  const name = `${v.firstName} ${v.lastName}`.trim();
  const subject = `${v.topic && v.topic !== "General enquiry" ? v.topic : "Website enquiry"} - ${name}${v.company ? `, ${v.company}` : ""}`;
  const body = [
    v.message,
    "",
    "----",
    `Name: ${name}`,
    v.company ? `Firm: ${v.company}` : null,
    `Email: ${v.email}`,
    v.phone ? `Phone: ${v.phone}` : null,
    `Topic: ${v.topic ?? "General enquiry"}`,
    "Sent from the contact form on zahkpo.com",
  ]
    .filter((l) => l !== null)
    .join("\n");
  return { subject, body };
}

export function ContactForm() {
  const [sent, setSent] = React.useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      topic: "General enquiry",
      message: "",
      consent: false,
      website: "",
    },
  });

  React.useEffect(() => {
    if (new URLSearchParams(window.location.search).get("offer") === "free-trial") {
      setValue("topic", "Free trial - 3 jobs");
    }
  }, [setValue]);

  function onSubmit(values: ContactValues) {
    if (values.website) return; // honeypot
    const mail = compose(values);
    setSent(mail);
    window.location.assign(`mailto:${TO}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`);
  }

  const describedBy = (field: keyof ContactValues) => (errors[field] ? `${field}-error` : undefined);

  if (sent) {
    const q = `subject=${encodeURIComponent(sent.subject)}&body=${encodeURIComponent(sent.body)}`;
    const wa = `https://wa.me/${siteConfig.contact.ukOffice.phoneHref.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`${sent.subject}\n\n${sent.body}`)}`;
    return (
      <div role="status" className="rounded-2xl border border-border bg-surface p-6 md:p-8">
        <span className="grid size-11 place-items-center rounded-full bg-[#2f8a57]/10 text-[#2f8a57]">
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">Your email is ready - press Send</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We have opened your email app with your message addressed to {TO}. Just press Send and we will reply within one
          working day.
        </p>
        <p className="mt-5 text-sm font-semibold text-foreground">Email app didn&apos;t open? Send it another way:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button asChild variant="secondary" size="sm">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${encodeURIComponent(sent.subject)}&body=${encodeURIComponent(sent.body)}`} target="_blank" rel="noreferrer">
              Gmail
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={`https://outlook.office.com/mail/deeplink/compose?to=${TO}&${q}`} target="_blank" rel="noreferrer">
              Outlook
            </a>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`To: ${TO}\nSubject: ${sent.subject}\n\n${sent.body}`);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy message"}
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={wa} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-6 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Edit my message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName?.message}>
          <Input id="firstName" autoComplete="given-name" invalid={!!errors.firstName} aria-describedby={describedBy("firstName")} {...register("firstName")} />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName?.message}>
          <Input id="lastName" autoComplete="family-name" invalid={!!errors.lastName} aria-describedby={describedBy("lastName")} {...register("lastName")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" invalid={!!errors.email} aria-describedby={describedBy("email")} {...register("email")} />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" invalid={!!errors.phone} aria-describedby={describedBy("phone")} {...register("phone")} />
        </Field>
      </div>

      <Field id="company" label="Company / firm" optional error={errors.company?.message}>
        <Input id="company" autoComplete="organization" invalid={!!errors.company} aria-describedby={describedBy("company")} {...register("company")} />
      </Field>

      <Field id="topic" label="How can we help?" error={errors.topic?.message}>
        <select
          id="topic"
          className={cn(
            "h-11 w-full rounded-lg border bg-background px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            errors.topic ? "border-danger focus-visible:ring-danger" : "border-input",
          )}
          aria-describedby={describedBy("topic")}
          {...register("topic")}
        >
          {contactTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Your message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us what's on your plate and how we can help..."
          invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 rounded border-input accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy("consent")}
            {...register("consent")}
          />
          <Label htmlFor="consent" className="font-normal text-muted-foreground">
            I agree to the{" "}
            <Link href="/privacy" className="text-primary underline underline-offset-4">
              privacy notice
            </Link>{" "}
            and to being contacted about my enquiry.
          </Label>
        </div>
        <FieldError id="consent-error" className="mt-1.5">
          {errors.consent?.message}
        </FieldError>
      </div>

      {/* Honeypot field - hidden from users, catches bots */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Button type="submit" size="lg">
          <Send className="size-4" aria-hidden="true" />
          Send message
        </Button>
        <p className="text-xs text-muted-foreground">Opens your email app with the message ready to send to {TO}.</p>
      </div>
    </form>
  );
}
