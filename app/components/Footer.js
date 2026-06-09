"use client";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";


export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Request A Call Back", href: "/contact" },
    { name: "Online Payment", href: "/online-payment" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Court Marriage", href: "/court-marriage" },
    { name: "Legal Notice", href: "/legal-notice" },
    { name: "Property Registration", href: "/property-registration" },
    { name: "Marriage Registration", href: "/marriage-registration" },
    { name: "Divorce Filing", href: "/divorce-filing" },
  ];

  const services = [
    {
      name: "Marriage Registration in Ghaziabad",
      href: "/marriage-registration-in-ghaziabad",
    },
    {
      name: "Court Marriage Advocate in Ghaziabad",
      href: "/court-marriage-advocate-in-ghaziabad",
    },
    {
      name: "Legal Notice Advocate in Ghaziabad",
      href: "/legal-notice-advocate-in-ghaziabad",
    },
    {
      name: "Court Marriage Advocate in Delhi",
      href: "/online-payments",
    },
    {
      name: "Online Payment",
      href: "/online-payments",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <footer className="relative bg-gray-200 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/footer-image.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="mb-6">
              <img src="/images/logo-white.png" alt="logo" className="w-36" />

            </div>

            <p className="text-gray-300 leading-9 text-lg">
              Advocate Taslim provides services for court marriage in
              Ghaziabad, Marriage Registrations, Solemnization of Marriages and
              assistance in issuing Marriage Certificates. We have a rich
              experience in organizing court marriage in Delhi, Noida, Gurgaon,
              Ghaziabad, Meerut and other areas NCR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-4xl font-semibold mb-8">Quick Links</h3>

            <ul className="space-y-5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                  >
                    <ChevronRight size={16} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-4xl font-semibold mb-8">Services Area</h3>

            <ul className="space-y-5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition"
                  >
                    <ChevronRight size={16} className="mt-1 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-4xl font-semibold mb-8">Contact Info:</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="text-white mt-1 shrink-0" size={22} />
                <span className="text-gray-300">
                  tsaifi6@gmail.com
                </span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-white mt-1 shrink-0" size={22} />
                <span className="text-gray-300">
                  +91 8826552527
                  <br />
                  +91 7678336800
                </span>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-white mt-1 shrink-0" size={22} />
                <span className="text-gray-300">
                  Tehsil, 133, New Gandhi Nagar,
                  Dayanand Nagar, Block A,
                  Nehru Nagar III, Sadar,
                  Ghaziabad, Uttar Pradesh 201001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-16">
          <div className="border-t border-white/20"></div>

          <button className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white text-black w-8 h-8 flex items-center justify-center">
            <ChevronUp size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span>
              Copyright © 2026{" "}
              <span className="text-blue-700">
                Advocate Taslim
              </span>{" "}
              All Rights Reserved. | Designed by
            </span>

            <a
              href="https://gemwebservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="/images/gem logo.png"
                alt="Gem Web Services"
                className="h-8 w-auto"
              />
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/TASLIMDXX/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a> */}
            <a
              href="https://www.instagram.com/advtaslimahamad?igsh=N2s0NTBmZHlkZTFl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#fa7e1e] text-white flex items-center justify-center hover:scale-110 transition"
              aria-label="Twitter"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@advocate_taslim_ahamad/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      {/* Floating Buttons */}
      <div className="fixed right-5 bottom-28 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/918826552527"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>

        <a
          href="tel:+918826552527"
          className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <Phone className="text-white" size={28} />
        </a>
      </div>
    </footer>
  );
}