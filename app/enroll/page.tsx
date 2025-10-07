"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function EnrollmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center py-6 px-4">
       <motion.div
        id="enroll-lenis-wrapper"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-5xl bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
        style={{ maxHeight: "calc(100vh - 3rem)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* LEFT: Text + Form - NOW SCROLLABLE */}
          <div className="overflow-y-auto p-4 md:p-8 lg:p-10">
            <div className="flex flex-col gap-2">
              {/* Header */}
              <div className="mb-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-0 text-xs font-medium text-black/80">
                  <span className="h-2 w-2 rounded-full bg-orange-500 inline-block" />
                  <span>InternX - Cohort 1</span>
                </div>
              </div>

              <h1 className="text-xl font-semibold leading-tight">
                Enroll in InternX
              </h1>

              <p className="text-base text-black/70 max-w-xl">
                HNG Internship is a way to rapidly upskill yourself. It's an 8-weeks free boot camp where 
                you will learn to solve hard problems, quickly learn new technologies and make a lot of Tech friends.
              </p>

              {/* Form or success panel */}
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-2 flex flex-col gap-4"
                  aria-label="Enrollment form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Full name</label>
                      <input
                        name="name"
                        required
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="+234 ..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">Location (City)</label>
                      <input
                        name="city"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="Lagos"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Program</label>
                      <select
                        name="program"
                        required
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                      >
                        <option value="">Choose program</option>
                        <option>Frontend Development</option>
                        <option>Backend Development</option>
                        <option>Data Analytics</option>
                        <option>UI/UX Design</option>
                        <option>Cybersecurity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Why do you want to enroll?</label>
                    <textarea
                      name="motivation"
                      rows={3}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="A short note about your goals..."
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 text-sm font-semibold shadow-sm transition"
                    >
                      Submit 
                    </button>

                    <button
                      type="button"
                      onClick={() => {}}
                      className="text-sm text-black/70 underline underline-offset-2"
                    >
                      Save for later
                    </button>
                  </div>

                  <p className="text-xs text-black/50 max-w-md pb-4">
                    By submitting, you agree to be contacted about the program. We value your privacy.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 flex flex-col gap-4 items-start"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-sm font-semibold">Application submitted</p>
                      <p className="text-xs text-black/60">We will contact you via email.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 px-3 py-1.5 text-sm"
                    >
                      Submit another
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* RIGHT: Decorative image */}
          <div className="hidden lg:flex items-center justify-center bg-gray-50 p-6 overflow-hidden">
            <div className="w-full max-w-sm">
              <Image
                src="/airline.svg"
                alt="Students learning"
                width={520}
                height={420}
                className="w-full h-auto object-contain rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}