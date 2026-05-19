"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Container from "../ui/Container";
import { programmes } from "../../data/programmes";

export default function Footer() {
  const ugProgrammes = programmes.filter(
    (programme) => programme.category === "Undergraduate",
  );

  const pgProgrammes = programmes.filter(
    (programme) => programme.category === "Postgraduate",
  );

  const phdProgrammes = programmes.filter(
    (programme) => programme.category === "Doctoral",
  );

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">
      {/* TOP */}
      <section className="pt-12 pb-10 border-b border-white/10 lg:pt-24 lg:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT */}
            <div>
              {/* LOGO */}
              <div className="relative w-[210px] h-[64px] lg:w-[280px] lg:h-[85px]">
                <Image
                  src="/images/logo/jg-un-1-logo.png"
                  alt="JG University"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="mt-6 text-[2.05rem] leading-[1] max-w-xl lg:mt-10 lg:text-[3.5rem] lg:leading-[0.95]">
                Future-ready education designed for tomorrow’s leaders.
              </h2>

              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-lg lg:mt-8 lg:text-base">
                JG University combines academic excellence, industry-driven
                learning, innovation ecosystems and vibrant campus life to
                create transformative learning experiences.
              </p>

              {/* BUTTONS */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-4 lg:mt-10">
                <Link href="/admissions">
                  <button className="h-10 w-full px-4 rounded-full bg-[#D4A514] text-xs text-white hover:scale-[1.03] transition-all duration-500 sm:w-auto lg:h-14 lg:px-7 lg:text-base">
                    Apply Now
                  </button>
                </Link>

                <a
                  href="/brochures/jg-university-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-10 w-full px-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs text-white hover:bg-white/10 transition-all duration-500 sm:w-auto lg:h-14 lg:px-7 lg:text-base">
                    Download Brochure
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4 lg:gap-10">
              {/* UG */}
              <div>
                <p className="uppercase tracking-[0.22em] text-xs text-white/40">
                  Undergraduate
                </p>

                <div className="mt-4 space-y-2.5 lg:mt-7 lg:space-y-4">
                  {ugProgrammes.map((programme) => (
                    <Link
                      key={programme.slug}
                      href={`/programmes/${programme.slug}`}
                      className="group flex items-center justify-between gap-3 text-sm text-white/70 hover:text-white transition-all lg:text-base"
                    >
                      <span>{programme.title}</span>

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* PG */}
              <div>
                <p className="uppercase tracking-[0.22em] text-xs text-white/40">
                  Postgraduate
                </p>

                <div className="mt-4 space-y-2.5 lg:mt-7 lg:space-y-4">
                  {pgProgrammes.map((programme) => (
                    <Link
                      key={programme.slug}
                      href={`/programmes/${programme.slug}`}
                      className="group flex items-center justify-between gap-3 text-sm text-white/70 hover:text-white transition-all lg:text-base"
                    >
                      <span>{programme.title}</span>

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* PHD */}
              <div>
                <p className="uppercase tracking-[0.22em] text-xs text-white/40">
                  Doctoral
                </p>

                <div className="mt-4 space-y-2.5 lg:mt-7 lg:space-y-4">
                  {phdProgrammes.map((programme) => (
                    <Link
                      key={programme.slug}
                      href={`/programmes/${programme.slug}`}
                      className="group flex items-center justify-between gap-3 text-sm text-white/70 hover:text-white transition-all lg:text-base"
                    >
                      <span>{programme.title}</span>

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <p className="uppercase tracking-[0.22em] text-xs text-white/40">
                  Contact
                </p>

                <div className="mt-4 space-y-4 lg:mt-7 lg:space-y-6">
                  {/* ADDRESS */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <MapPin
                      size={18}
                      className="text-[#D4A514] shrink-0 mt-1"
                    />

                    <p className="text-white/65 leading-relaxed text-sm">
                      ASIA Campus, Drive In Rd,
                      <br />
                      Thaltej, Ahmedabad-380054, Gujarat, India.
                    </p>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <Mail size={18} className="text-[#D4A514] shrink-0 mt-1" />

                    <div className="space-y-1 text-sm">
                      <a
                        href="mailto:connect@jguni.in"
                        className="block text-white/65 hover:text-white transition"
                      >
                        connect@jguni.in
                      </a>

                      <a
                        href="mailto:admission@jguni.in"
                        className="block text-white/65 hover:text-white transition"
                      >
                        admission@jguni.in
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3 lg:gap-4">
                    <Phone size={18} className="text-[#D4A514] shrink-0 mt-1" />

                    <a
                      href="tel:+917567756758"
                      className="text-white/65 hover:text-white transition text-sm"
                    >
                      +91 7567 7567 58/59
                    </a>
                  </div>

                  {/* SOCIALS */}
                  <div className="flex items-center gap-2.5 pt-1 lg:gap-3 lg:pt-3">
                    {[
                      {
                        icon: FaInstagram,
                        href: "https://www.instagram.com/jguniversity",
                      },

                      {
                        icon: FaLinkedinIn,
                        href: "https://www.linkedin.com/company/jg-university/",
                      },

                      {
                        icon: FaYoutube,
                        href: "https://www.youtube.com/channel/UCyR1OyKN8l2Srj5G0H1WRyg/featured",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-[#D4A514] hover:border-[#D4A514] transition-all duration-500 flex items-center justify-center lg:w-11 lg:h-11"
                        >
                          <Icon size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM */}
      <section className="py-5 lg:py-7">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-5">
            <p className="text-white/35 text-xs lg:text-sm">
              © 2026 JG University. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40 lg:gap-8 lg:text-sm">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="/admissions" className="hover:text-white transition">
                Admissions
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>

              <a
                href="/brochures/jg-university-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Brochure
              </a>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
}
