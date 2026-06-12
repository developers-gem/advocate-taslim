import Link from "next/link";
import Image from "next/image";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const metadata = {
  title: "Blogs | Advocate Taslim",
  description:
    "Legal blogs about Court Marriage, Marriage Registration, Property Registration and related legal services.",
};

async function getBlogs() {
  await connectDB();

  const blogs = await Blog.find({
    published: true,
  })
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(blogs));
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main>

       {/* HERO */}
      <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center text-white px-6">
          <span className="uppercase tracking-[4px] text-blue-300 text-sm">
            Blogs
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
                        Legal Blogs

          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Insights, Guides & Legal Information
          </p>
        </div>
      </section>
      {/* BLOGS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog: any) => (
              <div
                key={blog._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56">

                  <Image
                    src={
                      blog.featuredImage ||
                      "/images/blog-placeholder.jpg"
                    }
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h2 className="text-xl font-bold mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-5">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex bg-[#223a8c] text-white px-5 py-3 rounded-lg"
                  >
                    Read More
                  </Link>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}