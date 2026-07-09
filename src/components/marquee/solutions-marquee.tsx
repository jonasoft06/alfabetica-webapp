// src/components/home/banda-soluciones.tsx
import Marquee from "./text-marquee";

export default function SolutionsMarquee() {
  const items = [
    {
      text: "Todas las soluciones.",
      icon: "/svg/marquee/marquee-vertical.svg",
    },
    {
      text: "Un solo lugar.",
      icon: "/svg/marquee/marquee-horizontal.svg",
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