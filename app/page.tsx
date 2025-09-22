import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howitworks";
import WhyChoose from "@/components/sections/why-choose";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <WhyChoose />
      {/* next: Testimonials, Partners, Showcase, Pricing, FAQ, CTA, Footer */}
    </main>
  );
}
