"use client";

import { Code2, Cpu, Briefcase, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const tracks = [
  {
    id: "se",
    title: "Software Engineering",
    tagline: "Build real products",
    description:
      "Ship maintainable apps using React, Next.js and TypeScript. Work on production-like projects, reviewable by hiring managers.",
    icon: <Code2 className="w-6 h-6" />,
    gradient:
      "linear-gradient(180deg,#FFEDD5 0%,#FFD1A8 50%,#FFE8D6 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "data",
    title: "Data Science & AI",
    tagline: "Model & interpret",
    description:
      "Train models, analyze pipelines and build dashboards that reveal insights recruiters can evaluate.",
    icon: <Cpu className="w-6 h-6" />,
    gradient:
      "linear-gradient(180deg,#F3E8FF 0%,#E9D5FF 50%,#F6EEFF 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "pm",
    title: "Product Management",
    tagline: "Ship with clarity",
    description:
      "Learn discovery, roadmaps and stakeholder communication — deliver measurable product outcomes.",
    icon: <Briefcase className="w-6 h-6" />,
    gradient:
      "linear-gradient(180deg,#DBF4FF 0%,#CFEFFF 50%,#EBFAFF 100%)",
    textColor: "text-slate-900",
  },
  {
    id: "growth",
    title: "Professional Growth",
    tagline: "Career acceleration",
    description:
      "Master interviewing, teamwork and portfolio storytelling so you land roles faster.",
    icon: <BookOpen className="w-6 h-6" />,
    gradient:
      "linear-gradient(180deg,#DEF7EC 0%,#D1F6DF 50%,#ECFBEE 100%)",
    textColor: "text-slate-900",
  },
];

/** Reusable CTA component that navigates using next/navigation.
 *  Keeps framer-motion animation and avoids deprecated Link behavior.
 */
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
                 ring-1 ring-white/40 hover:ring-2 hover:ring-offset-1 hover:ring-purple-300/30
                 lg:px-2 lg:py-1 lg:text-xs"
      style={{ backdropFilter: "saturate(1.05) blur(2px)", boxShadow: "0 8px 24px rgba(2,6,23,0.08)" }}
    >
      <span className="hidden sm:inline">View Track</span>
      <span className="sm:hidden">View</span>
      <span className="ml-1">→</span>
    </motion.button>
  );
}

export default function Tracks() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* animated blobs behind the grid */}
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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ translateY: -8, boxShadow: "0 22px 40px rgba(2,6,23,0.12)" }}
              className="h-full"
            >
              <div
                className={`h-full flex flex-col justify-between rounded-2xl p-6 sm:p-6`}
                style={{
                  background: t.gradient,
                  border: "1px solid rgba(2,6,23,0.04)",
                  boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
                  minHeight: 340, // consistent card size
                }}
              >
                <div className="flex-1">
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(2,6,23,0.04)",
                      filter: "saturate(1.05)",
                    }}
                  >
                    <div className={`${t.textColor}`}>{t.icon}</div>
                  </div>

                  <div className="text-center">
                    <h3 className={`text-lg font-semibold ${t.textColor}`}>{t.title}</h3>
                    <div className="text-xs text-slate-600 mt-1">{t.tagline}</div>
                  </div>

                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                  <p className={`mt-4 text-sm leading-6 ${t.textColor} text-opacity-95`}>
                    {t.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className=" lg:hidden text-xs text-slate-700/90">Duration</div>
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
                  </div>

                  <TrackCta href={`/tracks/${t.id}`} label={`View ${t.title} track`} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Scoped styles: animated blobs and small tweaks */}
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

        @keyframes blobMove1 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(10px,12px,0) scale(1.03); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes blobMove2 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-8px,-10px,0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes blobMove3 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(6px,-8px,0) scale(1.01); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
