import {
  Clock,
  GraduationCap,
  type LucideIcon,
  Globe,
  Heart,
  Laptop,
  PartyPopper,
  PoundSterling,
  TrendingUp,
  Users,
} from "lucide-react";

import type { OpenRole } from "@/types/content";

interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const cultureValues: IconItem[] = [
  { title: "Supportive & collaborative", description: "Leadership that creates a positive, motivating place to do your best work.", icon: Heart },
  { title: "Always learning", description: "Hands-on exposure to modern platforms, automation and AI tools.", icon: GraduationCap },
  { title: "UK client exposure", description: "Work directly with UK accounting firms on real, end-to-end engagements.", icon: Globe },
  { title: "Recognition that's real", description: "Effort is seen and rewarded - not lost in the noise.", icon: TrendingUp },
];

export const perks: IconItem[] = [
  { title: "Competitive salary + incentives", description: "Performance-based pay that grows with you.", icon: PoundSterling },
  { title: "ACCA exam support", description: "Professional exam fees reimbursed on certification.", icon: GraduationCap },
  { title: "Modern tools", description: "Work in Xero, QuickBooks and the latest automation and AI tools.", icon: Laptop },
  { title: "Team events & celebrations", description: "Festivals, socials and team activities throughout the year.", icon: PartyPopper },
  { title: "Flexible working", description: "A balanced approach that respects life outside work.", icon: Clock },
  { title: "Room to grow", description: "Clear pathways for advancement as you develop.", icon: Users },
];

export const openRoles: OpenRole[] = [
  { title: "Senior Accountant", location: "UK Accounts", type: "Full-time", count: 2 },
  { title: "Senior Bookkeeper", location: "UK Accounts", type: "Full-time", count: 2 },
  { title: "Accounts Assistant", location: "UK Accounts", type: "Full-time", count: 2 },
];
