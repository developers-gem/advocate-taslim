import { CheckCircle, Phone } from "lucide-react";

export default function AboutSection() {
  return (
<section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative ">
            <img
              src="/images/court-marriage.jpg"
              alt="About Advocate Taslim"
              className="w-full rounded-3xl shadow-xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4">
              <h4 className="text-3xl font-bold text-[#03228f]">
                10+
              </h4>
              <p className="text-gray-600 text-sm">
                Years of Legal Experience
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#03228f] uppercase tracking-widest font-semibold">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Trusted Legal Services by
              <span className="text-[#03228f]">
                {" "}Advocate Taslim
              </span>
            </h2>

            <p className="text-xl font-medium text-gray-800 mb-6">
              Same-Day Court Marriages & Marriage Registration Services
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Advocate Taslim provides professional services for Court
              Marriages, Marriage Registrations, Solemnization of
              Marriages, and assistance in obtaining Marriage
              Certificates. We have extensive experience in handling
              court marriage procedures across Delhi, Noida, Gurgaon,
              Ghaziabad, Meerut, and other NCR regions.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our team has successfully assisted numerous couples and
              clients by providing reliable legal guidance, complete
              documentation support, and hassle-free legal solutions
              with complete confidentiality.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Court Marriage Assistance",
                "Marriage Registration",
                "Legal Notice Services",
                "Quick Documentation Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-[#03228f]"
                    size={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about-us"
                className="bg-[#03228f] text-white px-8 py-4 rounded-full font-medium text-center"
              >
                Learn More
              </a>

              <a
                href="tel:+918826552527"
                className="border border-[#03228f] text-[#03228f] px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
  {[
    ["500+", "Successful Cases"],
    ["1000+", "Happy Clients"],
    ["10+", "Years Experience"],
    ["24/7", "Legal Support"],
  ].map(([number, label]) => (
    <div
      key={label}
      className="text-center bg-gray-50 rounded-2xl p-6"
    >
      <h3 className="text-4xl font-bold text-[#03228f]">
        {number}
      </h3>
      <p className="text-gray-600 mt-2">
        {label}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>

    
  );
}