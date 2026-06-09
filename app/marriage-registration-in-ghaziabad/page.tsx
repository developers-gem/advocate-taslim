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

export default function MarriageRegistrationGhaziabadPage() {
    const benefits = [
        "Applying for a Passport or Visa",
        "Adding Spouse's Name to Official Documents",
        "Claiming Insurance Benefits",
        "Inheritance Rights Applications",
        "Resolving Legal Disputes Related to Marriage",
    ];

    const services = [
        "Verifying eligibility criteria for both partners",
        "Preparing affidavits and supporting documents",
        "Filing the marriage application",
        "Coordinating with the marriage registrar's office",
        "Representing clients in legal clarification or objection proceedings",
    ];

    const documents = [
        "Proof of Age (Birth Certificate, Passport, School Certificate)",
        "Proof of Residence (Aadhaar Card, Voter ID, Driving License)",
        "Passport-size photographs of both partners",
        "Marriage Invitation Card (if applicable)",
        "Witnesses' ID Proof",
        "Witnesses' Photographs",
        "Affidavits declaring marital status, date of birth & nationality",
        "Witnesses with valid ID proofs",
    ];

    const reasons = [
        {
            icon: <Award size={32} />,
            title: "Experienced Legal Support",
            desc: "Years of expertise in marriage laws and court procedures.",
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Transparent Pricing",
            desc: "No hidden charges with a clear fee structure.",
        },
        {
            icon: <Clock size={32} />,
            title: "Quick Processing",
            desc: "Minimal delays with complete legal compliance.",
        },
        {
            icon: <Users size={32} />,
            title: "Personalized Assistance",
            desc: "Step-by-step guidance tailored to your case.",
        },
        {
            icon: <CheckCircle size={32} />,
            title: "High Success Rate",
            desc: "Successfully registered marriages across Ghaziabad.",
        },
    ];

    return (
        <main>
            {/* HERO */}
            <section className="relative min-h-[320px] md:min-h-[450px] flex items-center justify-center">
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
                        Legal Services
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-4">
                        Marriage Registration
                        <span className="block text-blue-300 mt-2">
                            In Ghaziabad
                        </span>
                    </h1>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/marriage-registration-2.jpg"
                                alt="Marriage Registration"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                                Marriage Registration
                            </span>

                            <h2 className="text-4xl font-bold mt-3 mb-6">
                                Secure Your Marriage Legally
                            </h2>

                            <p className="text-gray-600 leading-8 mb-5">
                                Marriage is a sacred bond, and registering it legally
                                is the first step toward securing your relationship
                                in the eyes of the law.
                            </p>

                            <p className="text-gray-600 leading-8 mb-5">
                                Whether you're planning a traditional wedding or opting
                                for a court marriage, Advocate Taslim offers expert
                                guidance and hassle-free services for Marriage
                                Registration in Ghaziabad, ensuring the process is
                                smooth, quick and legally compliant.
                            </p>

                            <a
                                href="tel:+918826552527"
                                className="inline-flex bg-[#223a8c] text-white px-6 py-3 rounded-full"
                            >
                                Call +91 8826552527
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY IMPORTANT */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#223a8c]">
                            Why Marriage Registration Is Important
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Marriage registration serves as official proof of your relationship.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {benefits.map((item) => (
                            <div
                                key={item}
                                className="bg-white p-6 rounded-2xl shadow-md text-center"
                            >
                                <CheckCircle
                                    className="mx-auto text-[#223a8c] mb-4"
                                    size={32}
                                />
                                <p>{item}</p>
                            </div>
                        ))}

                    </div>

                    <p className="text-gray-600 leading-8 mt-10 text-center max-w-4xl mx-auto">
                        With Advocate Taslim, you get professional assistance in
                        completing all formalities under the Hindu Marriage Act,
                        1955, Special Marriage Act, 1954, and other applicable laws.
                    </p>

                </div>
            </section>

            {/* COURT MARRIAGE ADVOCATE */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-8 text-[#223a8c]">
                        Court Marriage Advocate in Ghaziabad – Advocate Taslim
                    </h2>

                    <p className="text-gray-600 leading-8 mb-8">
                        When it comes to legal matters, having the right guidance
                        makes all the difference. As a reputed Court Marriage
                        Advocate in Ghaziabad, Advocate Taslim ensures that your
                        rights are protected and the process is legally valid.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        {services.map((item) => (
                            <div
                                key={item}
                                className="bg-gray-50 p-5 rounded-xl flex gap-3"
                            >
                                <CheckCircle className="text-[#223a8c] shrink-0 mt-1" />
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* LAWYER */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-8 text-[#223a8c]">
                        Court Marriage Lawyer in Ghaziabad
                    </h2>

                    <p className="text-gray-600 leading-8 mb-8">
                        If you are looking for a trusted Court Marriage Lawyer
                        in Ghaziabad, Advocate Taslim provides reliable and
                        client-focused legal services.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        {services.map((item) => (
                            <div
                                key={item}
                                className="bg-white p-5 rounded-xl shadow-sm flex gap-3"
                            >
                                <CheckCircle className="text-[#223a8c] shrink-0 mt-1" />
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                    <p className="text-gray-600 leading-8 mt-8">
                        Our aim is to make the process stress-free, quick and
                        transparent for every couple.
                    </p>

                </div>
            </section>

            {/* DOCUMENTS */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12 text-[#223a8c]">
                        Documents Required For Marriage Registration
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {documents.map((item) => (
                            <div
                                key={item}
                                className="bg-gray-50 p-6 rounded-2xl shadow-sm"
                            >
                                <FileText className="text-[#223a8c] mb-4" />
                                <p>{item}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12 text-[#223a8c]">
                        Why Choose Advocate Taslim?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {reasons.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white p-6 rounded-2xl shadow-md text-center"
                            >
                                <div className="text-[#223a8c] flex justify-center mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    {item.desc}
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
                        Contact Us Today
                    </h2>

                    <p className="mt-4 text-blue-100">
                        If you are planning for Marriage Registration in Ghaziabad,
                        need guidance for Court Marriage Registration, or are
                        looking for a Court Marriage Advocate/Lawyer in Ghaziabad,
                        Advocate Taslim is here to help.
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
                            Call +91 8826552527
                        </a>

                    </div>

                </div>
            </section>
        </main>
    );
}