export type NavLink = {
  label: string;
  href: string;
  circle: string;
  enabled: boolean;
};

export const navLinks: NavLink[] = [
  { label: "nosotros", href: "/nosotros", circle: "/svg/home/hero/circle-us.svg", enabled: false },
  { label: "servicios", href: "/servicios", circle: "/svg/home/hero/circle-services.svg", enabled: false },
  { label: "proyectos", href: "/proyectos", circle: "/svg/home/hero/circle-projects.svg", enabled: false },
  { label: "libros", href: "/libros", circle: "/svg/home/hero/circle-books.svg", enabled: false },
  { label: "contacto", href: "/contacto", circle: "/svg/home/hero/circle-contact.svg", enabled: false },
];

export const enabledNavLinks = navLinks.filter((link) => link.enabled);

/** Siempre visible. Se pinta como botón en el navbar y como enlace en el footer. */
export const quoteLink = {
  label: "cotizador",
  href: "/cotizador",
} as const;