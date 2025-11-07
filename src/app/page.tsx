import Hero from "@/components/home/Hero";
import FeaturedLodges from "@/components/home/FeaturedLodges";
import Experience from "@/components/home/Experience";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedLodges />
      <Experience />
      <Stats />
      <Testimonials />
    </>
  );
}