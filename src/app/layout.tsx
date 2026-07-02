import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/hero/navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Respaldo temporal de IvyPresto Display hasta integrar Adobe Fonts.
// Cuando llegue el kit de Adobe, se reemplaza esta fuente y todos los
// títulos se actualizan automáticamente vía --font-heading.
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfabética — Armamos tu libro de pies a cabeza",
  description:
    "Consultoría editorial integral. Apoyamos a autores, editoriales, empresas e instituciones en la creación de sus publicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}