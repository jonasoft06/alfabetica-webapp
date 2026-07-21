import QuoteHero from "@/components/quote/hero/quote-hero";
import FormIntro from "@/components/quote/form-intro/form-intro";
import QuoteForm from "@/components/quote/form/quote-form";
import PublishMarquee from "@/components/marquee/publish-marquee";
import ProjectDiscovery from "@/components/quote/project-discovery/project-discovery";

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