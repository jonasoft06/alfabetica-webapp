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
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col border-b border-alf-tangerine"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.id} value={item.id} className="border-none">
          <AccordionTrigger
            className="group rounded-none border-x border-t border-alf-tangerine bg-alf-crema px-4 py-3 text-left text-sm font-semibold text-alf-eerie-black hover:no-underline cursor-pointer"
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

          <AccordionContent className="py-0">
            <div className="border-x border-t border-alf-tangerine bg-alf-near-white px-6 py-5 text-sm leading-relaxed text-alf-eerie-black lg:px-12">
              {item.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}