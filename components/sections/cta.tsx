// components/sections/CTA.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white rounded-t-3xl"
      aria-label="Call to action — join InternX"
    >
      {/* Light-weight grid background (reduced opacity, no heavy mask) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle orbs (reduced blur to lighten cost) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-0 h-[420px] w-[420px] rounded-full"
        style={{
          filter: "blur(32px)",
          opacity: 0.18,
          background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 bottom-0 h-[520px] w-[520px] rounded-full"
        style={{
          filter: "blur(36px)",
          opacity: 0.2,
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,0.45), rgba(139,92,246,0.28), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-8 md:py-14">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="hidden md:inline-flex items-center gap-2 rounded-full bg-cyan-500/8 border border-cyan-500/10 px-4 py-1.5 mb-6">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">Join 4,000+ aspiring tech professionals</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Want to build real projects and{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                land real jobs?
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="hidden lg:block mt-5 text-base text-slate-300 max-w-xl lg:mx-0">
              Stop watching tutorials. Start shipping production-grade apps with mentor guidance, peer collaboration, and a portfolio that makes recruiters reach out to you.
            </motion.p>

            {/* Stats row (static icons; minimal animation) */}
            <div className="hidden md:flex mt-8 flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-cyan-400" />
                <span>4,000+ learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-400" />
                <span>10+ hiring partners</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span>85% job placement</span>
              </div>
            </div>

            {/* CTAs */}
       
            {/* CTAs */}
            <div className="mt-8 flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium
                          shadow-[0_0_0_1px_rgba(6,182,212,.35)_inset,0_8px_30px_rgba(6,182,212,.2)]
                          bg-white text-black hover:bg-primary/90
                          transition-transform motion-safe:duration-200
                          hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              >
                Enroll For Free
              </Link>

              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-medium
                          text-foreground/80 hover:bg-white/5
                          transition-colors transition-transform motion-safe:duration-200
                          hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              >
                View Tracks
              </Link>
            </div>


      

            <p className="hidden lg:block mt-6 text-sm text-slate-500">No credit card required • Start immediately • Cancel anytime</p>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative" style={{ transform: "translateZ(0)" }}>
              <div className="relative w-[280px] sm:w-[380px] md:w-[420px] lg:w-[480px] rounded-2xl overflow-hidden shadow-xl">
                {/* static subtle gradient overlay (no heavy inset shadow) */}
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.55))" }} />

                {/* Use <img> for local SVG to avoid loader overhead. Remove priority to avoid eager decode on slow clients */}
                <img
                  src="/cta2.svg"
                  alt="Student working on InternX project"
                  width={480}
                  height={480}
                  loading="lazy"
                  className="relative z-10 object-cover w-full h-full rounded-2xl"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </motion.div>
        </div>s
      </div>
    </section>
  );
}
