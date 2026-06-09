import Image from "next/image";
import { Phone, FileText } from "lucide-react";

export default function LegalNoticeAdvocatePage() {

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
                        Legal Notice Advocate in Ghaziabad
                    </h1>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/images/LEGAL-notice.jpg"
                                alt="Legal Notice Advocate in Ghaziabad"
                                width={600}
                                height={450}
                                className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
                            />
                        </div>

                        <div>
                            <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                                Legal Notice Services
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                                Expert Legal Notice Advocate in Ghaziabad
                            </h2>

                            <p className="text-gray-600 leading-8 mb-5">
                                When it comes to resolving disputes, protecting your rights,
                                or taking the first step in a legal process, a legal notice
                                plays a vital role. Whether it is related to property disputes,
                                business contracts, employment issues, family matters, or
                                financial disagreements, having an experienced Legal Notice
                                Advocate in Ghaziabad ensures your notice is drafted, served,
                                and pursued professionally.
                            </p>

                            <p className="text-gray-600 leading-8 mb-8">
                                At Advocate Taslim, we specialize in providing precise,
                                legally sound, and effective legal notice services that
                                safeguard your interests and create a strong foundation for
                                further legal action whenever required.
                            </p>

                            <a
                                href="tel:+918826552527"
                                className="inline-flex items-center gap-2 bg-[#223a8c] text-white px-6 py-3 rounded-full hover:bg-[#021a73] transition"
                            >
                                Call +91 8826552527
                            </a>
                        </div>
                    </div>
                </div>
            </section>

          <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
        Legal Notice Services
      </span>

      <h2 className="text-4xl font-bold mt-3">
        Our Legal Notice Services
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mt-6 leading-8">
        We provide comprehensive legal notice drafting and consultation
        services for individuals, businesses, property owners,
        employees, employers, landlords, tenants, and families dealing
        with various legal disputes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "Property Dispute Legal Notices",
        "Recovery of Money & Debt Notices",
        "Breach of Contract Notices",
        "Employment & Workplace Dispute Notices",
        "Consumer Complaint Legal Notices",
        "Landlord & Tenant Dispute Notices",
        "Family & Matrimonial Dispute Notices",
        "Business & Commercial Legal Notices",
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
        >
          <div className="w-12 h-12 rounded-full bg-[#223a8c]/10 flex items-center justify-center mb-4">
            <FileText className="text-[#223a8c]" size={22} />
          </div>

          <h3 className="font-semibold text-lg leading-7">
            {service}
          </h3>
        </div>
      ))}
    </div>

    <div className="mt-16 bg-[#223a8c] rounded-3xl p-10 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">
        Need a Legal Notice Drafted?
      </h3>

      <p className="max-w-2xl mx-auto text-blue-100 leading-8 mb-6">
        Get professionally drafted legal notices for property disputes,
        financial recovery, employment matters, family disputes, and
        commercial disagreements.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-white text-[#223a8c] px-8 py-3 rounded-full font-semibold"
        >
          Request Call Back
        </a>

        <a
          href="tel:+918826552527"
          className="border border-white px-8 py-3 rounded-full font-semibold"
        >
          Call +91 8826552527
        </a>
      </div>
    </div>
  </div>
</section>


            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                            Court Marriage Assistance
                        </span>

                        <h2 className="text-4xl font-bold mt-3">
                            Trusted Lawyer for Court Marriage in Ghaziabad
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-5">
                                Lawyer for Court Marriage in Ghaziabad
                            </h3>

                            <p className="text-gray-600 leading-8 mb-5">
                                If you are searching for a lawyer for court marriage in
                                Ghaziabad, you need someone who understands the procedure,
                                deadlines, and legal requirements thoroughly.
                            </p>

                            <p className="text-gray-600 leading-8">
                                Advocate Taslim ensures that all your paperwork is in order
                                and that you meet every legal requirement before your court
                                marriage date. Whether you are from Ghaziabad or any other
                                city in India, we provide professional legal support to make
                                your marriage registration smooth, secure, and hassle-free.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-5">
                                Lawyer for Same-Day Court Marriage in Ghaziabad
                            </h3>

                            <p className="text-gray-600 leading-8 mb-5">
                                In certain situations, couples may require same-day court
                                marriage in Ghaziabad. Advocate Taslim specializes in handling
                                urgent marriage cases, where the legal process can be completed
                                in a single day, provided that all documents and conditions
                                are met.
                            </p>

                            <p className="text-gray-600 leading-8 mb-6">
                                This service is particularly helpful for couples with time
                                constraints, those traveling from outside Ghaziabad, or those
                                with specific personal circumstances.
                            </p>

                            <ul className="space-y-3 text-gray-700">
                                <li>✓ Quick and efficient process</li>
                                <li>✓ Complete documentation assistance</li>
                                <li>✓ Confidential handling of cases</li>
                                <li>✓ Legal compliance with applicable marriage laws</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center bg-[#223a8c] rounded-3xl p-10 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Need Assistance With Court Marriage?
                        </h3>

                        <p className="text-lg mb-6 text-blue-100">
                            Get professional legal guidance and complete documentation
                            support from Advocate Taslim.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white text-[#223a8c] px-8 py-3 rounded-full font-semibold"
                            >
                                Request Call Back
                            </a>

                            <a
                                href="tel:+918826552527"
                                className="border border-white px-8 py-3 rounded-full font-semibold"
                            >
                                Call Us: +91 8826552527
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                            Court Marriage Services
                        </span>

                        <h2 className="text-4xl font-bold mt-3">
                            Best Lawyer for Court Marriage in Ghaziabad
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Left Side */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-5">
                                Best Lawyer for Court Marriage in Ghaziabad
                            </h3>

                            <p className="text-gray-600 leading-8 mb-5">
                                When it comes to choosing the best lawyer for court marriage
                                in Ghaziabad, experience, trustworthiness, and a smooth
                                process are essential.
                            </p>

                            <p className="text-gray-600 leading-8">
                                Advocate Taslim is known for delivering exceptional legal
                                services, ensuring your court marriage is conducted as per
                                the law without unnecessary hurdles. We have successfully
                                assisted numerous couples in Ghaziabad and nearby areas,
                                earning a reputation for professionalism, reliability,
                                and dedication.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-5">
                                Required Documents for Court Marriage
                            </h3>

                            <ul className="space-y-4 text-gray-700">
                                <li>✓ Proof of age (Birth Certificate, 10th Mark Sheet, Passport, or Aadhaar Card)</li>
                                <li>✓ Proof of address (Voter ID, Aadhaar Card, Passport, or Utility Bills)</li>
                                <li>✓ Passport-size photographs of both parties</li>
                                <li>✓ Affidavit of marital status (Single, Divorced, or Widowed)</li>
                                <li>✓ Divorce decree certificate (if divorced)</li>
                                <li>✓ Death certificate of spouse (if widowed)</li>
                                <li>✓ Witnesses with valid ID proofs</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mt-12 bg-[#f8f9ff] rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold mb-8 text-center">
                            Why Choose Advocate Taslim for Court Marriage in Ghaziabad?
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Document Guidance
                                </h4>
                                <p className="text-gray-600">
                                    Complete assistance with required documents and eligibility criteria.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Affidavit Preparation
                                </h4>
                                <p className="text-gray-600">
                                    Drafting, preparation, and verification of affidavits.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Application Filing
                                </h4>
                                <p className="text-gray-600">
                                    Professional drafting and submission of marriage applications.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Registrar Coordination
                                </h4>
                                <p className="text-gray-600">
                                    Coordination with the marriage registrar's office.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Witness Assistance
                                </h4>
                                <p className="text-gray-600">
                                    Witness arrangement support whenever required.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="font-semibold mb-2">
                                    Marriage Certificate
                                </h4>
                                <p className="text-gray-600">
                                    Assistance in obtaining the official court marriage certificate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="mt-16">
                        <h3 className="text-3xl font-bold text-center mb-10">
                            Step-by-Step Process of Court Marriage in Ghaziabad
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Consultation",
                                    desc: "Meet Advocate Taslim to understand the legal requirements and process.",
                                },
                                {
                                    step: "02",
                                    title: "Document Preparation",
                                    desc: "Collect and verify all necessary documents.",
                                },
                                {
                                    step: "03",
                                    title: "Notice Filing",
                                    desc: "Submit a notice of intended marriage to the marriage registrar.",
                                },
                                {
                                    step: "04",
                                    title: "Waiting Period",
                                    desc: "30-day waiting period under the Special Marriage Act unless eligible for same-day marriage.",
                                },
                                {
                                    step: "05",
                                    title: "Marriage Ceremony",
                                    desc: "Conducted before the marriage officer and witnesses.",
                                },
                                {
                                    step: "06",
                                    title: "Marriage Certificate",
                                    desc: "Official certificate issued by the registrar making the marriage legally valid.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                                >
                                    <div className="text-[#223a8c] text-3xl font-bold mb-3">
                                        {item.step}
                                    </div>

                                    <h4 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
