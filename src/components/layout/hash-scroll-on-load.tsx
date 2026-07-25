"use client";

import { useEffect } from "react";

import { scrollToSection } from "./smooth-scroll-link";

export function HashScrollOnLoad() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToSection(hash, "auto");
        });
      });
    });
  }, []);

  return null;
}