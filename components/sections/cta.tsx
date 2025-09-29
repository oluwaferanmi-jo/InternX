// components/sections/CTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className=" text-sm font-medium text-white">
                Join 4,000+ aspiring tech professionals
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Want to build real projects and {" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                land real jobs?
              </span>
            </motion.h2>

           <motion.p 
             className="hidden lg:block mt-6 text-base text-slate-300 max-w-xl mx-auto lg:mx-0"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
              Stop watching tutorials. Start shipping production-grade apps with mentor guidance, 
              peer collaboration, and a portfolio that makes recruiters reach out to you.
            </motion.p>

            {/* Stats row */}
            <motion.div 
              className=" hidden  mt-8 md:flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="mt-6 flex flex-row sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                asChild
                className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <Link href="/signup">
                  Enroll For Free
     
                </Link>
              </Button>

              <Link
                href="#tracks"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-7 py-1.5 text-base font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Explore Tracks
              </Link>
             
            </motion.div>

            <motion.p 
              className="hidden lg:block mt-6 text-sm text-slate-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              No credit card required • Start immediately • Cancel anytime
            </motion.p>
          </motion.div>

          {/* Right: Enhanced visual with floating elements */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main image container with glow */}
              <motion.div 
                className="relative w-[300px] sm:w-[400px] md:w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>

            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}