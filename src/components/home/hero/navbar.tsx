// src/components/home/hero/navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { label: "nosotros", href: "/nosotros" },
  { label: "servicios", href: "/servicios" },
  { label: "proyectos", href: "/proyectos" },
  { label: "libros", href: "/libros" },
  { label: "contacto", href: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-alf-crema">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/svg/hero/logo_alfabetica.svg"
            alt="Alfabética"
            width={150}
            height={32}
            priority
          />
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-alf-eerie-black transition-colors hover:text-alf-turquoise"
            >
              {item.label}
            </Link>
          ))}

          {/* Botón cotizador: relleno por defecto */}
          <Link
            href="/cotizador"
            className="rounded-full bg-alf-tangerine px-5 py-2 text-sm font-medium text-alf-near-white transition-colors hover:bg-transparent hover:text-alf-tangerine hover:outline hover:outline-2 hover:outline-alf-tangerine"
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