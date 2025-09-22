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
        relative -mt-8 sm:-mt-12
        bg-white text-slate-900
        rounded-t-2xl
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 pb-16">
      
        {/* Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want to learn how{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              InternX
            </span>{" "}
            works?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            A simple, proven path: apply, learn with mentors, and launch with a
            portfolio that gets you hired.
          </p>
        </header>

        {/* Steps grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <article
              key={s.k}
              style={{ animationDelay: `${i * 120}ms` }}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900
                p-6 shadow-lg
                will-change-transform
                animate-[cardIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]
                transition-transform
                hover:-translate-y-1.5
              "
            >
              {/* Step badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Step {i + 1}
              </div>

              {/* Image or icon (subtle float) */}
              <div className="relative mb-5 h-32 w-full animate-[float_6s_ease-in-out_infinite]">
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
                  <s.fallbackIcon className="h-24 w-24 text-primary" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>

              {/* purple glow underline on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 transition-transform duration-300 group-hover:scale-x-100" />
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
