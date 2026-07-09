"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

type FloatingWord = {
  id: string;
  label: string;
  svg: string;
  /** Posición vertical dentro del hero. */
  y: string;
  /** Desplazamiento horizontal desde el centro, por breakpoint. */
  x: string;
  from: { x?: number; y?: number };
};

const words: FloatingWord[] = [
  {
    id: "flexible",
    label: "flexible",
    svg: "/svg/home/hero/outline-flexible.svg",
    y: "top-[16%]",
    x: "-translate-x-1/2",
    from: { y: -70 },
  },
  {
    id: "editorial",
    label: "editorial",
    svg: "/svg/home/hero/outline-editorial.svg",
    y: "top-[42%]",
    x: "translate-x-[calc(-50%-13rem)] lg:translate-x-[calc(-50%-17rem)] xl:translate-x-[calc(-50%-20rem)] 2xl:translate-x-[calc(-50%-23rem)]",
    from: { x: -90 },
  },
  {
    id: "colaborativa",
    label: "colaborativa",
    svg: "/svg/home/hero/outline-collaborative.svg",
    y: "top-[46%]",
    x: "translate-x-[calc(-50%+13rem)] lg:translate-x-[calc(-50%+17rem)] xl:translate-x-[calc(-50%+20rem)] 2xl:translate-x-[calc(-50%+23rem)]",
    from: { x: 90 },
  },
  {
    id: "estrategia",
    label: "estrategia",
    svg: "/svg/home/hero/outline-strategy.svg",
    y: "top-[62%]",
    x: "translate-x-[calc(-50%-11rem)] lg:translate-x-[calc(-50%-14rem)] xl:translate-x-[calc(-50%-16rem)] 2xl:translate-x-[calc(-50%-18rem)]",
    from: { x: -80, y: 40 },
  },
  {
    id: "creativa",
    label: "creativa",
    svg: "/svg/home/hero/outline-creative.svg",
    y: "top-[58%]",
    x: "translate-x-[calc(-50%+11rem)] lg:translate-x-[calc(-50%+14rem)] xl:translate-x-[calc(-50%+16rem)] 2xl:translate-x-[calc(-50%+18rem)]",
    from: { x: 80, y: 40 },
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.3, staggerChildren: 0.12 },
  },
};

export default function FloatingWords() {
  const shouldReduceMotion = useReducedMotion();

  const item: Variants = {
    hidden: (from: FloatingWord["from"]) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : (from.x ?? 0),
      y: shouldReduceMotion ? 0 : (from.y ?? 0),
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="pointer-events-none absolute inset-0 z-20 hidden md:block"
    >
      {words.map((word) => (
        <div key={word.id} className={`absolute left-1/2 ${word.y} ${word.x}`}>
          <motion.div custom={word.from} variants={item} className="relative">
            <span className="font-heading relative z-10 text-lg italic text-alf-eerie-black lg:text-xl xl:text-2xl">
              {word.label}
            </span>
            <Image
              src={word.svg}
              alt=""
              aria-hidden="true"
              width={130}
              height={30}
              unoptimized
              className="absolute top-1/2 left-1/2 z-0 w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}