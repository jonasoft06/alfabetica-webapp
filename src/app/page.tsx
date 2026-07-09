import Hero from "@/components/home/hero/hero";
import Consulting from "@/components/home/consulting/consulting";
import SolutionsMarquee from "@/components/marquee/solutions-marquee";
import Evidence from "@/components/home/evidence/evidence";
import PublishMarquee from "@/components/marquee/publish-marquee";
import HowWeWork from "@/components/home/how-we-work/how-we-work";
import SizesMarquee from "@/components/marquee/sizes-marquee";
import ClientsTypes from "@/components/home/clients-types/clients-types";
import Whitepaper from "@/components/home/clients-types/whitepaper";
import FaqMarquee from "@/components/marquee/faq-marquee";
import { FaqSection } from "@/components/home/faq/faq-section";
import { ScheduleCallSection } from "@/components/home/schedule-call/schedule-call-section";
import { ClientsSection } from "@/components/home/clients/clients-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Consulting />
      <SolutionsMarquee />
      <Evidence />
      <PublishMarquee />
      <HowWeWork />
      <SizesMarquee />
      <ClientsTypes />
      <Whitepaper />
      <FaqMarquee />
      <FaqSection />
      <ScheduleCallSection />
      <ClientsSection />
    </>
  );
}