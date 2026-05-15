"use client";

import { useState } from "react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "What programs are offered at the university?",
    answer:
      "We offer programs in technology, business, design, artificial intelligence, cybersecurity, and emerging digital fields.",
  },
  {
    question: "Are internships and placements provided?",
    answer:
      "Yes, students receive internship opportunities, placement assistance, industry mentorship, and career support.",
  },
  {
    question: "Do students get access to modern labs?",
    answer:
      "Our campus includes AI labs, innovation centers, collaborative workspaces, and modern digital classrooms.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, merit-based and need-based scholarships are available for eligible students.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleFAQ(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section id="faq" className="py-32">
      <Container>
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, academics, campus life, and career opportunities."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-8"
              >
                <span className="text-xl font-semibold">{faq.question}</span>

                <span className="text-3xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-8 pb-8">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
