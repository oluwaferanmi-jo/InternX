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
  { title: "Front End", excerpt: "ui/ux, react, accessibility" },
  { title: "Backend", excerpt: "node, api design, databases" },
  { title: "Product Design", excerpt: "ux research, prototyping" },
];

export default function Tracks() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              We bring the spark to your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Tech journey
              </span>
              .
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              HNG will transform your Tech Career. We offer you various pathways
              that allow you to upskill yourself into a valuable contributor in
              the technology space. By joining one of our programs you will gain
              valuable skills, significantly improve your knowledge, and build a
              network of like-minded people.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {TRACKS.map((t, idx) => (
                <motion.button
                  key={t.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 bg-white hover:bg-sky-50 shadow-sm hover:shadow-lg border border-slate-200 hover:border-sky-300 rounded-full px-5 py-2.5 text-sm text-slate-800 transition-all duration-200"
                >
                  <span className="font-medium">{t.title}</span>
                  <ChevronRight 
                    size={16} 
                    className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" 
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
              className="absolute -inset-8 rounded-3xl blur-3xl opacity-30"
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
                className="object-cover w-full h-[420px] sm:h-[520px]"
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
              whileHover={{ y: -4, scale: 1.02 }}
              className="absolute -top-6 left-2 sm:left-6 lg:w-72 w-58 bg-white/98 backdrop-blur-sm shadow-2xl rounded-2xl p-2 border border-slate-200/80"
              style={{ zIndex: 30 }}
            >
              <div className="font-semibold text-slate-900 text-sm mb-3">
                What track are you interested in?
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg text-sm font-sm shadow-sm">
                  Front End?
                </span>
                <div className="ml-auto bg-sky-50 hover:bg-sky-100 rounded-full p-2.5 transition-colors cursor-pointer">
                  <Search size={18} className="text-sky-600" />
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
              whileHover={{ x: -4, scale: 1.05 }}
              className="absolute left-0 bottom-32 sm:bottom-40 -translate-x-8 w-36 sm:w-40 bg-white/98 backdrop-blur-sm rounded-2xl p-4 ml-4 lg:ml-0 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 25 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-14 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center ring-2 ring-emerald-200/50">
                  <div className="text-orange-500 font-bold text-lg">90%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Success</div>
                  <div className="text-sm font-semibold text-slate-800">Hired</div>
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
              whileHover={{ x: 4, y: -4, scale: 1.03 }}
              className="absolute right-0 top-12 translate-x-8 w-44 bg-white/98 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 28 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-sky-50 rounded-lg">
                  <Briefcase size={16} className="text-sky-600" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  6 Tracks
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                ui/ux, frontend, backend, pm, video, mobile
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
              whileHover={{ x: 4, scale: 1.03 }}
              className="absolute right-0 bottom-8 sm:bottom-14 translate-x-8 w-40 bg-white/98 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-slate-200/80"
              style={{ zIndex: 22 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-purple-50 rounded-lg">
                  <Users size={16} className="text-purple-600" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  11 Cohorts
                </div>
              </div>
              <div className="text-xs font-medium text-slate-700">
                Coming: HNG12
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}