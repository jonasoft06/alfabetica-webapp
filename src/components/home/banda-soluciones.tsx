// src/components/home/banda-soluciones.tsx
import Marquee from "./marquee";

export default function BandaSoluciones() {
  const items = [
    {
      text: "Todas las soluciones.",
      icon: "/svg/hero/icon1-scroll-soluciones.svg",
    },
    {
      text: "Un solo lugar.",
      icon: "/svg/hero/icon2-scroll-soluciones.svg",
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