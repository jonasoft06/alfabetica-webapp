// src/components/home/marquee.tsx
import Image from "next/image";

type MarqueeItem = {
  text: string;
  icon: string; // ruta al SVG que va DESPUÉS del texto
};

type MarqueeProps = {
  items: MarqueeItem[];
  bgClass: string; // clase de color de fondo (ej. "bg-alf-turquoise")
  textClass: string; // clase de color de texto (ej. "text-alf-near-white")
};

export default function Marquee({ items, bgClass, textClass }: MarqueeProps) {
  // Duplicamos los items para lograr el bucle infinito sin saltos.
  const loop = [...items, ...items];

  return (
    <div className={`overflow-hidden py-4 ${bgClass}`}>
      <div className="flex w-max animate-marquee items-center gap-6">
        {loop.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6">
            <span
              className={`whitespace-nowrap text-lg font-medium ${textClass}`}
            >
              {item.text}
            </span>
            <Image src={item.icon} alt="" width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
}