export interface Founder {
  name: string;
  role: string;
  credential: string;
  bio: string;
  image: { src: string; alt: string };
  expertise: string[];
  linkedin : string;
}

export const founders: Founder[] = [
  {
    name: "Husain Sangam",
    role: "Co-Founder & Director",
    credential: "Chartered Accountant (CA)",
    bio: "Chartered Accountant with 7+ years of experience in audit, financial reporting, compliance, and process improvement. Experience includes working with Deloitte Haskins & Sells and supporting clients across diverse industries.",
    image: {
      src: "/team/husain-sangam.webp",
      alt: "Husain Sangam, Co-Founder & Director of ZAH KPO",
    },
    expertise: ["IFRS Reporting", "Audit & Assurance", "Year-End Accounts", "Process Improvement"],
    linkedin: "https://www.linkedin.com/in/ca-husain-sangam/",
  },
  {
    name: "Mustafa Bag",
    role: "Co-Founder & Director",
    credential: "ACCA · B.Com",
    bio: "ACCA-qualified professional with 5+ years of experience in UK accounting, management accounts, tax compliance, and KPO operations, supporting firms through efficient and scalable accounting solutions.",
    image: {
      src: "/team/mustafa-bag.webp",
      alt: "Mustafa Bag, Co-Founder & Director of ZAH KPO",
    },
    expertise: ["UK Accounting", "Management Accounts", "Tax Compliance", "KPO Operations"],
    linkedin: "https://www.linkedin.com/in/mustafa-bag-764449228/",
  },
];
