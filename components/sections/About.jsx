"use client";

import { Play } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-28">
      <div className="w-[92%] max-w-7xl mx-auto">
        {/* TOP TEXT */}
        <div className="mb-8 md:mb-14">
          <p className="text-[#B68A3D] uppercase tracking-[0.25em] text-sm md:text-lg">
            About
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="relative min-h-[620px] md:min-h-[700px] lg:h-[70vh] lg:min-h-[650px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about/about-preview.png"
            className="absolute inset-0 w-full h-full object-cover object-center scale-125 sm:scale-125 md:scale-125 lg:scale-125"
          >
            <source src="/videos/about/about-video.mp4" type="video/mp4" />
          </video>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-end md:items-center md:mt-30">
            <div className="w-[90%] max-w-7xl mx-auto py-12 md:py-0">
              <div className="max-w-3xl">
                {/* HEADING */}
                <h2 className="text-white leading-[0.95] font-light text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
                  Built for
                  <br />
                  future-ready education.
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl leading-relaxed text-white/75 max-w-2xl">
                  JG University is a tech-driven institution focused on
                  innovation, industry-ready learning, and real-world
                  experiences — empowering students for careers,
                  entrepreneurship, and the evolving future of education.
                </p>

                {/* STATS */}
                <div className="mt-8 md:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-7 md:gap-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl text-[#D4A514]">17</h3>

                    <p className="mt-2 text-sm md:text-base text-white/60">
                      Colleges
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-[#D4A514]">3</h3>

                    <p className="mt-2 text-sm md:text-base text-white/60">
                      Schools
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-[#D4A514]">
                      Since 1965
                    </h3>

                    <p className="mt-2 text-sm md:text-base text-white/60">
                      Legacy of Education
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <a
                  href="https://www.youtube.com/watch?v=QuRupPh1kAU&t=97s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 md:mt-14 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-500"
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
