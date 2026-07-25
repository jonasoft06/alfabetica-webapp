// src/components/layout/typekit-stylesheet.tsx
"use client";

import { useEffect } from "react";

export function TypekitStylesheet() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/tgi4woy.css";
    document.head.appendChild(link);
  }, []);

  return null;
}