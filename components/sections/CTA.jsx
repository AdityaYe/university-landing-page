"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-[#F7F5F2] pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[620px] rounded-[3rem] overflow-hidden"
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/extra/group-image.png"
            alt="JG University"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-[90%] max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <span className="uppercase tracking-[0.25em] text-sm text-[#D4A514]">
                  Admissions Open 2026
                </span>

                <h2 className="mt-8 text-[5rem] leading-[0.92] text-white">
                  Build your future at JG University.
                </h2>

                <p className="mt-8 text-xl leading-relaxed text-white/70 max-w-2xl">
                  Join a future-focused learning ecosystem built around
                  innovation, industry collaboration, creativity and real-world
                  impact.
                </p>

                {/* BUTTONS */}
                <div className="mt-12 flex flex-wrap gap-5">
                  {/* PRIMARY */}
                  <button className="px-8 py-4 rounded-full bg-[#D4A514] text-white text-sm tracking-wide hover:opacity-90 transition-all duration-500">
                    Apply Now
                  </button>

                  {/* SECONDARY */}
                  <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-sm tracking-wide hover:bg-white/20 transition-all duration-500">
                    Visit Campus
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM GLASS CARD */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] px-8 py-6 hidden lg:flex items-center gap-12">
            <div>
              <p className="text-white text-3xl">30+</p>

              <p className="mt-1 text-sm text-white/60">
                Years of Academic Excellence
              </p>
            </div>

            <div className="w-px h-12 bg-white/10" />

            <div>
              <p className="text-white text-3xl">17+</p>

              <p className="mt-1 text-sm text-white/60">
                Colleges & Institutions
              </p>
            </div>

            <div className="w-px h-12 bg-white/10" />

            <div>
              <p className="text-white text-3xl">Future</p>

              <p className="mt-1 text-sm text-white/60">
                Ready Learning Ecosystem
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
