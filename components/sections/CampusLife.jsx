"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import gsap from "gsap";

import Container from "../ui/Container";

const horizontalImages = [
  "/images/campus/campus-3.jpg",
  "/images/campus/campus-6.jpg",
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
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % festImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* AUTO HORIZONTAL SCROLL */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,

      duration: 28,

      ease: "none",

      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section id="campus-life" className="relative bg-[#F7F5F2] py-24 overflow-hidden">
      <Container>
        {/* HERO */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-end">
          {/* LEFT */}
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
              Campus Experience
            </span>

            <h2 className="mt-6 text-[3.2rem] leading-[0.95] text-[#111111]">
              A future-ready campus built for innovation and student life.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-black/60">
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
            className="relative h-[360px] rounded-[2.4rem] overflow-hidden group"
          >
            <Image
              src="/images/campus/campus-1.jpg"
              alt="Campus"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-8">
              <h3 className="text-white text-4xl leading-tight max-w-60">
                Spaces designed for learning, collaboration and growth.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* HORIZONTAL STRIP */}
        <div className="relative mt-14 overflow-hidden border-y border-black/10 py-3">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-4 w-max will-change-transform"
          >
            {[...horizontalImages, ...horizontalImages].map((image, index) => (
              <div
                key={index}
                className="relative w-[360px] h-[210px] rounded-[2.2rem] overflow-hidden shrink-0"
              >
                <Image src={image} alt="Campus" fill className="object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* CULTURE SECTION */}
        <div className="mt-14 grid lg:grid-cols-[1fr_0.9fr] gap-5 items-center">
          {/* IMAGE */}
          <div className="relative h-[360px] rounded-[2rem] overflow-hidden">
            {festImages.map((image, index) => (
              <motion.div
                key={index}
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
                  alt="Campus Culture"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            ))}

            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-white/70 uppercase tracking-[0.2em] text-xs">
                Campus Life
              </p>

              <h3 className="mt-3 text-white text-4xl leading-tight max-w-lg">
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
            className="bg-white rounded-[2rem] p-6 h-[360px] flex flex-col justify-between"
          >
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#B68D40]">
                Student Culture
              </span>

              <h3 className="mt-4 text-3xl leading-[1.05] text-[#111111] max-w-md">
                Beyond academics, a vibrant student experience.
              </h3>

              <p className="mt-5 text-black/60 leading-relaxed text-[15px]">
                From technical communities and collaborative workshops to
                cultural festivals, performances, competitions, and student-led
                initiatives, campus life at JG University is designed to inspire
                creativity, connection, and growth.
              </p>
            </div>

            <div className="mt-7 flex gap-8 border-t border-black/10 pt-5">
              <div>
                <p className="text-2xl text-[#111111]">24×7</p>

                <p className="mt-1 text-xs text-black/50">
                  Learning Environment
                </p>
              </div>

              <div>
                <p className="text-2xl text-[#111111]">10+</p>

                <p className="mt-1 text-xs text-black/50">Innovation Spaces</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
