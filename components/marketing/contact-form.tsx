"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { useForm, type FieldErrors } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";
import { cn } from "@/lib/utils";
import { contactSchema, contactTopics, type ContactValues } from "@/lib/validations";

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "xgaadgro";

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
        {optional ? (
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        ) : null}
      </Label>
      {children}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [submissionState, submitToFormspree] = useFormspree<ContactValues>(formspreeFormId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
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

  const { name: _first, ...firstNameReg } = register("firstName");
  const { name: _last, ...lastNameReg } = register("lastName");
  const { name: _email2, ...emailReg } = register("email");
  const { name: _phone2, ...phoneReg } = register("phone");
  const { name: _company2, ...companyReg } = register("company");
  const { name: _topic2, ...topicReg } = register("topic");
  const { name: _message2, ...messageReg } = register("message");
  const { name: _consent2, ...consentReg } = register("consent");
  const { name: _website2, ...websiteReg } = register("website");

  React.useEffect(() => {
    if (submissionState.succeeded) {
      router.push("/thank-you");
    }
  }, [router, submissionState.succeeded]);

  async function onSubmit(values: ContactValues) {
    if (values.website) return; // honeypot
    await submitToFormspree(values);
  }

  const hasFieldError = (field: keyof ContactValues) =>
    Boolean(errors[field] || submissionState.errors?.getFieldErrors(field)?.length);

  const describedBy = (field: keyof ContactValues) =>
    hasFieldError(field) ? `${field}-error` : undefined;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      action={`https://formspree.io/f/${formspreeFormId}`}
      method="POST"
    >
      {submissionState.errors?.getFormErrors().length ? (
        <div className="rounded-2xl border border-danger/20 bg-danger/5 p-4 text-sm text-danger">
          {submissionState.errors.getFormErrors().map((error) => (
            <p key={error.message}>{error.message}</p>
          ))}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName?.message}>
          <Input
            id="firstName"
            autoComplete="given-name"
            invalid={hasFieldError("firstName")}
            name="firstName"
            aria-describedby={describedBy("firstName")}
            {...firstNameReg}
          />
          <ValidationError prefix="FirstName" field="firstName" errors={submissionState.errors} />
        </Field>

        <Field id="lastName" label="Last name" error={errors.lastName?.message}>
          <Input
            id="lastName"
            autoComplete="family-name"
            invalid={hasFieldError("lastName")}
            name="lastName"
            aria-describedby={describedBy("lastName")}
            {...lastNameReg}
          />
          <ValidationError prefix="LastName" field="lastName" errors={submissionState.errors} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={hasFieldError("email")}
            name="email"
            aria-describedby={describedBy("email")}
            {...emailReg}
          />
          <ValidationError prefix="Email" field="email" errors={submissionState.errors} />
        </Field>

        <Field id="phone" label="Phone" optional error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            invalid={hasFieldError("phone")}
            name="phone"
            aria-describedby={describedBy("phone")}
            {...phoneReg}
          />
          <ValidationError prefix="Phone" field="phone" errors={submissionState.errors} />
        </Field>
      </div>

      <Field id="company" label="Company / firm" optional error={errors.company?.message}>
        <Input
          id="company"
          autoComplete="organization"
          invalid={hasFieldError("company")}
          name="company"
          aria-describedby={describedBy("company")}
          {...companyReg}
        />
        <ValidationError prefix="Company" field="company" errors={submissionState.errors} />
      </Field>

      <Field id="topic" label="How can we help?" error={errors.topic?.message}>
        <select
          id="topic"
          name="topic"
          className={cn(
            "h-11 w-full rounded-lg border bg-background px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            hasFieldError("topic") ? "border-danger focus-visible:ring-danger" : "border-input",
          )}
          aria-describedby={describedBy("topic")}
          {...topicReg}
        >
          {contactTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <ValidationError prefix="Topic" field="topic" errors={submissionState.errors} />
      </Field>

      <Field id="message" label="Your message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us what's on your plate and how we can help..."
          invalid={hasFieldError("message")}
          name="message"
          aria-describedby={describedBy("message")}
          {...messageReg}
        />
        <ValidationError prefix="Message" field="message" errors={submissionState.errors} />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 rounded border-input accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={hasFieldError("consent")}
            aria-describedby={describedBy("consent")}
            name="consent"
            {...consentReg}
          />
          <Label htmlFor="consent" className="font-normal text-muted-foreground">
            I agree to the{" "}
            <Link href="/privacy" className="text-primary underline underline-offset-4">
              privacy policy
            </Link>{" "}
            and to being contacted about my enquiry.
          </Label>
        </div>
        <FieldError id="consent-error" className="mt-1.5">
          {errors.consent?.message}
        </FieldError>
        <ValidationError prefix="Consent" field="consent" errors={submissionState.errors} />
      </div>

      {/* Honeypot field - hidden from users, catches bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        name="website"
        {...websiteReg}
      />

      <Button type="submit" size="lg" loading={isSubmitting || submissionState.submitting} className={cn("w-full sm:w-auto")} disabled={isSubmitting || submissionState.submitting}>
        {!isSubmitting && !submissionState.submitting ? <Send className="size-4" aria-hidden="true" /> : null}
        Send message
      </Button>
    </form>
  );
}
