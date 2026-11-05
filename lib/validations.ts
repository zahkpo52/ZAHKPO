import { z } from "zod";

/** Newsletter - email + honeypot. */
export const newsletterSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  // honeypot: real users never fill this
  website: z.string().optional(),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;

export const contactTopics = [
  "General enquiry",
  "Accounting",
  "Tax",
  "Company secretarial",
  "Industries (cloud, AI, MTD)",
  "Careers",
] as const;

/** Contact form. */
export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  company: z.string().max(120).optional(),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().max(40).optional(),
  topic: z.enum(contactTopics).optional(),
  message: z
    .string()
    .min(10, "Please add a little more detail (10+ characters)")
    .max(2000, "Message is too long"),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Please accept the privacy policy to continue" }),
  // honeypot
  website: z.string().optional(),
});
export type ContactValues = z.infer<typeof contactSchema>;
