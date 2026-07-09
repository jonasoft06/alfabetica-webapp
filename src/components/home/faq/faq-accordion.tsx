"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconAnswered, IconQuestion } from "./faq-icons";
import type { FaqItem } from "./faq-data";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="flex w-full flex-col gap-2">
      {items.map((item, index) => (
        <AccordionItem key={item.id} value={item.id} className="border-none">
          <AccordionTrigger
            className="group rounded-sm border border-alf-tangerine bg-alf-tangerine/10 px-4 py-3 text-left text-sm font-normal text-alf-eerie-black hover:no-underline"
            icon={
              <span className="pointer-events-none mt-1 flex shrink-0 flex-col items-center text-alf-tangerine">
                <IconQuestion className="w-3.75 group-data-[state=open]:hidden" />
                <IconAnswered className="w-3.75 group-data-[state=closed]:hidden" />
              </span>
            }
          >
            <span>
              <span className="mr-1.5">{index + 1}.</span>
              {item.question}
            </span>
          </AccordionTrigger>

          <AccordionContent className="pt-2 pb-0">
            <div className="rounded-sm border border-alf-tangerine bg-alf-near-white px-6 py-5 text-sm leading-relaxed text-alf-eerie-black lg:px-12">
              {item.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}