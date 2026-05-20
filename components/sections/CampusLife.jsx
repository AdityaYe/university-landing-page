"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Container from "../ui/Container";

const horizontalImages = [
  "/images/campus/campus-2.webp",
  "/images/campus/campus-3.jpg",
  "/images/campus/campus-6.jpg",
  "/images/campus/campus-5.webp",
  "/images/campus/campus-9.jpg",
  "/images/campus/campus-10.jpg",
];

const festImages = [
  "/images/campus/campus-15.jpg",
  "/images/campus/campus-7.jpg",
  "/images/campus/campus-12.jpg",
  "/images/campus/campus-13.jpg",
  "/images/campus/campus-14.jpg",
];

export default function Campus() {
  const [activeImage, setActiveImage] = useState(0);

  const trackRef = useRef(null);

  /* CROSSFADE */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % festImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* AUTO HORIZONTAL SCROLL */
  useEffect(() => {
    const container = trackRef.current;

    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame;

    const autoScroll = () => {
      const speed = window.innerWidth < 1024 ? 0.45 : 0.7;

      container.scrollLeft += speed;

      // smoother infinite loop
      const maxScroll = container.scrollWidth / 3;

      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="campus-life"
      className="relative bg-[#F7F5F2] py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <Container>
        {/* HERO */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-end">
          {/* LEFT */}
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[11px] lg:text-sm text-[#B68D40]">
              Campus Experience
            </span>

            <h2 className="mt-3 lg:mt-6 text-[2.05rem] sm:text-[2.45rem] lg:text-[3.2rem] leading-none lg:leading-[0.95] text-[#111111]">
              A future-ready campus built for innovation and student life.
            </h2>

            <p className="mt-4 lg:mt-8 text-sm sm:text-[15px] lg:text-lg leading-relaxed text-black/60">
              JG University combines collaborative learning spaces, advanced
              classrooms, IIoT Labs, R&D + Incubation Centres, tech-enabled
              libraries, and a fully Wi-Fi enabled campus to create a modern
              ecosystem for future-ready education.
            </p>
          </div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-60 sm:h-75 lg:h-90 rounded-[1.4rem] lg:rounded-[2.4rem] overflow-hidden group"
          >
            <Image
              src="/images/campus/campus-1.webp"
              alt="Campus"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-8">
              <h3 className="text-white text-2xl lg:text-4xl leading-tight max-w-60">
                Spaces designed for learning, collaboration and growth.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* HORIZONTAL STRIP */}
        <div className="relative mt-8 lg:mt-14 border-y border-black/10 py-3">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 hidden lg:block h-full w-10 bg-linear-to-r from-[#F7F5F2] via-[#F7F5F2] to-transparent z-30 pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 hidden lg:block h-full w-10 bg-linear-to-l from-[#F7F5F2] via-[#F7F5F2] to-transparent z-30 pointer-events-none" />

          {/* SCROLL CONTAINER */}
          <div
            ref={trackRef}
            className="overflow-x-auto no-scrollbar touch-pan-x"
          >
            <div className="flex gap-3 lg:gap-4 w-max whitespace-nowrap">
              {[
                ...horizontalImages,
                ...horizontalImages,
                ...horizontalImages,
              ].map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="relative w-55 sm:w-70 lg:w-90 h-33 sm:h-42 lg:h-52 rounded-[1.35rem] lg:rounded-[2.2rem] overflow-hidden shrink-0"
                >
                  <Image
                    src={image}
                    alt="JG University campus space"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* CULTURE SECTION */}
        <div className="mt-8 lg:mt-14 grid lg:grid-cols-[1fr_0.9fr] gap-4 lg:gap-5 items-center">
          {/* IMAGE */}
          <div className="relative h-65 sm:h-80 lg:h-90 rounded-[1.4rem] lg:rounded-4xl overflow-hidden">
            {festImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeImage === index ? 1 : 0,
                  scale: activeImage === index ? 1 : 1.05,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt="JG University campus culture"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            ))}

            <div className="absolute bottom-5 left-5 lg:bottom-8 lg:left-8 z-20">
              <p className="text-white/70 uppercase tracking-[0.18em] lg:tracking-[0.2em] text-[10px] lg:text-xs">
                Campus Life
              </p>

              <h3 className="mt-2 lg:mt-3 text-white text-2xl lg:text-4xl leading-tight max-w-lg">
                Culture, creativity, innovation and unforgettable experiences.
              </h3>
            </div>
          </div>

          {/* TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[1.4rem] lg:rounded-4xl p-4 sm:p-5 lg:p-6 min-h-65 lg:h-90 flex flex-col justify-between"
          >
            <div>
              <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[10px] lg:text-xs text-[#B68D40]">
                Student Culture
              </span>

              <h3 className="mt-3 lg:mt-4 text-2xl lg:text-3xl leading-[1.05] text-[#111111] max-w-md">
                Beyond academics, a vibrant student experience.
              </h3>

              <p className="mt-3 lg:mt-5 text-black/60 leading-relaxed text-[13px] sm:text-sm lg:text-[15px]">
                From technical communities and collaborative workshops to
                cultural festivals, performances, competitions, and student-led
                initiatives, campus life at JG University is designed to inspire
                creativity, connection, and growth.
              </p>
            </div>

            <div className="mt-5 lg:mt-7 flex gap-8 border-t border-black/10 pt-4 lg:pt-5">
              <div>
                <p className="text-xl lg:text-2xl text-[#111111]">24x7</p>

                <p className="mt-1 text-[11px] lg:text-xs text-black/50">
                  Learning Environment
                </p>
              </div>

              <div>
                <p className="text-xl lg:text-2xl text-[#111111]">10+</p>

                <p className="mt-1 text-[11px] lg:text-xs text-black/50">
                  Innovation Spaces
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
