import Image from "next/image";

export default function RequestCallBackPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center text-white px-6">
          <span className="uppercase tracking-[4px] text-blue-300 text-sm">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Request A Call Back
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Leave your details and our team will contact you shortly.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <span className="text-[#03228f] uppercase tracking-widest font-semibold">
                Get In Touch
              </span>

              <h2 className="text-3xl font-bold mt-3 mb-8">
                Request A Free Consultation
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#03228f]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#03228f]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#03228f]"
                />

                <select className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#03228f]">
                  <option>Select Service</option>
                  <option>Court Marriage</option>
                  <option>Marriage Registration</option>
                  <option>Legal Notice</option>
                  <option>Property Registration</option>
                  <option>Divorce Filing</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#03228f]"
                />

                <button
                  type="submit"
                  className="bg-[#03228f] hover:bg-[#02196f] text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Request Call Back
                </button>

              </form>
            </div>

            {/* IMAGE */}
            <div className="relative">

              <Image
                src="/images/call-back.jpg"
                alt="Legal Consultation"
                width={700}
                height={700}
                className="rounded-3xl shadow-xl object-cover w-full"
              />

              <div className="absolute -bottom-6 -left-6 bg-[#03228f] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <h3 className="text-3xl font-bold">
                  24/7
                </h3>
                <p>Legal Assistance</p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}