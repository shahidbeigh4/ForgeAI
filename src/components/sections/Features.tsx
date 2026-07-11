type FeatureItem = {
  title: string;
  description: string;
};

type FeaturesProps = {
  heading: string;
  items: FeatureItem[];
};

export default function Features({
  heading,
  items,
}: FeaturesProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            {heading}
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Everything you need to grow faster.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl">
                🚀
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}