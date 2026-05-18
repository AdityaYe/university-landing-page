import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-24 md:pb-12">
      {/* BACKGROUND */}
      <Image
        src="/images/hero/jg-campus-image.png"
        alt="JG University Campus"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-[90%] max-w-7xl mx-auto min-h-screen flex flex-col justify-center pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-44 sm:pb-40 md:pb-32 lg:pb-20">
        {/* HEADING */}
        <h1 className="max-w-4xl text-white leading-[0.95] font-light text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem]">
          Shaping minds,
          <br />
          building tomorrow.
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 md:mt-10 max-w-lg md:max-w-xl text-base sm:text-lg md:text-lg lg:text-xl text-white/80 leading-relaxed">
          Future-focused education shaped by innovation, creativity, and
          real-world learning.
        </p>

        {/* BUTTONS */}
        <div className="mt-7 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
          {/* PRIMARY */}
          <a href="#programmes" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-13 md:h-14 px-7 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-500">
              Explore Programmes
            </button>
          </a>

          {/* SECONDARY */}
          <a href="#features" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-13 md:h-14 px-7 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-500">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
