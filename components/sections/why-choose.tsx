"use client";

import { Trophy, Briefcase, Users, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Feature = {
  k: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const FEATURES: Feature[] = [
  {
    k: "projects",
    title: "Real-World Projects",
    desc:
      "Ship apps, dashboards, and design systems that recruiters can open and assess—not just tutorials.",
    icon: Briefcase,
  },
  {
    k: "competitive",
    title: "Competitive Environment",
    desc:
      "Weekly challenges, rankings, and peer reviews keep you sharp and accountable while you build.",
    icon: Trophy,
  },
  {
    k: "mentors",
    title: "Mentor Feedback",
    desc:
      "Get code/design reviews and career guidance from industry mentors so you improve fast.",
    icon: Users,
  },
  {
    k: "outcomes",
    title: "Career Outcomes",
    desc:
      "Graduate with a portfolio and Demo Day pitch that help you stand out and get hired.",
    icon: Target,
  },
];

export default function WhyChoose() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-slate-950 via-black to-slate-900
        text-foreground
        border-y border-white/5
      "
    >
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
                   [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="mb-10 sm:mb-14 text-center">
         <h2 className="text-3xl font-bold sm:text-4xl leading-tight">
            Why signing up for{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                InternX
            </span>{" "}
            can be a{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                Game-Changer
            </span>
            .
            </h2>

          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            A program designed to help you learn fast, build serious work, and
            prove you can deliver.
          </p>
        </header>

        {/* features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
           <article
  key={f.k}
  style={{ animationDelay: `${i * 120}ms` }}
  className="
    group relative rounded-2xl
    border border-white/10 bg-white/5 p-6
    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
    will-change-transform
    animate-[cardIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]
    transition-transform hover:-translate-y-1.5
    text-center sm:text-left
  "
>
  {/* Icon wrapper */}
  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 sm:mx-0">
    <f.icon className="h-6 w-6 text-primary" />
  </div>

  <h3 className="text-base font-semibold">{f.title}</h3>
  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
    {f.desc}
  </p>

  {/* underline on hover */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 transition-transform duration-300 group-hover:scale-x-100" />
</article>

          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/signup">Start your InternX journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
