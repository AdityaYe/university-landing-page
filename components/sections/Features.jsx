"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BrainCircuit,
  GraduationCap,
  Lightbulb,
  BriefcaseBusiness,
  Globe,
  FlaskConical,
  Rocket,
  Building2,
} from "lucide-react";

import Container from "../ui/Container";

gsap.registerPlugin(ScrollTrigger);

const ecosystemFeatures = [
  {
    icon: BrainCircuit,
    title: "Interdisciplinary Learning",
    description:
      "Students from diverse academic backgrounds collaborate to solve problems through multiple perspectives, ideas, and approaches.",
  },

  {
    icon: GraduationCap,
    title: "Experiential Education",
    description:
      "Real-world projects, practical exposure, and immersive learning experiences designed to build hands-on expertise.",
  },

  {
    icon: Lightbulb,
    title: "Whole Brain Pedagogy",
    description:
      "A future-focused learning approach combining technical excellence, creativity, critical thinking, and innovation.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Industry & Academic Mentorship",
    description:
      "Learn from experienced faculty members with strong academic foundations and real-world industry expertise.",
  },

  {
    icon: Globe,
    title: "Global Academic Collaboration",
    description:
      "Collaborations with international universities for curriculum development, academic delivery, and student exchange opportunities.",
  },

  {
    icon: FlaskConical,
    title: "Industry-Led Learning",
    description:
      "Hands-on learning through emerging technologies, industry use-cases, and course-embedded capstone projects.",
  },

  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Cross-sector internships, on-the-job training opportunities, and industry exposure designed for career readiness.",
  },

  {
    icon: Building2,
    title: "24x7 Learning Environment",
    description:
      "Continuous accessibility to campus facilities, collaborative spaces, and advanced learning infrastructure.",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          cardsRef.current,
          {
            y: 300,
          },
          {
            y: -800,

            ease: "power1.out",

            scrollTrigger: {
              trigger: sectionRef.current,

              start: "top 20%",

              end: "+=1800",

              scrub: 2,

              pin: true,

              pinSpacing: true,

              anticipatePin: 1,
            },
          },
        );
      });

      return () => media.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="features"
        ref={sectionRef}
        className="bg-[#F7F5F2] py-14 sm:py-16 md:py-14 lg:py-32 overflow-hidden"
      >
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-10 md:gap-5 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[11px] lg:text-sm text-[#B68D40]">
                JG University
              </span>

              <h2 className="mt-3 lg:mt-8 text-[2.1rem] sm:text-[2.5rem] lg:text-[4.5rem] leading-[1] lg:leading-[0.95] text-[#111111] max-w-xl lg:max-w-none">
                Education built around innovation, industry and impact.
              </h2>

              <p className="mt-4 md:mt-3 lg:mt-10 text-sm sm:text-[15px] lg:text-xl leading-relaxed text-black/60 max-w-xl">
                An academic ecosystem designed to combine interdisciplinary
                learning, research, real-world exposure, and global
                opportunities for future-ready professionals.
              </p>
            </div>

            <div
              ref={cardsRef}
              className="grid sm:grid-cols-2 gap-3 sm:gap-3.5 lg:gap-5 lg:will-change-transform"
            >
              {ecosystemFeatures.map((item, index) => {
                const Icon = item.icon;
                const isDark = (Math.floor(index / 2) + index) % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.03,
                    }}
                    viewport={{ once: true }}
                    className={`rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2.5rem] p-3.5 sm:p-4 lg:p-8 min-h-[150px] sm:min-h-[188px] lg:min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                      isDark
                        ? "bg-[#111111] text-white"
                        : "bg-white border border-black/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center ${
                          isDark ? "bg-white/10" : "bg-[#F3EFE8]"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`lg:size-[26px] ${
                            isDark ? "text-[#D4A514]" : "text-[#B68D40]"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-xs lg:text-sm ${
                          isDark ? "text-white/40" : "text-black/30"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-4 lg:mt-8">
                      <h3 className="text-[1.2rem] sm:text-[1.35rem] lg:text-3xl leading-tight font-light max-w-xs">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 lg:mt-5 text-xs sm:text-[13px] lg:text-base leading-relaxed ${
                          isDark ? "text-white/65" : "text-black/60"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5F2] pt-2 pb-10 lg:-mt-150 lg:pt-8 lg:pb-16 relative z-50 isolation-isolate">
        <Container>
          <div className="max-w-4xl">
            <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[11px] lg:text-sm text-[#B68D40]">
              Leadership
            </span>

            <h2 className="mt-3 lg:mt-6 text-[2rem] sm:text-[2.45rem] lg:text-[4rem] leading-[1] lg:leading-[0.95] text-[#111111]">
              Visionary leadership shaping the future of education.
            </h2>

            <p className="mt-4 lg:mt-8 text-sm sm:text-[15px] lg:text-lg leading-relaxed text-black/60 max-w-3xl">
              JG University is guided by accomplished academic and industry
              leaders committed to innovation, research, and transformative
              education for future generations.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F5F2] pb-14 lg:pb-24 overflow-hidden relative z-50">
        <Container>
          <div className="space-y-12 lg:space-y-20">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-14 items-center">
              <div className="relative h-[260px] md:h-100 sm:h-[340px] lg:h-[430px] rounded-[1.4rem] lg:rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/images/leaders/mp-chandran-image.png"
                  alt="M.P Chandran"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="uppercase tracking-[0.18em] lg:tracking-[0.2em] text-[11px] lg:text-sm text-[#B68D40]">
                  President, JG University
                </span>

                <h3 className="mt-3 lg:mt-5 text-[2rem] sm:text-[2.35rem] lg:text-5xl leading-none text-[#111111]">
                  M.P Chandran
                </h3>

                <p className="mt-4 lg:mt-7 text-sm sm:text-[15px] lg:text-lg leading-relaxed text-black/65 max-w-2xl">
                  A postgraduate in management with over 30 years of leadership
                  experience across public and private sectors in India and
                  abroad. Chairperson of the Education Task Force at GCCI and
                  Chairman of ASIA Charitable Trust, which oversees 3 schools,
                  17 colleges, and JG University.
                </p>

                <div className="mt-5 lg:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4">
                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-2xl lg:text-3xl text-[#111111]">
                      30+
                    </h4>

                    <p className="mt-1.5 lg:mt-2 text-[11px] sm:text-xs lg:text-base text-black/55 leading-snug lg:leading-relaxed">
                      Years of leadership experience
                    </p>
                  </div>

                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-[13px] sm:text-sm lg:text-lg leading-tight text-[#111111]">
                      GCCI Education Task Force
                    </h4>

                    <p className="mt-1.5 lg:mt-2 text-[11px] sm:text-xs lg:text-base text-black/55 leading-snug lg:leading-relaxed">
                      Chairperson
                    </p>
                  </div>

                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-[13px] sm:text-sm lg:text-lg leading-tight text-[#111111]">
                      ASIA Charitable Trust
                    </h4>

                    <p className="mt-1.5 lg:mt-2 text-[11px] sm:text-xs lg:text-base text-black/55 leading-snug lg:leading-relaxed">
                      Chairman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-14 items-center">
              <div className="order-2 lg:order-1">
                <span className="uppercase tracking-[0.18em] lg:tracking-[0.2em] text-[11px] lg:text-sm text-[#B68D40]">
                  Director-General & Provost
                </span>

                <h3 className="mt-3 lg:mt-5 text-[2rem] sm:text-[2.35rem] lg:text-5xl leading-none text-[#111111]">
                  Dr. CA Achyut Dani
                </h3>

                <p className="mt-4 lg:mt-7 text-sm sm:text-[15px] lg:text-lg leading-relaxed text-black/65 max-w-2xl">
                  Academic leader, researcher, and strategist with over 21 years
                  of experience across management, commerce, taxation, and
                  international collaborations. Recipient of multiple national
                  recognitions for contributions to education and academic
                  excellence.
                </p>

                <div className="mt-5 lg:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4">
                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-[13px] sm:text-sm lg:text-lg leading-tight text-[#111111]">
                      Doctorate in Management & Commerce
                    </h4>
                  </div>

                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-[13px] sm:text-sm lg:text-lg leading-tight text-[#111111]">
                      Bharat Jyoti Award Recipient
                    </h4>
                  </div>

                  <div className="rounded-[1rem] lg:rounded-[1.6rem] bg-white border border-black/5 p-3 sm:p-4 lg:p-5">
                    <h4 className="text-[13px] sm:text-sm lg:text-lg leading-tight text-[#111111]">
                      International Academic Leadership
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 h-[260px] md:h-100 sm:h-[340px] lg:h-[430px] rounded-[1.4rem] lg:rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/images/leaders/ca-dani-image.png"
                  alt="Dr. CA Achyut Dani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
