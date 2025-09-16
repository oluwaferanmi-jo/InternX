"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-slate-900 via-slate-950 to-black
        text-foreground
      "
    >
      {/* Decorative: faint grid + stars */}
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

      {/* Decorative: cyan arc on the right */}
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-28">
        {/* top badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-white/5 px-3 py-1 text-xs text-primary backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="text-foreground/70">New feature</span>
          <span className="text-foreground/60">Check out the team dashboard</span>
          <Link
            href="#features"
            className="ml-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-foreground/80 hover:bg-primary/20"
          >
            → Explore
          </Link>
        </div>

        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-6xl">
          High-performing remote teams.
          <br />
          <span className="text-primary">The future of work.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground/70 sm:text-lg">
          Powerful, self-serve team engagement tools and analytics. Supercharge your
          managers and keep employees engaged from anywhere.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full px-6 py-5 text-base shadow-[0_0_0_1px_rgba(6,182,212,.35)_inset,0_8px_30px_rgba(6,182,212,.2)] bg-primary hover:bg-primary/90"
          >
            <Link href="/signup">Enroll For Free</Link>
          </Button>

          <Link
            href="#demo"
            className="rounded-full border border-white/20 px-6 py-4 text-base text-foreground/80 hover:bg-white/5"
          >
            Review your CV
          </Link>
        </div>

        {/* trust logos */}
        <div className="mt-10 text-center text-sm text-foreground/50">
          Trusted by 4,000+ companies
        </div>
        <div
          className="
            mx-auto mt-4 grid max-w-4xl grid-cols-2 items-center gap-x-2 gap-y-6
            opacity-75 lg:grid-cols-5
          "
        >
          <Logo name="Software Engineering" />
          <Logo name="Product Design" />
          <Logo name="Data Analytics" />
          <Logo name="CyberSecurity" />
          <Logo name="Quality Assurance" />
        </div>
      </div>
    </section>
  );
}

/** Placeholder logo pill – swap with real SVGs or next/image later */
function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-foreground/70">
        {name}
      </div>
    </div>
  );
}
