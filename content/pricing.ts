/** Indicative price ranges (GBP, excluding VAT) - shown on service pages, the pricing calculator and in schema. */
export const HOURLY = { lo: 10, hi: 16 };
export const DEDICATED = { lo: 1100, hi: 1800 };

export const servicePrices: Record<string, { lo: number; hi: number; unit: string }> = {
  bookkeeping: { lo: 35, hi: 120, unit: "per client a month" },
  "vat-returns": { lo: 25, hi: 60, unit: "per return" },
  "year-end-accounts": { lo: 150, hi: 350, unit: "per company, with CT600" },
  "corporation-tax": { lo: 150, hi: 350, unit: "per company, with year-end accounts" },
  "personal-tax": { lo: 50, hi: 120, unit: "per return" },
  payroll: { lo: 3, hi: 6, unit: "per payslip" },
  "cis-returns": { lo: 15, hi: 35, unit: "per monthly return" },
  "management-accounts": { lo: 60, hi: 180, unit: "per client a month" },
};

export const fmtRange = (p: { lo: number; hi: number }) =>
  `£${p.lo.toLocaleString("en-GB")} - £${p.hi.toLocaleString("en-GB")}`;
