"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import { motion, useInView, Variants } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import Image from "next/image";

const testimonials = [
  {
    name: "James Hampton",
    title: "CTO, TechNation",
    text: "InternX is bridging the gap between raw talent and industry needs. Their structured approach and mentorship quality is absolutely phenomenal. We've hired 5 interns from their program.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format",
    rating: 5,
    company: "TechNation",
    location: "California, USA"
  },
  {
    name: "Mark Wolang", 
    title: "Lead Engineer, PayTech",
    text: "Seeing the quality of interns InternX produces, I'd hire from here every time. The practical skills and professional mindset they develop is remarkable.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "PayTech Solutions",
    location: "London, United Kingdom"
  },
  {
    name: "Amy Hunter",
    title: "Product Designer, Softwave", 
    text: "InternX's mentorship approach is world-class. This is genuinely the future of tech training. The portfolio quality speaks for itself.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "Softwave Design",
    location:  "Manchester, United Kingdom"
  },
  {
    name: "Roland white",
    title: "VP Engineering, FinanceFlow",
    text: "The depth of knowledge and real-world experience InternX provides is unmatched. These aren't just interns - they're junior developers ready to contribute from day one.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "FinanceFlow",
    location:  "Georgia, USA"
  },
  {
    name: "Josephine Kirk",
    title: "Head of Design, CloudSync",
    text: "I was blown away by the design thinking and technical execution skills. InternX is raising the bar for tech education in Africa.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    company: "CloudSync",
    location: "Toronto, Canada"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
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
      className="relative py-10 bg-gradient-to-br rounded-t-2xl from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Trusted by Industry Leaders
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="hidden text-2xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-black to-slate-900 bg-clip-text text-transparent mb-6"
          >
            What Top Tech Leaders Say
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-s text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what industry leaders and hiring managers say about InternX graduates.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              640: { slidesPerView: 1, centeredSlides: true },
              768: { slidesPerView: 1.3, centeredSlides: false },
              1024: { slidesPerView: 2.2, centeredSlides: false },
              1280: { slidesPerView: 2.5, centeredSlides: false }
            }}
            onSlideChange={handleSlideChange}
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group h-full"
                >
                  <div className="relative h-full  bg-slate-900 rounded-3xl p-4 -mb-4ssssss shadow-2xl border border-slate-700 overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
                      &quot;{testimonial.text} &quot;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                    <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-blue-400 font-medium">{testimonial.title}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company} • {testimonial.location}</p>
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="hidden md:flex items-center justify-center mt-0">
            <div className="flex items-center gap-6">
              <button className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 bg-slate-800 shadow-lg rounded-full border border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300">
                <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </button>
              
              <div className="swiper-pagination-custom flex items-center gap-2"></div>
              
              <button className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 bg-slate-800 shadow-lg rounded-full border border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300">
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}