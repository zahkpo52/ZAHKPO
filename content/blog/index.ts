import type { ComponentType } from "react";

import type { BlogMeta } from "@/types/content";
import Cloud, { meta as cloudMeta } from "./why-cloud-accounting-beats-spreadsheets";
import LateAccounts, { meta as lateMeta } from "./the-real-cost-of-filing-year-end-accounts-late";
import Bookkeeping, { meta as bookkeepingMeta } from "./how-to-choose-bookkeeping-support";
import IR35, { meta as ir35Meta } from "./does-ir35-apply-to-non-uk-companies";

export interface BlogPost {
  meta: BlogMeta;
  Body: ComponentType;
}

export const posts: BlogPost[] = [
  { meta: cloudMeta, Body: Cloud },
  { meta: lateMeta, Body: LateAccounts },
  { meta: bookkeepingMeta, Body: Bookkeeping },
  { meta: ir35Meta, Body: IR35 },
].sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export const blogCategories: string[] = Array.from(new Set(posts.map((p) => p.meta.category)));
