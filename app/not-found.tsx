import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">404</p>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
        back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/services">Browse services</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/search">Search the site</Link>
        </Button>
      </div>
    </Container>
  );
}
