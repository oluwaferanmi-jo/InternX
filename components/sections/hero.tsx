"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DividerArt from "@/components/sections/DividerArt";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        bg-gradient-to-b from-slate-900 via-slate-950 to-black
        text-foreground
      "
    >
      {/* Animated background grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "center",
        }}
      />

      {/* Animated cyan arc */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-5 sm:pt-28 sm:pb-28 lg:pb-28">
        {/* Animated top badge */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div
            className="mx-auto mb-6 inline-flex max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[500px]
                       items-center gap-2 rounded-full border border-primary/30 bg-white/5
                       px-4 py-1.5 text-xs sm:text-sm text-foreground/80 backdrop-blur"
          >
            {/* Animated dot */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 300 }}
              className="h-2 w-2 shrink-0 rounded-full bg-primary"
            />

            {/* Cohort label */}
            <span className="shrink-0 whitespace-nowrap font-medium text-foreground/70">
              InternX Cohort-1
            </span>

            {/* divider */}
            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-white/30" />

            <div className="relative overflow-hidden w-40 sm:w-52 md:w-64">
              <div className="flex items-center whitespace-nowrap text-foreground/70 animate-scroll">
                <span className="px-2 lg:px-10">Check out the date</span>
              </div>
            </div>

            {/* divider */}
            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-white/30" />

            {/* Animated Explore button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#features"
                className="shrink-0 whitespace-nowrap rounded-full bg-[#ff5029] px-3 py-1 
                           text-white text-xs sm:text-sm font-medium hover:bg-[#ff6845] transition-colors"
              >
                Explore
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated main heading */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-6xl"
        >
          <motion.span variants={fadeInUp} transition={{ duration: 0.6 }}>
            Kickstart Your{" "}
          </motion.span>
          <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
          >
            Tech Career
          </motion.span>
          <motion.span variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            {" "}with InternX
          </motion.span>
          <br />
          <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary"
          >
            Learn, Build, and{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Get Hired.
            </span>
          </motion.span>
        </motion.h1>

        {/* Animated description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-foreground/70 sm:text-lg"
        >
          Apply to a proven internship program: learn from mentors, build real-world projects, 
          and graduate with a portfolio that employers can't ignore.
        </motion.p>

        {/* Animated CTA buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="rounded-full px-6 py-5 text-base shadow-[0_0_0_1px_rgba(6,182,212,.35)_inset,0_8px_30px_rgba(6,182,212,.2)] bg-white hover:bg-primary/90"
            >
              <Link href="/signup">Enroll For Free</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={slideInRight}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#demo"
              className="rounded-full border border-white/20 px-6 py-2 text-base text-foreground/80 hover:bg-white/5 transition-colors"
            >
              View Tracks
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated trust indicator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-3 text-center text-sm text-foreground/50"
        >
          Trusted by 4,000+ learners & 10+ Partners
        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
>
  <DividerArt />
</motion.div>

        {/* Mobile: animated scrolling row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="sm:hidden mt-6 mb-10"
        >
          <div className="relative overflow-hidden marquee-mask">
            <div className="marquee-anim flex w-[200%] animate-[marquee-x_18s_linear_infinite]">
              <MarqueeContent />
              <MarqueeContent aria-hidden />
            </div>
          </div>
        </motion.div>

        {/* Tablet/Desktop: animated grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="
            hidden sm:grid mx-auto mt-4 max-w-4xl grid-cols-2 justify-items-center gap-x-2 gap-y-6
            opacity-75 lg:grid-cols-5
          "
        >
          <Track name="Software Engineering" delay={0} />
          <Track name="Product Design" delay={0.1} />
          <Track name="Data Analytics" delay={0.2} />
          <Track name="CyberSecurity" delay={0.3} />
          <Track name="Quality Assurance" delay={0.4} />
        </motion.div>
      </div>


    </section>
  );
}

function MarqueeContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="
        flex min-w-[50%] shrink-0 items-center gap-3 px-2
        whitespace-nowrap
      "
      {...props}
    >
      <Track name="Software Engineering" delay={0} />
      <Track name="Product Design" delay={0} />
      <Track name="Data Analytics" delay={0} />
      <Track name="CyberSecurity" delay={0} />
      <Track name="Quality Assurance" delay={0} />
    </div>
  );
}

function Track({ name, delay = 0 }: { name: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 1.4 + delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-foreground/white cursor-pointer"
    >
      {name}
    </motion.div>
  );
}