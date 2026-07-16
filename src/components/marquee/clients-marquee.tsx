import Image from "next/image";

import { Marquee } from "@/components/marquee/marquee";

const clients = [
  { name: "Loqueleo", src: "/svg/home/contact/logo-Loqueleo.svg" },
  { name: "ITESO", src: "/svg/home/contact/logo-ITESO.svg" },
  { name: "CMM", src: "/svg/home/contact/logo-CMM.svg" },
  { name: "CUCS", src: "/svg/home/contact/logo-CUCS.svg" },
  { name: "CUCEA", src: "/svg/home/contact/logo-CUCEA.svg" },
  { name: "CUChapala", src: "/svg/home/contact/logo-CUCHAPALA.svg" },
  { name: "UH", src: "/svg/home/contact/logo-UH.svg" },
  { name: "UdG", src: "/svg/home/contact/logo-UdG.svg" },
  { name: "Santillana", src: "/svg/home/contact/logo-Santillana.svg" },
  { name: "Prosociedad", src: "/svg/home/contact/logo-Prosociedad.svg" },
];

const REPEAT = 2;

export function ClientsMarquee() {
  const repeated = Array.from({ length: REPEAT }, () => clients).flat();

  return (
    <Marquee className="bg-alf-near-white py-14">
      {repeated.map((client, i) => (
        <div key={`${client.name}-${i}`} className="flex shrink-0 px-10">
          <Image
            src={client.src}
            alt={client.name}
            width={160}
            height={48}
            unoptimized
            className="h-6 w-auto max-w-none object-contain xl:h-8"
          />
        </div>
      ))}
    </Marquee>
  );
}