// // import {
// //   BarChart3,
// //   Bot,
// //   CheckCircle2,
// //   Clock,
// //   Cloud,
// //   Eye,
// //   Gauge,
// //   Landmark,
// //   Lock,
// //   Megaphone,
// //   Search,
// //   ShieldCheck,
// //   Sparkles,
// //   TrendingUp,
// //   Zap,
// // } from "lucide-react";

// // import type { Specialty } from "@/types/content";

// export const specialties: Specialty[] = [
//   {
//     slug: "cloud-accounting",
//     title: "Cloud Accounting",
//     accent: "primary",
//     icon: Cloud,
//     summary: "Migrate to modern cloud accounting without disruption.",
//     metaTitle: "Cloud Accounting Migration",
//     metaDescription:
//       "Move from legacy systems to modern cloud accounting without disruption - secure data migration, system setup, integration and ongoing support.",
//     hero: {
//       eyebrow: "Specialty",
//       heading: "Move to the cloud without the disruption",
//       subheading:
//         "Migrate from legacy systems to modern cloud accounting - data moved safely, systems set up properly, and reporting accurate from day one.",
//     },
//     deliverables: [
//       { title: "Safe data migration", description: "Financial history moved across with nothing lost." },
//       { title: "System setup & integration", description: "Cloud software configured around how you actually work." },
//       { title: "App-stack integration", description: "Connected tools so data flows instead of being re-keyed." },
//       { title: "Accurate reporting", description: "Compliance and precision maintained through the switch." },
//       { title: "Ongoing support", description: "Help and optimisation after go-live, not just before." },
//     ],
//     process: [
//       { title: "Assess", description: "We map your current setup and spot migration risks early." },
//       { title: "Plan", description: "A secure, staged transfer plan with zero data loss." },
//       { title: "Configure", description: "Cloud systems set up and integrated to your workflow." },
//       { title: "Verify & support", description: "Reporting checked, then ongoing optimisation." },
//     ],
//     benefits: [
//       { title: "Real-time visibility", description: "See the numbers as they happen, anywhere.", icon: Eye },
//       { title: "Less manual work", description: "Automation replaces repetitive data entry.", icon: Zap },
//       { title: "No data loss", description: "A controlled migration that protects your records.", icon: Lock },
//       { title: "Expert hands", description: "Experience across industries and platforms.", icon: ShieldCheck },
//     ],
//     faqs: [
//       { question: "Which cloud platforms do you work with?", answer: "We work across the major cloud accounting platforms and connected apps, choosing the right fit for each client rather than forcing one tool." },
//       { question: "Will we lose data during migration?", answer: "No. We plan a staged, secure transfer with reconciliation checks so your financial history moves across intact." },
//     ],
//     related: ["mtd", "ai-accounting"],
//   },
//   {
//     slug: "mtd",
//     title: "Making Tax Digital",
//     accent: "primary",
//     icon: Landmark,
//     summary: "Stress-free digital tax compliance and timely HMRC submissions.",
//     metaTitle: "Making Tax Digital (MTD) Support",
//     metaDescription:
//       "Stress-free Making Tax Digital - compliant digital record-keeping, MTD-ready software setup and timely HMRC submissions for businesses and their accountants.",
//     hero: {
//       eyebrow: "Specialty",
//       heading: "Making Tax Digital, made simple",
//       subheading:
//         "Help clients move to digital tax reporting with compliant record-keeping, MTD-ready software and timely HMRC submissions - without the disruption.",
//     },
//     deliverables: [
//       { title: "MTD setup & assessment", description: "Readiness review and a clear path to compliance." },
//       { title: "Digital bookkeeping", description: "MTD-compatible record-keeping put in place." },
//       { title: "Submission preparation", description: "Regular digital updates prepared on schedule." },
//       { title: "Year-end declarations", description: "Final declarations completed and filed." },
//       { title: "Record organisation", description: "Tidy, secure digital records that stay compliant." },
//     ],
//     benefits: [
//       { title: "Clearer visibility", description: "Live financial data instead of quarterly guesswork.", icon: Eye },
//       { title: "Fewer errors", description: "Digital records cut manual mistakes.", icon: CheckCircle2 },
//       { title: "Faster submissions", description: "Organised data means quicker filing.", icon: Gauge },
//       { title: "Secure storage", description: "Encrypted, well-kept digital records.", icon: Lock },
//     ],
//     faqs: [
//       { question: "Who does MTD apply to?", answer: "Making Tax Digital affects a growing range of VAT-registered and self-employed taxpayers. We assess each client's obligations and get them ready ahead of time." },
//       { question: "Do you set up the software?", answer: "Yes - we put MTD-compatible record-keeping in place and handle the regular submissions so the transition is painless." },
//     ],
//     related: ["cloud-accounting", "ai-accounting"],
//   },
//   {
//     slug: "ai-accounting",
//     title: "AI Accounting",
//     accent: "accent",
//     icon: Sparkles,
//     summary: "Automation with human quality control for faster, cleaner books.",
//     metaTitle: "AI Accounting & Automation",
//     metaDescription:
//       "Intelligent automation for bookkeeping, invoice processing and reconciliation - faster, more accurate workflows with real-time insight and human quality control.",
//     hero: {
//       eyebrow: "Specialty",
//       heading: "Smarter accounting, powered by automation",
//       subheading:
//         "We pair intelligent automation with qualified people - machines handle the repetitive work, experts check the quality, and you get faster, cleaner results.",
//     },
//     deliverables: [
//       { title: "Automated bookkeeping", description: "Routine entries captured and coded automatically." },
//       { title: "Invoice & receipt processing", description: "Documents read and posted with smart data capture." },
//       { title: "Reconciliation matching", description: "Bank transactions matched at speed." },
//       { title: "Real-time reporting", description: "Live financial insight, not month-old numbers." },
//       { title: "Error detection", description: "Anomalies flagged before they become problems." },
//       { title: "Human quality control", description: "Qualified reviewers check every output." },
//     ],
//     benefits: [
//       { title: "Hours back", description: "Automation removes the repetitive grind.", icon: Clock },
//       { title: "Higher accuracy", description: "Fewer manual touches, fewer mistakes.", icon: CheckCircle2 },
//       { title: "Real-time insight", description: "Decisions based on today's data.", icon: TrendingUp },
//       { title: "Human oversight", description: "People review what the machines produce.", icon: Bot },
//     ],
//     faqs: [
//       { question: "Is AI accounting accurate and safe?", answer: "Automation handles the repetitive work, but qualified accountants review the output through a multi-level check - so you get speed without sacrificing accuracy or control." },
//       { question: "Is it suitable for smaller firms?", answer: "Yes. Automation helps smaller practices manage more work efficiently and gain real-time visibility without expanding the team." },
//     ],
//     related: ["cloud-accounting", "mtd"],
//   },
//   {
//     slug: "marketing-services",
//     title: "Digital Marketing",
//     accent: "accent",
//     icon: Megaphone,
//     summary: "Personal branding, AI content and lead generation for accountancy firms.",
//     metaTitle: "Digital Marketing & Growth Services for Accountants",
//     metaDescription:
//       "Digital marketing built for accountancy firms - personal branding, AI content creation, social media management, lead generation and growth & authority building.",
//     hero: {
//       eyebrow: "Specialty",
//       heading: "Build authority. Generate leads. Grow.",
//       subheading:
//         "Personal branding, AI-assisted content, social media and lead generation - designed to build your authority and turn visibility into a steady pipeline of clients.",
//     },
//     deliverables: [
//       { title: "Digital marketing", description: "A multi-channel plan tailored to your firm's goals and market." },
//       { title: "Personal branding", description: "Position partners as credible, visible authorities in their field." },
//       { title: "AI content creation", description: "Consistent, high-quality content produced efficiently with AI." },
//       { title: "Social media management", description: "Channels managed to build audience, trust and engagement." },
//       { title: "Lead generation", description: "Campaigns that turn attention into qualified enquiries." },
//       { title: "Growth & authority building", description: "A compounding presence that strengthens your reputation over time." },
//     ],
//     benefits: [
//       { title: "Stronger brand", description: "Tailored messaging and branding that gets you noticed.", icon: Megaphone },
//       { title: "Qualified leads", description: "Reach the right audience, not just more people.", icon: Search },
//       { title: "Content at scale", description: "AI-assisted production keeps your presence consistent.", icon: BarChart3 },
//       { title: "Measurable growth", description: "Clear reporting tied to real outcomes.", icon: TrendingUp },
//     ],
//     faqs: [
//       { question: "Do you understand accountancy marketing?", answer: "Yes - our work is built around professional services and the way accountancy firms win and retain clients." },
//       { question: "How does AI fit into content creation?", answer: "We use AI to produce content efficiently and consistently, with human review so it stays accurate, on-brand and genuinely useful." },
//     ],
//     related: ["cloud-accounting", "ai-accounting"],
//   },
// ];

// // export const specialtiesBySlug = Object.fromEntries(specialties.map((s) => [s.slug, s]));

// // export function getSpecialty(slug: string): Specialty | undefined {
// //   return specialtiesBySlug[slug];
// // }
