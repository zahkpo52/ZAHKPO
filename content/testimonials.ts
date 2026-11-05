import type { Testimonial } from "@/types/content";

/**
 * Founder voices on what ZAH KPO is building - used on the Careers page.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We take ownership of your operational workload, so you can focus on growing your practice and building stronger client relationships.",
    author: "Husain Sangam",
    role: "Co-Founder & Director",
  },
  {
    quote:
      "We're building a trusted, process-driven and technology-enabled outsourcing partner for accounting firms worldwide.",
    author: "Mustafa Bag",
    role: "Co-Founder & Director",
  },
];

/**
 * Client reviews for the home-page testimonials section.
 * NOTE: sample placeholder reviews - replace with real client quotes,
 * names and firm logos as they come in.
 */
export const clientTestimonials: Testimonial[] = [
  {
    quote:
      "ZAH cleared a six-month bookkeeping backlog in weeks and has kept every VAT deadline since. It genuinely feels like an extension of our own team.",
    author: "Accounting Practitioner in Greenford",
    role: "Managing Partner",
    company: "Whitfield & Co Accountants",
    rating: 5,
  },
  {
    quote:
      "The quality of year-end files is consistently review-ready. Our partners now spend their time on advisory work instead of chasing compliance deadlines.",
    author: "Account Practitioner in Craven Street, London",
    role: "Practice Director",
    company: "Meridian Accounting Group",
    rating: 5,
  },
  {
    quote:
      "Turnaround is fast, communication is proactive, and the SOP-driven process means nothing slips through. Onboarding was far easier than we expected.",
    author: "David Okonkwo",
    role: "Founder",
    company: "Okonkwo & Partners",
    rating: 5,
  },
  {
    quote:
      "We scaled through Self-Assessment season without hiring a single temp. The team's UK accounting knowledge and Xero expertise are first class.",
    author: "Emma Clarke",
    role: "Operations Manager",
    company: "Clarke Bookkeeping Ltd",
    rating: 5,
  },
];

/**
 * Featured video review. Sample stock video for now - swap `src` for a real
 * client recording when available.
 */
export const videoTestimonial = {
  title: "Hear it from our clients",
  description:
    "How a two-partner UK firm cleared its backlog, hit 100% on-time VAT submissions and freed up partner time for advisory work.",
  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  poster: "/images/hero-meeting.webp",
  author: "Whitfield & Co Accountants",
  role: "Client since 2025",
};
