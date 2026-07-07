// src/components/home/clients-types/clients-types.tsx
import Image from "next/image";

const columns = [
  {
    title: "Editoriales",
    paragraphs: [
      "Las más grandes editoriales a nivel nacional nos buscan para optimizar tiempo y recursos.",
      "Gestionamos desde una sola publicación hasta colecciones y series completas.",
    ],
  },
  {
    title: "Empresas e instituciones",
    paragraphs: [
      "Colaboramos con organizaciones de cualquier tamaño en todo el proceso creativo: desde la generación de los contenidos hasta la impresión o adaptación digital.",
      "Somos especialistas en libros, revistas, presentaciones corporativas, informes, manuales, material publicitario, memorias corporativas, catálogos, folletos, papelería personalizada, etc.",
    ],
  },
  {
    title: "Autores",
    paragraphs: [
      "Guiamos a autores primerizos y experimentados para convertir su manuscrito en una obra que cumpla con los más altos estándares de la industria editorial.",
      "Diseñamos proyectos en sintonía con los deseos, necesidades y presupuesto de cada autor.",
    ],
  },
];

export default function ClientsTypes() {
  return (
    <section className="relative overflow-hidden bg-alf-near-white px-6 py-20">
      {/* Shape decorativo izquierdo — solo escritorio */}
      <Image
        src="/svg/home/clients-types/shape-left-clients.svg"
        alt=""
        width={140}
        height={140}
        className="absolute left-[4%] top-24 hidden w-28 max-w-none xl:w-36 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-alf-turquoise xl:text-5xl">
          ¿Con quiénes trabajamos?
        </h2>

        {/* Foto galería de libros */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/images/home/clients-types/photo-clients.png"
            alt="Galería de libros publicados por Alfabética"
            width={800}
            height={400}
            className="h-auto w-full max-w-4xl"
          />
        </div>

        {/* Tres columnas de texto */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-sans text-xl font-bold text-alf-turquoise xl:text-2xl">
                {col.title}
              </h3>
              {col.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-alf-eerie-black xl:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}