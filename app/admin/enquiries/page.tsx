import Link from "next/link";
import { getEnquiries } from "@/lib/getEnquiries";


export default async function EnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Enquiries
        </h1>

        <div className="bg-white px-4 py-2 rounded-lg shadow">
          Total: {enquiries.length}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#223a8c] text-white">
              <tr>
                <th className="text-left px-6 py-4">
                  Name
                </th>

                <th className="text-left px-6 py-4">
                  Phone
                </th>

                <th className="text-left px-6 py-4">
                  Email
                </th>

                <th className="text-left px-6 py-4">
                  Source
                </th>

                <th className="text-left px-6 py-4">
                  Date
                </th>

                <th className="text-left px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {enquiries.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10"
                  >
                    No enquiries found
                  </td>
                </tr>
              ) : (
                enquiries.map(
                  (enquiry: any) => (
                    <tr
                      key={enquiry._id}
                      className="border-b"
                    >
                      <td className="px-6 py-4">
                        {enquiry.name}
                      </td>

                      <td className="px-6 py-4">
                        {enquiry.phone}
                      </td>

                      <td className="px-6 py-4">
                        {enquiry.email}
                      </td>

                      <td className="px-6 py-4">
                        {enquiry.source}
                      </td>

                      <td className="px-6 py-4">
                        {new Date(
                          enquiry.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/enquiries/${enquiry._id}`}
                          className="bg-[#223a8c] text-white px-4 py-2 rounded-lg"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  )
                )
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}