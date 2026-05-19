"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "../ui/Container";
import AdmissionModal from "../ui/AdmissionModal";

export default function CTA() {
  return (
    <section className="bg-[#F7F5F2] pb-14 lg:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[205px] sm:h-[430px] lg:h-[620px] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden"
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/extra/group-image.png"
            alt="JG University"
            fill
            className="object-contain bg-[#111111] lg:object-cover lg:bg-transparent"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/80 lg:bg-black/50" />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-end lg:items-center">
            <div className="w-[92%] max-w-7xl mx-auto">
              <div className="max-w-3xl pb-4 lg:pb-0">
                <span className="uppercase tracking-[0.18em] lg:tracking-[0.25em] text-[9px] lg:text-sm text-[#D4A514] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Admissions Open 2026
                </span>

                <h2 className="mt-2 lg:mt-8 text-[1.25rem] sm:text-[2.4rem] lg:text-[5rem] leading-[0.95] lg:leading-[0.92] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                  Build your future at JG University.
                </h2>

                <p className="hidden mt-4 lg:mt-8 text-sm sm:text-base lg:text-xl leading-relaxed text-white/70 max-w-2xl lg:block">
                  Join a future-focused learning ecosystem built around
                  innovation, industry collaboration, creativity and real-world
                  impact.
                </p>

                {/* BUTTONS */}
                <div className="mt-3 lg:mt-12 flex items-center gap-2 lg:gap-5">
                  {/* PRIMARY */}
                  <div className="flex-1 lg:flex-none">
                    <AdmissionModal className="w-full lg:w-auto h-9 lg:h-auto px-4 lg:px-8 text-[11px] lg:text-sm" />
                  </div>

                  {/* SECONDARY */}
                  <a
                    href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x395e8353dee254bb:0x6909d82c9319e0a0!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none"
                  >
                    <button className="w-full lg:w-auto h-9 lg:h-auto px-4 lg:px-8 py-0 lg:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-[11px] lg:text-sm tracking-wide hover:bg-white/20 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.65)]">
                      Visit Campus
                    </button>
                  </a>
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
