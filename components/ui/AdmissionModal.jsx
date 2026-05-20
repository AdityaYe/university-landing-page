"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

import { programmes } from "../../data/programmes";

export default function AdmissionModal({ className = "" }) {
  const [open, setOpen] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState("");

  const programmeLevels = ["Undergraduate", "Postgraduate", "Doctoral"];

  const filteredProgrammes = useMemo(() => {
    if (!selectedLevel) return programmes;

    return programmes.filter(
      (programme) => programme.category === selectedLevel,
    );
  }, [selectedLevel]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`h-11 lg:h-13 px-5 lg:px-6 rounded-full bg-[#D4A514] text-white text-sm hover:scale-[1.03] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A514] ${className}`}
      >
        Apply Now
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-200"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* MODAL */}
            <div className="fixed inset-0 z-210 overflow-y-auto">
              <div className="min-h-screen flex items-center justify-center px-4 sm:px-5 py-5 sm:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative w-full max-w-2xl bg-[#F7F5F2] rounded-[1.4rem] sm:rounded-[2.4rem] shadow-2xl overflow-hidden border border-black/5"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="admission-modal-title"
                >
                  {/* CLOSE */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close admission form"
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/5 hover:bg-black/10 transition-all flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>

                  {/* TOP */}
                  <div className="px-5 sm:px-8 md:px-10 pt-7 sm:pt-10 text-center">
                    {/* LOGO */}
                    <div className="relative mx-auto w-48 sm:w-63 h-13 sm:h-16">
                      <Image
                        src="/images/logo/jg-un-2-logo.png"
                        alt="JG University"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-4 sm:mt-6 uppercase tracking-[0.22em] text-[10px] sm:text-[11px] text-[#B68D40]">
                      Admissions 2026
                    </p>

                    <h2
                      id="admission-modal-title"
                      className="mt-2 sm:mt-3 text-[2rem] sm:text-[2.5rem] leading-[0.98] sm:leading-[0.95] text-[#111111]"
                    >
                      Register for Admission
                    </h2>

                    <p className="mt-3 sm:mt-4 text-black/55 max-w-lg mx-auto leading-relaxed text-[13px] sm:text-[15px]">
                      Begin your application journey at JG University and
                      connect with a future-focused academic ecosystem.
                    </p>
                  </div>

                  {/* FORM */}
                  <form
                    onSubmit={(event) => event.preventDefault()}
                    className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-8 pb-6 sm:pb-10"
                  >
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                      {/* NAME */}
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        aria-label="Full name"
                        placeholder="Full Name"
                        className="h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-[13px] sm:text-[15px]"
                      />

                      {/* PHONE */}
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        aria-label="Phone number"
                        placeholder="Phone Number"
                        className="h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-[13px] sm:text-[15px]"
                      />

                      {/* EMAIL */}
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        aria-label="Email address"
                        placeholder="Email Address"
                        className="h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-[13px] sm:text-[15px]"
                      />

                      {/* YEAR */}
                      <div className="relative">
                        <select
                          name="academicYear"
                          aria-label="Academic year"
                          className="appearance-none w-full h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-black/70 text-[13px] sm:text-[15px]"
                        >
                          <option>Select Academic Year</option>
                          <option>2025 - 2026</option>
                          <option>2026 - 2027</option>
                        </select>

                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
                        />
                      </div>

                      {/* LEVEL */}
                      <div className="relative">
                        <select
                          value={selectedLevel}
                          name="programmeLevel"
                          aria-label="Programme level"
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="appearance-none w-full h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-black/70 text-[13px] sm:text-[15px]"
                        >
                          <option value="">Select Programme Level</option>

                          {programmeLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
                        />
                      </div>

                      {/* PROGRAMME */}
                      <div className="relative">
                        <select
                          name="programme"
                          aria-label="Programme"
                          className="appearance-none w-full h-11 sm:h-14 rounded-[0.9rem] sm:rounded-[1.1rem] bg-white px-4 sm:px-5 outline-none border border-black/10 focus:border-[#B68D40] focus-visible:ring-2 focus-visible:ring-[#B68D40]/25 transition-all text-black/70 text-[13px] sm:text-[15px]"
                        >
                          <option>Select Programme</option>

                          {filteredProgrammes.map((programme) => (
                            <option
                              key={programme.slug}
                              value={programme.title}
                            >
                              {programme.title}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* CHECKBOX */}
                    <label className="mt-4 sm:mt-6 flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="communicationConsent"
                        className="mt-1 w-4 h-4 accent-[#B68D40]"
                      />

                      <p className="text-black/60 leading-relaxed text-xs sm:text-sm">
                        I agree to receive information regarding my submitted
                        application and admission process.
                      </p>
                    </label>

                    {/* BUTTONS */}
                    <div className="mt-5 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="h-12 px-6 rounded-full border border-black/10 hover:bg-black/5 transition-all duration-500 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="h-12 px-7 rounded-full bg-[#B68D40] text-white hover:scale-[1.03] transition-all duration-500 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                      >
                        Register Now
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
