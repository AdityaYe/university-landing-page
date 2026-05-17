"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  CalendarDays,
  BadgeCheck,
  Globe2,
} from "lucide-react";

import Container from "../../components/ui/Container";

export default function AdmissionsPage() {
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
                <button className="h-14 px-7 rounded-full bg-[#D4A514] text-white hover:scale-[1.03] transition-all duration-500">
                  Apply Now
                </button>

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

      {/* PROCESS INTRO */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-end">
            {/* LEFT */}
            <div>
              <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
                Admission Process
              </span>

              <h2 className="mt-6 text-[4rem] leading-[0.95] text-[#111111]">
                Designed to recognize potential beyond academics.
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-lg leading-relaxed text-black/60">
                Our admission process enables us to give careful attention to
                every individual application. At every stage, our team evaluates
                academic potential, communication, curiosity, and readiness to
                contribute meaningfully to the university ecosystem.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-black/60">
                Through a flexible and student-focused approach, we aim to
                create a seamless admission experience while identifying
                learners who are eager to grow, innovate and give back to the
                community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* UG PROCESS */}
      <section className="pb-24">
        <Container>
          <div className="flex items-end justify-between gap-10 flex-wrap">
            <div>
              <span className="uppercase tracking-[0.22em] text-xs text-[#B68D40]">
                Undergraduate Admissions
              </span>

              <h3 className="mt-4 text-5xl leading-[1] text-[#111111]">
                UG Programmes
              </h3>
            </div>

            <p className="max-w-xl text-black/60 leading-relaxed">
              A streamlined process focused on understanding each student’s
              aspirations, academic readiness and potential.
            </p>
          </div>

          {/* STEPS */}
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
                title: "Personal Interaction",
                description:
                  "A one-on-one interaction and assessment round is conducted with university representatives.",
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
                  "Students secure their admission by completing the fee payment process.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PG + PHD */}
      <section className="pb-24">
        <Container>
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8">
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#111111] text-white rounded-[3rem] p-10 flex flex-col justify-between min-h-[620px]"
            >
              <div>
                <span className="uppercase tracking-[0.22em] text-xs text-[#D4A514]">
                  Postgraduate & Research
                </span>

                <h2 className="mt-6 text-5xl leading-[1]">
                  Advanced learning for future leaders and researchers.
                </h2>

                <p className="mt-6 text-white/65 text-lg leading-relaxed">
                  Our postgraduate and doctoral admission process combines
                  aptitude evaluation, academic assessment and personal
                  interaction to identify candidates prepared for higher-level
                  learning and research.
                </p>
              </div>

              <div className="space-y-5">
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                    Eligible Programmes
                  </p>

                  <p className="mt-2 text-xl">MBA · MCA · M.Com · Ph.D</p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                    Entrance Test
                  </p>

                  <p className="mt-2 text-xl">
                    JGET – JG University Entrance Test
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-5">
              {[
                {
                  title: "JG University Entrance Test (JGET)",
                  description:
                    "JGET evaluates aptitude, analytical ability and subject knowledge for postgraduate and doctoral admissions.",
                },

                {
                  title: "Exemptions",
                  description:
                    "Candidates with CAT, CMAT, GMAT, XAT, NMAT, MAT, SNAP, GRE and equivalent qualifications may receive exemption from JGET.",
                },

                {
                  title: "Personal Interaction & Assessment",
                  description:
                    "Shortlisted candidates participate in personal interaction rounds with university representatives.",
                },

                {
                  title: "Offer & Confirmation",
                  description:
                    "Successful candidates receive admission offers and can confirm their seats through fee payment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-3xl leading-tight text-[#111111]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-black/20 text-sm shrink-0">
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                <button className="h-16 px-8 rounded-full bg-[#D4A514] text-white hover:scale-[1.03] transition-all">
                  Apply Now
                </button>

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
