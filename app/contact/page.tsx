"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";






export default function ContactPage() {


  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...formData,
            source: "Contact Page",
          }),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      alert(
        "Thank you! We will contact you soon."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


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
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Get In Touch
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            We're here to help with Court Marriage, Marriage Registration,
            Legal Notice and Documentation Services.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>

              <span className="text-[#223a8c] uppercase tracking-widest font-semibold">
                Contact Information
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-8">
                Let's Discuss Your Legal Needs
              </h2>

              <div className="space-y-6">

                <div className="bg-white p-6 rounded-2xl shadow-md flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#223a8c] text-white flex items-center justify-center">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Phone Number
                    </h3>

                    <a
                      href="tel:+918826552527"
                      className="text-gray-600"
                    >
                      +91 8826552527
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#223a8c] text-white flex items-center justify-center">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email Address
                    </h3>

                    <a
                      href="mailto:tsaifi6@gmail.com"
                      className="text-gray-600"
                    >
                      tsaifi6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#223a8c] text-white flex items-center justify-center">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Office Address
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Tehsil, 133, New Gandhi Nagar,
                      Dayanand Nagar, Block A,
                      Nehru Nagar III, Sadar,
                      Ghaziabad, Uttar Pradesh 201001
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#223a8c] text-white flex items-center justify-center">
                    <Clock size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Working Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday - Sunday
                    </p>

                    <p className="text-gray-600">
                      09:00 AM - 08:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h3 className="text-3xl font-bold mb-8">
                Send A Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
               <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#223a8c]"
  required
/>

              <input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#223a8c]"
/>
<input
  type="tel"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#223a8c]"
  required
/>

                <textarea
  rows={6}
  placeholder="Write Your Message..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#223a8c]"
/>

               <button
  type="submit"
  disabled={loading}
  className="bg-[#223a8c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#02196f] transition disabled:opacity-50"
>
  {loading
    ? "Submitting..."
    : "Send Message"}
</button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.157040309707!2d77.43600177550162!3d28.65501617565255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1dba6955555%3A0x88d7501030cf838c!2sSadar%20Tehsil%20Ghaziabad!5e0!3m2!1sen!2sin!4v1780998498574!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0">

            </iframe>
          </div>

        </div>
      </section>
    </main>
  );
}