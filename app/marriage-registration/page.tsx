import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";

export default function MarriageRegistrationPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/about-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center text-white px-6">
          <span className="uppercase tracking-[4px] text-blue-300 text-sm">
            Our Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Marriage Registration
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
                src="/images/Marriage-1.jpg"
                alt="Marriage Registration"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div>

              <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                Marriage Registration Service
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Fast & Hassle-Free Marriage Registration
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                If you feel stuck in a marriage that is not legally valid
                or is considered void in the eyes of law, professional
                legal guidance is important. Proper legal assistance can
                help you file the required application and seek a legal
                declaration regarding the status of the marriage.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                A Marriage (Arya Samaj Marriage or an Arranged Marriage)
                can be registered directly before the Registrar of Marriage
                under Section 8 of the Hindu Marriage Act, 1955.
              </p>

              <p className="text-gray-600 leading-8">
                Verification of all submitted documents is carried out on
                the date of application. Once verified, the marriage can
                be registered on the same working day by the Registrar of
                Marriage appointed by the Government of India, and the
                Marriage Certificate is issued.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#223a8c]">
              Why Choose Our Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Same Day Registration Support",
              "Document Verification Assistance",
              "Marriage Certificate Guidance",
              "Professional Legal Consultation",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <CheckCircle
                  className="mx-auto text-[#223a8c] mb-4"
                  size={32}
                />

                <p className="font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#223a8c] py-16">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <Phone size={42} className="mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Help With Marriage Registration?
          </h2>

          <p className="mt-4 text-blue-100">
            Our team can guide you through the registration process,
            documentation and certificate issuance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="/request-a-call-back"
              className="bg-white text-[#223a8c] px-8 py-4 rounded-full font-semibold"
            >
              Request A Call Back
            </a>

            <a
              href="tel:+918826552527"
              className="border border-white px-8 py-4 rounded-full font-semibold"
            >
              Call: +91 8826552527
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}