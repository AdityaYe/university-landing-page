"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
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
    logo: "/images/partners/african-asian--image.webp",
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame;

    const autoScroll = () => {
      container.scrollLeft += 0.35;

      // seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#F7F5F2] py-10 sm:py-12 lg:py-20 overflow-hidden">
      <Container>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4 lg:mb-10">
          <span className="uppercase tracking-[0.22em] lg:tracking-[0.25em] text-[11px] lg:text-sm text-[#B68D40]">
            Partners
          </span>
        </div>

        {/* PARTNER STRIP */}
        <div className="relative">
          {/* TOP BORDER */}
          <div className="absolute top-5 lg:top-10 left-0 w-full h-px bg-black/10" />

          {/* BOTTOM BORDER */}
          <div className="absolute bottom-5 lg:bottom-10 left-0 w-full h-px bg-black/10" />

          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 h-full w-16 sm:w-28 lg:w-52 bg-linear-to-r from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 h-full w-16 sm:w-28 lg:w-52 bg-linear-to-l from-[#F7F5F2] to-transparent z-20 pointer-events-none" />

          {/* MOBILE/TABLET AUTO SCROLL */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar whitespace-nowrap touch-pan-x lg:hidden"
          >
            <div className="flex w-max items-center gap-9 py-8 pr-6 sm:gap-12">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-mobile-${index}`}
                  className="relative h-20 w-40 shrink-0 sm:h-24 sm:w-52"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP MARQUEE */}
          <div className="hidden overflow-hidden py-16 lg:block">
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
                  key={`${partner.name}-desktop-${index}`}
                  className={`relative shrink-0 ${
                    partner.width || "w-36 sm:w-48 lg:w-80"
                  } ${partner.height || "h-20 sm:h-24 lg:h-40"}`}
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
        <p className="mt-4 lg:mt-8 mx-auto text-xs sm:text-sm text-center leading-relaxed text-black/40 max-w-3xl">
          JG University collaborates with leading organizations, technology
          companies, research institutions, and innovation-driven enterprises to
          create industry-ready learning experiences.
        </p>
      </Container>
    </section>
  );
}
