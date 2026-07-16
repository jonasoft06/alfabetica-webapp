import Image from "next/image";

import { FaqAccordion } from "./faq-accordion";
import { faqItems } from "./faq-data";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative z-10 w-full bg-alf-crema py-16"
    >
      <div aria-hidden="true" className="pointer-events-none select-none">
        <Image
          src="/svg/home/faq/shape-left-faq.svg"
          alt=""
          width={0}
          height={0}
          unoptimized
          className="absolute top-1/2 left-0 hidden w-65 max-w-none -translate-x-1/3 lg:block xl:w-[650px]"
        />

        <Image
          src="/svg/home/faq/shape-right-faq.svg"
          alt=""
          width={0}
          height={0}
          unoptimized
          className="absolute top-24 right-0 hidden w-65 max-w-none translate-x-[45%] lg:block xl:w-[500px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <h2 className="font-heading text-3xl text-alf-eerie-black lg:text-4xl">
          FAQ
        </h2>

        <div className="mx-auto mt-10 w-full max-w-3xl lg:mt-14">
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}