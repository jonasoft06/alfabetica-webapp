// src/components/home/how-we-work/how-we-work.tsx
import Step, { type Step as StepType } from "./step";
import DecoratedWord from "./decorated-word";
import Image from "next/image"

const steps: StepType[] = [
  {
    number: 1,
    title: (
      <>
        Damos claridad en{" "}
        <DecoratedWord
          decoration="/svg/home/how-we-work/circle-costs.svg"
          variant="circle"
        >
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
        <DecoratedWord
          decoration="/svg/home/how-we-work/underline-content.svg"
          variant="underline"
        >
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
        <DecoratedWord
          decoration="/svg/home/how-we-work/circle-design.svg"
          variant="circle"
        >
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
        <DecoratedWord
          decoration="/svg/home/how-we-work/underline-right.svg"
          variant="underline"
        >
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
        <DecoratedWord
          decoration="/svg/home/how-we-work/circle-printed.svg"
          variant="circle"
        >
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
        <DecoratedWord
          decoration="/svg/home/how-we-work/underline-audience.svg"
          variant="underline"
        >
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

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-alf-crema px-6 py-20">
      {/* Imágenes decorativas — solo escritorio, ocultas en móvil */}
      {/* Ilustración izquierda (altura pasos 2-3) */}
      <Image
        src="/svg/home/how-we-work/illustration-work.svg"
        alt=""
        width={200}
        height={180}
        className="absolute left-[6%] top-[42%] hidden w-40 xl:w-52 lg:block"
      />

      {/* Foto derecha arriba (altura pasos 1-2) */}
      <div className="absolute right-0 top-[20%] hidden w-[38%] max-w-lg lg:block">
        <div className="relative">
          <Image
            src="/images/home/how-we-work/photo-workr.png"
            alt="Libros publicados por Alfabética"
            width={500}
            height={400}
            className="relative z-10 h-auto w-full"
          />
          {/* Shape decorativo que acompaña la foto */}
          <Image
            src="/svg/home/how-we-work/shape-right.svg"
            alt=""
            width={300}
            height={300}
            className="absolute left-1/2 top-1/2 z-0 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Foto izquierda abajo (altura pasos 4-5) */}
      <div className="absolute bottom-[8%] left-0 hidden w-[30%] max-w-md lg:block">
        <div className="relative">
          <Image
            src="/images/home/how-we-work/photo-workl.png"
            alt="Persona leyendo un libro"
            width={400}
            height={450}
            className="relative z-10 h-auto w-full"
          />
          {/* Shape decorativo que acompaña la foto */}
          <Image
            src="/svg/home/how-we-work/shape-left.svg"
            alt=""
            width={120}
            height={120}
            className="absolute left-8 top-8 z-20 w-32 max-w-none"
          />
        </div>
      </div>

      {/* Contenido central */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado: título + párrafo introductorio */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="font-heading text-4xl font-bold text-alf-tangerine xl:text-5xl">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-sm leading-relaxed text-alf-eerie-black xl:text-base">
            Con un equipo de más de 15 años de experiencia en el mundo
            editorial, nuestra consultoría en servicios editoriales integrales
            se especializa en dos cosas:{" "}
            <strong className="font-semibold">
              la flexibilidad y la eficiencia
            </strong>
            .
          </p>
        </div>

        {/* Pasos en columna central acotada */}
        <div className="mx-auto flex max-w-2xl flex-col gap-12">
          {steps.map((step) => (
            <Step key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}