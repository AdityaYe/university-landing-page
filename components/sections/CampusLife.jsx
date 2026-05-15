"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const campusCards = [
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled interactive learning spaces.",
    height: "h-[320px]",
  },
  {
    title: "Innovation Labs",
    description:
      "Hands-on project environments for modern creators.",
    height: "h-[220px]",
  },
  {
    title: "Student Communities",
    description:
      "Clubs, networking, and collaborative experiences.",
    height: "h-[220px]",
  },
  {
    title: "Campus Events",
    description:
      "Hackathons, seminars, workshops, and festivals.",
    height: "h-[320px]",
  },
];

export default function CampusLife() {
  return (
    <section
      id="campus"
      className="relative py-32 overflow-hidden"
    >

      <Container>

        <SectionHeading
          badge="Campus Life"
          title="Experience Learning Beyond Classrooms"
          description="A vibrant ecosystem where innovation, creativity, and collaboration shape unforgettable student experiences."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {campusCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 ${card.height}`}
            >

              {/* Fake Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-[#111827] to-blue-500/40 group-hover:scale-110 transition duration-700" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <h3 className="text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-300 max-w-md leading-relaxed">
                  {card.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}