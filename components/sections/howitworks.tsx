"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rocket, Users2, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type Step = {
  k: string;
  title: string;
  desc: string;
  img?: string;
  fallbackIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    k: "apply",
    title: "Apply & Join the Cohort",
    desc:
      "Complete a short application, pick your track, and join a peer group. No endless forms — get in and get started.",
    img: "/apply.svg",
    fallbackIcon: ClipboardCheck,
  },
  {
    k: "build",
    title: "Learn, Build & Collaborate",
    desc:
      "Weekly sprints, mentor guidance, and real projects. Premium members get code/design reviews and 1-on-1 feedback.",
    img: "/build.svg",
    fallbackIcon: Users2,
  },
  {
    k: "launch",
    title: "Showcase & Launch",
    desc:
      "Ship a portfolio project and present at Demo Day. Get discovered by hiring partners and kickstart your career.",
    img: "/network.svg",
    fallbackIcon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-black via-slate-950 to-slate-800

        text-foreground
      "
    >
      {/* Decorative: faint grid */}
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

      {/* Decorative: cyan arc */}
      <div
        aria-hidden
        className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:py-0 ">
      
        {/* Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How <span className="text-primary">InternX</span> Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            A simple, proven path: apply, learn with mentors, and launch with a
            portfolio that gets you hired.
          </p>
        </header>

        {/* Steps grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <article
              key={s.k}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              {/* Step badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Step {i + 1}
              </div>

              {/* Image or icon */}
              <div className="relative mb-5 h-32 w-full">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 320px, 100vw"
                    priority={i === 0}
                  />
                ) : (
                  <s.fallbackIcon className="h-24 w-24 text-primary/80" />
                )}
              </div>

              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {s.desc}
              </p>

              {/* subtle hover underline */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/signup">
              Join Cohort <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
