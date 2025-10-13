"use client";

import React from "react";
import Image from "next/image";
import { Play, Clock, Users } from "lucide-react";

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

type Track = Required<{
  id: string;
  title: string;
  subtitle: string;
  length: string;
  slots: string | number;
  img: string;
  color: string;
}>;

const PLACEHOLDER_IMG = "/images/placeholder.jpg";

const TRACKS: Array<RawTrack | null> = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Build responsive, accessible UIs",
    length: "6 weeks",
    slots: 50,
    img: "/images/tracks/frontend.jpg",
    color: "bg-gradient-to-br from-sky-600 to-indigo-600",
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "APIs, databases and scalable systems",
    length: "6 weeks",
    slots: 50,
    img: "/images/tracks/backend.jpg",
    color: "bg-gradient-to-br from-emerald-600 to-teal-600",
  },
  {
    id: "data",
    title: "Data Analysis",
    subtitle: "Transform data into insights",
    length: "6 weeks",
    slots: 50,
    img: "/images/tracks/data.jpg",
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "iOS and Android apps",
    length: "6 weeks",
    slots: 40,
    img: "/images/tracks/mobile.jpg",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Deploy and scale applications",
    length: "6 weeks",
    slots: 35,
    img: "/images/tracks/cloud.jpg",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    subtitle: "Build intelligent systems",
    length: "8 weeks",
    slots: 30,
    img: "/images/tracks/ai.jpg",
    color: "bg-gradient-to-br from-violet-600 to-fuchsia-600",
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
      color: "bg-slate-700",
    };
  }

  return {
    id: raw.id ?? fallbackId,
    title: raw.title ?? "Untitled Track",
    subtitle: raw.subtitle ?? "Description coming soon",
    length: raw.length ?? "TBA",
    slots: raw.slots ?? "—",
    img: raw.img ?? PLACEHOLDER_IMG,
    color: raw.color ?? "bg-slate-700",
  };
}

export default function ViewTracks() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All categories");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Launch your tech career with curated tracks
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                Live classes, hands-on projects, mentorship and a community that gets you hired. Browse
                tracks and pick the one that fits your goals.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-slate-900 text-white text-sm font-medium shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all"
                  href="#tracks"
                >
                  View tracks
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-all"
                  href="#categories"
                >
                  Browse categories
                </a>
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
            {TRACKS.map((t: RawTrack | null, idx: number) => {
              const track = safeTrack(t, `fallback-${idx}`);

              return (
                <article
                  key={track.id}
                  className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                  <div className={`${track.color} p-5 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-xl font-semibold relative z-10">{track.title}</h3>
                    {track.subtitle ? (
                      <p className="mt-1 text-sm opacity-90 relative z-10">{track.subtitle}</p>
                    ) : (
                      <p className="mt-1 text-sm opacity-60 italic relative z-10">No description yet</p>
                    )}

                    <div className="mt-4 flex items-center justify-between text-sm opacity-95 relative z-10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs">{track.length}</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs">{track.slots} slots</span>
                      </div>
                      <a
                        href={`/tracks/${track.id}`}
                        className="inline-flex items-center gap-2 bg-white/95 text-slate-900 rounded-full px-3 py-1 text-xs font-medium hover:bg-white transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex items-center gap-4">
                    <Image
                      src={track.img}
                      alt={track.title}
                      width={84}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{track.title}</p>
                      <p className="text-xs text-slate-500">Starts soon — enroll now</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-sm hover:bg-slate-50 transition-colors" href="#">
              View all tracks
            </a>
          </div>
        </div>
      </section>

      {/* Categories / Featured topics */}
      <section id="categories" className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
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

      {/* Testimonials strip (simple) */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h4 className="text-lg font-semibold">Trusted by learners</h4>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {new Array(4).fill(0).map((_, i) => (
              <div key={i} className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <p className="text-sm text-slate-600">"Great content and mentorship — helped me land my first role."</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400" />
                  <div>
                    <p className="text-sm font-medium">Learner {i + 1}</p>
                    <p className="text-xs text-slate-500">Completed Frontend</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-600 p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h5 className="text-2xl font-bold">Ready to start?</h5>
              <p className="mt-1 text-sm opacity-90">Pick a track and join live classes — limited slots per cohort.</p>
            </div>
            <div className="flex gap-3">
              <a className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-50 transition-colors" href="#">
                Enroll now
              </a>
              <a className="rounded-lg border border-white/30 px-4 py-3 text-sm hover:bg-white/10 transition-colors" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}