// src/components/home/clients-types/whitepaper.tsx
import Image from "next/image";
import DownloadBlock from "./email-form";

export default function Whitepaper() {
  return (
    <section className="relative overflow-hidden bg-alf-near-white px-6 pt-8 pb-0">
      {/* Shape decorativo abajo-izquierda, pegado al fondo */}
      <Image
        src="/svg/home/clients-types/shape-bottom-paper.svg"
        alt=""
        width={320}
        height={220}
        className="absolute bottom-0 left-0 hidden w-64 max-w-none xl:w-80 lg:block"
      />

      {/* Ilustración del personaje abajo-derecha, pegada al fondo */}
      <Image
        src="/svg/home/clients-types/illustration-clients.svg"
        alt=""
        width={180}
        height={200}
        className="absolute bottom-0 right-[8%] hidden w-32 max-w-none xl:w-40 lg:block"
      />

      {/* Contenido central */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center pb-16">
        <DownloadBlock />
      </div>
    </section>
  );
}