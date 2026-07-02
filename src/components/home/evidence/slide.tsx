// src/components/home/evidence/slide.tsx
import Image from "next/image";

export type Project = {
  photo: string;
  shape: string;
  shapePosition: string;
  name: string;
  subtitle: string;
  challenge: string;
  solution: string;
  result: string;
};

type SlideProps = {
  project: Project;
  onPrev: () => void;
  onNext: () => void;
};

export default function Slide({ project, onPrev, onNext }: SlideProps) {
  return (
    <div className="w-full">
      {/* Foto con shape y banner sobrepuestos */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={project.photo}
          alt={project.name}
          width={1040}
          height={560}
          className="h-[400px] w-full object-cover xl:h-[700px]"
          priority
        />

        {/* Shape decorativo */}
        <Image
          src={project.shape}
          alt=""
          width={160}
          height={160}
          className={`absolute w-32 xl:w-40 ${project.shapePosition}`}
        />

        {/* Banner con nombre + botones */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            aria-label="Anterior"
            onClick={onPrev}
            className="shrink-0 transition-transform hover:scale-110"
          >
            <Image
              src="/svg/home/evidence/left-button.svg"
              alt=""
              width={40}
              height={40}
              className="w-8 xl:w-10"
            />
          </button>

          <div className="relative flex items-center justify-center">
            <Image
              src="/svg/home/evidence/banner.svg"
              alt=""
              width={320}
              height={70}
              className="h-auto w-64 xl:w-80"
            />
            <span className="absolute font-heading text-xl font-bold text-alf-eerie-black xl:text-2xl">
              {project.name}
            </span>
          </div>

          <button
            type="button"
            aria-label="Siguiente"
            onClick={onNext}
            className="shrink-0 transition-transform hover:scale-110"
          >
            <Image
              src="/svg/home/evidence/right-button.svg"
              alt=""
              width={40}
              height={40}
              className="w-8 xl:w-10"
            />
          </button>
        </div>
      </div>

      {/* Texto debajo */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-6 text-lg text-alf-eerie-black xl:text-xl">
          {project.subtitle}
        </h3>
        <div className="grid grid-cols-1 gap-8 text-sm leading-relaxed text-alf-eerie-black lg:grid-cols-3 xl:text-base">
          <p>
            <strong className="font-semibold">El reto:</strong>{" "}
            {project.challenge}
          </p>
          <p>
            <strong className="font-semibold">Nuestra solución:</strong>{" "}
            {project.solution}
          </p>
          <p>
            <strong className="font-semibold">El resultado:</strong>{" "}
            {project.result}
          </p>
        </div>
      </div>
    </div>
  );
}