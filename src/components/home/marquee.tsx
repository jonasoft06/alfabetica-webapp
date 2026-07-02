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
  // Repetimos el set base varias veces para asegurar que el contenido
  // llene pantallas anchas sin huecos.
  const repeated = Array.from({ length: 6 }, () => items).flat();

  return (
    <div className={`overflow-hidden py-4 ${bgClass}`}>
      {/* Se renderizan DOS bloques idénticos; la animación desplaza -50%
          (el ancho de un bloque) para un bucle continuo sin salto visible. */}
      <div className="flex w-max animate-marquee items-center">
        {/* Bloque 1 */}
        <div className="flex shrink-0 items-center">
          {repeated.map((item, i) => (
            <div key={`a-${i}`} className="flex shrink-0 items-center gap-6 pr-6">
              <span
                className={`whitespace-nowrap text-xl font-medium ${textClass}`}
              >
                {item.text}
              </span>
              <Image src={item.icon} alt="" width={24} height={24} />
            </div>
          ))}
        </div>
        {/* Bloque 2 (idéntico, para el bucle) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {repeated.map((item, i) => (
            <div key={`b-${i}`} className="flex shrink-0 items-center gap-6 pr-6">
              <span
                className={`whitespace-nowrap text-xl font-medium ${textClass}`}
              >
                {item.text}
              </span>
              <Image src={item.icon} alt="" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}