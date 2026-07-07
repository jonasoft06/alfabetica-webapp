// src/components/home/sizes-marquee.tsx
import Marquee from "./marquee";

export default function SizesMarquee() {
  const items = [
    {
      text: "Libros de todas las tallas, para todos los gustos.",
      icon: "/svg/marquee/marquee-clients.svg",
    },
  ];

  return (
    <Marquee
      items={items}
      bgClass="bg-alf-turquoise"
      textClass="text-alf-near-white"
    />
  );
}