// src/components/home/consultoria.tsx
import Image from "next/image";
import Link from "next/link";

export default function Consultoria() {
  return (
    <section className="bg-alf-near-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Columna 1: Título */}
        <h2 className="font-sans text-3xl font-bold leading-tight text-alf-turquoise">
          Consultoría integral y atención personalizada.
        </h2>

        {/* Columna 2: Párrafos */}
        <div className="space-y-4 text-sm leading-relaxed text-alf-eerie-black">
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
            {/* Estrella de fondo */}
            <Image
              src="/svg/hero/button-cotiza-proyecto.svg"
              alt=""
              width={200}
              height={200}
              className="h-auto w-48"
            />
            {/* Contenido encima */}
            <div className="absolute flex flex-col items-center gap-2 text-center">
              <span className="text-lg font-bold text-alf-eerie-black">
                Cotiza
                <br />
                tu proyecto
              </span>
              <Image
                src="/svg/hero/arrow-cotiza-proyecto.svg"
                alt=""
                width={40}
                height={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}