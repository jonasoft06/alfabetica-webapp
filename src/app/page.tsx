import Hero from "@/components/home/hero/hero";
import Consulting from "@/components/home/consulting/consulting";
import SolutionsMarquee from "@/components/marquee/solutions-marquee";
import Evidence from "@/components/home/evidence/evidence";
import PublishMarquee from "@/components/marquee/publish-marquee";
import HowWeWork from "@/components/home/how-we-work/how-we-work";
import SizesMarquee from "@/components/marquee/sizes-marquee";


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
    </>
  );
}