"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a court marriage take?",
    answer:
      "The timeline depends on the applicable legal procedure and documentation requirements. Our team guides you through the complete process.",
  },
  {
    question: "What documents are required for marriage registration?",
    answer:
      "Typically, age proof, address proof, photographs, affidavits, and witness documents are required.",
  },
  {
    question: "Can inter-religion couples apply for court marriage?",
    answer:
      "Yes. Court marriages can be conducted under the Special Marriage Act subject to legal requirements.",
  },
  {
    question: "Do you assist with legal notices?",
    answer:
      "Yes. We draft, review, and serve legal notices related to property, business, employment, family, and financial disputes.",
  },
  {
    question: "Do you provide services across NCR?",
    answer:
      "Yes. We assist clients in Ghaziabad, Noida, Greater Noida, Delhi, Gurgaon, and nearby regions.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#03228f] uppercase tracking-widest font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Got Questions?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold"
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-5 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}