// src/components/quote/form/help-hovercard.tsx
"use client";

import { useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type HelpHoverProps = {
  children: React.ReactNode;
};

export function HelpHoverCard({ children }: HelpHoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <HoverCard open={open} onOpenChange={setOpen} openDelay={100} closeDelay={150}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center"
          aria-label="Más información"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onClick={() => setOpen(true)}
        >
          <img
            src="/svg/quote/form/icon-more-info.svg"
            alt=""
            className="h-4 w-4"
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="start"
        sideOffset={8}
        className="m-3 p-2 w-80 space-y-3 bg-alf-near-white/70 text-sm text-alf-eerie-black italic backdrop-blur-sm"
      >
        {children}
      </HoverCardContent>
    </HoverCard>
  );
}