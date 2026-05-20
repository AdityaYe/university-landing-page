import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[620px] overflow-hidden pb-14 sm:min-h-[680px] md:min-h-screen md:pb-12"
    >
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15 md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-[92%] max-w-7xl mx-auto min-h-[620px] sm:min-h-[680px] md:min-h-screen flex flex-col justify-end md:justify-center pt-28 md:pt-36 lg:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-20">
        {/* HEADING */}
        <h1 className="max-w-[21rem] sm:max-w-2xl md:max-w-4xl text-white leading-[0.98] md:leading-[0.95] font-light text-[2.65rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[7rem]">
          Shaping minds,
          <br />
          building tomorrow.
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 md:mt-10 max-w-[20rem] sm:max-w-lg md:max-w-xl text-[15px] sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
          Future-focused education shaped by innovation, creativity, and
          real-world learning.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-row flex-wrap gap-3 sm:gap-5 w-full sm:w-auto">
          {/* PRIMARY */}
          <a
            href="#programmes"
            className="flex-1 sm:flex-none inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm text-black transition-all duration-500 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto md:h-14 md:px-7 md:text-base"
          >
            <span className="md:hidden">Programmes</span>
            <span className="hidden md:inline">Explore Programmes</span>
          </a>

          {/* SECONDARY */}
          <a
            href="#features"
            className="flex-1 sm:flex-none inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white backdrop-blur-md transition-all duration-500 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto md:h-14 md:px-7 md:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
