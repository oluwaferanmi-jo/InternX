// src/components/sections/tracks.tsx
"use client";

import React from "react";
import { Code2, Cpu, Briefcase, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

/* tracks data */
const tracks = [
  {
    id: "se",
    title: "Software Engineering",
    tagline: "Build real products",
    description:
      "Ship maintainable apps using React, Next.js and TypeScript. Work on production-like projects, reviewable by hiring managers.",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#FFEDD5 0%,#FFD1A8 50%,#FFE8D6 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "data",
    title: "Data Science & AI",
    tagline: "Model & interpret",
    description:
      "Train models, analyze pipelines and build dashboards that reveal insights recruiters can evaluate.",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#F3E8FF 0%,#E9D5FF 50%,#F6EEFF 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "pm",
    title: "Product Management",
    tagline: "Ship with clarity",
    description:
      "Learn discovery, roadmaps and stakeholder communication — deliver measurable product outcomes.",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#DBF4FF 0%,#CFEFFF 50%,#EBFAFF 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "growth",
    title: "Professional Growth",
    tagline: "Career acceleration",
    description:
      "Master interviewing, teamwork and portfolio storytelling so you land roles faster.",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#DEF7EC 0%,#D1F6DF 50%,#ECFBEE 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "design",
    title: "UI/UX Design",
    tagline: "Design beautiful products",
    description: "Learn Figma, user research, and design systems to craft polished interfaces.",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#FEF3C7 0%,#FDE68A 50%,#FFF7ED 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    tagline: "Native & cross-platform",
    description: "Build mobile apps using React Native and platform best practices.",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "linear-gradient(180deg,#E8F9FF 0%,#DFF5FF 50%,#F3FBFF 100%)",
    textColor: "text-slate-900",
  },
];

function TrackCta({ href, label }: { href: string; label?: string }) {
  const router = useRouter();
  return (
    <motion.button
      type="button"
      onClick={() => router.push(href)}
      role="link"
      aria-label={label ?? "View track"}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium
                 bg-white/95 text-slate-900 shadow-sm hover:shadow-lg
                 ring-1 ring-white/40 hover:ring-2 hover:ring-offset-1 hover:ring-purple-300/30"
      style={{ backdropFilter: "saturate(1.05) blur(2px)", boxShadow: "0 8px 24px rgba(2,6,23,0.08)" }}
    >
      <span className="hidden sm:inline">View Track</span>
      <span className="sm:hidden">View</span>
      <span className="ml-1">→</span>
    </motion.button>
  );
}

/* FRAMER VARIANTS */
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Tracks() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center text-white shadow-md">
            <span className="font-bold">N</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Pick a{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Track
            </span>{" "}
            that fits your goals
          </h2>

          <p className="mt-4 text-slate-600 text-base">
            Choose a focused path — project-led, mentor-backed, and outcome-focused.
          </p>
        </div>

        {/* track pills */}
        <div className="hidden mt-6 lg:flex flex-wrap gap-3 justify-center">
          {tracks.map((t) => (
            <button
              key={t.id}
              className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium shadow-sm hover:shadow-md transition"
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Swiper for tracks */}
        <motion.div
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <div className="mx-auto w-full max-w-5xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={36}
              slidesPerView={1}
              centeredSlides
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="!pb-6"
            >
              {tracks.map((t) => (
                <SwiperSlide key={t.id}>
                  <motion.article
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    whileHover={{ translateY: -6, boxShadow: "0 22px 40px rgba(2,6,23,0.12)" }}
                    className="mx-auto"
                  >
                    <div
                      className="rounded-3xl overflow-hidden shadow-lg"
                      style={{
                        minHeight: 420,
                        border: "1px solid rgba(2,6,23,0.04)",
                        background: t.gradient,
                      }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                        {/* Left: content */}
                        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                          <div>
                            {/* title + logo side by side */}
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className={`text-2xl font-semibold ${t.textColor}`}>{t.title}</h3>
                                <div className="text-sm text-slate-600 mt-1">{t.tagline}</div>
                              </div>

                              <div
                                className="flex h-12 w-12 items-center justify-center rounded-xl shadow shrink-0"
                                style={{ background: "rgba(255,255,255,0.88)", border: "1px solid rgba(2,6,23,0.04)" }}
                              >
                                <div className={t.textColor}>{t.icon}</div>
                              </div>
                            </div>

                            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                            <p className={`mt-4 text-sm leading-7 ${t.textColor} text-opacity-95`}>
                              {t.description}
                            </p>
                          </div>

                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div
                              className="rounded-full px-3 py-1 text-xs font-medium"
                              style={{
                                background: "black",
                                border: "1px solid rgba(2,6,23,0.04)",
                                color: "white",
                              }}
                            >
                              8–12 weeks
                            </div>
                            <TrackCta href={`/tracks/${t.id}`} label={`View ${t.title} track`} />
                          </div>
                        </div>

                        {/* Right: illustration */}
                        <div className="lg:flex items-center justify-center p-6 lg:p-10 bg-transparent">
                          <Image
                            src="/Collage.svg"
                            alt={`${t.title} illustration`}
                            width={520}
                            height={520}
                            className="object-contain max-h-[360px] select-none"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* navigation */}
            <div className="hidden mt-4 lg:flex items-center justify-center gap-6">
              <button
                className="swiper-button-prev-custom flex items-center justify-center w-10 h-10 bg-white rounded-full shadow border border-gray-200"
                aria-label="Previous track"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-600">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="swiper-pagination-custom flex items-center gap-2" />

              <button
                className="swiper-button-next-custom flex items-center justify-center w-10 h-10 bg-white rounded-full shadow border border-gray-200"
                aria-label="Next track"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-600">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* blobs */}
      <style jsx>{`
        .blob {
          position: absolute;
          filter: blur(40px);
          opacity: 0.12;
          transform: translateZ(0);
        }
        .b1 {
          width: 420px;
          height: 260px;
          left: -8%;
          top: -6%;
          background: radial-gradient(circle at 30% 30%, rgba(255,183,77,0.95), rgba(255,200,120,0.6) 40%, transparent 60%);
          animation: blobMove1 12s linear infinite;
        }
        .b2 {
          width: 360px;
          height: 220px;
          right: -6%;
          top: 6%;
          background: radial-gradient(circle at 60% 20%, rgba(99,102,241,0.9), rgba(168,85,247,0.5) 45%, transparent 70%);
          animation: blobMove2 14s linear infinite;
        }
        .b3 {
          width: 300px;
          height: 200px;
          left: 10%;
          bottom: -8%;
          background: radial-gradient(circle at 30% 80%, rgba(6,182,212,0.85), rgba(34,211,238,0.35) 40%, transparent 70%);
          animation: blobMove3 16s linear infinite;
        }
        @keyframes blobMove1 { 0%,100%{transform:translate3d(0,0,0)scale(1);}50%{transform:translate3d(10px,12px,0)scale(1.03);} }
        @keyframes blobMove2 { 0%,100%{transform:translate3d(0,0,0)scale(1);}50%{transform:translate3d(-8px,-10px,0)scale(1.02);} }
        @keyframes blobMove3 { 0%,100%{transform:translate3d(0,0,0)scale(1);}50%{transform:translate3d(6px,-8px,0)scale(1.01);} }
        @media (prefers-reduced-motion: reduce) { .blob { animation: none !important; } }
      `}</style>
    </section>
  );
}
