"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";

import Container from "../../components/ui/Container";

export default function ContactPage() {
  return (
    <main className="bg-[#F7F5F2] overflow-hidden">
      {/* HERO */}
      <section className="relative h-svh min-h-155 overflow-hidden">
        {/* IMAGE */}
        <Image
          src="/images/hero/asia-campus-image.webp"
          alt="JG University Campus"
          fill
          priority
          className="object-cover object-center"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end">
          <Container className="pb-10 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="uppercase tracking-[0.22em] md:tracking-[0.25em] text-[11px] md:text-sm text-[#D4A514]">
                Contact JG University
              </p>

              <h1 className="mt-3 md:mt-6 text-white text-[2.35rem] sm:text-[3.2rem] md:text-[5.5rem] leading-none md:leading-[0.92] tracking-tight">
                Let&apos;s connect and shape your future together.
              </h1>

              <p className="mt-3 md:mt-8 text-[13px] sm:text-base md:text-xl leading-relaxed text-white/70 max-w-2xl">
                Visit our Ahmedabad campus and connect with a future-focused
                academic ecosystem built around innovation, creativity and
                industry-ready learning.
              </p>

              {/* BUTTONS */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex md:mt-10 md:gap-5">
                <a
                  href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x395e8353dee254bb:0x6909d82c9319e0a0!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#D4A514] px-4 text-xs text-white transition-all duration-500 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A514] md:h-14 md:w-auto md:px-7 md:text-base"
                >
                  Visit Campus
                </a>

                <Link
                  href="/admissions"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 text-xs text-white backdrop-blur-md transition-all duration-500 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-14 md:w-auto md:px-7 md:text-base"
                >
                  Admissions
                </Link>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-10 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10">
            {/* LEFT */}
            <div className="max-w-xl">
              <span className="uppercase tracking-[0.22em] md:tracking-[0.25em] text-[11px] md:text-sm text-[#B68D40]">
                Main Campus
              </span>

              <h2 className="mt-3 md:mt-6 text-[1.9rem] md:text-[4rem] leading-none md:leading-[0.95] text-[#111111]">
                Visit our Ahmedabad campus.
              </h2>

              <p className="mt-3 md:mt-8 text-sm md:text-lg leading-relaxed text-black/60">
                Whether you&apos;re exploring admissions, partnerships, campus life
                or academic opportunities, our team is here to help you at every
                step.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-3.5 md:gap-5">
              {/* ADDRESS */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[1.15rem] md:rounded-[2.5rem] p-3.5 md:p-8"
              >
                <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F5F1EA] flex items-center justify-center">
                  <MapPin
                    size={24}
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#B68D40]"
                  />
                </div>

                <h3 className="mt-3 md:mt-8 text-lg md:text-2xl text-[#111111]">Address</h3>

                <p className="mt-2 md:mt-5 text-[13px] md:text-base text-black/60 leading-relaxed">
                  ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat,
                  India.
                </p>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-[1.15rem] md:rounded-[2.5rem] p-3.5 md:p-8"
              >
                <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F5F1EA] flex items-center justify-center">
                  <Mail
                    size={24}
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#B68D40]"
                  />
                </div>

                <h3 className="mt-3 md:mt-8 text-lg md:text-2xl text-[#111111]">Email</h3>

                <div className="mt-2 md:mt-5 space-y-1.5 text-[13px] md:text-base">
                  <a
                    href="mailto:connect@jguni.in"
                    className="block text-black/60 hover:text-[#B68D40] transition"
                  >
                    connect@jguni.in
                  </a>

                  <a
                    href="mailto:admission@jguni.in"
                    className="block text-black/60 hover:text-[#B68D40] transition"
                  >
                    admission@jguni.in
                  </a>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-[1.15rem] md:rounded-[2.5rem] p-3.5 md:p-8"
              >
                <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F5F1EA] flex items-center justify-center">
                  <Phone
                    size={24}
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#B68D40]"
                  />
                </div>

                <h3 className="mt-3 md:mt-8 text-lg md:text-2xl text-[#111111]">Phone</h3>

                <a
                  href="tel:+917567756758"
                  className="mt-2 md:mt-5 block text-[13px] md:text-base text-black/60 hover:text-[#B68D40] transition"
                >
                  +91 7567 7567 58/59
                </a>
              </motion.div>

              {/* HOURS */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="bg-[#111111] text-white rounded-[1.15rem] md:rounded-[2.5rem] p-3.5 md:p-8"
              >
                <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center">
                  <Clock3
                    size={24}
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#D4A514]"
                  />
                </div>

                <h3 className="mt-3 md:mt-8 text-lg md:text-2xl">Office Hours</h3>

                <p className="mt-2 md:mt-5 text-[13px] md:text-base text-white/65 leading-relaxed">
                  Monday - Saturday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* MAP */}
      <section className="pb-14 md:pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl md:rounded-[3rem] overflow-hidden border border-black/5 bg-white"
          >
            {/* MAP */}
            <div className="relative h-80 md:h-155">
              <iframe
                title="JG University campus location map"
                src="https://www.google.com/maps?q=JG+University+Ahmedabad&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* BOTTOM */}
            <div className="px-5 md:px-8 py-5 md:py-7 border-t border-black/5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6">
              <div>
                <p className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[10px] md:text-xs text-black/40">
                  Campus Navigation
                </p>

                <h3 className="mt-2 text-xl md:text-2xl text-[#111111]">
                  Explore the JG University campus in person.
                </h3>
              </div>

              <a
                href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x395e8353dee254bb:0x6909d82c9319e0a0!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 md:h-14 px-5 md:px-7 rounded-full bg-[#111111] text-white text-sm md:text-base flex items-center justify-center gap-3 hover:bg-[#B68D40] transition-all duration-500 shrink-0"
              >
                Open in Google Maps
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
