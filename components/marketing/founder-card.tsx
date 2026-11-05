import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Founder } from "@/content/team";
import { Icon } from "../layout/social-links";

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <Card interactive className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[2/3] overflow-hidden sm:aspect-[3/3.2]">
        <Image
          src={founder.image.src}
          alt={founder.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          className="object-cover object-top transition-transform duration-500 ease-out-quint group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute 
          bottom-0 right-0 bg-gradient-to-t from-[#031833]/85 via-transparent to-transparent"
        />
        {founder.linkedin ? (
          <Link
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${founder.name}'s LinkedIn profile`}
            className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Icon platform="LinkedIn" />
          </Link>
        ) : null}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="max-w-[70%]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f8d509]/95 px-3 py-1 text-xs font-semibold text-[#1c1600]">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              {founder.credential}
            </span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{founder.name}</h3>
            <p className="text-sm font-medium text-white/75">{founder.role}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {founder.expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
