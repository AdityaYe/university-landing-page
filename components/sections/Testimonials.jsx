"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../ui/Container";

const testimonials = [
  {
    name: "Sumit Khurana",
    role: "B.Com - General Manager, Ahmedabad Mirror & NavGujarat Samay",
    image: "/images/testimonials/sumit-khurana.jpg",

    quote:
      "My education at JG has been instrumental in shaping my career. The comprehensive academic program and exceptional faculty provided me with a solid grounding in my field and continue to influence my work every day.",
  },

  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    image: "/images/testimonials/jigardan-gadhvi.jpg",

    quote:
      "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were mentors who encouraged us to explore our passions freely and grow with confidence.",
  },

  {
    name: "Parth Raval",
    role: "Creative Producer, Colors Gujarati, Viacom 18",
    image: "/images/testimonials/parth-raval.jpg",

    quote:
      "The demanding academic programme and practical learning experiences gave me a strong foundation in media and communication. The support and guidance from professors helped shape my professional journey.",
  },

  {
    name: "Yatendra Sinh Joddha",
    role: "BCA - Technical Lead, Tata Consultancy Services",
    image: "/images/testimonials/yatendra.jpg",

    quote:
      "The BCA programme at JG gave me a strong foundation in IT and real-world problem solving. The focus on innovation and technical excellence has been invaluable in my career at TCS.",
  },

  {
    name: "Krishna Soni",
    role: "BBA - Assistant Manager, ICICI Bank",
    image: "/images/testimonials/krishna-soni.jpg",

    quote:
      "The management programme offered hands-on industry exposure and helped me discover skills I never knew I had. The emphasis on personality development shaped my professional confidence.",
  },

  {
    name: "Aayushi Gor",
    role: "BBA - HR Trainer, Godrej and Boyce Manufacturing Pvt. Ltd",
    image: "/images/testimonials/aayushi-gor.jpg",

    quote:
      "JG provided me with opportunities to discover my individuality and potential. The discipline, knowledge, and experiences I gained continue to support me in my professional journey.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  /* AUTOPLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="bg-[#F7F5F2] py-28 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-10 items-center">
          {/* LEFT */}
          <div className="max-w-md">
            <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
              Alumni Voices
            </span>

            <h2 className="mt-6 text-[4rem] leading-[0.95] text-[#111111]">
              Stories shaped by learning, ambition and growth.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-black/60">
              Hear from alumni who transformed their education at JG University
              into successful careers across media, technology, business,
              banking and the creative industries.
            </p>

            {/* CONTROLS */}
            <div className="mt-14 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/40 flex flex-col justify-between"
              >
                {/* QUOTE */}
                <div>
                  <div className="text-[#D4A514] text-7xl leading-none">“</div>

                  <p className="mt-4 text-[2rem] leading-[1.3] text-[#111111] font-light">
                    {testimonials[active].quote}
                  </p>
                </div>

                {/* PROFILE */}
                <div className="flex items-center gap-5 pt-10 border-t border-black/10">
                  <div className="relative w-18 h-18 rounded-full overflow-hidden shrink-0 bg-[#ECE8E1]">
                    <Image
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl text-[#111111]">
                      {testimonials[active].name}
                    </h3>

                    <p className="mt-1 text-black/50 leading-relaxed">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* INDICATORS */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`transition-all duration-500 rounded-full ${
                    active === index
                      ? "w-10 h-2 bg-[#111111]"
                      : "w-2 h-2 bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
