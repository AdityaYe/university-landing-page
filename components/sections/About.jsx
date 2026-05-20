"use client";

import { Play } from "lucide-react";

const stats = [
  {
    value: "17",
    label: "Colleges",
  },
  {
    value: "3",
    label: "Schools",
  },
  {
    value: "Since 1965",
    label: "Legacy of Education",
  },
];

export default function About() {
  return (
    <section className="bg-[#F7F5F2] py-14 sm:py-16 md:py-20 lg:py-28">
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="md:hidden">
          <p className="text-[#B68A3D] uppercase tracking-[0.22em] text-[11px]">
            About
          </p>

          <h2 className="mt-3 text-[2.15rem] leading-[1] font-light text-[#111111]">
            Built for future-ready education.
          </h2>

          <div className="mt-5 overflow-hidden rounded-[1.25rem] bg-[#ECE8E1] md:mt-0 md:hidden">
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/about/about-preview.png"
              className="block w-full scale-125 object-contain"
            >
              <source src="/videos/about/about-video.mp4" type="video/mp4" />
            </video>

            {/* BUTTON INSIDE VIDEO */}
            <div className="absolute bottom-3 left-1/2">
              <a
                href="https://www.youtube.com/watch?v=QuRupPh1kAU&t=97s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-black/20 px-5 text-sm text-white/80 backdrop-blur-xs transition-all duration-500"
              >
                <Play size={16} fill="currentColor" />
                Watch Full Story
              </a>
            </div>
          </div>
        </div>

          <p className="mt-4 text-sm leading-relaxed text-black/60">
            JG University is a tech-driven institution focused on innovation,
            industry-ready learning, and real-world experiences - empowering
            students for careers, entrepreneurship, and the evolving future of
            education.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1rem] border border-black/5 bg-white px-3 py-3"
              >
                <h3 className="text-xl leading-none text-[#B68D40]">
                  {item.value}
                </h3>

                <p className="mt-1.5 text-[11px] leading-snug text-black/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 hidden md:block lg:mb-14">
          <p className="text-[#B68A3D] uppercase tracking-[0.25em] text-lg">
            About
          </p>
        </div>

        <div className="relative hidden min-h-105 overflow-hidden rounded-[2.5rem] md:block lg:h-[70vh] lg:min-h-[650px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about/about-preview.png"
            className="absolute inset-0 h-full w-full object-cover object-center scale-125 lg:scale-125"
          >
            <source src="/videos/about/about-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

          <div className="relative z-10 flex h-full items-center">
            <div className="w-[90%] max-w-7xl mx-auto py-8 lg:py-0">
              <div className="max-w-3xl">
                <h2 className="text-white leading-[0.95] font-light text-[3.6rem] lg:text-[5rem]">
                  Built for
                  <br />
                  future-ready education.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 lg:mt-10 lg:text-xl">
                  JG University is a tech-driven institution focused on
                  innovation, industry-ready learning, and real-world
                  experiences - empowering students for careers,
                  entrepreneurship, and the evolving future of education.
                </p>

                <div className="mt-8 flex flex-wrap gap-8 lg:mt-12 lg:gap-10">
                  {stats.map((item) => (
                    <div key={item.label}>
                      <h3 className="text-4xl text-[#D4A514]">{item.value}</h3>

                      <p className="mt-2 text-base text-white/60">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.youtube.com/watch?v=QuRupPh1kAU&t=97s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-black lg:mt-14"
                >
                  <Play size={18} fill="currentColor" />
                  Watch Full Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
