export default function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      {/* Badge */}
      <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
        <span className="text-sm text-purple-300">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}