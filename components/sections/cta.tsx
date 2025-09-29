// components/sections/CTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white rounded-t-3xl"
      aria-label="Call to action — join InternX"
    >
      {/* Animated grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center",
          maskImage: "radial-gradient(65% 65% at 50% 40%, black, transparent)",
        }}
      />

      {/* Dynamic gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full blur-3xl opacity-25"
        style={{
          background: "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,0.5), rgba(139,92,246,0.3), transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-12 md:py-12">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Enhanced text with social proof */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 mb-6">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Join 4,000+ aspiring tech professionals
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Build real projects.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Land real jobs.
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Stop watching tutorials. Start shipping production-grade apps with mentor guidance, 
              peer collaboration, and a portfolio that makes recruiters reach out to <em>you</em>.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-400">4,000+ learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-slate-400">10+ hiring partners</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-400">85% job placement</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <Link href="/signup">
                  Enroll For Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

             
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No credit card required • Start immediately • Cancel anytime
            </p>
          </div>

          {/* Right: Enhanced visual with floating elements */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main image container with glow */}
              <div className="relative w-[300px] sm:w-[400px] md:w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl" />
                
                <Image
                  src="/man.svg"
                  alt="Student working on InternX project"
                  width={480}
                  height={480}
                  className="relative z-10 object-cover w-full h-full rounded-3xl"
                  priority
                />

                {/* Inner shadow */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{
                    boxShadow: "inset 0 -40px 100px rgba(2,6,23,0.6)",
                  }}
                />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl px-5 py-3 shadow-xl">
                <div className="text-2xl font-bold text-cyan-400">12 weeks</div>
                <div className="text-xs text-slate-400">to portfolio ready</div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-5 py-3 shadow-xl z-20">
                <div className="text-2xl font-bold text-purple-400">10-15hrs</div>
                <div className="text-xs text-slate-400">per week</div>
              </div>

              {/* Pulsing ring */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}