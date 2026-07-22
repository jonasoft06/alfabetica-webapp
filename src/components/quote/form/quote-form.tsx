// src/components/quote/form/quote-form.tsx
"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

import { Button } from "@/components/ui/button";

import { quoteSchema, type QuoteFormValues } from "./schema";
import {
  tipoPublicacionOptions,
  tipoPapelOptions,
  tamanoOptions,
  ejemplaresOptions,
  maquetacionOptions,
  disenoPortadaOptions,
  cubiertaOptions,
  tramitesOptions
} from "./form-options";
import { RadioField } from "./radio-field";
import { TextField } from "./text-field";
import { HelpHoverCard } from "./help-hovercard";
import { QuoteSuccess } from "./quote-success";

export default function QuoteForm() {
  const form = useForm<QuoteFormValues>({
    resolver: standardSchemaResolver(quoteSchema),
    defaultValues: {
      tipoPublicacion: undefined,
      numeroPaginas: "",
      tamano: undefined,
      ejemplares: undefined,
      maquetacion: undefined,
      disenoPortada: undefined,
      detalles: "",
      nombre: "",
      correo: "",
      telefono: "",
      ciudad: "",
    },
  });

  function onSubmit(values: QuoteFormValues) {
    // Fase 8: aquí irá el POST al Route Handler.
    console.log(values);
  }

  return (
    <section className="bg-alf-crema px-6 py-12 lg:py-16">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex max-w-3xl flex-col gap-10"
      >
        <RadioField
          control={form.control}
          name="tipoPublicacion"
          legend="1. Tipo de publicación:"
          options={tipoPublicacionOptions}
          conditionalText={{
            triggerValue: "otro",
            name: "tipoPublicacionOtro",
            label: "Especifica el tipo de publicación",
            placeholder: "*Introduce el tipo de publicación*",
          }}
        />

        <TextField
          control={form.control}
          name="numeroPaginas"
          label="2. Número de páginas estimadas:"
          placeholder="*Introduce el número de páginas estimadas*"
        />

        <RadioField
          control={form.control}
          name="tamano"
          legend="3. Tamaño del libro:"
          options={tamanoOptions}
        />

        <RadioField
          control={form.control}
          name="ejemplares"
          legend="4. Número de ejemplares:"
          options={ejemplaresOptions}
        />

        <RadioField
          control={form.control}
          name="maquetacion"
          legend="5. Maquetación:"
          options={maquetacionOptions}
        />

        <RadioField
          control={form.control}
          name="disenoPortada"
          legend="6. Diseño de portada:"
          options={disenoPortadaOptions}
        />

        <RadioField
          control={form.control}
          name="tipoPapel"
          legend={
            <span className="inline-flex items-center gap-1.5">
              7. Tipo de papel:
              <HelpHoverCard>
                <p className="font-semibold">Sobre el tipo de papel:</p>
                <p>
                  El tipo y gramaje del papel influyen tanto en la apariencia del
                  libro como en su costo de impresión.
                </p>
                <p>
                  <strong>El papel Bond</strong> ofrece un acabado blanco y nítido,
                  ideal para textos e imágenes de alto contraste, mientras que el{" "}
                  <strong>papel Cultural</strong> tiene un tono ahuesado que reduce
                  el reflejo y brinda una experiencia de lectura más cómoda.
                </p>
                <p>
                  Además, un gramaje de 90 g proporciona mayor grosor y rigidez que
                  uno de 75 g. La cotización se realiza{" "}
                  <strong>según el tipo y peso de papel que elijas</strong>.
                </p>
              </HelpHoverCard>
            </span>
          }
          options={tipoPapelOptions}
          conditionalText={{
            triggerValue: "otro",
            name: "tipoPapelOtro",
            label: "Especifica el tipo de papel",
            placeholder: "*Introduce el tipo de papel que quisieras cotizar*",
          }}
        />

        <RadioField
          control={form.control}
          name="cubierta"
          legend="8. Tipo de cubierta:"
          options={cubiertaOptions}
          illustrations={{
            "rustica-solapas": "/svg/quote/form/illustration-with.svg",
            "rustica-sin-solapas": "/svg/quote/form/illustration-without.svg",
            "pasta-dura": "/svg/quote/form/illustration-hard.svg",
          }}
        />

        <RadioField
          control={form.control}
          name="tramites"
          legend={
            <span className="inline-flex items-center gap-1.5">
              9. Trámites:
              <HelpHoverCard>
                <p className="font-semibold">Sobre los trámites:</p>
                <p>
                  <strong>El ISBN</strong> identifica tu libro como una publicación
                  oficial y es indispensable para su venta y distribución en
                  librerías y plataformas.
                </p>
                <p>
                  <strong>El DOI</strong> es un identificador permanente recomendado
                  para publicaciones académicas o de investigación que requieren ser
                  citadas y localizadas fácilmente en línea.
                </p>
                <p>
                  Si tu obra tiene fines comerciales, el ISBN suele ser suficiente;
                  si además tendrá un enfoque académico o científico,{" "}
                  <strong>puede ser conveniente solicitar ambos</strong>.
                </p>
              </HelpHoverCard>
            </span>
          }
          options={tramitesOptions}
        />

        <TextField
          control={form.control}
          name="detalles"
          label="10. Comparte más detalles que consideres importantes:"
          placeholder="*Introduce los detalles de tu publicación*"
          as="textarea"
        />

        <div className="flex flex-col gap-6">
          <TextField
            control={form.control}
            name="nombre"
            label="Nombre/Empresa:"
            placeholder="*Introduce tu nombre o empresa*"
          />
          <TextField
            control={form.control}
            name="correo"
            label="Correo electrónico:"
            placeholder="*Introduce tu correo electrónico*"
            type="email"
          />
          <TextField
            control={form.control}
            name="telefono"
            label="Teléfono:"
            placeholder="*Introduce tu número telefónico*"
            type="tel"
          />
          <TextField
            control={form.control}
            name="ciudad"
            label="Ciudad:"
            placeholder="*Introduce la ciudad*"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image
            src="/svg/quote/form/illustration-form.svg"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="h-30 lg:h-40 w-full"
          />
          <Button
            type="submit"
            className="bg-alf-tangerine tracking-widest px-8 py-6 text-lg text-alf-near-white transition-colors hover:bg-transparent hover:text-alf-eerie-black hover:outline-solid hover:outline-2 hover:outline-alf-tangerine cursor-pointer"
          >
            Enviar formulario
          </Button>
        </div>
      </form>

      {true && <QuoteSuccess />}
    </section>
  );
}