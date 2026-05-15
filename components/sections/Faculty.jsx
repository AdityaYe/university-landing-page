import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const facultyMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Specialist",
    expertise: ["Machine Learning", "Data Science"],
  },
  {
    name: "Prof. David Miller",
    role: "Cyber Security Expert",
    expertise: ["Network Security", "Cloud Security"],
  },
  {
    name: "Emily Roberts",
    role: "Design Mentor",
    expertise: ["UI/UX", "Brand Design"],
  },
  {
    name: "Michael Chen",
    role: "Software Engineering Lead",
    expertise: ["Full Stack", "System Design"],
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-32">
      <Container>
        <SectionHeading
          badge="Faculty"
          title="Learn From Industry Experts"
          description="Our experienced faculty and mentors guide students through practical learning, innovation, and career development."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-3xl font-bold mx-auto">
                {member.name.charAt(0)}
              </div>

              {/* Info */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">{member.name}</h3>

                <p className="mt-2 text-gray-400">{member.role}</p>
              </div>

              {/* Expertise */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {member.expertise.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
