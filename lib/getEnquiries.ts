import Enquiry from "@/models/Enquiry";
import { connectDB } from "@/lib/mongodb";

export async function getEnquiries() {
  await connectDB();

  const enquiries = await Enquiry.find()
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(
    JSON.stringify(enquiries)
  );
}