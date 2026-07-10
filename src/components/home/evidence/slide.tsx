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
      <div className="relative w-full">
        <Image
          src={project.photo}
          alt={project.name}
          width={1920}
          height={1080}
          priority
          className="aspect-[4/3] w-full object-cover md:aspect-[2/1] xl:aspect-[21/9]"
        />

        <Image
          src={project.shape}
          alt=""
          aria-hidden="true"
          width={160}
          height={160}
          className={`absolute w-24 max-w-none md:w-32 xl:w-40 ${project.shapePosition}`}
        />

        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[10%] items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Proyecto anterior"
            onClick={onPrev}
            className="shrink-0 transition-transform hover:scale-110"
          >
            <Image
              src="/svg/home/evidence/left-button.svg"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              unoptimized
              className="w-4 max-w-none md:w-5 xl:w-6"
            />
          </button>

          <div className="flex items-center justify-center rounded-full bg-alf-near-white px-5 py-2.5 md:px-6 md:py-3 xl:px-10 xl:py-4">
            <span className="font-heading text-base leading-tight font-bold whitespace-nowrap text-alf-eerie-black md:text-lg xl:text-2xl">
              {project.name}
            </span>
          </div>

          <button
            type="button"
            aria-label="Proyecto siguiente"
            onClick={onNext}
            className="shrink-0 p-3 transition-transform hover:scale-110"
          >
            <Image
              src="/svg/home/evidence/right-button.svg"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              unoptimized
              className="w-4 max-w-none md:w-5 xl:w-6"
            />
          </button>
        </div>
      </div>

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