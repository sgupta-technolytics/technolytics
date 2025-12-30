export default function HomeServices() {
  return (
    <section className="py-28 px-10 bg-[#0b0b0d] text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          "AI Development",
          "Machine Learning Models",
          "Data Visualization & BI",
        ].map((service, i) => (
          <div key={i} className="p-6 border border-gray-700 rounded-lg hover:border-blue-500 transition">
            <h3 className="text-xl font-medium">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
