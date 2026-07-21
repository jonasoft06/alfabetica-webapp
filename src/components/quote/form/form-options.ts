// src/components/quote/form/form-options.ts
import type {
  TipoPublicacion, Tamano, Ejemplares, Maquetacion,
  DisenoPortada, TipoPapel, Cubierta, Tramites,
} from "./schema";

/** Opción de radio: `value` es el slug estable; `label` es lo que ve el usuario. */
export type Option<T extends string> = {
  value: T;
  label: string;
};

export const tipoPublicacionOptions: Option<TipoPublicacion>[] = [
  { value: "literatura", label: "Literatura" },
  { value: "academica", label: "Académica" },
  { value: "informe", label: "Informe" },
  { value: "libro-album", label: "Libro álbum" },
  { value: "libro-conmemorativo", label: "Libro conmemorativo" },
  { value: "otro", label: "Otro ¿cuál?" },
];

export const tamanoOptions: Option<Tamano>[] = [
  { value: "media-carta", label: "Media Carta (14x21cm)" },
  { value: "medio-oficio", label: "Medio Oficio (16x22.5cm)" },
];

export const ejemplaresOptions: Option<Ejemplares>[] = [
  { value: "50", label: "50" },
  { value: "100", label: "100" },
  { value: "300", label: "300" },
  { value: "500", label: "500" },
];

export const maquetacionOptions: Option<Maquetacion>[] = [
  { value: "con-imagenes", label: "Mi libro tiene imágenes" },
  { value: "solo-texto", label: "Mi libro sólo es texto" },
];

export const disenoPortadaOptions: Option<DisenoPortada>[] = [
  { value: "imagen-propia", label: "Ya tengo imagen para portada" },
  { value: "diseno-cero", label: "Diseño de cero" },
];

export const tipoPapelOptions: Option<TipoPapel>[] = [
  { value: "bond-90", label: "Bond de 90 g" },
  { value: "bond-75", label: "Bond de 75 g" },
  { value: "cultural-90", label: "Cultural de 90 g" },
  { value: "cultural-75", label: "Cultural de 75 g" },
  { value: "otro", label: "Otro tipo de papel ¿cuál?" },
];

export const cubiertaOptions: Option<Cubierta>[] = [
  { value: "rustica-solapas", label: "Rústica con solapas" },
  { value: "rustica-sin-solapas", label: "Rústica sin solapas" },
  { value: "pasta-dura", label: "Pasta dura" },
];

export const tramitesOptions: Option<Tramites>[] = [
  { value: "isbn", label: "ISBN" },
  { value: "doi", label: "DOI" },
  { value: "ambos", label: "Ambos" },
];