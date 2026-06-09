"use client";

import { useEffect, useState } from "react";

const slides = [
  "/images/banner-image-1.jpg",
  "/images/banner-image-2.jpg",
  "/images/banner-image-1.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[400px] md:h-[600px] overflow-hidden">

      {/* SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="slide"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-7xl mx-auto h-full px-4">

          <div className="flex h-full items-center justify-center lg:justify-between">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left text-white max-w-2xl">

              <span className="uppercase tracking-[4px] text-blue-300 text-sm">
                Advocate Taslim
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Court Marriage
                <br />
                & Registration
              </h1>

              <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                Professional legal assistance for Court Marriage,
                Marriage Registration, Legal Notice, Property Registration
                and Documentation Services.
              </p>

              {/* MOBILE CTA */}
              <div className="mt-8 flex  sm:flex-row gap-3 justify-center lg:justify-start lg:hidden">

                <a
                  href="/request-a-call-back"
                  className="bg-[#2f3f8f] hover:bg-[#223a8c] text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Request Call Back
                </a>

                <a
                  href="tel:+918826552527"
                  className="bg-white text-[#2f3f8f] px-6 py-3 rounded-lg font-semibold"
                >
                  Call Now
                </a>

              </div>

            </div>

            {/* DESKTOP FORM */}
            <div className="hidden lg:block bg-white w-[340px] p-6 rounded-xl shadow-2xl">

              <h2 className="bg-[#2f3f8f] text-white text-center py-3 rounded mb-5 font-semibold">
                Quick Enquiry
              </h2>

              <form className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Enter Name"
                  className="p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#2f3f8f]"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#2f3f8f]"
                />

                <input
                  type="email"
                  placeholder="Email ID"
                  className="p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#2f3f8f]"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#2f3f8f]"
                />

                <button
                  type="submit"
                  className="bg-[#2f3f8f] hover:bg-[#223a8c] text-white py-3 rounded font-medium transition"
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}