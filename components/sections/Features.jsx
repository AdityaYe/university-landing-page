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
      "Students collaborate across diverse domains to solve problems through multiple perspectives and methods of thinking.",
    dark: true,
  },

  {
    icon: GraduationCap,
    title: "Experiential Education",
    description:
      "Hands-on learning through industry projects, internships, workshops, and immersive practical exposure.",
  },

  {
    icon: Lightbulb,
    title: "Whole Brain Pedagogy",
    description:
      "A future-focused academic model blending creativity, technical mastery, innovation, and critical thinking.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Industry-Led Faculty",
    description:
      "Learn from accomplished academicians and industry professionals with real-world expertise.",
    dark: true,
  },

  {
    icon: Globe,
    title: "Global Academic Exposure",
    description:
      "Collaborations with international universities for curriculum, exchange opportunities, and academic growth.",
  },

  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description:
      "Course-embedded capstone projects, research-driven learning, and innovation-focused academic culture.",
    dark: true,
  },

  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Cross-sector internships, on-the-job training opportunities, and strong placement support systems.",
  },

  {
    icon: Building2,
    title: "24×7 Learning Ecosystem",
    description:
      "Continuous access to advanced infrastructure, labs, collaborative spaces, and learning facilities.",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="features" ref={sectionRef} className="bg-[#F7F5F2] py-32 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            {/* LEFT */}
            <div className="sticky top-32">
              <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
                JG University
              </span>

              <h2 className="mt-8 text-[4.5rem] leading-[0.95] text-[#111111]">
                Education built around innovation, industry and impact.
              </h2>

              <p className="mt-10 text-xl leading-relaxed text-black/60 max-w-xl">
                An academic ecosystem designed to combine interdisciplinary
                learning, research, real-world exposure, and global
                opportunities for future-ready professionals.
              </p>
            </div>

            {/* RIGHT */}
            <div ref={cardsRef} className="grid md:grid-cols-2 gap-5 will-change-transform">
              {ecosystemFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className={`rounded-[2.5rem] p-8 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                      (Math.floor(index / 2) + index) % 2 === 0
                        ? "bg-[#111111] text-white"
                        : "bg-white border border-black/5"
                    }`}
                  >
                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          item.dark ? "bg-white/10" : "bg-[#F3EFE8]"
                        }`}
                      >
                        <Icon
                          size={26}
                          className={
                            item.dark ? "text-[#D4A514]" : "text-[#B68D40]"
                          }
                        />
                      </div>

                      <span
                        className={`text-sm ${
                          item.dark ? "text-white/40" : "text-black/30"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-8">
                      <h3 className="text-3xl leading-tight font-light max-w-xs">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-5 leading-relaxed ${
                          item.dark ? "text-white/65" : "text-black/60"
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
      {/* LEADERSHIP INTRO */}
      <section className="bg-[#F7F5F2] -mt-200 pt-8 pb-16 relative z-50 isolation-isolate">
        <Container>
          <div className="max-w-4xl">
            <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
              Leadership
            </span>

            <h2 className="mt-6 text-[4rem] leading-[0.95] text-[#111111]">
              Visionary leadership shaping the future of education.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-black/60 max-w-3xl">
              JG University is guided by accomplished academic and industry
              leaders committed to innovation, research, and transformative
              education for future generations.
            </p>
          </div>
        </Container>
      </section>

      {/* LEADERS */}
      <section className="bg-[#F7F5F2] pb-24 overflow-hidden relative z-50">
        <Container>
          <div className="space-y-20">
            {/* LEADER 1 */}
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
              {/* IMAGE */}
              <div className="relative h-[430px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/images/leaders/mp-chandran-image.png"
                  alt="M.P Chandran"
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
                  President, JG University
                </span>

                <h3 className="mt-5 text-5xl leading-none text-[#111111]">
                  M.P Chandran
                </h3>

                <p className="mt-7 text-lg leading-relaxed text-black/65 max-w-2xl">
                  A postgraduate in management with over 30 years of leadership
                  experience across public and private sectors in India and
                  abroad. Chairperson of the Education Task Force at GCCI and
                  Chairman of ASIA Charitable Trust, which oversees 3 schools,
                  17 colleges, and JG University.
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-3xl text-[#111111]">30+</h4>

                    <p className="mt-2 text-black/55 leading-relaxed">
                      Years of leadership experience
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-lg leading-tight text-[#111111]">
                      GCCI Education Task Force
                    </h4>

                    <p className="mt-2 text-black/55 leading-relaxed">
                      Chairperson
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-lg leading-tight text-[#111111]">
                      ASIA Charitable Trust
                    </h4>

                    <p className="mt-2 text-black/55 leading-relaxed">
                      Chairman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LEADER 2 */}
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
              {/* CONTENT */}
              <div>
                <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
                  Director-General & Provost
                </span>

                <h3 className="mt-5 text-5xl leading-none text-[#111111]">
                  Dr. CA Achyut Dani
                </h3>

                <p className="mt-7 text-lg leading-relaxed text-black/65 max-w-2xl">
                  Academic leader, researcher, and strategist with over 21 years
                  of experience across management, commerce, taxation, and
                  international collaborations. Recipient of multiple national
                  recognitions for contributions to education and academic
                  excellence.
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-lg leading-tight text-[#111111]">
                      Doctorate in Management & Commerce
                    </h4>
                  </div>

                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-lg leading-tight text-[#111111]">
                      Bharat Jyoti Award Recipient
                    </h4>
                  </div>

                  <div className="rounded-[1.6rem] bg-white border border-black/5 p-5">
                    <h4 className="text-lg leading-tight text-[#111111]">
                      International Academic Leadership
                    </h4>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative h-[430px] rounded-[2.5rem] overflow-hidden">
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
