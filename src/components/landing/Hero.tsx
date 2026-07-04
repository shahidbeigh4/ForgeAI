export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        🚀 AI Website Builder
      </span>

      <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
        Build Stunning Websites
        <br />
        with Artificial Intelligence
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-gray-400">
        Describe your idea in plain English and ForgeAI will design,
        generate and deploy your website in minutes.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition">
          Start Building
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-4 hover:bg-gray-900 transition">
          Live Demo
        </button>
      </div>
    </section>
  );
}