import Image from "next/image";
import { Phone } from "lucide-react";

export default function CourtMarriagePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center text-white px-6">
          <span className="uppercase tracking-[4px] text-blue-300 text-sm">
            Our Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Court Marriage
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div>
              <Image
                src="/images/court.jpg"
                alt="Court Marriage"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div>

              <span className="text-[#223a8c] font-semibold uppercase tracking-widest">
                Court Marriage Service
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Legal & Hassle-Free Court Marriage
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                Court marriage is a legal process to complete the wedding
                of two partners. It is performed in court according to
                the applicable laws in India and allows marriage regardless
                of religion or caste.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                Under Article 21 of the Indian Constitution, every person
                has the right to marry a partner of their choice. Various
                laws govern court marriage and marriage registration,
                including the Special Marriage Act, Hindu Marriage Act,
                Anand Marriage Act and Indian Christian Marriage Act.
              </p>

              <p className="text-gray-600 leading-8">
                Court marriage is different from traditional marriage.
                Traditional weddings involve religious rituals and ceremonies,
                whereas court marriages are conducted before a Marriage
                Registrar in the presence of witnesses.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#223a8c] py-16">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <Phone size={42} className="mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Assistance For Court Marriage?
          </h2>

          <p className="mt-4 text-blue-100">
            Get professional guidance and complete legal support
            for your court marriage process.
          </p>

          <a
            href="tel:+918826552527"
            className="inline-block mt-8 bg-white text-[#223a8c] px-8 py-4 rounded-full font-semibold"
          >
            Call Us: +91 8826552527
          </a>

        </div>
      </section>
    </main>
  );
}