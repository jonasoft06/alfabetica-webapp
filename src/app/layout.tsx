import type { Metadata } from "next";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { TypekitStylesheet } from "@/components/layout/typekit-stylesheet";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfabetica.com.mx"),
  title: {
    template: "%s | Alfabética",
    default: "Alfabética | Consultoría editorial integral",
  },
  description:
    "Acompañamos a autores, editoriales, empresas e instituciones en todo el proceso de creación de su libro: desde la idea hasta la impresión y distribución digital.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
      </head>
      <body className="flex min-h-dvh flex-col">
        <TypekitStylesheet />
        <OrganizationJsonLd />
        <SiteNavbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}