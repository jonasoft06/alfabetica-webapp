"use client";

import { useCallback, useEffect, useState } from "react";

import Slide, { type Project } from "./slide";

const projects: Project[] = [
  {
    photo: "/images/home/evidence/photo-evidence.webp",
    shape: "/svg/home/evidence/shape-evidence.svg",
    shapePosition: "bottom-[0%] right-0 translate-x-[40%]",
    name: "Con Evidencia",
    subtitle: "Revista académica | Revista de Divulgación del CUCS",
    challenge:
      "Desarrollar una publicación científica capaz de comunicar contenidos especializados de forma clara y accesible, manteniendo al mismo tiempo los estándares propios de una revista académica.",
    solution:
      "Diseñamos una estructura editorial flexible que facilita la lectura de artículos científicos, optimiza los procesos de producción y fortalece la identidad visual de la publicación, permitiendo su continuidad y crecimiento.",
    result:
      "Una revista académica sólida, funcional y visualmente consistente que contribuye a la difusión del conocimiento científico y fortalece la proyección institucional de la universidad.",
  },
  {
    photo: "/images/home/evidence/photo-financial.webp",
    shape: "/svg/home/evidence/shape-financial.svg",
    shapePosition: "top-0 left-[65%] -translate-y-1/2",
    name: "Libertad Financiera",
    subtitle: "Informe corporativo | Informe de sostenibilidad",
    challenge:
      "Transformar información financiera compleja en una publicación clara, atractiva y alineada con los objetivos de comunicación de la organización.",
    solution:
      "Desarrollamos una propuesta conceptual y gráfica integral que permitió organizar la información, jerarquizar contenidos y construir una narrativa visual capaz de comunicar datos especializados a distintos públicos.",
    result:
      "Una publicación corporativa que fortalece la comunicación institucional y facilita la comprensión de información estratégica.",
  },
  {
    photo: "/images/home/evidence/photo-lions.webp",
    shape: "/svg/home/evidence/shape-lions.svg",
    shapePosition: "top-5 left-10 -translate-x-1/3 -translate-y-1/3",
    name: "Leones de Corazón",
    subtitle: "Libro conmemorativo | Prepa 7 Vol. II",
    challenge:
      "Documentar la historia, identidad y espíritu de una comunidad educativa mediante una publicación capaz de preservar su memoria institucional.",
    solution:
      "Realizamos investigación documental, trabajo fotográfico y diseño editorial para construir una obra que refleja la esencia de la institución y la experiencia de su comunidad.",
    result:
      "Un libro que conserva la memoria colectiva de la preparatoria y fortalece el sentido de pertenencia de sus lectores.",
  },
];

const INTERVAL = 12000;

export default function Evidence() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userTookControl, setUserTookControl] = useState(false);

  const goTo = useCallback((index: number) => {
    const total = projects.length;
    setCurrent((index + total) % total);
  }, []);

  const next = useCallback(() => {
    setUserTookControl(true);
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    setUserTookControl(true);
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    if (hovered || userTookControl) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % projects.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [hovered, userTookControl, current]);

  return (
    <section
      id="proyectos"
      className="bg-alf-near-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slide project={projects[current]} onPrev={prev} onNext={next} />
    </section>
  );
}