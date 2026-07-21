import { z } from "zod";

export const TIPO_PUBLICACION = ["literatura", "academica", "informe", "libro-album", "libro-conmemorativo", "otro"] as const;
export const TAMANO = ["media-carta", "medio-oficio"] as const;
export const EJEMPLARES = ["50", "100", "300", "500"] as const;
export const MAQUETACION = ["con-imagenes", "solo-texto"] as const;
export const DISENO_PORTADA = ["imagen-propia", "diseno-cero"] as const;
export const TIPO_PAPEL = ["bond-90", "bond-75", "cultural-90", "cultural-75", "otro"] as const;
export const CUBIERTA = ["rustica-solapas", "rustica-sin-solapas", "pasta-dura"] as const;
export const TRAMITES = ["isbn", "doi", "ambos"] as const;

export type TipoPublicacion = (typeof TIPO_PUBLICACION)[number];
export type Tamano = (typeof TAMANO)[number];
export type Ejemplares = (typeof EJEMPLARES)[number];
export type Maquetacion = (typeof MAQUETACION)[number];
export type DisenoPortada = (typeof DISENO_PORTADA)[number];
export type TipoPapel = (typeof TIPO_PAPEL)[number];
export type Cubierta = (typeof CUBIERTA)[number];
export type Tramites = (typeof TRAMITES)[number];

export const quoteSchema = z
  .object({
    // 1. Tipo de publicación (+ "Otro ¿cuál?")
    tipoPublicacion: z.enum(TIPO_PUBLICACION, { error: "Selecciona un tipo de publicación" }),
    tipoPublicacionOtro: z.string().trim().optional(),

    // 2. Número de páginas estimadas
    numeroPaginas: z
      .string()
      .trim()
      .min(1, { error: "Indica el número de páginas estimadas" })
      .regex(/^\d+$/, { error: "Ingresa solo números enteros" }),

    // 3. Tamaño del libro
    tamano: z.enum(TAMANO, { error: "Selecciona el tamaño del libro" }),

    // 4. Número de ejemplares
    ejemplares: z.enum(EJEMPLARES, { error: "Selecciona el número de ejemplares" }),

    // 5. Maquetación
    maquetacion: z.enum(MAQUETACION, { error: "Selecciona una opción de maquetación" }),

    // 6. Diseño de portada
    disenoPortada: z.enum(DISENO_PORTADA, { error: "Selecciona una opción de diseño de portada" }),

    // 7. Tipo de papel (+ "Otro ¿cuál?")
    tipoPapel: z.enum(TIPO_PAPEL, { error: "Selecciona el tipo de papel" }),
    tipoPapelOtro: z.string().trim().optional(),

    // 8. Tipo de cubierta
    cubierta: z.enum(CUBIERTA, { error: "Selecciona el tipo de cubierta" }),

    // 9. Trámites
    tramites: z.enum(TRAMITES, { error: "Selecciona los trámites que necesitas" }),

    // 10. Detalles adicionales (opcional)
    detalles: z.string().trim().optional(),

    // Datos de contacto
    nombre: z.string().trim().min(1, { error: "Indica tu nombre o empresa" }),
    correo: z
      .string()
      .trim()
      .min(1, { error: "Indica tu correo electrónico" })
      .pipe(z.email({ error: "Ingresa un correo electrónico válido" })),
    telefono: z.string().trim().min(1, { error: "Indica tu número telefónico" }),
    ciudad: z.string().trim().min(1, { error: "Indica tu ciudad" }),
  })
  // "Otro ¿cuál?" obligatorio solo cuando se eligió "otro"
  .refine((d) => d.tipoPublicacion !== "otro" || (d.tipoPublicacionOtro?.length ?? 0) > 0, {
    error: "Especifica el tipo de publicación",
    path: ["tipoPublicacionOtro"],
  })
  .refine((d) => d.tipoPapel !== "otro" || (d.tipoPapelOtro?.length ?? 0) > 0, {
    error: "Especifica el tipo de papel",
    path: ["tipoPapelOtro"],
  });

export type QuoteFormValues = z.infer<typeof quoteSchema>;