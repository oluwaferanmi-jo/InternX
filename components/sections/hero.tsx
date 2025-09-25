"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DividerArt from "@/components/sections/DividerArt";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-slate-900 via-slate-950 to-black
        text-foreground
      "
    >
      {/* background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "center",
        }}
      />

      {/* cyan arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-5 sm:pt-28 sm:pb-28 lg:pb-28">
        {/* top badge */}
        <div className="flex justify-center">
          <div
            className="mx-auto mb-6 inline-flex max-w-[90vw] items-center gap-2
                       rounded-full border border-primary/40 bg-white/5 px-3 py-1
                       text-xs sm:text-sm text-foreground/80 backdrop-blur overflow-hidden"
          >
            {/* left dot */}
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />

            <span className="shrink-0 whitespace-nowrap text-foreground/70">
              InternX Cohort-1
            </span>

            {/* divider */}
            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-white/30" />

          {/* ONE-AT-A-TIME ticker (seamless) */}
          <div className="relative overflow-hidden w-48 sm:w-56">
            <div className="ticker-track flex items-center whitespace-nowrap">
              <span className="ticker-item px-2">Check out the date</span>
              {/* duplicate for seamless loop */}
              <span className="ticker-item px-2" aria-hidden>Check out the date</span>
              
            </div>
          </div>


            {/* divider + Explore */}
            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-white/30" />
            <Link
              href="#features"
              className="shrink-0 whitespace-nowrap rounded-full bg-[#ff5029] px-3 py-1
                         text-foreground/90 hover:bg-primary/20"
            >
              Explore
            </Link>
          </div>
        </div>

        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-6xl">
  Kickstart Your{" "}
  <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
    Tech Career
  </span>{" "}
  with InternX
  <br />
  <span className="text-primary">
    Learn, Build, and{" "}
    <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
      Get Hired.
    </span>
  </span>
</h1>



       <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground/70 sm:text-lg">
  Apply to a proven internship program: learn from mentors, build real-world projects, 
  and graduate with a portfolio that employers can’t ignore.
</p>


        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full px-6 py-5 text-base shadow-[0_0_0_1px_rgba(6,182,212,.35)_inset,0_8px_30px_rgba(6,182,212,.2)] bg-white hover:bg-primary/90"
          >
            <Link href="/signup">Enroll For Free</Link>
          </Button>

          <Link
            href="#demo"
            className="rounded-full border border-white/20 px-6 py-2 text-base text-foreground/80 hover:bg-white/5"
          >
            View Tracks
          </Link>
        </div>

        <div className="mt-3 text-center text-sm text-foreground/50">
          Trusted by 4,000+ learners & 10+ Partners
        </div>

        <DividerArt />

        {/* Mobile: one single scrolling row */}
        <div className="sm:hidden mt-6 mb-10">
          <div className="relative overflow-hidden marquee-mask">
            <div className="marquee-anim flex w-[200%] animate-[marquee-x_18s_linear_infinite]">
              <MarqueeContent />
              <MarqueeContent aria-hidden />
            </div>
          </div>
        </div>

        {/* Tablet/Desktop: normal grid */}
        <div
          className="
            hidden sm:grid mx-auto mt-4 max-w-4xl grid-cols-2 justify-items-center gap-x-2 gap-y-6
            opacity-75 lg:grid-cols-5
          "
        >
          <Track name="Software Engineering" />
          <Track name="Product Design" />
          <Track name="Data Analytics" />
          <Track name="CyberSecurity" />
          <Track name="Quality Assurance" />
        </div>
      </div>
    </section>
  );
}

function MarqueeContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="
        flex min-w-[50%] shrink-0 items-center gap-3 px-2
        whitespace-nowrap
      "
      {...props}
    >
      <Track name="Software Engineering" />
      <Track name="Product Design" />
      <Track name="Data Analytics" />
      <Track name="CyberSecurity" />
      <Track name="Quality Assurance" />
    </div>
  );
}

function Track({ name }: { name: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-foreground/white">
      {name}
    </div>
  );
}
