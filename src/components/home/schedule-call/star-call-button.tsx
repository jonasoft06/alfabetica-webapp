"use client";

import { StarButton } from "@/components/common/star-button";

export function StarCallButton() {

  return (
    <StarButton
      href="#"
      shapeSrc="/svg/home/faq/button-call.svg"
      arrowSrc="/svg/home/faq/arrow-call.svg"
      shapeClassName="w-48 transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 xl:w-56"
      labelClassName="text-lg text-alf-near-white xl:text-xl"
    >
      Agenda una
      <br />
      videollamada
    </StarButton>
  );
}