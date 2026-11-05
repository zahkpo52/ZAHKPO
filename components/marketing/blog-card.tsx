import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import type { BlogMeta } from "@/types/content";

export function BlogCard({ post, featured = false }: { post: BlogMeta; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl focus-visible:outline-none"
    >
      <Card
        interactive
        className={cn(
          "flex h-full flex-col overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
          featured && "md:flex-row",
        )}
      >
        <div
          className={cn(
            "relative flex items-end bg-[linear-gradient(120deg,var(--primary),var(--primary-strong))] p-5",
            featured ? "md:w-2/5" : "h-32",
          )}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotted opacity-20" />
          <Badge className="relative bg-white/15 text-white">{post.category}</Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-muted-foreground">
            {formatDate(post.date)} · {post.readingTime} min read
          </p>
          <h3
            className={cn(
              "mt-2 font-semibold tracking-tight text-foreground",
              featured ? "text-2xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Read article
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}
