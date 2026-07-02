// src/components/home/hero/navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { label: "nosotros", href: "/nosotros", circle: "/svg/home/hero/circle-us.svg" },
  { label: "servicios", href: "/servicios", circle: "/svg/home/hero/circle-services.svg" },
  { label: "proyectos", href: "/proyectos", circle: "/svg/home/hero/circle-projects.svg" },
  { label: "libros", href: "/libros", circle: "/svg/home/hero/circle-books.svg" },
  { label: "contacto", href: "/contacto", circle: "/svg/home/hero/circle-contact.svg" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-alf-crema">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 xl:py-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/svg/home/hero/logo_alfabetica.svg"
            alt="Alfabética"
            width={150}
            height={32}
            priority
            className="h-auto w-[150px] xl:w-[210px]"
          />
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-alf-eerie-black xl:text-lg"
            >
              {item.label}
              {/* Círculo dibujado que aparece en hover */}
              <Image
                src={item.circle}
                alt=""
                fill
                className="pointer-events-none scale-135 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>
          ))}

          {/* Botón cotizador: relleno por defecto */}
          <Link
            href="/cotizador"
            className="rounded-full bg-alf-tangerine px-5 py-2 text-sm font-medium text-alf-near-white transition-colors hover:bg-transparent hover:text-alf-eerie-black hover:outline-2 hover:outline-alf-tangerine xl:px-7 xl:py-3 xl:text-lg"
          >
            cotizador
          </Link>
        </div>

        {/* Botón hamburguesa (solo móvil, todavía no abre nada) */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="size-7 text-alf-eerie-black" />
        </button>
      </nav>
    </header>
  );
}