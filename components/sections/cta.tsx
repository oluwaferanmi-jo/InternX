// components/sections/CTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function CTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-14 sm:py-14 md:py-14">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Enhanced text with social proof */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 mb-6"
            >
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">
                Join 4,000+ aspiring tech professionals
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Want to build real projects and {" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                land real jobs?
              </span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="hidden lg:block mt-6 text-base text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Stop watching tutorials. Start shipping production-grade apps with mentor guidance, 
              peer collaboration, and a portfolio that makes recruiters reach out to you.
            </motion.p>

            {/* Stats row */}
            <motion.div 
              variants={itemVariants}
              className="hidden mt-8 md:flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-400">4,000+ learners</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-slate-400">10+ hiring partners</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-400">85% job placement</span>
              </motion.div>
            </motion.div>

            {/* CTAs */}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary - full width on mobile, auto on md+ */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto">
              <Link
                href="/signup"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Enroll For Free
              </Link>
            </motion.div>

            {/* Secondary - full width on mobile, auto on md+ */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto">
              <Link
                href="#tracks"
                className="w-full md:w-auto inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Explore Tracks
              </Link>
            </motion.div>
          </motion.div>

                      <motion.p 
              variants={itemVariants}
              className="hidden lg:block mt-6 text-sm text-slate-500"
            >
              No credit card required • Start immediately • Cancel anytime
            </motion.p>
          </motion.div>

          {/* Right: Enhanced visual with floating elements */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main image container with glow */}
              <div className="relative w-[280px] sm:w-[380px] md:w-[450px] lg:w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl" />
                
                <Image
                  src="/cta2.svg"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}