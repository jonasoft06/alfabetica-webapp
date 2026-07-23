import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { enabledNavLinks, quoteLink } from "./nav-links";
import { SmoothScrollLink } from "@/components/layout/smooth-scroll-link";

const hasMenu = enabledNavLinks.length > 0;

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full shrink-0 bg-alf-crema">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 xl:py-6">
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

        <div className="flex items-center gap-8 xl:gap-12">
          {enabledNavLinks.map((item) => (
            <SmoothScrollLink
              key={item.href}
              href={item.href}
              className="group relative text-sm text-alf-eerie-black xl:text-lg"
            >
              {item.label}
              <Image
                src={item.circle}
                alt=""
                aria-hidden="true"
                fill
                className="pointer-events-none scale-135 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </SmoothScrollLink>
          ))}

          <Link
            href={quoteLink.href}
            className="rounded-xl bg-alf-tangerine px-5 py-1 text-sm font-medium text-alf-near-white transition-colors hover:bg-transparent hover:text-alf-eerie-black hover:outline-2 hover:outline-alf-tangerine xl:px-7 xl:py-1 xl:text-lg"
          >
            {quoteLink.label}
          </Link>

          {hasMenu && (
            <Button type="button" className="lg:hidden" aria-label="Abrir menú">
              <Menu className="size-7 text-alf-eerie-black" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}