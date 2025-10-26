"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    id: "how-it-works",
    q: "How does InternX work?",
    a: `InternX is a cohort-based internship program. Apply, choose a track, join a peer cohort,
       work on production-like projects over 8–12 weeks with mentors, get feedback, then showcase at Demo Day.`,
  },
  {
    id: "customize",
    q: "Can I pick my level or customize a learning path?",
    a: `Yes — during application you'll choose a track (Software, Data, Product, Growth). Within each track
       there are project streams to match beginner → advanced levels and optional office-hours for 1:1 help.`,
  },
  {
    id: "timecommit",
    q: "What time commitment is required?",
    a: `Expect 10–15 hours/week for core contributors. There are flexible slots for workshops and optional deep-dive sessions.`,
  },
  {
    id: "outcomes",
    q: "What outcomes can I expect after graduating?",
    a: `A portfolio-ready project, mentor feedback, a Demo Day presentation, and introductions to hiring partners.
       Many grads get interview callbacks within weeks.`,
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="faq" className="bg-gray-50 rounded-t-3xl">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Heading & intro */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-orange-600">QUESTIONS & ANSWERS</p>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Frequently Asked <span className=" bg-gradient-to-r from-orange-400 via-amber-600 to-orange-600 bg-clip-text text-transparent whitespace-nowrap">Questions (FAQ)</span>
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Got questions? We got answers. Browse the most common questions about InternX — how it
              runs, what you build, and what to expect when applying.
            </p>

            <div className="mt-8">
              <Link
                href="/faq"
                className="inline-block rounded-sm bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Contact us 
              </Link>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {/* Top highlighted panel (expanded look) */}
          <div className="rounded-t-xl border border-slate-200 
                 bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600
                  text-white shadow">       
             <div className="px-6 py-5 lg:flex lg:items-start">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">How does the InternX program run?</h3>
                  
                  </div>
                 
                </div>
              </div>

              {/* Accordions list */}
              <div className="rounded-b-xl border border-slate-200 bg-white shadow-sm">
                <ul className="divide-y divide-slate-100">
                  {FAQ_ITEMS.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <li key={item.id} className="relative">
                        <button
                          onClick={() => toggle(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`${item.id}-panel`}
                          className="group flex w-full items-center justify-between px-6 py-4 text-left"
                        >
                          <div>
                            <div className="flex items-baseline gap-3">
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {`Q${FAQ_ITEMS.indexOf(item) + 1}`}
                              </span>
                              <h4 className="text-sm font-medium text-slate-900">{item.q}</h4>
                            </div>
                          </div>

                          <ChevronDown
                            className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-slate-600" : ""
                            }`}
                          />
                        </button>

                        <div
                          id={`${item.id}-panel`}
                          role="region"
                          aria-labelledby={item.id}
                          className={`px-6 pb-6 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(.2,.9,.2,1)] overflow-hidden ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-slate-700">{item.a}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
