"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  CalendarDays,
  BadgeCheck,
  Globe2,
} from "lucide-react";

import Container from "../../components/ui/Container";
import AdmissionModal from "../../components/ui/AdmissionModal";

export default function AdmissionsPage() {
  const [activeProgramme, setActiveProgramme] = useState("ug");
  return (
    <main className="bg-[#F7F5F2] overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/extra/admissions-image.png"
          alt="Admissions"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <Container className="pb-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#D4A514]">
                Admissions 2026
              </p>

              <h1 className="mt-6 text-white text-[5.5rem] leading-[0.92] tracking-tight">
                Build your future at JG University.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-white/70 max-w-2xl">
                A seamless admission experience designed to identify ambitious
                learners, future innovators and leaders ready to create
                meaningful impact.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <AdmissionModal />

                <a
                  href="/brochures/jg-university-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-14 px-7 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-500">
                    Download Brochure
                  </button>
                </a>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* PROGRAMME SELECTOR */}
      <section className="pb-24">
        <Container>
          {/* TABS */}
          <div className="bg-white rounded-[2.8rem] p-3 border border-black/5">
            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  id: "ug",
                  title: "UG Programmes",
                  subtitle: "Undergraduate Admissions",
                },

                {
                  id: "pg",
                  title: "PG Programmes",
                  subtitle: "Postgraduate Admissions",
                },

                {
                  id: "phd",
                  title: "Ph.D Programmes",
                  subtitle: "Research & Doctoral Studies",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProgramme(item.id)}
                  className={`group relative overflow-hidden rounded-[2rem] px-8 py-8 text-left transition-all duration-500 ${
                    activeProgramme === item.id
                      ? "bg-[#111111] text-white"
                      : "bg-[#F7F5F2] hover:bg-[#EFE9DE]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      activeProgramme === item.id
                        ? "bg-white/5"
                        : "bg-gradient-to-br from-[#D4A514]/10 to-transparent"
                    }`}
                  />

                  <div className="relative z-10">
                    <p
                      className={`text-xs uppercase tracking-[0.22em] ${
                        activeProgramme === item.id
                          ? "text-white/40"
                          : "text-black/35"
                      }`}
                    >
                      {item.subtitle}
                    </p>

                    <h3
                      className={`mt-4 text-[2rem] leading-[1] ${
                        activeProgramme === item.id
                          ? "text-white"
                          : "text-[#111111]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`mt-8 h-[2px] w-full transition-all duration-500 ${
                        activeProgramme === item.id
                          ? "bg-[#D4A514]"
                          : "bg-black/8 group-hover:bg-[#B68D40]"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* UG CONTENT */}
          {activeProgramme === "ug" && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-20"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-end">
                <div>
                  <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
                    Undergraduate Admissions
                  </span>

                  <h2 className="mt-6 text-[4rem] leading-[0.95] text-[#111111]">
                    UG Programmes
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-black/60">
                    Candidates applying for undergraduate programmes go through
                    a carefully designed admission process focused on academic
                    readiness, communication skills, and potential.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-black/60">
                    The admission process includes application submission,
                    personal interaction, selection notification and admission
                    confirmation.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                {[
                  {
                    number: "01",
                    title: "Application for Admission",
                    description:
                      "Candidates complete the application form and submit essential academic details.",
                  },

                  {
                    number: "02",
                    title: "Personal Interaction & Assessment",
                    description:
                      "A one-on-one interaction round is conducted with university representatives.",
                  },

                  {
                    number: "03",
                    title: "Offer of Admission",
                    description:
                      "Selected candidates receive admission confirmation through message or email.",
                  },

                  {
                    number: "04",
                    title: "Admission Confirmation",
                    description:
                      "Students secure admission through successful fee payment.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[2.5rem] p-8 min-h-[320px] flex flex-col justify-between ${
                      index % 2 === 0 ? "bg-[#111111] text-white" : "bg-white"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        index % 2 === 0 ? "text-white/40" : "text-black/30"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-3xl leading-tight">{item.title}</h3>

                      <p
                        className={`mt-5 leading-relaxed ${
                          index % 2 === 0 ? "text-white/65" : "text-black/60"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PG CONTENT */}
          {activeProgramme === "pg" && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-20"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-end">
                <div>
                  <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
                    Postgraduate Admissions
                  </span>

                  <h2 className="mt-6 text-[4rem] leading-[0.95] text-[#111111]">
                    PG Programmes
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-black/60">
                    Postgraduate admissions at JG University are designed to
                    assess analytical ability, aptitude and academic
                    preparedness through JGET and personal assessment rounds.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-black/60">
                    Candidates with CAT, CMAT, XAT, NMAT, MAT, SNAP, GRE and
                    equivalent examinations may receive exemption from JGET.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {[
                  {
                    number: "01",
                    title: "Application for Admission",
                    description:
                      "Candidates submit applications for MBA, MCA and M.Com programmes.",
                  },

                  {
                    number: "02",
                    title: "JGET Examination",
                    description:
                      "JG University Entrance Test evaluates aptitude and academic readiness.",
                  },

                  {
                    number: "03",
                    title: "Result Announcement",
                    description:
                      "JGET results are officially announced through the university website.",
                  },

                  {
                    number: "04",
                    title: "Personal Interaction",
                    description:
                      "Candidates participate in detailed interaction and assessment rounds.",
                  },

                  {
                    number: "05",
                    title: "Offer of Admission",
                    description:
                      "Selected candidates receive official admission offers.",
                  },

                  {
                    number: "06",
                    title: "Admission Confirmation",
                    description:
                      "Seats are secured after successful fee payment.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[2.5rem] p-8 min-h-[290px] flex flex-col justify-between"
                  >
                    <span className="text-sm text-black/30">{item.number}</span>

                    <div>
                      <h3 className="text-3xl leading-tight text-[#111111]">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-black/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PHD CONTENT */}
          {activeProgramme === "phd" && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-20 bg-[#111111] text-white rounded-[3rem] p-10 md:p-14"
            >
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14">
                <div>
                  <span className="uppercase tracking-[0.22em] text-xs text-[#D4A514]">
                    Research & Innovation
                  </span>

                  <h2 className="mt-6 text-5xl leading-[1]">Ph.D Programmes</h2>

                  <p className="mt-6 text-white/65 text-lg leading-relaxed">
                    Our doctoral admission process is designed to identify
                    candidates prepared for advanced academic research and
                    contribution to their respective fields.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: "JGET for Ph.D Admissions",
                      description:
                        "JGET assesses research aptitude, subject knowledge and readiness for doctoral-level study.",
                    },

                    {
                      title: "Eligibility & Exemptions",
                      description:
                        "NET, SLET and MPhil qualified candidates may receive exemption from JGET.",
                    },

                    {
                      title: "Research Assessment",
                      description:
                        "Candidates participate in interaction rounds focused on research interests and academic potential.",
                    },

                    {
                      title: "Admission Confirmation",
                      description:
                        "Selected applicants secure admission upon successful completion of formalities and fee payment.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-[2rem] p-7"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-2xl leading-tight">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-white/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <span className="text-white/25 text-sm">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden"
          >
            {/* BG */}
            <div className="absolute inset-0">
              <Image
                src="/images/extra/group-image.png"
                alt="Admissions"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/90" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 py-28 px-10 text-center">
              <p className="uppercase tracking-[0.25em] text-sm text-[#D4A514]">
                Begin Your Journey
              </p>

              <h2 className="mt-6 text-white text-[4rem] leading-[0.95] max-w-4xl mx-auto">
                Ready to become part of the JG University ecosystem?
              </h2>

              <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
                Start your admission process today and take the next step
                towards innovation-driven education and future-ready
                opportunities.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <AdmissionModal />

                <a
                  href="/brochures/jg-university-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-16 px-8 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-all">
                    Download Brochure
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
