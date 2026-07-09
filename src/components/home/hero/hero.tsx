import Image from "next/image";

import FloatingWords from "./floating-words";
import HeroCharacter from "./hero-character";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-alf-crema">
      <FloatingWords />

      <Image
        src="/images/home/hero/photo-book.png"
        alt=""
        aria-hidden="true"
        width={550}
        height={550}
        priority
        className="pointer-events-none absolute top-1/2 hidden max-w-none -translate-y-[65%] select-none lg:-left-28 lg:block lg:w-[320px] xl:-left-40 xl:w-[430px] 2xl:-left-50 2xl:w-[550px]"
      />
      <Image
        src="/images/home/hero/photo-tablet.png"
        alt=""
        aria-hidden="true"
        width={600}
        height={600}
        priority
        className="pointer-events-none absolute top-1/2 hidden max-w-none -translate-y-[40%] select-none lg:-right-28 lg:block lg:w-[340px] xl:-right-44 xl:w-[460px] 2xl:-right-55 2xl:w-[600px]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-32 pb-20 text-center lg:pt-56 lg:pb-32 xl:pt-64">
        <h1 className="font-heading text-4xl leading-tight text-alf-eerie-black md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Armamos <b className="font-bold">tu libro</b>
          <br />
          <span className="relative inline-block">
            de pies a cabeza.
            <Image
              src="/svg/brand/underline-head.svg"
              alt=""
              aria-hidden="true"
              width={380}
              height={20}
              className="absolute -bottom-2 left-[14%] h-auto w-[92%] max-w-none lg:-bottom-3"
            />
          </span>
        </h1>

        <HeroCharacter />
      </div>
    </section>
  );
}