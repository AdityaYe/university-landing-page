import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const events = [
  {
    date: "12",
    month: "AUG",
    title: "AI Innovation Summit",
    category: "Technology",
    description:
      "Explore the future of artificial intelligence with industry leaders and researchers.",
  },
  {
    date: "24",
    month: "SEP",
    title: "Startup & Entrepreneurship Bootcamp",
    category: "Business",
    description:
      "Learn startup strategies, funding, and product development from experienced founders.",
  },
  {
    date: "08",
    month: "OCT",
    title: "Design Thinking Workshop",
    category: "Creative",
    description:
      "Hands-on workshop focused on UI/UX, product thinking, and creative problem solving.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-32">
      <Container>
        <SectionHeading
          badge="Events & Workshops"
          title="Learn Beyond The Classroom"
          description="Participate in workshops, seminars, competitions, and networking events designed to accelerate growth."
        />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="grid lg:grid-cols-[120px_1fr_auto] gap-8 items-center">
                {/* Date */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <h3 className="text-4xl font-bold">{event.date}</h3>

                  <p className="mt-2 text-gray-400">{event.month}</p>
                </div>

                {/* Content */}
                <div>
                  {/* Category */}
                  <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-5">
                    {event.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold">{event.title}</h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Button */}
                <div>
                  <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
