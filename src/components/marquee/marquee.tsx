// src/components/home/marquee.tsx
import Image from "next/image";

type MarqueeItem = {
  text: string;
  icon: string;
};

type MarqueeProps = {
  items: MarqueeItem[];
  bgClass: string;
  textClass: string;
  iconPosition?: "before" | "after"; // dónde va el ícono respecto al texto
};

export default function Marquee({
  items,
  bgClass,
  textClass,
  iconPosition = "after", // por defecto, después (como la banda de soluciones)
}: MarqueeProps) {
  const repeated = Array.from({ length: 6 }, () => items).flat();

  const renderItem = (item: MarqueeItem, key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-6 pr-6">
      {iconPosition === "before" && (
        <Image src={item.icon} alt="" width={24} height={24} />
      )}
      <span className={`whitespace-nowrap text-xl font-medium ${textClass}`}>
        {item.text}
      </span>
      {iconPosition === "after" && (
        <Image src={item.icon} alt="" width={24} height={24} />
      )}
    </div>
  );

  return (
    <div className={`overflow-hidden py-4 ${bgClass}`}>
      <div className="flex w-max animate-marquee items-center">
        <div className="flex shrink-0 items-center">
          {repeated.map((item, i) => renderItem(item, `a-${i}`))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {repeated.map((item, i) => renderItem(item, `b-${i}`))}
        </div>
      </div>
    </div>
  );
}