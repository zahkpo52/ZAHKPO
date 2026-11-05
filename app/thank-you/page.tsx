import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thanks for getting in touch with ZAH KPO. We've received your message.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="grid size-16 place-items-center rounded-2xl bg-success/10 text-success">
        <CheckCircle2 className="size-8" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        Thank you - message received
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        We&apos;ve got your enquiry and the right person will be in touch within one business day. In
        the meantime, feel free to keep exploring.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/services">Explore services</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/blog">Read the blog</Link>
        </Button>
      </div>
    </Container>
  );
}
