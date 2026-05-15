"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[120px] rounded-full" />

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl px-8 md:px-16 py-20 overflow-hidden text-center"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/10 text-sm text-purple-300 mb-8">
              Admissions Open 2026
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              Start Your Journey Toward
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Future Innovation
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Join a community of innovators, creators, and future leaders
              shaping tomorrow through technology and education.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition duration-300 font-medium">
                Apply Now
              </button>

              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 font-medium">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
