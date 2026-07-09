import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type StarButtonProps = {
  href: string;
  shapeSrc: string;
  arrowSrc: string;
  children: ReactNode;
  /** Clases sobre el SVG de la figura: tamaño y animación. */
  shapeClassName?: string;
  /** Clases sobre el texto: color y escala tipográfica. */
  labelClassName?: string;
  className?: string;
};

export function StarButton({
  href,
  shapeSrc,
  arrowSrc,
  children,
  shapeClassName,
  labelClassName,
  className,
}: StarButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center justify-center",
        className
      )}
    >
      <Image
        src={shapeSrc}
        alt=""
        aria-hidden="true"
        width={280}
        height={280}
        className={cn("h-auto max-w-none", shapeClassName)}
      />

      <div className="absolute flex flex-col items-center gap-2 text-center">
        <span className={cn("font-bold", labelClassName)}>{children}</span>

        <Image
          src={arrowSrc}
          alt=""
          aria-hidden="true"
          width={48}
          height={24}
          className="max-w-none"
        />
      </div>
    </Link>
  );
}