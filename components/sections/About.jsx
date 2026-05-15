"use client";

import { Play } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F7F5F2] py-28">
      <div className="w-[92%] max-w-7xl mx-auto">
        {/* Top Text */}
        <div className="mb-14">
          <p className="text-[#B68A3D] uppercase tracking-[0.25em] text-lg">
            About
          </p>
        </div>

        {/* Video Section */}
        <div className="relative h-[70vh] min-h-[650px] overflow-hidden rounded-[2.5rem]">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about/about-preview.png"
            className="absolute inset-0 w-full h-full object-cover scale-115"
          >
            <source src="/videos/about/about-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-[88%] max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-white leading-[0.95] text-[4rem] md:text-[5rem] font-light">
                  Built for
                  <br />
                  future-ready education.
                </h2>

                <p className="mt-10 text-lg md:text-xl leading-relaxed text-white/75 max-w-2xl">
                  JG University is a tech-driven institution focused on
                  innovation, industry-ready learning, and real-world
                  experiences — empowering students for careers,
                  entrepreneurship, and the evolving future of education.
                </p>

                {/* Stats */}
                <div className="mt-12 flex flex-wrap gap-10">
                  <div>
                    <h3 className="text-4xl text-[#D4A514]">17</h3>

                    <p className="mt-2 text-white/60">Colleges</p>
                  </div>

                  <div>
                    <h3 className="text-4xl text-[#D4A514]">3</h3>

                    <p className="mt-2 text-white/60">Schools</p>
                  </div>

                  <div>
                    <h3 className="text-4xl text-[#D4A514]">Since 1965</h3>

                    <p className="mt-2 text-white/60">Legacy of Education</p>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://www.youtube.com/watch?v=QuRupPh1kAU&t=97s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-14 inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-500"
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
