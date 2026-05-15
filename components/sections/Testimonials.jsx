"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Computer Science Student",
    review:
      "The learning environment and practical exposure completely transformed my confidence and technical skills.",
  },
  {
    name: "Sophia Williams",
    role: "AI Research Intern",
    review:
      "The faculty support and innovation-focused curriculum helped me build real-world projects with impact.",
  },
  {
    name: "Rohan Kapoor",
    role: "Design Student",
    review:
      "From creative freedom to industry mentorship, every experience here pushed me to grow professionally.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full" />

      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Students Say About Us"
          description="Real stories from students who transformed their careers and learning experiences through our programs."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                y: -8,
              }}
              className="group relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden hover:bg-white/10 transition duration-300"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-purple-500/10 to-transparent" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-yellow-400 text-lg">
                  ★ ★ ★ ★ ★
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-relaxed text-lg">
                  “{testimonial.review}”
                </p>

                {/* User Info */}
                <div className="mt-10 flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
