import {
  Scale,
  ShieldCheck,
  FileText,
  Users,
  Award,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title:
    "Advocate Taslim – Expert Marriage Legal Services in Ghaziabad",
  description:
    "Trust Advocate Taslim in Ghaziabad for seamless court marriage, registration, love marriage, Arya Samaj & NRI legal support with expert, transparent services.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">

     {/* HERO */}
<section className="relative min-h-[300px] sm:min-h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/about-image.jpg')",
    }}
  />

  <div className="absolute inset-0 bg-black/65" />

  <div className="relative text-center text-white px-5 sm:px-6 max-w-4xl mx-auto">
    <span className="uppercase tracking-[3px] sm:tracking-[4px] text-blue-300 text-xs sm:text-sm font-medium">
      About Us
    </span>

    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      Trusted Legal Services
    </h1>

    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Professional assistance for Court Marriage, Marriage Registration,
      Legal Notice, Property Registration and Documentation Services.
    </p>
  </div>
</section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="images/about-img.jpg"
                alt="Advocate Taslim"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div>

              <span className="text-[#223a8c] font-semibold uppercase tracking-widest">
                Who We Are
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
                Dedicated Legal Support For Every Client
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                ( Advocates, Solicitors & Legal Consultants ) Advocate Taslim is a law firm in Ghaziabad Tehsil, founded in the year 2010 .
Since the beginning, the main theme of Advocate Taslim ,the founder of the said firm was to serve as a single-window legal service provider i.e. Advocates, solicitors and also as a Legal Consultant in this dynamic commercial environment.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
               The said law firm brought its services to the table with a team of committed and dedicated professional Advocates and Lawyers in Ghaziabad Tehsil, who are specialist in their respective fields of practice of Law in Ghaziabad and whole of NCR and pursued a philosophy of symbiotic relationships with litigants.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#223a8c]" />
                  <span>Trusted Legal Guidance</span>
                </div>

                <div className="flex items-center gap-3">
                  <Scale className="text-[#223a8c]" />
                  <span>Experienced Advocate</span>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="text-[#223a8c]" />
                  <span>Fast Documentation</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-[#223a8c]" />
                  <span>Client Focused Service</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
        Our Beliefs
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
        Principles & Values
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-600">
        Advocate Taslim follows principles rooted in truth, justice,
        integrity and respect for lawful conduct.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#223a8c] mb-4">
          Core Beliefs
        </h3>

        <ul className="space-y-4 text-gray-600 leading-7">
          <li>
            • Belief in three eternal existences — God, Soul and Nature,
            each distinct from one another.
          </li>

          <li>
            • God is formless and does not take birth in any form;
            therefore idol worship and incarnation are not accepted.
          </li>

          <li>
            • The four Vedas are considered self-evident and authoritative.
          </li>

          <li>
            • Recognition of Brahmanas, Vedic branches and Upanishads
            insofar as they align with Vedic teachings.
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#223a8c] mb-4">
          Dharma & Justice
        </h3>

        <p className="text-gray-600 leading-8">
          Dharma is understood as that which is truthful, just,
          impartial and aligned with the laws of God.
          Adharma is that which is untrue, biased and opposed
          to righteousness and lawful conduct.
        </p>

        <div className="mt-8 p-6 rounded-2xl bg-[#223a8c] text-white">
          <h4 className="font-bold text-xl mb-2">
            Need Legal Assistance?
          </h4>

          <p className="text-blue-100 mb-4">
            Speak with Advocate Taslim for professional legal guidance.
          </p>

          <a
            href="tel:+918826552527"
            className="inline-flex items-center bg-white text-[#223a8c] font-semibold px-6 py-3 rounded-full"
          >
            Call: +91 8826552527
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* STATS */}
      <section className="bg-[#223a8c] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">

            <div>
              <h3 className="text-5xl font-bold">1500+</h3>
              <p className="mt-3">Successful Cases</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="mt-3">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">5000+</h3>
              <p className="mt-3">Satisfied Clients</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">24/7</h3>
              <p className="mt-3">Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-[#223a8c] uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Professional Legal Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Award className="text-[#223a8c] mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">
                Experienced Guidance
              </h3>
              <p className="text-gray-600">
                Expert legal consultation and documentation support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Briefcase className="text-[#223a8c] mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">
                Professional Service
              </h3>
              <p className="text-gray-600">
                Smooth and transparent legal procedures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Users className="text-[#223a8c] mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">
                Client Satisfaction
              </h3>
              <p className="text-gray-600">
                Dedicated support throughout the process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Need Legal Assistance?
          </h2>

          <p className="mt-6 text-gray-300">
            Contact us today for Court Marriage, Marriage Registration,
            Legal Notice and Documentation Services.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="tel:+918826552527"
              className="bg-[#223a8c] px-8 py-4 rounded-full font-medium"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918826552527"
              className="border border-white px-8 py-4 rounded-full font-medium"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}