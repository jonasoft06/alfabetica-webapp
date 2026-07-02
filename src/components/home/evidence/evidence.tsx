"use client";

import { useState, useEffect, useRef } from "react";
import Slide, { type Project } from "./slide";

const projects: Project[] = [
  {
    photo: "/images/home/evidence/photo-evidence.png",
    shape: "/svg/home/evidence/shape-evidence.svg",
    shapePosition: "bottom-0 -right-30",
    name: "Con Evidencia",
    subtitle: "Revista académica | Centro Universitario de Ciencias de la Salud",
    challenge:
      "Desarrollar una publicación científica capaz de comunicar contenidos especializados de forma clara y accesible, manteniendo al mismo tiempo los estándares propios de una revista académica.",
    solution:
      "Diseñamos una estructura editorial flexible que facilita la lectura de artículos científicos, optimiza los procesos de producción y fortalece la identidad visual de la publicación, permitiendo su continuidad y crecimiento.",
    result:
      "Una revista académica sólida, funcional y visualmente consistente que contribuye a la difusión del conocimiento científico y fortalece la proyección institucional de la universidad.",
  },
  {
    photo: "/images/home/evidence/photo-financial.png",
    shape: "/svg/home/evidence/shape-financial.svg",
    shapePosition: "top-0 left-0",
    name: "Libertad Financiera",
    subtitle: "Informe corporativo",
    challenge:
      "Transformar información financiera compleja en una publicación clara, atractiva y alineada con los objetivos de comunicación de la organización.",
    solution:
      "Desarrollamos una propuesta conceptual y gráfica integral que permitió organizar la información, jerarquizar contenidos y construir una narrativa visual capaz de comunicar datos especializados a distintos públicos.",
    result:
      "Una publicación corporativa que fortalece la comunicación institucional y facilita la comprensión de información estratégica.",
  },
  {
    photo: "/images/home/evidence/photo-lions.png",
    shape: "/svg/home/evidence/shape-lions.svg",
    shapePosition: "top-0 left-0",
    name: "Leones de Corazón",
    subtitle: "Libro conmemorativo | Preparatoria 7",
    challenge:
      "Documentar la historia, identidad y espíritu de una comunidad educativa mediante una publicación capaz de preservar su memoria institucional.",
    solution:
      "Realizamos investigación documental, trabajo fotográfico y diseño editorial para construir una obra que refleja la esencia de la institución y la experiencia de su comunidad.",
    result:
      "Un libro que conserva la memoria colectiva de la preparatoria y fortalece el sentido de pertenencia de sus lectores.",
  },
];

const INTERVAL = 8000; // 8 segundos

export default function Evidence() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    // Aseguramos que el índice quede dentro del rango (bucle circular).
    const total = projects.length;
    setCurrent((index + total) % total);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Auto-avance cada 8s, salvo que esté pausado (hover).
  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % projects.length);
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="bg-alf-near-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Slide project={projects[current]} onPrev={prev} onNext={next} />
    </section>
  );
}