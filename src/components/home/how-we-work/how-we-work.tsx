import Image from "next/image";

import Step, { type Step as StepType } from "./step";
import DecoratedWord from "@/components/common/decorated-word";

const steps: StepType[] = [
  {
    number: 1,
    title: (
      <>
        Damos claridad en{" "}
        <DecoratedWord decoration="/svg/home/how-we-work/circle-costs.svg" variant="circle">
          costos
        </DecoratedWord>
      </>
    ),
    paragraphs: [
      "Te ofrecemos opciones que se ajustan a tus necesidades y tu presupuesto.",
    ],
  },
  {
    number: 2,
    title: (
      <>
        Damos forma al{" "}
        <DecoratedWord decoration="/svg/home/how-we-work/underline-content.svg" variant="underline">
          contenido
        </DecoratedWord>
      </>
    ),
    paragraphs: [
      "¿Aún estás desarrollando tu contenido? Te acompañamos en el proceso para ayudarte a ordenar las ideas, definir una estructura clara y fortalecer el mensaje que quieres comunicar.",
      "Si ya tienes tu manuscrito, te ayudamos a estructurarlo y darle más fuerza; revisamos la ortografía y la gramática, damos cohesión, coherencia, claridad y precisión.",
    ],
  },
  {
    number: 3,
    title: (
      <>
        <DecoratedWord decoration="/svg/home/how-we-work/circle-design.svg" variant="circle">
          Diseñamos
        </DecoratedWord>
        , por dentro y por fuera
      </>
    ),
    paragraphs: [
      "Nuestro equipo de diseñadores, ilustradores y fotógrafos trabaja para crear una imagen atractiva, profesional y coherente con el contenido de tu libro para que conecte con sus lectores desde el primer vistazo.",
    ],
  },
  {
    number: 4,
    title: (
      <>
        Protegemos{" "}
        <DecoratedWord decoration="/svg/home/how-we-work/underline-right.svg" variant="underline">
          los derechos
        </DecoratedWord>{" "}
        de tu obra
      </>
    ),
    paragraphs: [
      "Tramitamos el ISBN, para que pueda comercializarse tanto en canales físicos como en línea, sin importar la ubicación geográfica.",
    ],
  },
  {
    number: 5,
    title: (
      <>
        Producimos versiones{" "}
        <DecoratedWord decoration="/svg/home/how-we-work/circle-printed.svg" variant="circle">
          impresas y digitales
        </DecoratedWord>
      </>
    ),
    paragraphs: [
      "Imprimimos en papel y hacemos libros electrónicos. Desarrollamos cada publicación en el formato adecuado, cuidando tanto la experiencia física de lectura como su adaptación digital, para que tu obra circule en distintos espacios y plataformas.",
    ],
  },
  {
    number: 6,
    title: (
      <>
        Llevamos tu libro a donde tu{" "}
        <DecoratedWord decoration="/svg/home/how-we-work/underline-audience.svg" variant="underline">
          audiencia
        </DecoratedWord>{" "}
        lo encontrará
      </>
    ),
    paragraphs: [
      "Tu libro llegará a la red de librerías más grande de Guadalajara y a las principales tiendas en línea. Te asesoramos con estrategias de promoción, dándote ideas accionables para que presentes tu libro y refuerces tu presencia en redes a través de los canales más eficaces.",
    ],
  },
];

const firstBlock = steps.slice(0, 3);
const secondBlock = steps.slice(3, 6);

export default function HowWeWork() {
  return (
    <section id="libros" className="overflow-hidden bg-alf-crema px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-16 grid grid-cols-1 items-baseline gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
          <h2 className="font-heading text-3xl leading-none font-semibold text-alf-tangerine xl:text-5xl">
            ¿Cómo lo hacemos?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-alf-eerie-black xl:text-base">
            Con un equipo de más de 15 años de experiencia en el mundo
            editorial, nuestra consultoría en servicios editoriales integrales
            se especializa en dos cosas:{" "}
            <strong className="font-semibold">la flexibilidad y la eficiencia</strong>.
          </p>
        </div>


        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr_auto] lg:gap-8">

          <Image
            src="/svg/home/how-we-work/illustration-work.svg"
            alt=""
            aria-hidden="true"
            width={200}
            height={180}
            unoptimized
            className="pt-20 pr-5 hidden w-40 max-w-none lg:block xl:w-40"
          />

          <div className="flex flex-col gap-12">
            {firstBlock.map((step) => (
              <Step key={step.number} step={step} />
            ))}
          </div>


          <div className="relative hidden w-56 shrink-0 lg:block xl:w-70">
            <Image
              src="/images/home/how-we-work/photo-workr.webp"
              alt="Libros publicados por Alfabética"
              width={310}
              height={310}
              className="relative z-10 h-auto max-w-none left-[30%] w-[120%]"
            />
            <Image
              src="/svg/home/how-we-work/shape-right.svg"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              unoptimized
              className="absolute top-[30%] left-[110%] z-0 w-[140%] max-w-none -translate-y-[56%]"
            />
          </div>
        </div>


        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className="relative hidden w-72 shrink-0 lg:block xl:w-80">
            <Image
              src="/images/home/how-we-work/photo-workl.webp"
              alt="Persona leyendo un libro"
              width={441}
              height={443}
              className="relative z-10 h-auto max-w-none right-16 w-[135%]"
            />
            <Image
              src="/svg/home/how-we-work/shape-left.svg"
              alt=""
              aria-hidden="true"
              width={120}
              height={120}
              unoptimized
              className="absolute top-1/2 z-0 w-[160%] max-w-none -translate-x-[90%] -translate-y-1/2"
            />
          </div>

          <div className="flex flex-col gap-12">
            {secondBlock.map((step) => (
              <Step key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}