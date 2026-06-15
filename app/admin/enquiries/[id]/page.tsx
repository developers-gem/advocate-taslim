import Link from "next/link";
import { notFound } from "next/navigation";

import Enquiry from "@/models/Enquiry";
import { connectDB } from "@/lib/mongodb";

async function getEnquiry(id: string) {
  await connectDB();

  const enquiry = await Enquiry.findById(id).lean();

  if (!enquiry) return null;

  return JSON.parse(JSON.stringify(enquiry));
}

export default async function EnquiryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const enquiry = await getEnquiry(id);

  if (!enquiry) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Enquiry Details
          </h1>

          <p className="text-gray-500 mt-1">
            Submitted on{" "}
            {new Date(
              enquiry.createdAt
            ).toLocaleString()}
          </p>
        </div>

        <Link
          href="/admin/enquiries"
          className="bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-lg"
        >
          ← Back
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

        {/* Name */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Name
          </h3>

          <p className="text-lg">
            {enquiry.name}
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Email
          </h3>

          <p className="text-lg">
            {enquiry.email || "-"}
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Phone
          </h3>

          <p className="text-lg">
            {enquiry.phone}
          </p>
        </div>

        {/* Source */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Source
          </h3>

          <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            {enquiry.source}
          </span>
        </div>

        {/* Message */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Message
          </h3>

          <div className="bg-gray-50 rounded-xl p-5 border">
            <p className="whitespace-pre-wrap">
              {enquiry.message || "No message provided"}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}