// src/components/quote/project-discovery.tsx
import Image from "next/image";

import { StarButton } from "@/components/common/star-button";

export default function ProjectDiscovery() {
  return (
    <section className="relative overflow-hidden bg-alf-near-white px-6 py-20 lg:py-44">

      <Image
        src="/svg/quote/project-discovery/small-shape-left.svg"
        alt=""
        aria-hidden="true"
        width={140}
        height={140}
        unoptimized
        className="absolute top-0 left-70 z-10 hidden w-32 max-w-none -translate-x-10 translate-y-[10%] lg:block xl:w-44"
      />

      <div className="absolute hidden w-64 lg:block xl:w-60">

        <Image
          src="/images/brand/photo-book.webp"
          alt=""
          aria-hidden="true"
          width={310}
          height={310}
          className="relative z-10 h-auto max-w-none right-15 w-[130%] -translate-x-[15%] translate-y-[85%]"
        />
        <Image
          src="/svg/home/how-we-work/shape-left.svg"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
          unoptimized
          className="absolute top-1/2 z-0 w-[180%] max-w-none -translate-x-[35%] -translate-y-[50%]"
        />

      </div>

      <div className="absolute top-0 right-0 hidden w-60 translate-x-[12%] -translate-y-[12%] lg:block xl:w-72">
        <Image
          src="/images/brand/photo-tablet.webp"
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className="absolute z-10 h-auto max-w-none translate-y-[30%] w-[140%]"
        />

      </div>


      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl text-center font-normal text-alf-tangerine xl:text-5xl">
          ¿No estás seguro de lo que necesitas?
        </h2>

        <div className="mt-6 space-y-2 text-sm leading-relaxed text-alf-eerie-black sm:px-25 xl:text-base">
          <p>
            <strong className="font-semibold">No te preocupes.</strong> También
            podemos ayudarte a definir el alcance de tu proyecto y orientarte
            sobre los procesos editoriales más adecuados para lograr tus
            objetivos.
          </p>
          <p>
            Porque las mejores publicaciones comienzan con una buena
            planeación.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center text-center justify-center gap-6 sm:flex-row sm:gap-10">
          <p className="text-xl font-semibold text-alf-eerie-black">
            Conversemos sobre{" "} <br />
            <span className="relative inline-block">
              tu proyecto.
              <Image
                src="/svg/brand/underline-head.svg"
                alt=""
                aria-hidden="true"
                width={120}
                height={12}
                unoptimized
                className="absolute -bottom-1 left-0 h-auto w-full max-w-none"
              />
            </span>
          </p>

          <StarButton
            href="/CAMBIAR-ESTO"
            shapeSrc="/svg/quote/project-discovery/button-project.svg"
            arrowSrc="/svg/brand/arrow-project.svg"
            shapeClassName="w-36 animate-slow-spin xl:w-58"
            labelClassName="text-sm text-alf-eerie-black xl:text-base"
          >
            Agenda
            <br />
            una
            <br />
            reunión
          </StarButton>
        </div>
      </div>
    </section>
  );
}