import Image from "next/image";
import { cn } from "@/lib/utils";

import { Marquee } from "@/components/marquee/marquee";

const clients = [
  { name: "Loqueleo", src: "/svg/home/contact/logo-Loqueleo.svg", width: 160, height: 48 },
  { name: "ITESO", src: "/svg/home/contact/logo-ITESO.svg", width: 56, height: 81, large: true },
  { name: "CMM", src: "/svg/home/contact/logo-CMM.svg", width: 105, height: 61, large: true },
  { name: "CUCS", src: "/svg/home/contact/logo-CUCS.svg", width: 61, height: 89, large: true },
  { name: "CUCEA", src: "/svg/home/contact/logo-CUCEA.svg", width: 160, height: 48 },
  { name: "CUChapala", src: "/svg/home/contact/logo-CUCHAPALA.svg", width: 160, height: 48 },
  { name: "UH", src: "/svg/home/contact/logo-UH.svg", width: 160, height: 48 },
  { name: "UdG", src: "/svg/home/contact/logo-UdG.svg", width: 60, height: 82, large: true },
  { name: "Santillana", src: "/svg/home/contact/logo-Santillana.svg", width: 160, height: 48 },
  { name: "Prosociedad", src: "/svg/home/contact/logo-Prosociedad.svg", width: 160, height: 48 },
];

const REPEAT = 2;

export function ClientsMarquee() {
  const repeated = Array.from({ length: REPEAT }, () => clients).flat();

  return (
    <Marquee className="bg-alf-near-white py-8">
      {repeated.map((client, i) => (
        <div key={`${client.name}-${i}`} className="flex shrink-0 items-center px-10">
          <Image
            src={client.src}
            alt={client.name}
            width={client.width}
            height={client.height}
            unoptimized
            className={cn(
              "h-6 w-auto max-w-none object-contain xl:h-8",
              client.large && "h-10 xl:h-12"
            )}
          />
        </div>
      ))}
    </Marquee>
  );
}