"use client";

import { useState } from "react";
import Image from "next/image";

export default function DownloadBlock() {
  const [email, setEmail] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleDownload = () => {
    if (!isValidEmail) return;
    // Por ahora sin envío real; se implementará con el backend.
    console.log("Descargar whitepaper para:", email);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Estrella = botón. Clickeable solo si el correo es válido. */}
      <button
        type="button"
        onClick={handleDownload}
        disabled={!isValidEmail}
        className="group relative flex items-center justify-center disabled:cursor-not-allowed enabled:cursor-pointer enabled:transition-transform enabled:hover:scale-105"
        aria-label="Descargar whitepaper"
      >
        <Image
          src="/svg/home/clients-types/button-clients.svg"
          alt=""
          width={280}
          height={280}
          className="h-auto w-56 max-w-none animate-slow-spin xl:w-64"
        />
        <div className="absolute flex flex-col items-center gap-2 text-center">
          <span className="text-lg text-alf-eerie-black xl:text-xl">
            Descarga
            <br />
            nuestro
            <br />
            <strong className="font-bold">Whitepaper</strong>
          </span>
          <Image
            src="/svg/home/clients-types/arrow-clients.svg"
            alt=""
            width={24}
            height={40}
            className="max-w-none"
          />
        </div>
      </button>

      {/* Campo de correo */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="*Introduce tu correo para descargar"
        className="w-72 rounded-full border-2 border-alf-tangerine bg-transparent px-5 py-2 text-center text-sm text-alf-tangerine placeholder:text-alf-tangerine focus:outline-none focus:ring-2 focus:ring-alf-tangerine xl:w-80"
      />
    </div>
  );
}