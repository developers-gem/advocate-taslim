"use client";

import { useState } from "react";
import TiptapEditor from "@/app/components/TiptapEditor";

export default function CreateBlogPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    seoTitle: "",
    seoDescription: "",
  });

  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const title = e.target.value;

    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      setLoading(true);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      setFormData((prev) => ({
        ...prev,
        featuredImage: result.url,
      }));
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      alert("Blog created successfully");

      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        featuredImage: "",
        seoTitle: "",
        seoDescription: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-6">

        <h1 className="text-3xl font-bold mb-6">
          Create Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* TITLE */}
          <div>
            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="block mb-2 font-medium">
              Slug
            </label>

            <input
              type="text"
              value={formData.slug}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  slug: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* EXCERPT */}
          <div>
            <label className="block mb-2 font-medium">
              Excerpt
            </label>

            <textarea
              rows={4}
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  excerpt: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block mb-2 font-medium">
              Featured Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={uploadImage}
            />

            {formData.featuredImage && (
              <img
                src={formData.featuredImage}
                alt="preview"
                className="mt-4 w-64 rounded-lg border"
              />
            )}
          </div>

          {/* CONTENT */}
       <div>
  <label className="block mb-2 font-medium">
    Content
  </label>

  <TiptapEditor
    content={formData.content}
    onChange={(value) =>
      setFormData({
        ...formData,
        content: value,
      })
    }
  />
</div>

          {/* SEO TITLE */}
          <div>
            <label className="block mb-2 font-medium">
              SEO Title
            </label>

            <input
              type="text"
              value={formData.seoTitle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  seoTitle: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* SEO DESCRIPTION */}
          <div>
            <label className="block mb-2 font-medium">
              SEO Description
            </label>

            <textarea
              rows={4}
              value={formData.seoDescription}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  seoDescription: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#223a8c] text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Create Blog"}
          </button>

        </form>
      </div>
    </div>
  );
}