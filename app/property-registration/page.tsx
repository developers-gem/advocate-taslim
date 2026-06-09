import Image from "next/image";
import { CheckCircle, FileText, Phone } from "lucide-react";

export default function PropertyRegistrationPage() {
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
            Property Registration
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <Image
                src="/images/property.jpg"
                alt="Property Registration"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl w-full"
              />
            </div>

            <div>
              <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                Property Registration
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                What Is Property Registration?
              </h2>

              <p className="text-gray-600 leading-8">
                In India, property registration is mandatory under the
                Registration Act, 1908. The transfer of immovable assets
                must be legally recorded to establish ownership rights
                from the execution date of the deed.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#223a8c]">
              Required Documents
            </h2>

            <p className="text-gray-600 mt-4">
              Tentative list of documents required for registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Property Valuation / Estimation",
              "Sale Deed",
              "Stamp Duty Payment",
              "Registration Charges Receipt",
              "Document Submission",
              "Additional Local Authority Documents",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow-md flex gap-3"
              >
                <CheckCircle className="text-[#223a8c] shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* REGISTRATION PROCESS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-[#223a8c]" size={34} />
            <h2 className="text-4xl font-bold">
              Registration Process
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-8">

            <p>
              The documents must be submitted to the office of the
              Sub-Registrar of Assurances within whose jurisdiction
              the property is situated.
            </p>

            <p>
              The seller and purchaser, along with two witnesses,
              must be present during registration. All parties must
              carry valid identity proof such as Aadhaar Card,
              PAN Card or other government-issued documents.
            </p>

            <p>
              If someone is acting on behalf of another person,
              a valid Power of Attorney must be produced.
            </p>

            <p>
              In case a company is involved, the authorised
              representative must provide a board resolution,
              letter of authority or power of attorney.
            </p>

          </div>

        </div>
      </section>

      {/* IMPORTANT INFO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#223a8c] mb-10">
            Important Information
          </h2>

          <div className="space-y-6 text-gray-600 leading-8">

            <p>
              The original property documents and proof of stamp
              duty payment must be presented before registration.
            </p>

            <p>
              The Sub-Registrar verifies whether the appropriate
              stamp duty has been paid according to the applicable
              state regulations.
            </p>

            <p>
              Stamp duty is a tax paid to obtain legal ownership,
              while registration charges are fees paid to officially
              record the transaction in government records.
            </p>

            <p>
              Stamp duty rates vary from state to state and in many
              states women receive rebates or concessions.
            </p>

            <p>
              Witnesses are an important part of the registration
              process and must provide identity and address proof.
              Their biometric verification may also be conducted.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#223a8c] py-16">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <Phone size={42} className="mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Help With Property Registration?
          </h2>

          <p className="mt-4 text-blue-100">
            Get professional assistance with documentation,
            registration and legal formalities.
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