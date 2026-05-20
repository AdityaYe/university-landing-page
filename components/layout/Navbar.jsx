"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

import { Menu, Search } from "lucide-react";

const navLinks = [
  {
    label: "Programmes",
    section: "programmes",
  },

  {
    label: "Campus Life",
    section: "campus-life",
  },

  {
    label: "Testimonials",
    section: "testimonials",
  },

  {
    label: "Contact",
    route: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY SCROLL
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // SECTION NAVIGATION
  const closeMenu = () => setMenuOpen(false);

  const handleSectionNavigation = (sectionId) => {
    setMenuOpen(false);

    if (pathname !== "/") {
      sessionStorage.setItem("scroll-target", sectionId);

      router.push("/");

      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 isolate w-full z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F5F2]/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="w-[92%] max-w-7xl mx-auto h-20 lg:h-24 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* LEFT */}
          <div className="relative flex items-center">
            <Link
              href="/#hero"
              aria-label="JG University home"
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A514]"
            >
              {/* HERO LOGO */}
              <div
                className={`absolute left-0 top-0 transition-all duration-500 ${
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="relative w-44 md:w-56 lg:w-70 h-14 md:h-16 lg:h-20">
                  <Image
                    src="/images/logo/jg-un-1-logo.png"
                    alt="JG University"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>

              {/* COMPACT LOGO */}
              <div
                className={`transition-all duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="relative w-44 md:w-56 lg:w-70 h-14 md:h-16 lg:h-20">
                  <Image
                    src="/images/logo/jg-un-2-logo.png"
                    alt="JG University"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <ul
            className={`hidden xl:flex items-center gap-10 transition-colors duration-300 ${
              scrolled ? "text-[#1B1B1B]" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.route ? (
                  <Link
                    href={link.route}
                    className={`text-sm tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A514] ${
                      scrolled ? "hover:text-[#B68D40]" : "hover:text-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSectionNavigation(link.section)}
                    className={`text-sm tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A514] ${
                      scrolled
                        ? "hover:text-[#B68D40]"
                        : "hover:text-white/70"
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden xl:flex items-center gap-4">
            {/* SEARCH */}
            <div
              className={`flex items-center w-[240px] h-12 px-5 rounded-full border transition-all duration-500 ${
                scrolled
                  ? "border-black/10 bg-black/[0.03]"
                  : "border-white/20 bg-transparent"
              }`}
            >
              <Search
                size={18}
                aria-hidden="true"
                className={`shrink-0 transition-colors duration-300 ${
                  scrolled ? "text-[#1B1B1B]" : "text-white"
                }`}
              />

              <input
                type="text"
                placeholder="Search..."
                aria-label="Search the JG University website"
                className={`bg-transparent outline-none ml-4 w-full text-sm transition-colors duration-300 ${
                  scrolled
                    ? "text-[#1B1B1B] placeholder:text-black/40"
                    : "text-white placeholder:text-white/60"
                }`}
              />
            </div>

            {/* ADMISSION */}
            <Link
              href="/admissions"
              className={`rounded-full px-7 py-3 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A514] ${
                scrolled
                  ? "bg-[#D4A514] text-white hover:opacity-90"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Admission
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`xl:hidden transition-colors duration-300 ${
              scrolled ? "text-[#1B1B1B]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={30} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* MOBILE DROPDOWN */}
      <div
        id="mobile-navigation"
        className={`fixed top-20 left-0 w-full xl:hidden z-[9998] transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111]/95 backdrop-blur-2xl border-t border-white/10">
          <div className="w-[92%] mx-auto py-8">
            {/* LINKS */}
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.route ? (
                    <Link
                      href={link.route}
                      onClick={closeMenu}
                      className="flex h-16 items-center border-b border-white/10 text-left text-lg text-white transition-all duration-300 hover:text-[#D4A514] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D4A514]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSectionNavigation(link.section)}
                      className="h-16 w-full border-b border-white/10 text-left text-lg text-white transition-all duration-300 hover:text-[#D4A514] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D4A514]"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/admissions"
              onClick={closeMenu}
              className="mt-7 flex h-14 w-full items-center justify-center rounded-full bg-[#D4A514] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A514]"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
