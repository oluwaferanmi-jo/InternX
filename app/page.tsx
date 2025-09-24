import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howitworks";
import WhyChoose from "@/components/sections/why-choose";
import Tracks from "@/components/sections/tracks";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Tracks/>
      {/* next: Testimonials, Partners, Showcase, Pricing, FAQ, CTA, Footer */}
    </main>
  );
}
