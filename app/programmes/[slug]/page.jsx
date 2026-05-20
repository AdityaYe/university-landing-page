import { programmes } from "../../../data/programmes";
import AdmissionModal from "../../../components/ui/AdmissionModal";
import Image from "next/image";
import Link from "next/link";

export default async function ProgrammePage({ params }) {
  const { slug } = await params;

  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl md:text-3xl bg-[#F7F5F2]">
        Programme not found.
      </div>
    );
  }

  return (
    <main className="bg-[#F7F5F2] text-[#1B1B1B]">
      {/* HERO */}
      <section className="relative min-h-155 md:h-[90vh] overflow-hidden">
        <Image
          src={programme.heroImage || programme.image}
          alt={programme.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10 w-[92%] max-w-7xl mx-auto min-h-155 md:h-full flex flex-col justify-end pb-16 md:pb-24">
          <span className="text-white/70 uppercase tracking-[0.22em] md:tracking-[0.25em] text-[11px] md:text-sm">
            {programme.category}
          </span>

          <h1 className="mt-3 md:mt-6 max-w-6xl text-white text-[2.55rem] sm:text-[3.2rem] md:text-8xl leading-none md:leading-none font-light">
            {programme.title}
          </h1>

          <p className="mt-4 md:mt-8 max-w-3xl text-sm sm:text-base md:text-xl leading-relaxed text-white/80">
            {programme.overview}
          </p>

          <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-3 md:gap-5">
            <div className="px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm md:text-base">
              {programme.duration}
            </div>

            <AdmissionModal className="h-auto px-5 py-2.5 text-sm text-black md:px-7 md:py-3 md:text-base" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-14 md:py-32">
        <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 md:gap-20">
          <div>
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Programme Overview
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Built for future-ready careers.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-sm sm:text-base md:text-xl leading-relaxed text-black/70">
              {programme.description}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      {programme.stats && (
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {programme.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.25rem] md:rounded-4xl bg-white p-4 md:p-10 border border-black/5"
              >
                <h3 className="text-2xl md:text-5xl font-light">
                  {stat.value}
                </h3>

                <p className="mt-2 md:mt-4 text-xs md:text-base text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SPECIALISATIONS */}
      {programme.specialisations && (
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Specialisations
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Explore focused learning paths.
            </h2>

            <div className="mt-7 md:mt-16 flex flex-wrap gap-2.5 md:gap-4">
              {programme.specialisations.map((item) => (
                <div
                  key={item}
                  className="px-4 md:px-6 py-2.5 md:py-4 rounded-full bg-white border border-black/5 text-sm md:text-lg"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Elective Notes */}
            {programme.electiveNotes && (
              <div className="mt-7 md:mt-12 rounded-[1.25rem] md:rounded-4xl bg-[#EFEAE2] p-4 md:p-10">
                <h3 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Important Notes</h3>

                <div className="space-y-4">
                  {programme.electiveNotes.map((note) => (
                    <p key={note} className="text-black/70 leading-relaxed">
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
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <div className="rounded-3xl md:rounded-[3rem] bg-[#111111] text-white p-5 md:p-20">
              <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-white/50">
                Knowledge Partner
              </span>

              <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
                {programme.knowledgePartner.title}
              </h2>

              <p className="mt-4 md:mt-10 max-w-4xl text-sm md:text-lg leading-relaxed text-white/70">
                {programme.knowledgePartner.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FEES + ELIGIBILITY */}
      <section className="pb-14 md:pb-32">
        <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Fee Structure */}
          {programme.feeStructure && (
            <div className="rounded-3xl md:rounded-[3rem] bg-white p-5 md:p-12 border border-black/5">
              <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
                Fee Structure
              </span>

              <div className="mt-6 md:mt-10 space-y-5 md:space-y-6">
                {Object.entries(programme.feeStructure).map(([key, value]) => (
                  <div
                    key={key}
                    className="pb-6 border-b border-black/10 last:border-none"
                  >
                    <h3 className="text-base md:text-xl font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </h3>

                    <p className="mt-2 text-sm md:text-base text-black/70">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility */}
          {programme.eligibility && (
            <div className="rounded-3xl md:rounded-[3rem] bg-[#111111] text-white p-5 md:p-12">
              <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-white/50">
                Eligibility
              </span>

              <ul className="mt-6 md:mt-10 space-y-4 md:space-y-5">
                {programme.eligibility.map((item) => (
                  <li key={item} className="flex gap-4 text-white/80">
                    <span className="w-2 h-2 rounded-full bg-[#D4A514] mt-3 shrink-0" />

                    <span className="text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {programme.highlights && (
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Programme Highlights
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Designed for industry-ready learning.
            </h2>

            <div className="mt-7 md:mt-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-6">
              {programme.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] md:rounded-4xl bg-white p-4 md:p-10 border border-black/5"
                >
                  <p className="text-sm md:text-lg leading-relaxed text-black/70">
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
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Advantages
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Why choose this programme?
            </h2>

            <div className="mt-7 md:mt-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-6">
              {programme.advantages.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] md:rounded-4xl bg-[#EFEAE2] p-4 md:p-10">
                  <h3 className="text-xl md:text-2xl font-light">{item.title}</h3>

                  <p className="mt-3 md:mt-6 text-sm md:text-base leading-relaxed text-black/70">
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
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Admission Process
            </span>

            <div className="mt-7 md:mt-16 space-y-3.5 md:space-y-6">
              {programme.admissionProcess.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 md:gap-8 items-start rounded-[1.25rem] md:rounded-4xl bg-white p-4 md:p-8 border border-black/5"
                >
                  <div className="text-3xl md:text-5xl font-light text-[#D4A514]">
                    0{index + 1}
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed text-black/70">
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
        <section className="pb-14 md:pb-32">
          <div className="w-[92%] max-w-7xl mx-auto">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-[#B68D40]">
              Career Opportunities
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Future career pathways.
            </h2>

            <div className="mt-7 md:mt-16 flex flex-wrap gap-2.5 md:gap-4">
              {programme.careers.map((career) => (
                <div
                  key={career}
                  className="px-4 md:px-6 py-2.5 md:py-4 rounded-full bg-[#111111] text-white text-sm md:text-base"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-14 md:pb-32">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="rounded-3xl md:rounded-[3rem] bg-[#111111] px-5 md:px-14 py-12 md:py-24 text-center text-white">
            <span className="uppercase tracking-[0.18em] md:tracking-[0.2em] text-[11px] md:text-sm text-white/50">
              Admissions Open
            </span>

            <h2 className="mt-3 md:mt-6 text-[2.1rem] md:text-6xl leading-none md:leading-none font-light">
              Build your future with JG University.
            </h2>

            <div className="mt-6 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-5">
              <AdmissionModal className="h-auto px-5 py-3 text-sm text-black md:px-8 md:py-4 md:text-base" />

              <Link
                href="/"
                className="px-5 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-sm md:text-base"
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
