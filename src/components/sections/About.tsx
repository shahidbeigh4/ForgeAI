type AboutProps = {
  heading: string;
  description: string;
};

export default function About({
  heading,
  description,
}: AboutProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-5xl font-black">
          {heading}
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-400">
          {description}
        </p>

      </div>
    </section>
  );
}