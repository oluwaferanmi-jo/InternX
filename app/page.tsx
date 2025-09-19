// src/app/page.tsx
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howitworks";
import DividerArt from "@/components/sections/DividerArt";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DividerArt/>
      <HowItWorks/>
    </main>
  );
}
