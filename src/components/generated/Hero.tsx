type Props = {
  title: string;
  subtitle: string;
};

export default function GeneratedHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-white text-gray-900 rounded-xl p-12">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        {subtitle}
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}