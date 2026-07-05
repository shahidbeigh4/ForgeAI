export default function Features() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold">
        Features
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-gray-800 p-6">
          Online Admissions
        </div>

        <div className="rounded-xl bg-gray-800 p-6">
          Student Dashboard
        </div>

        <div className="rounded-xl bg-gray-800 p-6">
          WhatsApp Support
        </div>
      </div>
    </section>
  );
}