"use client";
import Image from "next/image";

import { StarButton } from "@/components/common/star-button";
import { useCalendlyPopup } from "@/hooks/use-calendly-popup";

export function ScheduleCallSection() {
  const { openPopup } = useCalendlyPopup();
  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-alf-crema pb-20 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Bloque de copy */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <Image
            src="/svg/brand/character-illustration.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className="h-auto w-24 max-w-none shrink-0 md:w-00 lg:w-48"
          />

          <p className="text-center font-sans text-lg leading-snug text-alf-eerie-black md:text-end md:text-xl lg:text-2xl">
            Cuéntanos qué necesitas
            <br />
            y te ayudaremos a encontrar
            <br />
            la{" "}
            <span className="relative inline-block">
              mejor solución
              <Image
                src="/svg/brand/underline-head.svg"
                alt=""
                aria-hidden="true"
                width={140}
                height={8}
                className="absolute -bottom-1 left-0 h-auto w-full max-w-none"
              />
            </span>
            .
          </p>
        </div>

        <div className="relative mt-14 flex flex-col items-center gap-10 md:mt-20 md:min-h-80 lg:min-h-120 md:gap-0">
          <Image
            src="/images/home/faq/photo-faql.webp"
            alt="Persona leyendo en un lector electrónico"
            width={400}
            height={400}
            className="hidden h-auto w-52 max-w-none sm:block md:absolute md:top-8 md:left-5 md:w-70 xl:w-98"
          />

          <StarButton
            onClick={openPopup}
            shapeSrc="/svg/home/faq/button-call.svg"
            arrowSrc="/svg/home/faq/arrow-call.svg"
            shapeClassName="w-48 transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 xl:w-56"
            labelClassName="text-lg text-alf-near-white xl:text-xl"
            className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:pl-16 cursor-pointer"
          >
            Agenda una
            <br />
            videollamada
          </StarButton>

          <Image
            src="/images/home/faq/photo-faqr.webp"
            alt="Persona leyendo un libro impreso"
            width={480}
            height={480}
            className="hidden h-auto w-64 max-w-none sm:block md:absolute md:top-32 md:right-0 lg:-right-10 md:w-70 xl:w-100"
          />
        </div>
      </div>
    </section>
  );
}