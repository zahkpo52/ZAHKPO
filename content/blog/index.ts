import type { ComponentType } from "react";

import type { BlogMeta } from "@/types/content";
import Cloud, { meta as cloudMeta } from "./why-cloud-accounting-beats-spreadsheets";
import LateAccounts, { meta as lateMeta } from "./the-real-cost-of-filing-year-end-accounts-late";
import Bookkeeping, { meta as bookkeepingMeta } from "./how-to-choose-bookkeeping-support";
import IR35, { meta as ir35Meta } from "./does-ir35-apply-to-non-uk-companies";
import OutsourceYearEnd, { meta as outsourceYearEndMeta } from "./how-to-outsource-year-end-accounts";
import IndiaGdpr, { meta as indiaGdprMeta } from "./outsourcing-accounting-to-india-uk-gdpr-checklist";
import MtdIncomeTax, { meta as mtdIncomeTaxMeta } from "./making-tax-digital-income-tax-what-practices-need-to-do";
import HiringVsOutsourcing, { meta as hiringMeta } from "./hiring-vs-outsourcing-accounting-capacity";
import CompaniesHouseIdv, { meta as idvMeta } from "./companies-house-identity-verification-guide";
import ReverseCharge, { meta as reverseChargeMeta } from "./construction-vat-domestic-reverse-charge-guide";

export interface BlogPost {
  meta: BlogMeta;
  Body: ComponentType;
}

export const posts: BlogPost[] = [
  { meta: cloudMeta, Body: Cloud },
  { meta: lateMeta, Body: LateAccounts },
  { meta: bookkeepingMeta, Body: Bookkeeping },
  { meta: ir35Meta, Body: IR35 },
  { meta: outsourceYearEndMeta, Body: OutsourceYearEnd },
  { meta: indiaGdprMeta, Body: IndiaGdpr },
  { meta: mtdIncomeTaxMeta, Body: MtdIncomeTax },
  { meta: hiringMeta, Body: HiringVsOutsourcing },
  { meta: idvMeta, Body: CompaniesHouseIdv },
  { meta: reverseChargeMeta, Body: ReverseCharge },
].sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export const blogCategories: string[] = Array.from(new Set(posts.map((p) => p.meta.category)));
