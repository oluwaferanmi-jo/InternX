// components/sections/Testimonial.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, useInView, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "James Hampton",
    title: "CTO, TechNation",
    text: "InternX is bridging the gap between raw talent and industry needs. Their structured approach and mentorship quality is absolutely phenomenal. We've hired 5 interns from their program.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format",
    rating: 5,
    company: "TechNation",
    location: "California, USA",
  },
  {
    name: "Mark Wolang",
    title: "Lead Engineer, PayTech",
    text: "Seeing the quality of interns InternX produces, I'd hire from here every time. The practical skills and professional mindset they develop is remarkable.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "PayTech Solutions",
    location: "London, United Kingdom",
  },
  {
    name: "Amy Hunter",
    title: "Product Designer, Softwave",
    text: "InternX's mentorship approach is world-class. This is genuinely the future of tech training. The portfolio quality speaks for itself.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "Softwave Design",
    location: "Manchester, United Kingdom",
  },
  {
    name: "Roland white",
    title: "VP Engineering, FinanceFlow",
    text: "The depth of knowledge and real-world experience InternX provides is unmatched. These aren't just interns - they're junior developers ready to contribute from day one.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "FinanceFlow",
    location: "Georgia, USA",
  },
  {
    name: "Josephine Kirk",
    title: "Head of Design, CloudSync",
    text: "I was blown away by the design thinking and technical execution skills. InternX is raising the bar for tech education in Africa.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "CloudSync",
    location: "Toronto, Canada",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      ref={ref}
      className="relative py-8 overflow-hidden rounded-t-2xl"
      style={{
        background: "linear-gradient(180deg,#F3E8FF 0%,#E9D5FF 50%,#F6EEFF 100%)",
      }}
    >
      {/* background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -top-44 -right-36 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
          className="absolute -bottom-32 -left-28 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 m-2 bg-slate-900 text-white rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            Trusted by Industry Leaders
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-3"
          >
            What Top Tech Leaders Say
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-slate-700 max-w-2xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what industry leaders and hiring managers say about InternX graduates.
          </motion.p>
        </motion.div>

        {/* card grid: left = Swiper (testimonial slides), right = static illustration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto"
        >
          <div className="mx-auto w-full max-w-5xl">
            <div
              className="bg-white/95 rounded-3xl shadow-lg border border-transparent overflow-hidden"
              style={{ borderColor: "rgba(148,163,184,0.06)" }}
            >
              {/* grid: single column on small, 2 cols on lg */}
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left: Swiper container (centered vertically & horizontally) */}
                <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12">
                  <div className="w-full">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={24}
                      slidesPerView={1}
                      navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                      }}
                      pagination={{
                        el: ".swiper-pagination-custom",
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet-custom",
                        bulletActiveClass: "swiper-pagination-bullet-active-custom",
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      centeredSlides={true}
                      breakpoints={{
                        640: { slidesPerView: 1, centeredSlides: true },
                        768: { slidesPerView: 1, centeredSlides: true },
                        1024: { slidesPerView: 1, centeredSlides: true },
                      }}
                      onSlideChange={handleSlideChange}
                    >
                      {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                          <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: i * 0.06 }}
                            className="flex flex-col justify-center items-start h-full min-h-[260px] md:min-h-[300px] lg:min-h-[360px] px-2"
                          >
                            {/* rating */}
                            <div className="flex items-center gap-1 mb-4">
                              {[...Array(t.rating)].map((_, s) => (
                                <Star key={s} className="w-5 h-5 text-yellow-400" />
                              ))}
                            </div>

                            {/* testimonial text */}
                            <blockquote className="text-slate-800 text-base md:text-lg leading-relaxed mb-6">
                              &quot;{t.text}&quot;
                            </blockquote>

                            {/* author */}
                            <div className="flex items-center gap-4 mt-2 mb-4">
                              <div className="relative flex-shrink-0">
                                <Image
                                  src={t.img}
                                  alt={t.name}
                                  width={64}
                                  height={64}
                                  className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                                />
                                <div
                                  className="absolute inset-0 rounded-2xl pointer-events-none"
                                  style={{
                                    background: "linear-gradient(135deg, rgba(99,102,241,0.04), rgba(139,92,246,0.03))",
                                  }}
                                />
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                                <p className="text-slate-600 font-medium text-sm">{t.title}</p>
                                <p className="text-slate-500 text-xs">{t.company} • {t.location}</p>
                              </div>
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* small pagination/navigation for the swiper (centered below) */}
                    <div className="hidden mt-6 lg:flex items-center justify-center gap-6">
                      <button
                        className="swiper-button-prev-custom group flex items-center justify-center w-10 h-10 bg-white shadow rounded-full border border-gray-200 hover:scale-105 transition-all duration-200"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-600" />
                      </button>

                      <div className="swiper-pagination-custom flex items-center gap-2"></div>

                      <button
                        className="swiper-button-next-custom group flex items-center justify-center w-10 h-10 bg-white shadow rounded-full border border-gray-200 hover:scale-105 transition-all duration-200"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: static illustration centered (hidden on small screens) */}
                <div className=" lg:flex items-center justify-center p-6 lg:p-12">
                  <div className="w-full flex items-center justify-center">
                    {/* Put your static placeholder SVG in public/ as /testimonial-illustration.svg */}
                    <Image
                      src="/hero.svg"
                      alt="testimonial illustration"
                      width={520}
                      height={520}
                      className="object-contain max-h-[300px] lg:max-h-[420px] select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
