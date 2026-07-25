import type { ReactNode, MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type StarButtonBaseProps = {
  shapeSrc: string;
  arrowSrc: string;
  children: ReactNode;
  shapeClassName?: string;
  labelClassName?: string;
  className?: string;
};

type StarButtonAsLink = StarButtonBaseProps & {
  href: string;
  onClick?: never;
};

type StarButtonAsButton = StarButtonBaseProps & {
  href?: never;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type StarButtonProps = StarButtonAsLink | StarButtonAsButton;

function StarButtonContent({
  shapeSrc,
  arrowSrc,
  children,
  shapeClassName,
  labelClassName,
}: Pick<StarButtonBaseProps,
  "shapeSrc" | "arrowSrc" | "children" | "shapeClassName" | "labelClassName"
>) {
  return (
    <>
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
    </>
  );
}

export function StarButton(props: StarButtonProps) {
  const { shapeSrc, arrowSrc, children, shapeClassName, labelClassName, className } = props;
  const sharedClassName = cn(
    "group relative flex items-center justify-center",
    className
  );

  if ("onClick" in props && props.onClick) {
    return (
      <button type="button" onClick={props.onClick} className={sharedClassName}>
        <StarButtonContent
          shapeSrc={shapeSrc}
          arrowSrc={arrowSrc}
          shapeClassName={shapeClassName}
          labelClassName={labelClassName}
        >
          {children}
        </StarButtonContent>
      </button>
    );
  }

  return (
    <Link href={props.href} className={sharedClassName}>
      <StarButtonContent
        shapeSrc={shapeSrc}
        arrowSrc={arrowSrc}
        shapeClassName={shapeClassName}
        labelClassName={labelClassName}
      >
        {children}
      </StarButtonContent>
    </Link>
  );
}