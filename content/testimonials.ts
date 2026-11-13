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
 * Only add real client quotes the client has approved in writing.
 * The home-page section is hidden while this list is empty.
 */
export const clientTestimonials: Testimonial[] = [
  {
    quote:
      "ZAH KPO has become a dependable extension of our practice. The team is proactive - they raise queries early instead of waiting to be chased - and their turnaround is very good. What I value most is that they learn from their mistakes: once a review point is raised, we do not see it again.",
    author: "Juzer Kimti",
    role: "Director, Kimti and Co Accountants",
    company: "Kimti and Co Accountants",
  },
];
