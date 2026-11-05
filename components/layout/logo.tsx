import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * ZAH KPO lockup - the ZK monogram (gold Z, white K on deep navy) from the
 * brand artwork, plus the wordmark. The mark is rendered from a high-res source
 * so it stays crisp at display size in both themes.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ZAH KPO - home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src="/logo-mark.png"
        alt="Logo"
        width={40}
        height={40}
        priority
        className="size-10 shrink-0 rounded-xl shadow-[var(--shadow-soft)] ring-1 ring-inset ring-white/10 transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-bold tracking-tight text-white">
          ZAH<span className="text-accent"> KPO</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
          Growth Beyond Limits
        </span>
      </span>
    </Link>
  );
}
