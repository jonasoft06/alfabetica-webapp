// src/components/quote/hero/quote-hero.tsx
import Image from "next/image";
import DecoratedWord from "@/components/common/decorated-word";

export default function QuoteHero() {
  return (
    <section className="relative overflow-hidden bg-alf-near-white px-6 py-16 lg:py-40">

      <Image
        src="/svg/quote/hero/shape-left-quote-hero.svg"
        alt=""
        aria-hidden
        width={325}
        height={325}
        className="pointer-events-none absolute left-0 top-10 z-0 hidden w-56 -translate-x-1/2 lg:block xl:w-90"
      />
      <Image
        src="/svg/quote/hero/shape-right-quote-hero.svg"
        alt=""
        aria-hidden
        width={322}
        height={322}
        className="pointer-events-none absolute right-0 top-1/2 z-0 hidden w-60 -translate-y-1/4 translate-x-1/3 lg:block xl:w-90"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
          <Image
            src="/svg/brand/character-illustration-quote.svg"
            alt=""
            aria-hidden
            width={92}
            height={182}
            className="order-2 w-20 lg:order-1 lg:w-24"
          />

          <h1 className="order-1 font-heading text-4xl font-base leading-tight text-alf-eerie-black lg:order-2 lg:text-5xl xl:text-6xl">
            Solicita una propuesta{" "}
            <br className="hidden md:block" />
            <DecoratedWord
              decoration="/svg/quote/hero/circle-personalized.svg"
              variant="circle"
              width={395}
              height={74}
              widthClass="w-[120%]"
              decorationOnTop
            >
              <span className="font-semibold">personalizada.</span>
            </DecoratedWord>
          </h1>
        </div>

        {/* Párrafo introductorio */}
        <p className="mt-8 max-w-md text-sm leading-relaxed text-alf-eerie-black lg:mt-10 lg:text-base">
          Cada proyecto editorial es diferente. Por ello elaboramos propuestas
          adaptadas a las características, y objetivos específicos de cada
          publicación.
        </p>
      </div>
    </section>
  );
}