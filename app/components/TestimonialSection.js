"use client";


import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

export default function TestimonialSection() {
  const data = [
    {
      name: "Shubham Verma",
      text: "Taslim Ahmed is incredibly helpful and quick to respond. I enlisted his services to obtain a marriage certificate, and I must say, his service is truly outstanding.",
      img: "/images/nadeem.png",
    },
    {
      name: "Lalit Saini",
      text: "Mr Taslim is very professional & responsive. The entire process was seamless and completed fast.",
      img: "/images/amit.png",
    },
    {
      name: "Nadeem",
      text: "Smooth and hassle free service was provided. All documentation was handled perfectly.",
      img: "/images/taleeb.png",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-[#223a8c] font-semibold tracking-widest uppercase">
            Testimonials 
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <div className="w-24 h-1 bg-[#223a8c] mx-auto mt-5 rounded-full" />
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 relative">

          <Quote
            className="absolute top-8 right-8 text-[#223a8c]/10"
            size={90}
          />

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* IMAGE */}
            <div className="shrink-0">
              <img
                src={data[active].img}
                alt={data[active].name}
                className="w-36 h-36 rounded-full object-cover border-[6px] border-[#223a8c]"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-8 italic mb-6">
                "{data[active].text}"
              </p>

              <h4 className="font-bold text-xl text-[#223a8c]">
                {data[active].name}
              </h4>

              <p className="text-gray-500">
                Verified Client
              </p>

              <div className="flex gap-3 mt-8">
                {data.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-10 bg-[#223a8c]"
                        : "w-3 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}