import Image from "next/image";

import { Marquee } from "./marquee";

type MarqueeItem = {
  text: string;
  icon?: string;
};

type TextMarqueeProps = {
  items: MarqueeItem[];
  bgClass: string;
  textClass: string;
  iconPosition?: "before" | "after";
  repeat?: number;
};

export default function TextMarquee({
  items,
  bgClass,
  textClass,
  iconPosition = "after",
  repeat = 12,
}: TextMarqueeProps) {
  const repeated = Array.from({ length: repeat }, () => items).flat();

  const icon = (src: string) => (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={32}
      height={32}
      unoptimized
      className="size-5 max-w-none xl:size-6 2xl:size-7"
    />
  );

  return (
    <Marquee className={bgClass}>
      {repeated.map((item, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center gap-3 pr-3"
        >
          {/* <div className="flex shrink-0 items-center gap-3 pr-6 xl:gap-4 xl:pr-8">  */}
          {item.icon && iconPosition === "before" && icon(item.icon)}
          <span
            className={`font-heading text-base font-medium italic tracking-widest  whitespace-nowrap xl:text-lg 2xl:text-xl ${textClass}`}
          >
            {item.text}
          </span>
          {item.icon && iconPosition === "after" && icon(item.icon)}
        </div>
      ))}
    </Marquee>
  );
}