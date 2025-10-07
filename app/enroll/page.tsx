"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function EnrollmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-[70%] bg-white text-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10"
      >
        {!submitted ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Enrollment Form
            </h1>
            <p className="text-gray-500 mb-8">
              Please fill out your details to begin your enrollment process.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 text-base rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+234..."
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Select Program
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Choose a program</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Data Analytics</option>
                  <option>UI/UX Design</option>
                  <option>AI & Automation</option>
                </select>
              </div>

              {/* Statement */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Why do you want to enroll?
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us your motivation..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3 transition-all duration-300 shadow-md"
              >
                Submit Enrollment
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <CheckCircle2 className="text-orange-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Form Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for enrolling — we’ll reach out to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-orange-500 font-semibold hover:underline"
            >
              Go back
            </button>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
