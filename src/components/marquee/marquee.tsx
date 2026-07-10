import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden py-2", className)}>
      <div className="animate-marquee flex w-max items-center">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}