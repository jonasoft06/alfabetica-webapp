"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export function SmoothScrollLink({
  href,
  children,
  className,
  ...props
}: SmoothScrollLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const [path, hash] = href.toString().split("#");
    const isHomeAnchor = hash && (path === "" || path === "/");

    if (isHomeAnchor && pathname === "/") {
      event.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${hash}`);
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}