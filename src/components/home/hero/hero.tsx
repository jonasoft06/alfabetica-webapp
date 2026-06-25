"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "motion/react";
import Navbar from "./navbar";
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
      className="relative min-h-screen overflow-hidden bg-alf-crema"
    >
      <Navbar />

      <FloatingWords scrollYProgress={scrollYProgress} />

      {/* Fotos laterales — solo escritorio */}
      <Image
        src="/images/hero/photo_book.png"
        alt="Persona leyendo un libro"
        width={260}
        height={340}
        className="absolute left-0 top-32 hidden lg:block"
        priority
      />
      <Image
        src="/images/hero/photo_tablet.png"
        alt="Persona leyendo en tablet"
        width={260}
        height={340}
        className="absolute right-0 top-28 hidden lg:block"
        priority
      />

      {/* Contenido central */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:py-28">
        <h1 className="font-heading text-5xl leading-tight text-alf-eerie-black lg:text-6xl">
          Armamos <strong className="font-bold">tu libro</strong>
          <br />
          de pies a cabeza.
        </h1>

        <Image
          src="/svg/hero/underline_head.svg"
          alt=""
          width={300}
          height={20}
          className="mt-1"
        />

        <Image
          src="/svg/hero/character-illustration-1.svg"
          alt="Ilustración de persona bajo un techo"
          width={180}
          height={160}
          className="mt-10"
        />
      </div>
    </section>
  );
}