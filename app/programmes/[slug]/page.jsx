import { programmes } from "../../../data/programmes";
import Image from "next/image";
import Link from "next/link";

export default async function ProgrammePage({ params }) {
  const { slug } = await params;

  const programme = programmes.find(
    (item) => item.slug === slug
  );

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Programme not found.
      </div>
    );
  }

  return (
    <main className="bg-[#F7F5F2] text-[#1B1B1B]">
      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image
          src={programme.image}
          alt={programme.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-[92%] max-w-7xl mx-auto h-full flex flex-col justify-end pb-24">
          <span className="text-white/70 uppercase tracking-[0.2em] text-sm mb-6">
            {programme.category}
          </span>

          <h1 className="max-w-5xl text-white text-6xl md:text-8xl leading-none font-light">
            {programme.title}
          </h1>

          <div className="mt-10 flex items-center gap-6">
            <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white">
              {programme.duration}
            </div>

            <button className="px-7 py-3 rounded-full bg-[#D4A514] text-black hover:opacity-90 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-32">
        <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Programme Overview
            </span>

            <h2 className="mt-6 text-6xl leading-none font-light">
              Built for future-ready careers.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-xl leading-relaxed text-black/70">
              Future-focused programme designed to combine innovation,
              real-world learning, industry exposure, and career-ready
              education for the next generation of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="rounded-[3rem] bg-[#111111] px-14 py-24 text-center text-white">
            <span className="uppercase tracking-[0.2em] text-sm text-white/50">
              Admissions Open
            </span>

            <h2 className="mt-6 text-6xl leading-none font-light">
              Build your future with JG University.
            </h2>

            <div className="mt-12 flex justify-center gap-5">
              <button className="px-8 py-4 rounded-full bg-[#D4A514] text-black">
                Apply Now
              </button>

              <Link
                href="/"
                className="px-8 py-4 rounded-full border border-white/20"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}