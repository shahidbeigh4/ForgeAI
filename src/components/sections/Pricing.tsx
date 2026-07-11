type Plan = {
  title: string;
  price: string;
  features: string[];
};

type PricingProps = {
  heading: string;
  plans: Plan[];
};

export default function Pricing({
  heading,
  plans,
}: PricingProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-black">
          {heading}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-4 text-4xl font-black">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3">

                {plan.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}