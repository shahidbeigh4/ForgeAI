export default function Stats() {
  const stats = [
    ["500+", "Students"],
    ["95%", "Success Rate"],
    ["20+", "Expert Teachers"],
    ["10+", "Years Experience"],
  ];

  return (
    <section className="px-10 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div className="text-4xl font-bold">
              {value}
            </div>

            <div className="mt-3 text-gray-400">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}