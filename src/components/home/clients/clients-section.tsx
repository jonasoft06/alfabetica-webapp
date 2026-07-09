import Image from "next/image";
import { ClientsMarquee } from "@/components/marquee/clients-marquee"


export function ClientsSection() {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <Image
            src="/svg/home/contact/banner-contact.svg"
            alt=""
            aria-hidden="true"
            width={320}
            height={80}
            unoptimized
            className="h-auto w-64 max-w-none lg:w-80"
          />

          <h2 className="absolute font-heading text-xl whitespace-nowrap text-alf-eerie-black lg:text-2xl">
            Nuestros clientes
          </h2>
        </div>
      </div>

      <ClientsMarquee />
    </section>
  );
}