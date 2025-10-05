import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howitworks";
import WhyChoose from "@/components/sections/why-choose";
import Tracks from "@/components/sections/tracks";
import Testimonial from "@/components/sections/testimonials";
import FAQs from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Tracks/>
      <WhyChoose />
      <FAQs/>
      <Testimonial/>
      <CTA/>

      {/* next: Testimonials, Partners, Showcase, Pricing, FAQ, CTA, Footer */}
    </main>
  );
}
