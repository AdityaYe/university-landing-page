"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "../ui/Container";

const partners = [
  {
    name: "Coding Pro",
    logo: "/images/partners/codingpro--image.png",
  },
  {
    name: "IBM",
    logo: "/images/partners/ibm--image.png",
  },
  {
    name: "ISRO",
    logo: "/images/partners/isro--image.png",
  },
  {
    name: "Yudiz",
    logo: "/images/partners/yudiz--image.png",
  },
  {
    name: "Space Applications Centre",
    logo: "/images/partners/sac--image.png",
  },
  {
    name: "Samyak Infotech",
    logo: "/images/partners/samyak--image.png",
  },
  {
    name: "Aventure Systems",
    logo: "/images/partners/aventure--image.png",
  },
  {
    name: "Asian-African Chamber of Commerce & Industry",
    logo: "/images/partners/african-asian--image.png",
  },
  {
    name: "Virtual Height",
    logo: "/images/partners/virtual-height--image.png",
  },
  {
    name: "DEV IT",
    logo: "/images/partners/devit--image.png",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#F7F5F2] py-20 overflow-hidden">
      <Container>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <span className="uppercase tracking-[0.25em] text-sm text-[#B68D40]">
            Partners
          </span>
        </div>

        {/* PARTNER STRIP */}
        <div className="relative">
          {/* TOP BORDER */}
          <div className="absolute top-10 left-0 w-full h-px bg-black/10" />

          {/* BOTTOM BORDER */}
          <div className="absolute bottom-10 left-0 w-full h-px bg-black/10" />

          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 h-full w-52 bg-gradient-to-r from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 h-full w-52 bg-gradient-to-l from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          {/* Logos */}
          <div className="overflow-hidden py-16">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-16 w-max"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className={`relative shrink-0 ${
                    partner.width || "w-80"
                  } ${partner.height || "h-40"}`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-90 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 mx-auto text-sm text-center leading-relaxed text-black/40 max-w-3xl">
          JG University collaborates with leading organizations,
          technology companies, research institutions, and
          innovation-driven enterprises to create industry-ready
          learning experiences.
        </p>
      </Container>
    </section>
  );
}