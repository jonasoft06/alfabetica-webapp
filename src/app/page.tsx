import Hero from "@/components/home/hero/hero";
import Consultoria from "@/components/home/consultoria";
import BandaSoluciones from "@/components/home/banda-soluciones";

export default function Home() {
  return (
    <>
      <Hero />
      <Consultoria />
      <BandaSoluciones />
      <div className="h-screen" />
    </>
  );
}