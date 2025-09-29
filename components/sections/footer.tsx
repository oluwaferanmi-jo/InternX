// components/sections/Footer.tsx
"use client";

import React from "react";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500">
                <span className="text-lg font-bold text-white">X</span>
              </div>
              <span className="text-xl font-bold text-white">InternX</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Empowering the next generation of tech professionals through cohort-based internships, 
              real-world projects, and industry mentorship.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@internx.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#tracks" className="text-sm transition hover:text-cyan-400">
                  Tracks
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm transition hover:text-cyan-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm transition hover:text-cyan-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-sm transition hover:text-cyan-400">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/demo-day" className="text-sm transition hover:text-cyan-400">
                  Demo Day
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm transition hover:text-cyan-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm transition hover:text-cyan-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm transition hover:text-cyan-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm transition hover:text-cyan-400">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-slate-400">
              Get the latest news and updates about cohorts.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                onClick={handleSubscribe}
                className="flex items-center justify-center rounded-lg bg-cyan-500 px-3 py-2 text-white transition hover:bg-cyan-600"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} InternX. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="transition hover:text-cyan-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-cyan-400">
                Terms of Service
              </Link>
              <Link href="/cookies" className="transition hover:text-cyan-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}