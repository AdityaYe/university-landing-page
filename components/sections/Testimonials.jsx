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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    <section
      id="testimonials"
      className="bg-[#F7F5F2] py-14 sm:py-16 lg:py-28 overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-7 lg:gap-10 items-center">
          <div className="max-w-md">
            <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[11px] lg:text-sm text-[#B68D40]">
              Alumni Voices
            </span>

            <h2 className="mt-3 lg:mt-6 text-[2.05rem] sm:text-[2.45rem] lg:text-[4rem] leading-[1] lg:leading-[0.95] text-[#111111]">
              Stories shaped by learning, ambition and growth.
            </h2>

            <p className="mt-4 lg:mt-8 text-sm sm:text-[15px] lg:text-lg leading-relaxed text-black/60">
              Hear from alumni who transformed their education at JG University
              into successful careers across media, technology, business,
              banking and the creative industries.
            </p>
          </div>

          <div>
            <div className="relative h-[390px] sm:h-[430px] lg:h-[520px]">
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
                  className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[1.5rem] lg:rounded-[3rem] p-5 sm:p-6 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[#D4A514] text-4xl lg:text-7xl leading-none">
                      &quot;
                    </div>

                    <blockquote className="mt-3 lg:mt-4 text-[1.2rem] sm:text-[1.35rem] lg:text-[2rem] leading-[1.35] lg:leading-[1.3] text-[#111111] font-light">
                      {testimonials[active].quote}
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-5 pt-5 lg:pt-10 border-t border-black/10">
                    <div className="relative w-12 h-12 lg:w-18 lg:h-18 rounded-full overflow-hidden shrink-0 bg-[#ECE8E1]">
                      <Image
                        src={testimonials[active].image}
                        alt={testimonials[active].name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg lg:text-2xl text-[#111111]">
                        {testimonials[active].name}
                      </h3>

                      <p className="mt-0.5 lg:mt-1 text-xs lg:text-base text-black/50 leading-relaxed">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={testimonials[index].name}
                  onClick={() => setActive(index)}
                  type="button"
                  aria-label={`Show testimonial from ${testimonials[index].name}`}
                  aria-current={active === index ? "true" : undefined}
                  className={`transition-all duration-500 rounded-full ${
                    active === index
                      ? "w-10 h-2 bg-[#111111]"
                      : "w-2 h-2 bg-black/20"
                  }`}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 lg:gap-4">
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Show previous testimonial"
                className="w-11 h-11 lg:w-14 lg:h-14 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              <button
                onClick={nextSlide}
                type="button"
                aria-label="Show next testimonial"
                className="w-11 h-11 lg:w-14 lg:h-14 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
