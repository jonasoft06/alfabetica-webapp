export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  { id: "inversion", question: "¿Cuánto necesito invertir para publicar mi libro?", answer: "Cada proyecto es distinto, por lo que el costo depende de factores como la extensión, el tipo de edición, el diseño, la cantidad de ejemplares y si será impreso, digital o ambos. Podemos adaptarnos a distintos presupuestos y ayudarte a encontrar la mejor opción para tu proyecto, desde proyectos sencillos y accesibles hasta ediciones más especializadas." },
  { id: "proceso-editorial", question: "¿Qué incluye exactamente el proceso editorial?", answer: "El proceso editorial puede incluir corrección ortográfica y de estilo, estructura del contenido, diseño editorial, diseño de portada, ilustración, maquetación, preparación de archivos para imprenta, gestión de ISBN, impresión y desarrollo de versión digital. Tú decides qué servicios necesitas y nosotros te acompañamos en cada etapa." },
  { id: "sin-manuscrito", question: "¿Qué pasa si solo tengo una idea, pero no tengo un manuscrito terminado?", answer: "No necesitas tener todo resuelto desde el inicio. Podemos ayudarte a organizar tus ideas, definir la estructura del contenido, plantear capítulos y orientar el desarrollo del proyecto para que puedas avanzar de manera más clara y ordenada." },
  {
    id: "promocion",
    question: "¿Ustedes pueden ayudarme a promocionar el libro para que se venda?",
    answer:
      "No nos encargamos directamente de la comercialización o gestión de campañas de venta del libro. Sin embargo, sí podemos ayudarte a desarrollar estrategias de difusión y promoción que fortalezcan la presentación y visibilidad de la publicación.",
  },
  { id: "tiempo", question: "¿Cuánto tiempo toma hacer un libro?", answer: "Depende de la complejidad del proyecto y de los procesos involucrados. Un libro sencillo puede desarrollarse en aproximadamente dos meses, mientras que proyectos más complejos pueden tomar varios meses. El tiempo depende principalmente de la extensión del contenido, la cantidad de revisiones y el proceso de impresión. Al iniciar el proyecto te compartimos un calendario claro de trabajo." },
  { id: "factores-costo", question: "¿Qué factores influyen en el costo de un libro?", answer: "El costo depende principalmente de la cantidad de páginas, el tipo de impresión, los materiales, el tiraje y los servicios editoriales requeridos. Por ejemplo, un libro breve en blanco y negro tendrá un costo mucho menor que una edición a color con acabados especiales, ilustraciones y tirajes amplios. También influyen aspectos como el tipo de papel, la encuadernación, el diseño de portada, la corrección de estilo o si se desarrollará una versión digital. Por eso cada proyecto se cotiza de manera personalizada." },
  { id: "experiencia-previa", question: "¿Necesito tener experiencia previa para publicar un libro?", answer: "No. Trabajamos tanto con autores que publican por primera vez como con escritores e instituciones con experiencia. Nuestro objetivo es que te sientas seguro y acompañado en cada etapa del proceso." },
  { id: "pocos-ejemplares", question: "¿Puedo imprimir pocos ejemplares?", answer: "Sí. Podemos realizar tirajes cortos desde un ejemplar. Esto permite comenzar con una pequeña cantidad de libros para presentaciones o pruebas y reimprimir posteriormente si es necesario." },
  { id: "isbn", question: "¿Ustedes realizan el trámite de ISBN?", answer: "Sí. Podemos encargarnos de la gestión del ISBN y de otros trámites como el DOI, necesarios para la publicación de tu obra." },
  { id: "otra-ciudad", question: "¿Puedo publicar aunque viva en otra ciudad o país?", answer: "Sí. Podemos trabajar a distancia mediante videollamadas, correo y plataformas compartidas, manteniendo seguimiento constante durante todo el proyecto. Los libros impresos se envían mediante paquetería a la ciudad que se requiera." },
  { id: "formatos-impresion", question: "¿Qué formatos de impresión manejan?", answer: "Trabajamos distintos tamaños y acabados: pasta blanda, pasta dura, impresión a color o blanco y negro, diferentes tipos de papel y encuadernación, según las necesidades de cada libro." },
  { id: "proceso-pago", question: "¿Cómo es el proceso de pago?", answer: "Generalmente trabajamos con anticipos y pagos por etapas, dependiendo del tipo de proyecto. Antes de comenzar, compartimos una cotización detallada con los costos, esquema de pagos y tiempos claramente establecidos." },
  { id: "servicios-sueltos", question: "¿Puedo solicitar solo algunos servicios y no el proceso completo?", answer: "Claro. Puedes contratar únicamente los servicios que necesites, ya sea corrección, diseño, impresión, trámite de ISBN, publicación digital u otros procesos específicos." },
];