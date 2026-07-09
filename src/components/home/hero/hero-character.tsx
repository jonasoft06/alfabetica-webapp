"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function HeroCharacter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10"
    >
      <Image
        src="/svg/brand/character-illustration.svg"
        alt="Ilustración de una persona bajo un libro abierto"
        width={220}
        height={160}
        className="h-auto w-[180px] max-w-none lg:w-[220px]"
      />
    </motion.div>
  );
}