"use client";

import { motion } from "framer-motion";

import { ShieldCheck, Cpu, Users, Rocket } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Industry-Aligned Curriculum",
    description:
      "Programs designed with real-world industry requirements and future technologies in mind.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology Infrastructure",
    description:
      "Modern labs, AI-enabled classrooms, and cutting-edge digital learning systems.",
  },
  {
    icon: Users,
    title: "Expert Faculty & Mentorship",
    description:
      "Learn from experienced educators and industry professionals guiding your growth.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Internships, placements, networking, and startup incubation opportunities.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Built For The Next Generation"
          description="A future-focused educational ecosystem designed to help students innovate, lead, and succeed in a rapidly evolving world."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition duration-300"
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Icon className="text-purple-300" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>

                      <p className="mt-3 text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-gray-400">Student Performance</p>

                    <h3 className="text-3xl font-bold mt-2">
                      Academic Excellence
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl">
                    📊
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Placement Success</span>

                      <span className="text-green-400">95%</span>
                    </div>

                    <div className="mt-4 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Student Satisfaction
                      </span>

                      <span className="text-blue-400">92%</span>
                    </div>

                    <div className="mt-4 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center">
                      <h4 className="text-4xl font-bold text-purple-300">
                        250+
                      </h4>

                      <p className="mt-3 text-gray-400">Hiring Partners</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center">
                      <h4 className="text-4xl font-bold text-blue-300">50+</h4>

                      <p className="mt-3 text-gray-400">Research Labs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
