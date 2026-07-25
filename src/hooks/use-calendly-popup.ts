"use client";

import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!;

export function useCalendlyPopup() {
  const isReady = useRef(false);

  useEffect(() => {
    if (window.Calendly) {
      isReady.current = true;
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        isReady.current = true;
      });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      isReady.current = true;
    };
    document.body.appendChild(script);
  }, []);

  const openPopup = useCallback(() => {
    if (!CALENDLY_URL) {
      console.error("NEXT_PUBLIC_CALENDLY_URL no está definida.");
      return;
    }

    if (!window.Calendly) {
      console.warn("Calendly aún no está listo, reintentando en 300ms...");
      window.setTimeout(() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }), 300);
      return;
    }

    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }, []);

  return { openPopup };
}