import Image from "next/image";

import { Marquee } from "@/components/marquee/marquee";

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

  return (
    <Marquee className={bgClass}>
      {repeated.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
          {item.icon && iconPosition === "before" && (
            <Image src={item.icon} alt="" width={24} height={24} />
          )}
          <span
            className={`text-xl font-medium whitespace-nowrap ${textClass}`}
          >
            {item.text}
          </span>
          {item.icon && iconPosition === "after" && (
            <Image src={item.icon} alt="" width={24} height={24} />
          )}
        </div>
      ))}
    </Marquee>
  );
}