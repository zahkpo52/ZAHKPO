import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * ZAH KPO lockup - the official ZH mark (gold Z, white H on deep navy, shown
 * without its outer gold frame at this small size) from the brand artwork, plus the wordmark. The mark is rendered from a high-res source
 * so it stays crisp at display size in both themes.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src="/logo-mark-80.webp"
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 shrink-0 rounded-lg object-cover transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-bold tracking-tight text-foreground">
          ZAH<span className="text-accent"> KPO</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
          Growth Beyond Limit
        </span>
      </span>
    </Link>
  );
}
