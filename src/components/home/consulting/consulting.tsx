import { StarButton } from "@/components/common/star-button";

export default function Consulting() {
  return (
    <section className="bg-alf-near-white px-6 py-14 lg:py-20 xl:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.1fr_0.75fr] lg:gap-14 xl:gap-20">
        {/* Columna 1: Título */}
        <h2 className="font-sans text-3xl leading-snug font-bold text-balance text-alf-turquoise lg:text-end">
          Consultoría integral y atención personalizada.
        </h2>

        <div className="space-y-3 text-base leading-relaxed text-alf-eerie-black lg:text-lg">
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

        <div className="flex justify-center lg:justify-end">
          <StarButton
            href="/cotizador"
            shapeSrc="/svg/home/consulting/button-project-consulting.svg"
            arrowSrc="/svg/brand/arrow-project.svg"
            shapeClassName="w-60 animate-slow-spin xl:w-72"
            labelClassName="text-xl text-alf-eerie-black xl:text-2xl"
          >
            Cotiza
            <br />
            tu proyecto
          </StarButton>
        </div>
      </div>
    </section>
  );
}