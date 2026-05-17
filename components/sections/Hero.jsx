import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[900px] overflow-hidden pb-40">
      {/* Background Image */}
      <Image
        src="/images/hero/jg-campus-image.png"
        alt="JG University Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-[88%] max-w-7xl mx-auto h-full flex flex-col justify-center mt-30">
        {/* Main Heading */}
        <h1 className="max-w-3xl text-white leading-none text-[4.5rem] md:text-[5rem] font-light">
          Shaping minds,
          <br />
          building tomorrow.
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-xl text-lg md:text-lg text-white/80 leading-relaxed">
          Future-focused education shaped by innovation, creativity, and
          real-world learning.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">
          {/* Primary */}
          <button className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition">
            Explore Programs
          </button>

          {/* Secondary */}
          <button className="px-7 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition">
            Why us?
          </button>
        </div>
      </div>
    </section>
  );
}
