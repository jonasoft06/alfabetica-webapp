import Image from "next/image";

import { StarButton } from "@/components/common/star-button";

export function ScheduleCallSection() {
  return (
    <section className="relative w-full overflow-hidden bg-alf-crema pb-20 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Bloque de copy */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-12">
          <Image
            src="/svg/brand/character-illustration.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className="h-auto w-24 max-w-none shrink-0 lg:w-32"
          />

          <p className="text-center font-sans text-lg leading-snug text-alf-eerie-black lg:text-left lg:text-xl">
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

        {/* Zona del botón y las fotos */}
        <div className="relative mt-14 flex flex-col items-center gap-10 lg:mt-20 lg:min-h-120 lg:gap-0">
          <Image
            src="/images/home/faq/photo-faql.png"
            alt="Persona leyendo en un lector electrónico"
            width={400}
            height={400}
            className="h-auto w-52 max-w-none lg:absolute lg:top-8 lg:left-0 lg:w-72 xl:w-80"
          />

          <StarButton
            href="#"
            shapeSrc="/svg/home/faq/button-call.svg"
            arrowSrc="/svg/home/faq/arrow-call.svg"
            shapeClassName="w-48 transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 xl:w-56"
            labelClassName="text-lg text-alf-near-white xl:text-xl"
            className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:pl-16"
          >
            Agenda una
            <br />
            videollamada
          </StarButton>

          <Image
            src="/images/home/faq/photo-faqr.png"
            alt="Persona leyendo un libro impreso"
            width={480}
            height={480}
            className="h-auto w-64 max-w-none lg:absolute lg:top-32 lg:right-8 lg:w-80 xl:w-96"
          />
        </div>
      </div>
    </section>
  );
}