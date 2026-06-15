import Blog from "@/models/Blog";
import Enquiry from "@/models/Enquiry";
import { connectDB } from "@/lib/mongodb";

async function getStats() {
  await connectDB();

  const totalBlogs =
    await Blog.countDocuments();

  const totalEnquiries =
    await Enquiry.countDocuments();

  return {
    totalBlogs,
    totalEnquiries,
  };
}

export default async function AdminDashboard() {
  const {
    totalBlogs,
    totalEnquiries,
  } = await getStats();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#223a8c]">
          <h3 className="text-lg font-semibold text-gray-600">
            Total Blogs
          </h3>

          <p className="text-5xl font-bold mt-4 text-[#223a8c]">
            {totalBlogs}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-600">
          <h3 className="text-lg font-semibold text-gray-600">
            Total Enquiries
          </h3>

          <p className="text-5xl font-bold mt-4 text-green-600">
            {totalEnquiries}
          </p>
        </div>

      </div>
    </div>
  );
}