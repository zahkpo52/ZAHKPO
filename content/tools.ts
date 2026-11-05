import type { Tool } from "@/types/content";

/**
 * The software stack ZAH KPO works across - core bookkeeping platforms,
 * data-capture & automation tools, and the analytics & AI we use in delivery.
 * Logos live in /public/logos; width/height are intrinsic SVG/PNG dimensions.
 */
export const tools: Tool[] = [
  { name: "Xero", logo: "/logos/xero.svg", width: 256, height: 256 },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg", width: 270, height: 69 },
  { name: "Sage", logo: "/logos/sage.svg", width: 59, height: 26 },
  { name: "FreeAgent", logo: "/logos/freeagent.svg", width: 1181, height: 285 },
  { name: "Dext", logo: "/logos/dext.svg", width: 620, height: 384 },
  { name: "Hubdoc", logo: "/logos/hubdoc.png", width: 599, height: 169 },
  { name: "Power BI", logo: "/logos/powerbi.svg", width: 630, height: 630, showName: true },
  { name: "Microsoft Copilot", logo: "/logos/copilot.svg", width: 58, height: 18 },
];
 