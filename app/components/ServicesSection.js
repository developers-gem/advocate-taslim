"use client";
import { useRef } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;

    const cardWidth = container.firstChild.offsetWidth + 24; 

    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Court Marriage",
      img: "/images/service-1.jpg",
      link: "/court-marriage-and-marriage-registration",
      desc: "Court Marriage is very different from the customary marriage and it happens in the presence of the Marriage Registrar.",
    },
    {
      title: "Legal Notice",
      img: "/images/service-2.jpg",
      link: "/procedure-and-documents-required-of-court-marriage",
      desc: "It is a polite reminder by the sender to the receiver to resolve the issues of the sender.",
    },
    {
      title: "Property Registration",
      img: "/images/service-3.jpg",
      link: "/foreigners-nri-marriages",
      desc: "Registration of property is a legal requirement to be followed when a person purchases land or property in India.",
    },
    {
      title: "Marriage Registration",
      img: "/images/service-4.jpg",
      link: "/aryasamaj-marriages",
      desc: "Arya Samaj Marriages are simple and translated into Hindi/English for understanding.",
    },
    {
      title: "Divorce Filing",
      img: "/images/service-5.webp",
      link: "/muslim-marriage-nikah",
      desc: "Spouses choosing mutual divorce often need guidance on procedure and court terms.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            OUR <span className="text-[#223a8c]">SERVICES</span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border rounded-full flex items-center justify-center text-[24px] text-white bg-blue-800"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border rounded-full flex items-center justify-center text-white text-[24px] bg-blue-800 "
            >
              ›
            </button>
          </div>
        </div>

        {/* SLIDER */}
      <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
>
  {services.map((item, i) => (
    <div
      key={i}
      className="min-w-[33.33%] flex-shrink-0 bg-white"
    >
      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[280px] object-cover"
      />

      {/* CONTENT */}
      <div className="p-6 border border-dashed border-gray-400 text-center">
        <h3 className="text-lg font-semibold text-[#223a8c] mb-3">
          <Link href={item.link}>{item.title}</Link>
        </h3>

        <p className="text-sm text-gray-600 text-justify leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}