export default function AdminDashboard() {
  return (
    <div>

      <h2 className="text-3xl font-bold mb-8">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">
            Total Blogs
          </h3>

          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">
            Enquiries
          </h3>

          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">
            Visitors
          </h3>

          <p className="text-4xl font-bold mt-3">
            -
          </p>
        </div>

      </div>

    </div>
  );
}