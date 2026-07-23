export type NavLink = {
  label: string;
  href: string;
  circle: string;
  enabled: boolean;
};

export const navLinks: NavLink[] = [
  { label: "nosotros", href: "/#nosotros", circle: "/svg/home/hero/circle-us.svg", enabled: true },
  { label: "servicios", href: "/#servicios", circle: "/svg/home/hero/circle-services.svg", enabled: true },
  { label: "proyectos", href: "/#proyectos", circle: "/svg/home/hero/circle-projects.svg", enabled: true },
  { label: "libros", href: "/#libros", circle: "/svg/home/hero/circle-books.svg", enabled: true },
  { label: "contacto", href: "/#contacto", circle: "/svg/home/hero/circle-contact.svg", enabled: true },
];

export const enabledNavLinks = navLinks.filter((link) => link.enabled);

export const quoteLink = {
  label: "cotizador",
  href: "/cotizador",
} as const;