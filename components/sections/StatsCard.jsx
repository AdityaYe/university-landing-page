"use client";

import { useEffect, useState } from "react";

export default function StatsCard() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: "25+",
      label: "Years of Excellence",
    },

    {
      number: "120+",
      label: "Programs Offered",
    },

    {
      number: "12K+",
      label: "Students Enrolled",
    },

    {
      number: "300+",
      label: "Expert Faculty",
    },
  ];

  return (
    <section className="relative z-30 -mt-6 md:-mt-18 lg:-mt-20 pb-8 lg:pb-10">
      <div className="w-[92%] max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border backdrop-blur-2xl transition-all duration-700 ease-out ${
            scrolled
              ? "bg-[#F7F5F2]/95 border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "bg-white/10 border-white/10 shadow-none"
          }`}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className={`p-3.5 sm:p-4 md:p-5 lg:p-10 text-center transition-all duration-700 ease-out ${
                index !== stats.length - 1
                  ? scrolled
                    ? "md:border-r border-black/10"
                    : "md:border-r border-transparent"
                  : ""
              } ${
                index < 2
                  ? scrolled
                    ? "border-b md:border-b-0 border-black/10"
                    : "border-b md:border-b-0 border-transparent"
                  : ""
              }`}
            >
              <div
                className={`overflow-hidden transition-all duration-700 ease-out ${
                  scrolled ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1B1B1B]">
                  {item.number}
                </h3>

                <p className="mt-1.5 lg:mt-4 text-[11px] sm:text-xs md:text-sm lg:text-base text-[#6B6B6B] leading-snug lg:leading-relaxed">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
