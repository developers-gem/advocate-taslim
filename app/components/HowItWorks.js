export default function HowItWorks() {
    return(
        <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <span className="text-[#03228f] uppercase tracking-widest font-semibold">
        Simple Process
      </span>

      <h2 className="text-4xl font-bold mt-3">
        How It Works
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
        We make legal services simple, transparent, and hassle-free.
        Our team guides you through every step until your work is completed successfully.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          number: "01",
          title: "Contact Us",
          desc: "Call us or submit your inquiry online.",
        },
        {
          number: "02",
          title: "Consultation",
          desc: "Discuss your requirements with our legal experts.",
        },
        {
          number: "03",
          title: "Documentation",
          desc: "We prepare and verify all necessary documents.",
        },
        {
          number: "04",
          title: "Completion",
          desc: "Your legal work is completed efficiently and legally.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-[#03228f] text-white flex items-center justify-center text-2xl font-bold mb-6">
            {item.number}
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    )
}