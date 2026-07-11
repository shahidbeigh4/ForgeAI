type Testimonial = {
  name: string;
  role: string;
  review: string;
};

type TestimonialsProps = {
  heading: string;
  testimonials: Testimonial[];
};

export default function Testimonials({
  heading,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-black">
          {heading}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-400">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}