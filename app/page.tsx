// src/app/page.tsx
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howitworks";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
     
      <HowItWorks/>
    </main>
  );
}
