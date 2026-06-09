import Image from "next/image";
import {
    CheckCircle,
    Phone,
    FileText,
    ShieldCheck,
    Clock,
    Award,
    Users,
} from "lucide-react"; 

export default function CourtMarriageAdvocatePage() {
    return(
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
            Court Marriage Advocate
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src="/images/court-2.jpg"
          alt="Court Marriage Advocate in Ghaziabad"
          width={600}
          height={400}
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      <div>
        <span className="text-[#03228f] uppercase tracking-widest font-semibold">
          Court Marriage Advocate
        </span>

        <h2 className="text-4xl font-bold mt-3 mb-6">
          Professional Legal Assistance for Court Marriage
        </h2>

        <p className="text-gray-600 leading-8 mb-5">
          Looking for a reliable Court Marriage Advocate in Ghaziabad?
          We provide professional legal assistance for smooth and
          hassle-free court marriages under the Special Marriage Act.
        </p>

        <p className="text-gray-600 leading-8 mb-8">
          Whether you are planning an inter-caste, inter-religion, or
          love marriage, our experienced advocates guide you through
          every step, ensuring proper documentation and legal
          compliance.
        </p>

        <a
          href="tel:+918826552527"
          className="inline-flex items-center gap-2 bg-[#03228f] text-white px-6 py-3 rounded-full hover:bg-[#021a73] transition"
        >
          <Phone size={18} />
          Call +91 8826552527
        </a>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="space-y-12 text-gray-700 leading-8 ">
      

      <p>
        Looking for a reliable Court Marriage Advocate in Ghaziabad? We
        provide professional legal assistance for smooth and hassle-free
        court marriages under the Special Marriage Act. Our experienced
        advocates ensure that your marriage is legally valid, properly
        documented, and completed without unnecessary delays.
      </p>
    </div>

    <div className="space-y-12 text-gray-700 leading-8">
      <div>
        <p>
          Whether you are planning an inter-caste, inter-religion, or
          love marriage, our legal team guides you at every step—from
          documentation to final registration. We provide complete
          support to help couples complete their marriage legally and
          efficiently while ensuring full compliance with applicable
          laws and regulations.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Best Advocate for Court Marriage in Ghaziabad
        </h2>

        <p className="mb-5">
          Choosing the Best Advocate for Court Marriage in Ghaziabad is
          essential to avoid legal complications. Court marriage
          involves documentation, verification, notice procedures, and
          compliance with legal requirements. Any mistake can result in
          unnecessary delays and inconvenience.
        </p>

        <p>
          Our expert lawyers specialize in court marriage procedures and
          have successfully handled numerous cases with professionalism,
          dedication, and complete confidentiality.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black mb-6">
          Why Choose Us?
        </h3>

        <ul className="space-y-3 list-disc pl-6">
          <li>Experienced and certified legal professionals</li>
          <li>Quick and transparent process</li>
          <li>Complete documentation support</li>
          <li>Affordable legal fees</li>
          <li>100% privacy and confidentiality</li>
          <li>Professional assistance at every stage</li>
          <li>Reliable legal consultation and guidance</li>
        </ul>

        <p className="mt-6">
          We understand the importance of your big day and ensure a
          smooth legal process without stress or confusion.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Court Marriage Advocate Near Me
        </h2>

        <p className="mb-5">
          Searching for a Court Marriage Advocate near me? Our services
          are easily accessible across Ghaziabad and nearby areas. We
          assist couples in completing all legal formalities at the
          local marriage registrar office efficiently.
        </p>

        <p>
          Our advocates are well-versed with procedures followed at
          Ghaziabad District Court and other local authorities,
          ensuring faster approvals and minimal delays.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Court Marriage Process in Ghaziabad
        </h2>

        <p className="mb-6">
          The court marriage process is simple when handled by
          professionals. Our advocates assist you throughout every stage
          to ensure complete legal compliance.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-xl text-black">
              1. Notice of Intended Marriage
            </h4>
            <p>
              A notice is filed under the Special Marriage Act at the
              marriage registrar office, declaring the intention of
              both parties to marry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-black">
              2. Document Verification
            </h4>
            <p>
              Required documents such as age proof, address proof,
              photographs, and identity proof are verified by the
              concerned authorities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-black">
              3. 30-Day Notice Period
            </h4>
            <p>
              A public notice is displayed for 30 days to invite any
              legal objections if applicable under the law.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-black">
              4. Marriage Registration
            </h4>
            <p>
              After the completion of the notice period, the marriage is
              solemnized and registered in the presence of witnesses,
              after which the marriage certificate is issued.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Documents Required for Court Marriage
        </h2>

        <ul className="space-y-3 list-disc pl-6">
          <li>Age proof (Aadhaar Card, Passport, Birth Certificate, etc.)</li>
          <li>Address proof</li>
          <li>Passport-size photographs</li>
          <li>Affidavit of marital status</li>
          <li>Identity proof of both parties</li>
          <li>Witness documents (3 witnesses required)</li>
        </ul>

        <p className="mt-6">
          We help you prepare and verify all documents to avoid
          rejection, objections, or delays in the registration process.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Benefits of Hiring a Court Marriage Advocate
        </h2>

        <p className="mb-5">
          Hiring a professional advocate offers several advantages and
          helps ensure that the marriage process is completed smoothly
          and legally.
        </p>

        <ul className="space-y-3 list-disc pl-6">
          <li>Legal guidance and error-free documentation</li>
          <li>Faster process with minimal delays</li>
          <li>Assistance in case of objections</li>
          <li>Stress-free marriage registration</li>
          <li>Proper legal certification</li>
          <li>Professional representation when required</li>
        </ul>

        <p className="mt-6">
          With our expertise, you can focus on your special day while we
          handle the legal work and documentation.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mb-6">
          Contact the Best Court Marriage Advocate in Ghaziabad
        </h2>

        <p>
          If you are planning a court marriage, don’t take risks with
          legal procedures. Get in touch with the Best Court Marriage
          Advocate in Ghaziabad today for expert guidance and quick
          processing.
        </p>

        <p className="mt-5">
          We are committed to providing reliable, fast, affordable, and
          professional legal services for all your court marriage needs.
          Contact us today to begin your court marriage process with
          complete confidence.
        </p>
      </div>
    </div>
  </div>
</section>
        </main>
    )
}