import { programmes } from "../../../data/programmes";
import Image from "next/image";
import Link from "next/link";

export default async function ProgrammePage({ params }) {
  const { slug } = await params;

  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl bg-[#F7F5F2]">
        Programme not found.
      </div>
    );
  }

  return (
    <main className="bg-[#F7F5F2] text-[#1B1B1B]">
      {/* HERO */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image
          src={programme.heroImage || programme.image}
          alt={programme.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10 w-[92%] max-w-7xl mx-auto h-full flex flex-col justify-end pb-24">
          <span className="text-white/70 uppercase tracking-[0.25em] text-sm">
            {programme.category}
          </span>

          <h1 className="mt-6 max-w-6xl text-white text-6xl md:text-8xl leading-none font-light">
            {programme.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/80">
            {programme.overview}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
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

            <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
              Built for future-ready careers.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-xl leading-relaxed text-black/70">
              {programme.description}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      {programme.stats && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {programme.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-white p-10 border border-black/5"
              >
                <h3 className="text-4xl md:text-5xl font-light">
                  {stat.value}
                </h3>

                <p className="mt-4 text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SPECIALISATIONS */}
      {programme.specialisations && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Specialisations
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
              Explore focused learning paths.
            </h2>

            <div className="mt-16 flex flex-wrap gap-4">
              {programme.specialisations.map((item, index) => (
                <div
                  key={index}
                  className="px-6 py-4 rounded-full bg-white border border-black/5 text-lg"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Elective Notes */}
            {programme.electiveNotes && (
              <div className="mt-12 rounded-[2rem] bg-[#EFEAE2] p-10">
                <h3 className="text-2xl font-light mb-6">Important Notes</h3>

                <div className="space-y-4">
                  {programme.electiveNotes.map((note, index) => (
                    <p key={index} className="text-black/70 leading-relaxed">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* KNOWLEDGE PARTNER */}
      {programme.knowledgePartner && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <div className="rounded-[3rem] bg-[#111111] text-white p-14 md:p-20">
              <span className="uppercase tracking-[0.2em] text-sm text-white/50">
                Knowledge Partner
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
                {programme.knowledgePartner.title}
              </h2>

              <p className="mt-10 max-w-4xl text-lg leading-relaxed text-white/70">
                {programme.knowledgePartner.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FEES + ELIGIBILITY */}
      <section className="pb-32">
        <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Fee Structure */}
          {programme.feeStructure && (
            <div className="rounded-[3rem] bg-white p-12 border border-black/5">
              <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
                Fee Structure
              </span>

              <div className="mt-10 space-y-6">
                {Object.entries(programme.feeStructure).map(([key, value]) => (
                  <div
                    key={key}
                    className="pb-6 border-b border-black/10 last:border-none"
                  >
                    <h3 className="text-xl font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </h3>

                    <p className="mt-2 text-black/70">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility */}
          {programme.eligibility && (
            <div className="rounded-[3rem] bg-[#111111] text-white p-12">
              <span className="uppercase tracking-[0.2em] text-sm text-white/50">
                Eligibility
              </span>

              <div className="mt-10 space-y-5">
                {programme.eligibility.map((item, index) => (
                  <div key={index} className="flex gap-4 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#D4A514] mt-3 shrink-0" />

                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {programme.highlights && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Programme Highlights
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
              Designed for industry-ready learning.
            </h2>

            <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {programme.highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] bg-white p-10 border border-black/5"
                >
                  <p className="text-lg leading-relaxed text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ADVANTAGES */}
      {programme.advantages && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Advantages
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
              Why choose this programme?
            </h2>

            <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {programme.advantages.map((item, index) => (
                <div key={index} className="rounded-[2rem] bg-[#EFEAE2] p-10">
                  <h3 className="text-2xl font-light">{item.title}</h3>

                  <p className="mt-6 leading-relaxed text-black/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ADMISSION PROCESS */}
      {programme.admissionProcess && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Admission Process
            </span>

            <div className="mt-16 space-y-6">
              {programme.admissionProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start rounded-[2rem] bg-white p-8 border border-black/5"
                >
                  <div className="text-5xl font-light text-[#D4A514]">
                    0{index + 1}
                  </div>

                  <p className="text-lg leading-relaxed text-black/70">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CAREERS */}
      {programme.careers && (
        <section className="pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B68D40]">
              Career Opportunities
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl leading-none font-light">
              Future career pathways.
            </h2>

            <div className="mt-16 flex flex-wrap gap-4">
              {programme.careers.map((career, index) => (
                <div
                  key={index}
                  className="px-6 py-4 rounded-full bg-[#111111] text-white"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

            <div className="mt-12 flex flex-wrap justify-center gap-5">
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
