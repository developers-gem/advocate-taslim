"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      name: "Court Marriage",
      href: "/court-marriage",
    },
    {
      name: "Legal Notice",
      href: "/legal-notice",
    },
    {
      name: "Property Registration",
      href: "/property-registration",
    },
    {
      name: "Marriage Registration",
      href: "/marriage-registration",
    },
    {
      name: "Divorce Filing",
      href: "/divorce-filing",
    },
  ];

  return (
    <header className="bg-[#2f3f8f] sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between py-4 gap-3">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white text-[18px]">

            <Link href="/" className="hover:text-blue-200 transition ">
              Home
            </Link>

            <Link
              href="/about-us"
              className="hover:text-blue-200 transition"
            >
              About Us
            </Link>



            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-200 transition">
                Our Services
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </button>

              <div
                className="
                  absolute
                  top-full
                  left-0
                  w-72
                  bg-white
                  shadow-xl
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-200
                  z-50
                "
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-700
                      border-b
                      hover:bg-[#2f3f8f]
                      hover:text-white
                      transition
                    "
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/online-payments"
              className="hover:text-blue-200 transition"
            >
              Online Payments
            </Link>

            <Link
              href="/gallery"
              className="hover:text-blue-200 transition"
            >
              Gallery
            </Link>

            <Link
              href="/blogs"
              className="hover:text-blue-200 transition"
            >
              Blogs
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-200 transition"
            >
              Contact Us
            </Link>

          </nav>

          {/* Desktop CTA */}
          <Link
            href="/request-a-call-back"
            className="
              hidden
              lg:inline-flex
              bg-pink-600
              hover:bg-pink-700
              text-white
              px-6
              py-3
              rounded-md
text-[18px]              font-semibold
              transition
            "
          >
            For Online Booking Click Here
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>


          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">

            <Link
              href="/request-a-call-back"
              className="
      bg-pink-600
      hover:bg-pink-700
      text-white
      text-xs
      font-semibold
      px-3
      py-2
      rounded-md
      whitespace-nowrap
    "
            >
              For Online Booking Click Here

            </Link>



          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">

            <nav className="flex flex-col gap-4 text-white">

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                About Us
              </Link>



              {/* MOBILE SERVICES */}
              <div className="border-b border-white/20 pb-3">

                <p className="font-medium mb-3">
                  Our Services
                </p>

                <div className="ml-4 flex flex-col gap-2 text-sm">

                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}

                </div>

              </div>

              <Link
                href="/online-payments"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                Online Payments
              </Link>

              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                Gallery
              </Link>

              <Link
                href="/blogs"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 pb-3"
              >
                Contact Us
              </Link>



            </nav>

          </div>
        )}

      </div>
    </header>
  );
}