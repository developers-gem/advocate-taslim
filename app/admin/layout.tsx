import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-[#223a8c] text-white min-h-screen">

        <div className="p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold">
            Admin Panel
          </h2>

          <p className="text-sm text-blue-200 mt-1">
            Advocate Taslim
          </p>
        </div>

        <nav className="p-4">

          <div className="space-y-2">

            <Link
              href="/admin"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/blogs"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Blogs
            </Link>

            <Link
              href="/admin/blogs/create"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Create Blog
            </Link>

            <Link
              href="/admin/enquiries"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Enquiries
            </Link>

            <Link
              href="/admin/settings"
              className="block px-4 py-3 rounded-lg hover:bg-white/10"
            >
              Settings
            </Link>

          </div>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1">

        {/* TOP BAR */}
        <div className="bg-white border-b px-8 py-5">
          <h1 className="text-xl font-semibold">
            Admin Dashboard
          </h1>
        </div>

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  );
}