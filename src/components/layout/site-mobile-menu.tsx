"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SmoothScrollLink } from "./smooth-scroll-link";
import { enabledNavLinks, quoteLink } from "./nav-links";

export function SiteMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button type="button" className="md:hidden" aria-label="Abrir menú">
          <Menu className="size-7 text-alf-eerie-black cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-alf-crema">
        <nav className="mt-12 flex flex-col gap-6 px-4">
          {enabledNavLinks.map((item) => (
            <SmoothScrollLink
              key={item.href}
              href={item.href}
              className="text-lg text-alf-eerie-black"
              onClick={() => setOpen(false)}
              scrollDelayMs={300}
            >
              {item.label}
            </SmoothScrollLink>
          ))}

          <Link
            href={quoteLink.href}
            onClick={() => setOpen(false)}
            className="mt-4 rounded-xl bg-alf-tangerine px-5 py-2 text-center text-lg font-medium text-alf-near-white"
          >
            {quoteLink.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}