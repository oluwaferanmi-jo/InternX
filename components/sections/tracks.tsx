// src/components/Tracks.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Search, ChevronRight, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type Track = {
  title: string;
  excerpt: string;
};

const TRACKS: Track[] = [
  { title: "View Tracks", excerpt: "ui/ux, react, accessibility" },

];

export default function Tracks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              We bring the spark to your{" "}
               <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                Tech Journey
            </span>
              .
            </h2>
            <p className="mt-4 sm:mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              InternX will transform your Tech Career. We offer you various pathways
              that allow you to upskill yourself into a valuable contributor in
              the technology space. By joining one of our programs you will gain
              valuable skills, significantly improve your knowledge, and build a
              network of like-minded people.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
              {TRACKS.map((t, idx) => (
                <motion.button
                  key={t.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 hover:bg-sky-50 shadow-sm hover:shadow-lg border border-slate-200 hover:border-sky-300 rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-sm text-white transition-all duration-200"
                >
                  <span className="font-medium">{t.title}</span>
                  <ChevronRight 
                    size={16} 
                    className="text-white group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" 
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Image with overlays */}
        <div className="lg:w-1/2 w-full relative flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Background glow - positioned behind everything */}
            <div
              aria-hidden
              className="absolute -inset-4 sm:-inset-8 rounded-3xl blur-3xl opacity-20 sm:opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.3), rgba(59,130,246,0.2))",
                zIndex: 0,
              }}
            />

            {/* Main image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200/50 shadow-2xl"
              style={{ zIndex: 10 }}
            >
              <Image
                src="/Pexels1.jpg"
                alt="Student smiling"
                width={1200}
                height={900}
                className="object-cover w-full h-[400px] sm:h-[480px] lg:h-[520px]"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating search bubble (top-left) */}
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              className="absolute -top-3 sm:-top-4 left-2 sm:left-4 lg:w-[220px] w-[210px] bg-white/98 backdrop-blur-sm shadow-2xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/80"
              style={{ zIndex: 30 }}
            >
              <div className="font-semibold text-slate-900 text-xs sm:text-sm mb-2 sm:mb-3">
                What track are you interested in?
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-sm">
                  Front End?
                </span>
                <div className="ml-auto bg-sky-50 hover:bg-sky-100 rounded-full p-2 transition-colors cursor-pointer">
                  <Search size={16} className="text-sky-600" />
                </div>
              </div>
            </motion.div>

            {/* Circular stat card (left center) */}
            <motion.div
              initial={{ x: -20, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                type: "spring",
                stiffness: 180
              }}
              className="absolute left-2 sm:left-0 bottom-[100px] lg:bottom-[160px] sm:-translate-x-4 w-[120px] sm:w-[150px] bg-white/98 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 25 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-11 h-8 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center ring-2 ring-emerald-200/50">
                  <div className="text-emerald-600 font-bold text-base sm:text-lg">90%</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Success</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">Hired</div>
                </div>
              </div>
            </motion.div>

            {/* Top right stat card */}
            <motion.div
              initial={{ x: 20, y: -20, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                type: "spring",
                stiffness: 180
              }}
              className="absolute right-2 sm:right-0 top-[60px] lg:top-[220px] sm:translate-x-4 w-[130px] sm:w-[160px] bg-white/98 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 28 }}
            >
              <div className="flex items-center gap-2 mb-2 h-2">
                <div className="p-1 sm:p-1.5 bg-sky-50 rounded-lg">
                  <Briefcase size={14} className="text-sky-600 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-medium">
                  6 Tracks
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
               Product Design, Frontend, Backend, P.M , video...
              </div>
            </motion.div>

            {/* Bottom right stat card */}
            <motion.div
              initial={{ x: 20, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6,
                type: "spring",
                stiffness: 180
              }}
              className="absolute right-2 sm:right-0 bottom-[40px] sm:bottom-[60px] sm:translate-x-4 w-[120px] sm:w-[150px] bg-white/98 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 22 }}
            >
              <div className="flex items-center gap-2 mb-2 h-4">
                <div className="p-1 sm:p-1.5 bg-purple-50 rounded-lg">
                  <Users size={14} className="text-purple-600 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-medium">
                 Cohort 1
                </div>
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-slate-700">
                First edition
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}