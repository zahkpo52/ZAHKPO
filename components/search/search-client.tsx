"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Search as SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface SearchDoc {
  title: string;
  description: string;
  href: string;
  type: string;
}

export function SearchClient({
  docs,
  initialQuery = "",
}: {
  docs: SearchDoc[];
  initialQuery?: string;
}) {
  const [query, setQuery] = React.useState(initialQuery);

  const results = React.useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return docs;
    return docs.filter((d) =>
      `${d.title} ${d.description} ${d.type}`.toLowerCase().includes(term),
    );
  }, [query, docs]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, industries and articles…"
          aria-label="Search the site"
          className="pl-10"
        />
      </div>

      <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
        {results.length} result{results.length === 1 ? "" : "s"}
        {query ? ` for “${query}”` : ""}
      </p>

      <ul className="mt-4 space-y-3">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="group block rounded-2xl focus-visible:outline-none">
              <Card
                interactive
                className="flex items-center justify-between gap-4 p-4 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{r.title}</span>
                    <Badge variant="surface" size="sm">
                      {r.type}
                    </Badge>
                  </div>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{r.description}</p>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Card>
            </Link>
          </li>
        ))}
        {!results.length ? (
          <li className="rounded-2xl border border-border bg-surface p-6 text-center text-muted-foreground">
            No matches. Try a different term.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
