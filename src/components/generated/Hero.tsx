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
    <section className="relative overflow-hidden px-10 py-28 text-center">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-[#0B1120] to-violet-900" />

      <div className="mx-auto max-w-5xl">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          Trusted by 500+ Students
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight">
          {title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300">
          {subtitle}
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700">
            {buttonText}
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 text-lg">
            View Courses
          </button>

        </div>

      </div>

    </section>
  );
}