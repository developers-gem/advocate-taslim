import Image from "next/image";
import { Phone } from "lucide-react";


export const metadata = {
  title:
    "Legal Notice Advocate in Ghaziabad | Advocate Taslim",
  description:
    "Get professional help from an experienced Legal Notice Advocate in Ghaziabad. Quick, reliable, and effective legal notice drafting & services.",
};


export default function LegalMarriagePage() {
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
            Legal Marriage
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
                src="/images/legal.jpg"
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
               A legal notice is an intimation in unambiguous language that one person or entity sends to another person or entity. It helps in making recipients aware of the grievances of the sender. The legal notice is a written document that is drafted on legal terms and conditions for which parties get legally bound to acknowledge it. The sender who issues the legal notice has to inform the recipient about the notice issuance and is a warning given to a person before filing a legal suit against him.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
               A well-vetted legal notice helps a recipient to avail the quickest remedy. It makes the recipient agree to the terms of the party who is sending the notice and thus eliminates the need to take the matter to court most of the time.
              </p>

<h2>
    WHAT IS LEGAL NOTICE
</h2>
              <p className="text-gray-600 leading-8">
                It is a way of formal written communication between Parties. Through this notice Sender signifies his intention of pursuing legal proceedings against the Recipient. This way the grievance of the Sender is also communicated to the Recipient.
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