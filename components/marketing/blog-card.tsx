import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import type { BlogMeta } from "@/types/content";

/** One photo per post, so cards next to each other never repeat. */
const postImages: Record<string, string> = {
  "corporation-tax-deadlines-pay-file-penalties": "finance-desk",
  "vat-penalties-late-returns-and-late-payment": "desk-planning",
  "role-of-zah-in-ai-driven-accounting": "laptop-analytics",
  "vat-registration-threshold-tests-explained": "boardroom-meeting",
  "self-assessment-31-january-practice-checklist": "office-cabin",
  "companies-house-identity-verification-guide": "city-skyline",
  "construction-vat-domestic-reverse-charge-guide": "handshake",
  "hiring-vs-outsourcing-accounting-capacity": "team-collab",
  "how-to-outsource-year-end-accounts": "office-discussion",
  "making-tax-digital-income-tax-what-practices-need-to-do": "strategy-meeting",
  "outsourcing-accounting-to-india-uk-gdpr-checklist": "office-team",
  "the-real-cost-of-filing-year-end-accounts-late": "corporate-meeting",
  "how-to-choose-bookkeeping-support": "office-workstations",
  "why-cloud-accounting-beats-spreadsheets": "team-meeting-bright",
  "does-ir35-apply-to-non-uk-companies": "handshake",
};

/** Fallback for new posts without their own photo. */
const categoryImages: Record<string, string> = {
  VAT: "desk-planning",
  "Corporation Tax": "finance-desk",
  Tax: "office-cabin",
  Outsourcing: "team-collab",
  "Year-End Accounts": "office-discussion",
  Bookkeeping: "office-workstations",
  "Data Security": "office-team",
  "Cloud Accounting": "laptop-analytics",
  "Company Secretarial": "city-skyline",
};

function imageFor(post: BlogMeta) {
  const name = postImages[post.slug] ?? categoryImages[post.category] ?? "office-team";
  return `/images/${name}.webp`;
}

/** Gold first half (up to the colon), white second half. */
function splitTitle(title: string): [string, string] {
  const i = title.indexOf(":");
  if (i > 0 && i < title.length - 1) return [title.slice(0, i + 1), title.slice(i + 1)];
  const words = title.split(" ");
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), " " + words.slice(cut).join(" ")];
}

const ring =
  "pointer-events-none absolute size-11 rounded-full bg-[repeating-linear-gradient(135deg,#e5b84a_0_2px,transparent_2px_5px)] opacity-70";

function Banner({ post, featured }: { post: BlogMeta; featured: boolean }) {
  const [gold, white] = splitTitle(post.title);
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-[#031833]",
        featured ? "h-56 md:h-auto md:min-h-64 md:w-1/2" : "h-52",
      )}
    >
      <div className="absolute inset-y-0 right-0 w-[42%] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <Image src={imageFor(post)} alt="" fill sizes="(max-width: 768px) 45vw, 240px" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,24,51,0.35),transparent_40%)]" />
      </div>
      <div className={cn(ring, "-bottom-3.5 -left-3.5")} />
      <div className={cn(ring, "-right-3 -top-3")} />

      <div className="absolute left-4 top-3.5 flex items-center gap-1.5">
        <Image src="/logo-mark-80.webp" alt="" width={18} height={18} className="size-[18px]" />
        <div className="leading-tight">
          <p className="text-[10px] font-bold tracking-[0.08em] text-white">ZAH KPO</p>
          <p className="text-[7px] font-medium tracking-[0.04em] text-[#e5b84a]">Outsourced accounting for UK practices</p>
        </div>
      </div>

      <span className="absolute right-3.5 top-10 max-w-[55%] truncate rounded-full bg-[#e5b84a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#031833] shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
        {post.category}
      </span>

      <p
        className={cn(
          "absolute left-4 top-[78px] line-clamp-3 w-[52%] font-semibold leading-snug text-white",
          featured ? "text-lg md:text-xl" : "text-base",
        )}
      >
        <span className="text-[#e5b84a]">{gold}</span>
        {white}
      </p>

      <span className="absolute bottom-7 left-4 rounded-md bg-[linear-gradient(120deg,#e5b84a,#c99a2e)] px-3 py-1 text-[11px] font-bold text-[#031833]">
        Read now
      </span>
      <span className="absolute bottom-2 left-10 text-[9px] text-white/60">zahkpo.com</span>
    </div>
  );
}

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
        <Banner post={post} featured={featured} />
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
