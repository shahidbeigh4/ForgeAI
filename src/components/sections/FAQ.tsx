type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  heading: string;
  items: FAQItem[];
};

export default function FAQ({
  heading,
  items,
}: FAQProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-5xl font-black">
          {heading}
        </h2>

        <div className="mt-16 space-y-8">

          {items.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}