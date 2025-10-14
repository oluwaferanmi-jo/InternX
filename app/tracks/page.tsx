"use client";

import React from "react";
import Image from "next/image";
import { Play, Clock, Users } from "lucide-react";
import Testimonials from "@/components/sections/studentsTestimonials";
import Link from "next/link";

// Next.js + TypeScript ViewTracks component
// Fixed version with proper typing and Next.js Image optimization

type RawTrack = {
  id?: string | null;
  title?: string | null;
  subtitle?: string | null;
  length?: string | null;
  slots?: number | string | null;
  img?: string | null;
  color?: string | null;
};

type Track = {
  id: string;
  title: string;
  subtitle: string;
  length: string;
  slots: string | number;
  img: string;
  color: string;
};

const PLACEHOLDER_IMG = "/images/placeholder.jpg";

const TRACKS: Array<RawTrack | null> = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Build modern, responsive websites and user interfaces.",
    length: "6 weeks",
    slots: 50,
    img: "/Avatar.svg",
    color: "from-amber-300 to-rose-300",
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "APIs, databases and scalable systems",
    length: "6 weeks",
    slots: 50,
    img: "/Avatar.svg",
    color: "from-sky-400 to-indigo-500",
  },
  {
    id: "data",
    title: "Data Analysis",
    subtitle: "Transform data into insights",
    length: "6 weeks",
    slots: 50,
    img: "/Avatar.svg",
    color: "from-lime-300 to-amber-400",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "iOS and Android apps",
    length: "6 weeks",
    slots: 40,
    img: "/Avatar.svg",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Deploy and scale applications",
    length: "6 weeks",
    slots: 35,
    img: "/Avatar.svg",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    subtitle: "Build intelligent systems",
    length: "8 weeks",
    slots: 30,
    img: "/Avatar.svg",
    color: "from-violet-400 to-fuchsia-400",
  },
];

function safeTrack(raw: RawTrack | null | undefined, fallbackId: string): Track {
  if (!raw || typeof raw !== "object") {
    return {
      id: fallbackId,
      title: "Untitled Track",
      subtitle: "Description coming soon",
      length: "TBA",
      slots: "—",
      img: PLACEHOLDER_IMG,
      color: "from-slate-400 to-slate-500",
    };
  }

  return {
    id: (raw.id ?? fallbackId) as string,
    title: (raw.title ?? "Untitled Track") as string,
    subtitle: (raw.subtitle ?? "Description coming soon") as string,
    length: (raw.length ?? "TBA") as string,
    slots: raw.slots ?? "—",
    img: (raw.img ?? PLACEHOLDER_IMG) as string,
    color: (raw.color ?? "from-slate-400 to-slate-500") as string,
  };
}

/* Inline decorative SVG used in the colored header (ants-like accent) */
function AntsGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="2" strokeLinecap="round">
        <path d="M10 60 C30 30, 45 50, 70 30 C95 10, 110 25, 120 20" />
        <circle cx="70" cy="30" r="2.2" fill="rgba(0,0,0,0.12)" stroke="none" />
        <circle cx="95" cy="10" r="2.2" fill="rgba(0,0,0,0.12)" stroke="none" />
      </g>
    </svg>
  );
}

export default function ViewTracks() {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All categories");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filtered = TRACKS.filter((t) => {
    if (!t) return false;
    const matchesQuery =
      !normalizedQuery ||
      (t.title && t.title.toLowerCase().includes(normalizedQuery)) ||
      (t.subtitle && t.subtitle.toLowerCase().includes(normalizedQuery));
    // placeholder for category filtering — expand if you add category on each track
    const matchesCategory = selectedCategory === "All categories" || selectedCategory === "All" ? true : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <main className="min-h-screen mt-6 bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                Launch your Tech Career{" "}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  with Curated Tracks
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                Live classes, hands-on projects, mentorship and a community that gets you hired. Browse
                tracks and pick the one that fits your goals.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#tracks"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-black  text-white text-sm font-bold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all"
                >
                  View tracks
                </Link>

                <Link
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Browse categories
                </Link>
              </div>

              <div className="mt-8 flex gap-6 items-center text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock size={16} /> <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} /> <span>30-50 slots</span>
                </div>
              </div>
            </div>

            {/* Hero image / card */}
            <div className="relative hidden mt-5 lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-100">
                <Image
                  src="/productivity.svg"
                  alt="students learning"
                  width={900}
                  height={600}
                  className="object-cover w-full h-[420px]"
                  priority
                />
              </div>

              <div className="absolute -right-8 bottom-6 w-44 p-3 rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center">
                    <Play size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Live sessions</p>
                    <p className="text-xs text-slate-500">Interactive & hands-on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks grid */}
      <section id="tracks" className="max-w-7xl mx-auto px-6 lg:px-8 -mt-6 pb-12">
        <div className="bg-white rounded-3xl p-6 shadow-md ring-1 ring-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-semibold">Available tracks</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select
                className="rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All categories</option>
                <option>Software Development</option>
                <option>Design & Creativity</option>
                <option>Data & Analytics</option>
              </select>
              <input
                placeholder="Search tracks"
                className="rounded-md border border-slate-200 px-3 py-2 text-sm w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t: RawTrack | null, idx: number) => {
              const track = safeTrack(t, `fallback-${idx}`);

              return (
                <article
                  key={track.id}
                  className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 bg-white"
                  aria-labelledby={`track-${track.id}-title`}
                >
                  {/* Top visual area with gradient */}
                  <div className="relative p-4">
                    <div
                      className={`rounded-xl overflow-hidden bg-gradient-to-br ${track.color} p-4 relative`}
                      style={{ minHeight: 110 }}
                    >
                      {/* Decorative faint circle */}
                      <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/8 rounded-full blur-[2px] pointer-events-none" />

                      {/* Main card surface */}
                      <div className="relative rounded-lg h-36">
                        {/* Subtle inner glow */}
                        <div className="absolute inset-3 rounded-lg bg-white/10" />

                        {/* Ants graphic bottom-right */}
                        <div className="absolute right-2 bottom-2 w-56 h-32 opacity-70 transform rotate-6">
                          <AntsGraphic className="w-full h-full" />
                        </div>

                        {/* Title inside colored area */}
                        <div className="absolute left-4 bottom-4 text-white z-10">
                          <h3 id={`track-${track.id}-title`} className="text-lg font-bold">
                            {track.title}
                          </h3>
                          <p className="text-xs opacity-95 mt-1 max-w-xs">{track.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={track.img}
                        alt={track.title}
                        width={84}
                        height={64}
                        className="rounded-md object-cover border border-slate-100"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">{track.title}</p>
                        <p className="text-xs text-slate-800 mt-1">{track.subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          <Clock size={12} /> {track.length}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          <Users size={12} /> {track.slots} slots
                        </span>
                      </div>

                      <Link
                        href={`/tracks/${track.id}`}
                        className="rounded-lg border border-slate-300 px-4 py-2 text-xs hover:bg-slate-50 transition-colors"
                        aria-label={`Learn more about ${track.title}`}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/tracks"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-sm hover:bg-slate-50 transition-colors"
            >
              View all tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Featured topics */}
      <section id="categories" className="hidden max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h3 className="text-xl font-semibold">Top categories</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Software Development",
            "Design and Creativity",
            "Data & Analytics",
            "Cloud & DevOps",
            "Product",
            "Marketing",
          ].map((c) => (
            <div key={c} className="rounded-xl border border-slate-200 p-3 text-center text-sm hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer">
              {c}
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h5 className="text-2xl font-bold">Ready to start?</h5>
              <p className="mt-1 text-sm opacity-90">Pick a track and join live classes — limited slots per cohort.</p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/enroll"
                className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-50 transition-colors"
              >
                Enroll now
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-white/30 px-4 py-3 text-sm hover:bg-white/10 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}