import Image from "next/image";
import { Phone, ShieldCheck } from "lucide-react";

export default function OnlinePaymentsPage() {
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
            Online Payments
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Secure Payment Options
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Make payments easily through Google Pay, Paytm or by scanning the
            QR code.
          </p>
        </div>
      </section>

      {/* PAYMENT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#223a8c]">
              Online Payments
            </h2>

            <p className="text-gray-600 mt-4">
              Choose your preferred payment method.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* GPay */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <Image
                src="/images/g-pay.jpg"
                alt="Google Pay"
                width={220}
                height={100}
                className="mx-auto h-20 w-auto object-contain"
              />

              <div className="mt-8 bg-amber-800 text-white py-4 rounded-full font-bold text-2xl">
                9716473992
              </div>
            </div>

            {/* QR */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <Image
                src="/images/scanner.jpg"
                alt="Payment QR"
                width={280}
                height={280}
                className="mx-auto rounded-xl"
              />

              <div className="mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold">
                <ShieldCheck size={20} />
                Secure Payment
              </div>
            </div>

            {/* Paytm */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <Image
                src="/images/paytm.jpg"
                alt="Paytm"
                width={220}
                height={100}
                className="mx-auto h-20 w-auto object-contain"
              />

              <div className="mt-8 bg-amber-800 text-white py-4 rounded-full font-bold text-2xl">
                9716473992
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="bg-[#223a8c] py-16">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <Phone size={42} className="mx-auto mb-4" />

          <h2 className="text-3xl font-bold">
            Need Help With Payment?
          </h2>

          <p className="mt-4 text-blue-100">
            Contact us if you face any issue while making the payment.
          </p>

          <a
            href="tel:+918826552527"
            className="inline-flex items-center mt-8 bg-white text-[#223a8c] px-8 py-4 rounded-full font-semibold"
          >
            Call +91 8826552527
          </a>

        </div>
      </section>
    </main>
  );
}