import { Resend } from "resend";
import { NextResponse } from "next/server";

import { quoteSchema } from "@/components/quote/form/schema";
import {
  tipoPublicacionOptions,
  tamanoOptions,
  ejemplaresOptions,
  maquetacionOptions,
  disenoPortadaOptions,
  tipoPapelOptions,
  cubiertaOptions,
  tramitesOptions,
} from "@/components/quote/form/form-options";
import { getLabel } from "@/lib/quote-labels";
import QuoteNotificationEmail from "@/emails/quote-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // "otro" muestra el texto libre que escribió la persona, en vez del label genérico.
  const tipoPublicacionLabel =
    data.tipoPublicacion === "otro"
      ? `Otro: ${data.tipoPublicacionOtro}`
      : getLabel(tipoPublicacionOptions, data.tipoPublicacion);

  const tipoPapelLabel =
    data.tipoPapel === "otro"
      ? `Otro: ${data.tipoPapelOtro}`
      : getLabel(tipoPapelOptions, data.tipoPapel);

  try {
    await resend.emails.send({
      from: "Cotizador Alfabética <cotizador@alfabetica.com.mx>",
      to: "contacto@alfabetica.com.mx",
      replyTo: data.correo,
      subject: `Nueva cotización de ${data.nombre}`,
      react: QuoteNotificationEmail({
        tipoPublicacion: tipoPublicacionLabel,
        numeroPaginas: data.numeroPaginas,
        tamano: getLabel(tamanoOptions, data.tamano),
        ejemplares: getLabel(ejemplaresOptions, data.ejemplares),
        maquetacion: getLabel(maquetacionOptions, data.maquetacion),
        disenoPortada: getLabel(disenoPortadaOptions, data.disenoPortada),
        tipoPapel: tipoPapelLabel,
        cubierta: getLabel(cubiertaOptions, data.cubierta),
        tramites: getLabel(tramitesOptions, data.tramites),
        detalles: data.detalles,
        nombre: data.nombre,
        correo: data.correo,
        telefono: data.telefono,
        ciudad: data.ciudad,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo de cotización:", error);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud. Intenta de nuevo." },
      { status: 500 }
    );
  }
}