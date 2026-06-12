"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    seoTitle: "",
    seoDescription: "",
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await fetch(
        `/api/blogs/${params.id}`
      );

      const data = await res.json();

      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        featuredImage:
          data.featuredImage || "",
        seoTitle: data.seoTitle || "",
        seoDescription:
          data.seoDescription || "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formDataUpload,
    });

    const result = await res.json();

    setFormData((prev) => ({
      ...prev,
      featuredImage: result.url,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      const res = await fetch(
        `/api/blogs/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      alert("Blog updated");

      router.push("/admin/blogs");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Edit Blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow"
      >

        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Slug"
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Excerpt"
          rows={4}
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({
              ...formData,
              excerpt: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <div>
          <input
            type="file"
            onChange={uploadImage}
          />

          {formData.featuredImage && (
            <img
              src={formData.featuredImage}
              alt=""
              className="w-64 mt-4 rounded"
            />
          )}
        </div>

        <textarea
          placeholder="Content"
          rows={12}
          value={formData.content}
          onChange={(e) =>
            setFormData({
              ...formData,
              content: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="SEO Title"
          value={formData.seoTitle}
          onChange={(e) =>
            setFormData({
              ...formData,
              seoTitle: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="SEO Description"
          rows={4}
          value={formData.seoDescription}
          onChange={(e) =>
            setFormData({
              ...formData,
              seoDescription:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={saving}
          className="bg-[#223a8c] text-white px-6 py-3 rounded"
        >
          {saving
            ? "Updating..."
            : "Update Blog"}
        </button>

      </form>
    </div>
  );
}