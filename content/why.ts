import {
    BracesIcon,
    Briefcase,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Leaf,
  type LucideIcon,
  Radar,
  Recycle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export interface Differentiator {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

/** "What differentiates us?" - expanded from the company profile deck. */
export const whyDifferentiators: Differentiator[] = [
  {
    title: "Proactive approach of working",
    tagline: "We flag it before you have to ask",
    description:
      "We don't wait for instructions or let queries pile up. Deadlines are tracked, anomalies raised early and workloads planned ahead of busy season, so nothing lands on your desk as a surprise.",
    points: [
      "Deadline calendars managed for every client",
      "Queries batched and raised early, not at the deadline",
      "Capacity planned ahead of January and year-end peaks",
    ],
    icon: Radar,
  },
  {
    title: "Quality & consistency guaranteed",
    tagline: "Review-ready work, every time",
    description:
      "Every deliverable passes multi-level review before it reaches you. Preparer, reviewer and final quality check - so the file you open is accurate, complete and consistent with the last one.",
    points: [
      "Multi-level review on every job",
      "Standardised working papers and file structure",
      "Accuracy tracked and reported, not assumed",
    ],
    icon: ShieldCheck,
  },
  {
    title: "SOP-driven approach",
    tagline: "Documented process, dependable delivery",
    description:
      "Standard operating procedures are built for each client and each service. That means repeatable quality, painless handovers and no dependence on any single person's memory.",
    points: [
      "Client-specific SOPs from day one",
      "Documented checklists for every workflow",
      "Smooth continuity through absences and growth",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Helps grow your client practice",
    tagline: "Your time back, for advisory and growth",
    description:
      "With the back office handled, your qualified people stop doing low-margin compliance work and start doing what grows the firm - advising clients, winning new work and deepening relationships.",
    points: [
      "Partner time freed for advisory and business development",
      "Capacity to onboard new clients without hiring",
      "Lower delivery cost improves margin on every engagement",
    ],
    icon: TrendingUp,
  },
];

export interface CsrInitiative {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Corporate social responsibility - growth that gives back. */
export const csrInitiatives: CsrInitiative[] = [
  {
    title: "A tree for every engagement",
    description:
      "For every new client engagement, we contribute to tree-planting initiatives that support a greener future.",
    icon: Leaf,
  },
  {
    title: "Developing local talent",
    description:
      "We mentor and support aspiring accounting professionals, helping build valuable skills and career opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Community well-being",
    description:
      "We support initiatives that promote education, opportunity, and positive community development.",
    icon: HeartHandshake,
  },
  {
    title: "Creating Meaningful Careers",
    description:
      "We provide a supportive environment where individuals can learn, grow, and build rewarding long-term careers.",
    icon: Briefcase,
  },
];
