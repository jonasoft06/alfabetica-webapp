"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "motion/react";
import FloatingWords from "./floating-words";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-alf-crema"
    >

      <FloatingWords scrollYProgress={scrollYProgress} />

      {/* Fotos laterales — solo escritorio */}
      <Image
        src="/images/home/hero/photo-book.png"
        alt="Persona leyendo un libro"
        width={260}
        height={340}
        className="absolute -left-45 top-1/2 hidden -translate-y-[65%] lg:block lg:w-[400px] xl:w-[500px]"
        priority
      />
      <Image
        src="/images/home/hero/photo-tablet.png"
        alt="Persona leyendo en tablet"
        width={260}
        height={340}
        className="absolute -right-55 top-1/2 hidden -translate-y-[40%] lg:block lg:w-[400px] xl:w-[550px]"
        priority
      />

      {/* Contenido central */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-32 pb-20 text-center lg:pt-50 lg:pb-28">
        <h1 className="font-heading text-4xl leading-tight text-alf-eerie-black lg:text-5xl xl:text-6xl">
          Armamos <strong className="font-bold">tu libro</strong>
          <br />
          de pies a cabeza.
        </h1>

        <Image
          src="/svg/brand/underline-head.svg"
          alt=""
          width={380}
          height={20}
          className="mt-1 ml-20"
        />

        <Image
          src="/svg/brand/character-illustration.svg"
          alt="Ilustración de persona bajo un techo"
          width={220}
          height={160}
          className="mt-10"
        />
      </div>
    </section>
  );
}