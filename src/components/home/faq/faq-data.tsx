export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  { id: "inversion", question: "¿Cuánto necesito invertir para publicar mi libro?", answer: "TODO" },
  { id: "proceso-editorial", question: "¿Qué incluye exactamente el proceso editorial?", answer: "TODO" },
  { id: "sin-manuscrito", question: "¿Qué pasa si solo tengo una idea, pero no tengo un manuscrito terminado?", answer: "TODO" },
  {
    id: "promocion",
    question: "¿Ustedes pueden ayudarme a promocionar el libro para que se venda?",
    answer:
      "No nos encargamos directamente de la comercialización o gestión de campañas de venta del libro. Sin embargo, sí podemos ayudarte a desarrollar estrategias de difusión y promoción que fortalezcan la presentación y visibilidad de la publicación.",
  },
  { id: "tiempo", question: "¿Cuánto tiempo toma hacer un libro?", answer: "TODO" },
  { id: "factores-costo", question: "¿Qué factores influyen en el costo de un libro?", answer: "TODO" },
  { id: "experiencia-previa", question: "¿Necesito tener experiencia previa para publicar un libro?", answer: "TODO" },
  { id: "pocos-ejemplares", question: "¿Puedo imprimir pocos ejemplares?", answer: "TODO" },
  { id: "isbn", question: "¿Ustedes realizan el trámite de ISBN?", answer: "TODO" },
  { id: "otra-ciudad", question: "¿Puedo publicar aunque viva en otra ciudad o país?", answer: "TODO" },
  { id: "formatos-impresion", question: "¿Qué formatos de impresión manejan?", answer: "TODO" },
  { id: "proceso-pago", question: "¿Cómo es el proceso de pago?", answer: "TODO" },
  { id: "servicios-sueltos", question: "¿Puedo solicitar solo algunos servicios y no el proceso completo?", answer: "TODO" },
];