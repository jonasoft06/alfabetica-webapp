import type { Metadata } from "next";
import QuoteHero from "@/components/quote/hero/quote-hero";
import FormIntro from "@/components/quote/form-intro/form-intro";
import QuoteForm from "@/components/quote/form/quote-form";
import PublishMarquee from "@/components/marquee/publish-marquee";
import ProjectDiscovery from "@/components/quote/project-discovery/project-discovery";

export const metadata: Metadata = {
  title: "Cotizador",
  description:
    "Solicita una propuesta personalizada para tu proyecto editorial. Cuéntanos los detalles de tu publicación y te ayudamos a encontrar la mejor solución.",
};

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <FormIntro />
      <QuoteForm />
      <PublishMarquee />
      <ProjectDiscovery />
    </>
  );
}