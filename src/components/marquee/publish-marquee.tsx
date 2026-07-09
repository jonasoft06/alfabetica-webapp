// src/components/home/publish-marquee.tsx
import Marquee from "./text-marquee";

export default function PublishMarquee() {
  const items = [
    {
      text: "Pensar / Editar / Publicar",
      icon: "/svg/marquee/marquee-think.svg",
    },
  ];

  return (
    <Marquee
      items={items}
      bgClass="bg-alf-near-white border-y-2 border-alf-tangerine"
      textClass="text-alf-tangerine"
      iconPosition="before"
    />
  );
}