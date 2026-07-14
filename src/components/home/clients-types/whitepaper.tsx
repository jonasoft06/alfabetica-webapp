// src/components/home/clients-types/whitepaper.tsx
import Image from "next/image";
import DownloadBlock from "./email-form";

// Primera etapa: la descarga del whitepaper aún no está definida
// (backend + contenido). Se reactiva poniendo esto en true.
const SHOW_DOWNLOAD = false;

export default function Whitepaper() {
  return (
    <section className="relative z-10 bg-alf-near-white px-6 py-0 lg:min-h-[230px] xl:min-h-[250px]">
      <Image
        src="/svg/home/clients-types/shape-bottom-paper.svg"
        alt=""
        width={320}
        height={220}
        className="absolute -bottom-72 left-10 hidden w-64 max-w-none lg:block xl:w-[600px]"
      />

      {/* Personaje, abajo-derecha (ya queda pegado con bottom-0). */}
      <Image
        src="/svg/home/clients-types/illustration-clients.svg"
        alt=""
        width={180}
        height={200}
        className="absolute -bottom-3 z-60 right-[8%] hidden w-32 max-w-none lg:block xl:w-40"
      />

      {/* Solo se renderiza cuando la descarga está activa. */}
      {SHOW_DOWNLOAD && (
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center pb-16">
          <DownloadBlock />
        </div>
      )}
    </section>
  );
}
