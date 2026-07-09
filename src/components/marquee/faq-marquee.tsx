// src/components/home/faq-marquee.tsx
import Marquee from "./text-marquee";

export default function FaqMarquee() {
  const items = [
    {
      text: "Preguntas frecuentes /",
    },
  ];

  return (
    <Marquee
      items={items}
      bgClass="bg-alf-tan-sun"
      textClass="text-alf-eerie-black"
    />
  );
}