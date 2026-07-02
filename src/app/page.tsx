import Hero from "@/components/home/hero/hero";
import Consulting from "@/components/home/consulting/consulting";
import SolutionsMarquee from "@/components/home/solutions-marquee";
import Evidence from "@/components/home/evidence/evidence";


export default function Home() {
  return (
    <>
      <Hero />
      <Consulting />
      <SolutionsMarquee />
      <Evidence />
    </>
  );
}