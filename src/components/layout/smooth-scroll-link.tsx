"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  scrollDelayMs?: number;
};

export function scrollToSection(hash: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(hash);
  if (!target) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;

  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: targetTop - headerHeight,
    behavior,
  });

  window.history.pushState(null, "", `#${hash}`);
}

export function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
  scrollDelayMs = 0,
  ...props
}: SmoothScrollLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const [path, hash] = href.toString().split("#");
    const isHomeAnchor = hash && (path === "" || path === "/");

    if (isHomeAnchor && pathname === "/") {
      event.preventDefault();
      onClick?.(event);

      if (scrollDelayMs > 0) {
        window.setTimeout(() => scrollToSection(hash), scrollDelayMs);
      } else {
        scrollToSection(hash);
      }
      return;
    }

    onClick?.(event);
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}