"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion({
  items,
  idPrefix = "faq",
  className,
}: {
  items: { question: string; answer: string }[];
  idPrefix?: string;
  className?: string;
}) {
  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((f, i) => (
        <AccordionItem key={`${idPrefix}-${i}`} value={`${idPrefix}-${i}`}>
          <AccordionTrigger>{f.question}</AccordionTrigger>
          <AccordionContent>{f.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
