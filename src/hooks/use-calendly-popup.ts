"use client";

import { useCallback, useEffect, useRef } from "react";

import { CALENDLY_URL } from "@/lib/config/site-config";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

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
    if (!window.Calendly) {
      console.warn("Calendly aún no está listo, reintentando en 300ms...");
      window.setTimeout(() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }), 300);
      return;
    }

    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }, []);

  return { openPopup };
}