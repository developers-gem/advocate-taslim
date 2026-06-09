import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";


export const metadata = {
  title:
    "Court Marriage Advocate in Ghaziabad",
  description:
    "Court Marriage Advocate in Ghaziabad – Get expert guidance by Advocate Taslim for court marriage.",
};



export default function DivorceFilingPage() {
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
            Divorce Filing
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
                src="/images/divorce-1.jpg"
                alt="Divorce Filing"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>

              <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                Divorce Filing Service
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Professional Legal Assistance For Divorce Matters
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                A spouse may send a legal notice for divorce to the
                other spouse, formally communicating the intention
                to initiate legal proceedings. A legal notice serves
                as an official warning and often helps clarify the
                legal position before court action begins.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                Divorce procedures in India are governed by different
                personal laws and legal provisions applicable to
                various communities and religions.
              </p>

              <p className="text-gray-600 leading-8">
                Professional legal guidance can help you understand
                your rights, prepare documentation, issue legal
                notices and navigate the divorce process smoothly
                and lawfully.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* APPLICABLE LAWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#223a8c]">
              Divorce Laws In India
            </h2>

            <p className="text-gray-600 mt-4">
              Divorce proceedings are governed by different laws
              depending on religion and personal law.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Hindu Marriage Act, 1955 (Hindus, Buddhists, Sikhs & Jains)",
              "Dissolution of Muslim Marriages Act, 1939",
              "Parsi Marriage and Divorce Act, 1936",
              "Indian Divorce Act, 1869 (Christians)",
            ].map((law) => (
              <div
                key={law}
                className="bg-white p-6 rounded-2xl shadow-md flex gap-3"
              >
                <CheckCircle className="text-[#223a8c] mt-1 shrink-0" />
                <span>{law}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES PROVIDED */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#223a8c]">
              How We Can Help
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Legal Notice Drafting",
              "Divorce Consultation",
              "Documentation Assistance",
              "Mutual Consent Divorce Guidance",
              "Court Filing Support",
              "Legal Representation Assistance",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm text-center"
              >
                <CheckCircle
                  className="mx-auto text-[#223a8c] mb-3"
                  size={30}
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
            Need Legal Guidance?
          </h2>

          <p className="mt-4 text-blue-100">
            Speak with our team for professional legal advice
            regarding divorce notices, documentation and court
            procedures.
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