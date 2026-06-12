"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      setBlogs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    const confirmed = confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );

      alert("Blog deleted");
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Manage Blogs
        </h1>

        <Link
          href="/admin/blogs/create"
          className="bg-[#223a8c] text-white px-5 py-3 rounded-lg"
        >
          Create Blog
        </Link>

      </div>

      <div className="overflow-x-auto bg-white shadow rounded-xl">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-4">Image</th>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Slug</th>
              <th className="text-left p-4">Created</th>
              <th className="text-left p-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {blogs.map((blog) => (
              <tr
                key={blog._id}
                className="border-t"
              >
                <td className="p-4">
                  {blog.featuredImage ? (
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ) : (
                    "-"
                  )}
                </td>

                <td className="p-4 font-medium">
                  {blog.title}
                </td>

                <td className="p-4 text-gray-600">
                  {blog.slug}
                </td>

                <td className="p-4">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">

                  <div className="flex gap-3">

                    <Link
                      href={`/admin/blogs/edit/${blog._id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteBlog(blog._id)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>

                  </div>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}