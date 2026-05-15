import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Meta",
  "Netflix",
  "IBM",
  "Infosys",
];

export default function Partners() {
  return (
    <section id="partners" className="py-32">
      <Container>
        <SectionHeading
          badge="Industry Connections"
          title="Trusted By Leading Companies"
          description="Our students collaborate with and get hired by globally recognized companies and innovative startups."
        />

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center justify-center"
            >
              <h3 className="text-2xl font-semibold text-gray-300">
                {company}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-5xl font-bold">250+</h3>

            <p className="mt-4 text-gray-400">Hiring Partners</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-5xl font-bold">95%</h3>

            <p className="mt-4 text-gray-400">Placement Success</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-5xl font-bold">40LPA</h3>

            <p className="mt-4 text-gray-400">Highest Package</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
