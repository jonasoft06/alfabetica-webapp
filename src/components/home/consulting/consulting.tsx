// src/components/home/consultoria.tsx
import Image from "next/image";
import Link from "next/link";

export default function Consulting() {
  return (
    <section className="bg-alf-near-white px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1fr_0.8fr] lg:gap-14 xl:gap-20">
        {/* Columna 1: Título */}
        <h2 className="font-sans text-end text-3xl font-bold leading-snug text-alf-turquoise">
          Consultoría integral y atención personalizada.
        </h2>

        {/* Columna 2: Párrafos */}
        <div className="space-y-3 w-[110%] text-base leading-relaxed text-alf-eerie-black lg:text-lg">
          <p>
            En Alfabética apoyamos a{" "}
            <strong className="font-semibold">
              autores, editoriales, empresas e instituciones
            </strong>{" "}
            para que materialicen cualquier publicación que se imaginen.
          </p>
          <p>
            Nuestra consultoría integral ofrece la solución adecuada a cada
            necesidad o modelo de negocio; además, nos destacamos por acompañar
            al cliente durante todo el proceso de creación, con atención
            personalizada.
          </p>
        </div>

        {/* Columna 3: Botón estrellado */}
        <div className="flex justify-center lg:justify-end">
          <Link
            href="/cotizador"
            className="group relative flex items-center justify-center transition-transform hover:scale-105"
          >
            {/* Estrella de fondo (gira lentamente) */}
            <Image
              src="/svg/home/consulting/button-project-quote.svg"
              alt=""
              width={280}
              height={280}
              className="h-auto w-60 animate-slow-spin xl:w-72"
            />
            {/* Contenido encima */}
            <div className="absolute flex flex-col items-center gap-2 text-center">
              <span className="text-xl font-bold text-alf-eerie-black xl:text-2xl">
                Cotiza
                <br />
                tu proyecto
              </span>
              <Image
                src="/svg/home/consulting/arrow-project-quote.svg"
                alt=""
                width={48}
                height={24}
                className="max-w-none"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}