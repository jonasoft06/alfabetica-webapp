"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";

type FloatingWordsProps = {
  scrollYProgress: MotionValue<number>;
};

export default function FloatingWords({ scrollYProgress }: FloatingWordsProps) {
  const flexibleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const editorialX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const colaborativaX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const estrategiaX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const creativaX = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* flexible */}
      <motion.div
        style={{ y: flexibleY, opacity }}
        className="absolute left-1/2 top-24 -translate-x-1/2"
      >
        <span className="relative z-10 font-heading text-lg italic text-alf-eerie-black">
          flexible
        </span>
        <Image
          src="/svg/hero/outline-flexible.svg"
          alt=""
          width={110}
          height={34}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* editorial */}
      <motion.div
        style={{ x: editorialX, opacity }}
        className="absolute left-4 top-1/2"
      >
        <span className="relative z-10 font-heading text-lg italic text-alf-eerie-black">
          editorial
        </span>
        <Image
          src="/svg/hero/outline-editorial.svg"
          alt=""
          width={120}
          height={36}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* colaborativa */}
      <motion.div
        style={{ x: colaborativaX, opacity }}
        className="absolute right-0 top-1/2"
      >
        <span className="relative z-10 font-heading text-lg italic text-alf-eerie-black">
          colaborativa
        </span>
        <Image
          src="/svg/hero/outline-colaborativa.svg"
          alt=""
          width={140}
          height={38}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* estrategia */}
      <motion.div
        style={{ x: estrategiaX, opacity }}
        className="absolute left-8 bottom-32"
      >
        <span className="relative z-10 font-heading text-lg italic text-alf-eerie-black">
          estrategia
        </span>
        <Image
          src="/svg/hero/outline-estrategia.svg"
          alt=""
          width={130}
          height={36}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* creativa */}
      <motion.div
        style={{ x: creativaX, opacity }}
        className="absolute right-12 bottom-40"
      >
        <span className="relative z-10 font-heading text-lg italic text-alf-eerie-black">
          creativa
        </span>
        <Image
          src="/svg/hero/outline-creativa.svg"
          alt=""
          width={120}
          height={36}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </div>
  );
}