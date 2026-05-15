import { Mail, Phone, MapPin } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "admissions@edunova.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          badge="Contact Us"
          title="Start Your Admission Journey"
          description="Connect with our admissions team to learn more about programs, campus life, and opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                      <Icon />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>

                      <p className="mt-3 text-gray-400">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-3 text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 text-sm text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 outline-none"
                />
              </div>

              {/* Program */}
              <div>
                <label className="block mb-3 text-sm text-gray-400">
                  Interested Program
                </label>

                <select className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 outline-none">
                  <option>Computer Science</option>
                  <option>Artificial Intelligence</option>
                  <option>Design & Media</option>
                  <option>Business Management</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-3 text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 outline-none resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 font-medium"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
