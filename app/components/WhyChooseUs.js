export default function WhyChooseUs() {
  const features = [
    {
      title: "Swift Same-Day Service:",
      text: "We specialize in same-day court marriages and registration, eliminating the waiting period and streamlining the process.",
    },
    {
      title: "Legal Experts On Hand:",
      text: "Our experienced legal team ensures that all marriages and registrations are fully compliant with local laws and regulations.",
    },
    {
      title: "Transparent Pricing:",
      text: "Our pricing is transparent, with no hidden fees, so you know exactly what to expect from the start.",
    },
    {
      title: "Document Preparation Assistance:",
      text: "We assist you in preparing the necessary documents, reducing paperwork and minimizing stress.",
    },
    {
      title: "Friendly and Professional Staff:",
      text: "Our staff is known for their friendliness and professionalism, ensuring a comfortable and supportive experience.",
    },
    {
      title: "Your Privacy Matters:",
      text: "We take your privacy seriously, handling personal information and marriage details with the utmost confidentiality.",
    },
  ];

  return (
    <section className="w-full">

      <div className="flex flex-col md:flex-row">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 h-[800px] relative">
          <img
            src="/images/why-us.jpg"
            alt="why choose us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 bg-[#f7f7f7] px-10 py-12">

          {/* HEADING */}
          <h2 className="text-3xl font-bold mb-10">
            Why{" "}
            <span className=" text-[#223a8c] px-3 py-1 rounded">
              Choose Us?
            </span>
          </h2>

          {/* FEATURES */}
          <div className="space-y-8">
            {features.map((item, i) => (
              <div key={i} className="flex gap-4">

                {/* ICON */}
                <div className="min-w-[40px] h-[40px] rounded-full bg-[#223a8c] flex items-center justify-center">
                  <img src="/images/icon.png" className="w-5" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}