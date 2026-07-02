"use client";

import Image from "next/image";
import { motion, useTransform, cubicBezier, type MotionValue } from "motion/react";

type FloatingWordsProps = {
  scrollYProgress: MotionValue<number>;
};

const easeOut = cubicBezier(0.16, 1, 0.3, 1);

export default function FloatingWords({ scrollYProgress }: FloatingWordsProps) {
  // Las palabras existen desde el inicio (más alejadas) y se acercan
  // al centro al hacer scroll. Sin fade ni escala.
  const flexibleY = useTransform(scrollYProgress, [0, 0.4], [-10, 0], {
    ease: easeOut,
  });
  const editorialX = useTransform(scrollYProgress, [0, 0.4], [-120, 0], {
    ease: easeOut,
  });
  const colaborativaX = useTransform(scrollYProgress, [0, 0.4], [120, 0], {
    ease: easeOut,
  });
  const estrategiaX = useTransform(scrollYProgress, [0, 0.4], [-100, 0], {
    ease: easeOut,
  });
  const creativaX = useTransform(scrollYProgress, [0, 0.4], [100, 0], {
    ease: easeOut,
  });

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* flexible — arriba centro */}
      <motion.div
        style={{ y: flexibleY }}
        className="absolute left-1/2 top-32 -translate-x-1/2"
      >
        <span className="relative z-10 font-heading text-2xl italic text-alf-eerie-black">
          flexible
        </span>
        <Image
          src="/svg/home/hero/outline-flexible.svg"
          alt=""
          width={130}
          height={30}
          className="absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* editorial — izquierda */}
      <motion.div
        style={{ x: editorialX }}
        className="absolute left-[33%] top-[45%]"
      >
        <span className="relative z-10 font-heading text-2xl italic text-alf-eerie-black">
          editorial
        </span>
        <Image
          src="/svg/home/hero/outline-editorial.svg"
          alt=""
          width={130}
          height={30}
          className="absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* colaborativa — derecha */}
      <motion.div
        style={{ x: colaborativaX }}
        className="absolute right-[30%] top-[49%]"
      >
        <span className="relative z-10 font-heading text-2xl italic text-alf-eerie-black">
          colaborativa
        </span>
        <Image
          src="/svg/home/hero/outline-collaborative.svg"
          alt=""
          width={130}
          height={30}
          className="absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* estrategia — abajo izquierda */}
      <motion.div
        style={{ x: estrategiaX }}
        className="absolute left-[36%] bottom-[28%]"
      >
        <span className="relative z-10 font-heading text-2xl italic text-alf-eerie-black">
          estrategia
        </span>
        <Image
          src="/svg/home/hero/outline-strategy.svg"
          alt=""
          width={130}
          height={30}
          className="absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* creativa — abajo derecha */}
      <motion.div
        style={{ x: creativaX }}
        className="absolute right-[36%] bottom-[32%]"
      >
        <span className="relative z-10 font-heading text-2xl italic text-alf-eerie-black">
          creativa
        </span>
        <Image
          src="/svg/home/hero/outline-creative.svg"
          alt=""
          width={130}
          height={30}
          className="absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </div>
  );
}