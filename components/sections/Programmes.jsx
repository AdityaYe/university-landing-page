"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

const filters = [
  "All",
  "Undergraduate",
  "Postgraduate",
  "Doctoral",
  "Certificate",
];

const programmes = [
  // Undergraduate
  {
    slug: "btech-cse",
    title: "B.Tech Computer Science & Engineering",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/programmes/ug-cs-image.png",
  },

  {
    slug: "btech-ai-ml",
    title: "B.Tech Artificial Intelligence & Machine Learning",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/programmes/btech-ai-ml-image.png",
  },

  {
    slug: "btech-information-technology",
    title: "B.Tech Information Technology",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/programmes/btech-it-image.png",
  },

  {
    slug: "bba",
    title: "BBA",
    category: "Undergraduate",
    duration: "3 Years",
    image: "/images/programmes/ug-bba-image.png",
  },

  {
    slug: "bcom",
    title: "B.Com",
    category: "Undergraduate",
    duration: "3 Years",
    image: "/images/programmes/undergraduate-image.png",
  },

  {
    slug: "bdesign-ui-ux",
    title: "B.Design UI/UX Design",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/programmes/ug-uiux-image.png",
  },

  {
    slug: "bdesign-game-design",
    title: "B.Design Game Design",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/programmes/ug-gamedesign-image.png",
  },

  {
    slug: "imsc-reproductive-biology-clinical-embryology",
    title: "iMSc Reproductive Biology & Clinical Embryology",
    category: "Undergraduate",
    duration: "5 Years",
    image: "/images/programmes/ug-bio-image.png",
  },

  // Postgraduate
  {
    slug: "mba",
    title: "MBA",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/programmes/pg-mba-image.png",
  },

  {
    slug: "mcom",
    title: "M.Com",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/programmes/pg-mcom-image.png",
  },

  {
    slug: "mca",
    title: "MCA",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/programmes/postgraduate-image.png",
  },

  {
    slug: "masters-in-aviation-hospitality-travel-management",
    title: "Master In Aviation, Hospitality & Travel Management",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/programmes/pg-aviation-image.png",
  },

  {
    slug: "masters-in-international-trade-and-finance",
    title: "Master In International Trade and Finance",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/programmes/pg-finance-image.png",
  },

  // Doctoral
  {
    slug: "phd-management",
    title: "Ph.D in Management",
    category: "Doctoral",
    duration: "Research Programme",
    image: "/images/programmes/phd-management-image.png",
  },

  {
    slug: "phd-commerce",
    title: "Ph.D in Commerce",
    category: "Doctoral",
    duration: "Research Programme",
    image: "/images/programmes/phd-commerce-image.png",
  },

  {
    slug: "phd-computing",
    title: "Ph.D in Computing",
    category: "Doctoral",
    duration: "Research Programme",
    image: "/images/programmes/phd-computing-image.png",
  },

  {
    slug: "phd-law",
    title: "Ph.D in Law",
    category: "Doctoral",
    duration: "Research Programme",
    image: "/images/programmes/phd-law-image.png",
  },

  // Certificate
  {
    slug: "metaverse",
    title: "Metaverse",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-metaverse-image.png",
  },

  {
    slug: "blockchain",
    title: "Blockchain",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-blockchain-image.png",
  },

  {
    slug: "cyber-security",
    title: "Cyber Security",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-cybersecurity-image.png",
  },

  {
    slug: "iot",
    title: "Industrial IoT",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-IoT-image.png",
  },

  {
    slug: "azure-devops",
    title: "Azure DevOps",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-azure-image.png",
  },

  {
    slug: "robotic-process-automation",
    title: "Robotics Process Automation",
    category: "Certificate",
    duration: "Certification",
    image: "/images/programmes/certificate-robotics-image.png",
  },
];

export default function Programmes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [search, setSearch] = useState("");

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesFilter =
      activeFilter === "All" || programme.category === activeFilter;

    const matchesSearch = programme.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const featuredProgrammes = [
    "B.Tech Computer Science & Engineering",
    "B.Design Game Design",
    "iMSc Reproductive Biology & Clinical Embryology",
    "MBA",
    "Robotics Process Automation",
    "Ph.D in Law",
  ];

  const displayedProgrammes =
    search.trim().length > 0
      ? filteredProgrammes
      : activeFilter === "All"
        ? programmes.filter((programme) =>
            featuredProgrammes.includes(programme.title),
          )
        : filteredProgrammes;

  return (
    <section id="programmes" className="bg-[#F7F5F2] py-14 sm:py-16 md:py-28">
      <div className="w-[92%] max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-12 items-end">
          <div>
            <p className="text-[#B68A3D] uppercase tracking-[0.22em] md:tracking-[0.25em] text-[11px] md:text-sm">
              Programmes
            </p>

            <h2 className="mt-3 md:mt-6 text-[2.15rem] sm:text-[2.45rem] md:text-[4rem] leading-[1] md:leading-[0.95] text-[#1B1B1B]">
              Discover your path.
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] md:text-lg leading-relaxed text-[#5F5F5F] max-w-xl lg:ml-auto">
            From engineering and computing to business, law, and emerging
            technologies  -  explore industry-focused programmes built for the
            future.
          </p>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="mt-7 md:mt-16 flex flex-col xl:flex-row gap-4 md:gap-6 xl:items-center xl:justify-between">
          {/* SEARCH */}
          <div className="flex items-center h-11 md:h-16 px-4 md:px-6 rounded-full border border-black/5 bg-white shadow-sm w-full xl:max-w-xl">
            <Search
              size={16}
              aria-hidden="true"
              className="text-[#6B6B6B] md:size-[18px]"
            />

            <input
              type="text"
              aria-label="Search programmes"
              placeholder="Search for a programme..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 md:ml-4 w-full bg-transparent outline-none text-[13px] md:text-base text-[#1B1B1B] placeholder:text-[#9B9B9B]"
            />
          </div>

          {/* FILTERS */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#1B1B1B] text-white"
                    : "bg-white text-[#1B1B1B] border border-black/5 hover:border-[#B68A3D] hover:text-[#B68A3D]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="mt-8 md:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {displayedProgrammes.map((programme) => (
            <Link
              key={programme.slug}
              href={`/programmes/${programme.slug}`}
              className="group relative h-[230px] sm:h-[340px] lg:h-[440px] overflow-hidden rounded-[1.35rem] sm:rounded-[1.75rem] md:rounded-[2.5rem]"
            >
              {/* IMAGE */}
              <Image
                src={programme.image}
                alt={programme.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-4 sm:p-5 md:p-8 flex flex-col justify-between">
                {/* TOP */}
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white/90 text-[11px] md:text-sm">
                    {programme.category}
                  </span>

                  <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white/70 text-[11px] md:text-sm">
                    {programme.duration}
                  </span>
                </div>

                {/* BOTTOM */}
                <div>
                  <h3 className="text-white text-[1.35rem] sm:text-[1.7rem] lg:text-[2.3rem] leading-[1.05] max-w-md">
                    {programme.title}
                  </h3>

                  {/* EXPLORE */}
                  <div className="mt-3 md:mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3 text-[#D4A514] group-hover:gap-5 transition-all duration-300">
                      <span className="text-[10px] md:text-sm tracking-[0.14em] md:tracking-[0.15em] uppercase">
                        Explore Programme
                      </span>

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="md:size-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
