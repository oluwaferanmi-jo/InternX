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
      {/* Decorative grid */}
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

      {/* Decorative glow */}
      <div
        aria-hidden
        className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-20">
        {/* Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want to learn how{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              InternX
            </span>{" "}
            works?
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
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-colors hover:border-purple-300 hover:bg-purple-50"
            >
              {/* Step badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-600">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
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
                  <s.fallbackIcon className="h-24 w-24 text-purple-500" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-black">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

       {/* CTA */}
<div className="mt-12 flex justify-center">
  <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/80">
    <Link href="/signup">
      Join Cohort <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</div>

      </div>
    </section>
  );
}
