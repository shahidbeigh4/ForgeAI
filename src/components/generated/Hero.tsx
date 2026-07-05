type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function Hero({
  title,
  subtitle,
  buttonText,
}: HeroProps) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="mt-6 text-xl text-gray-400">
        {subtitle}
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        {buttonText}
      </button>
    </section>
  );
}