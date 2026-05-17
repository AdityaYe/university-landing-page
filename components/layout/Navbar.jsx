"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  {
    label: "Programmes",
    href: "/#programmes",
  },

  {
    label: "Campus Life",
    href: "/#campus-life",
  },

  {
    label: "Testimonials",
    href: "/#testimonials",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F5F2]/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="w-[92%] max-w-7xl mx-auto h-24 flex items-center justify-between">
        {/* Left Side */}
        <div className="relative w-85 h-35 flex items-center">
          {/* Large Hero Logo */}
          <div
            className={`absolute left-0 top-4 transition-all duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative mt-3.5 w-70 h-20">
              <Image
                src="/images/logo/jg-un-1-logo.png"
                alt="JG University Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Compact Navbar Logo */}
          <div
            className={`absolute left-0 transition-all duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="/#hero">
            <div className="relative w-70 h-20">
              <Image
                src="/images/logo/jg-un-2-logo.png"
                alt="JG University Compact Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            </Link>
          </div>
        </div>

        {/* Center Nav */}
        <ul
          className={`hidden lg:flex items-center gap-10 transition-colors duration-300 ${
            scrolled ? "text-[#1B1B1B]" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition ${
                  scrolled ? "hover:text-[#B68D40]" : "hover:text-white/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <div
            className={`flex items-center w-[260px] h-12 px-5 rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-black/10 bg-black/[0.03]"
                : "border-white/20 bg-transparent"
            }`}
          >
            <Search
              size={18}
              className={`shrink-0 transition-colors duration-300 ${
                scrolled ? "text-[#1B1B1B]" : "text-white"
              }`}
            />

            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent outline-none ml-4 w-full transition-colors duration-300 ${
                scrolled
                  ? "text-[#1B1B1B] placeholder:text-black/40"
                  : "text-white placeholder:text-white/60"
              }`}
            />
          </div>

          {/* Admission Button */}
          <Link href="/admissions">
            <button
              className={`px-7 py-3 rounded-full transition-all duration-500 transform-gpu will-change-transform ${
                scrolled
                  ? "bg-[#D4A514] text-white hover:opacity-90"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Admission
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-[#1B1B1B]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
