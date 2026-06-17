import Image from "next/image";
import { notFound } from "next/navigation";

import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

async function getBlog(slug: string) {
  await connectDB();

  const blog = await Blog.findOne({
    slug,
    published: true,
  }).lean();

  if (!blog) return null;

  return JSON.parse(JSON.stringify(blog));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle || blog.title,
    description:
      blog.seoDescription || blog.excerpt,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-[300px] sm:min-h-[400px] md:h-[450px] flex items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

          <span className="uppercase tracking-[4px] text-blue-300">
            Blog Details
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4">
            {blog.title}
          </h1>

          <p className="mt-6 text-gray-200">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>

        </div>

      </section>
      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          {blog.featuredImage && (
            <div className="relative h-[300px] md:h-[500px] mb-10 rounded-3xl overflow-hidden">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <p className="text-xl text-gray-600">
              {blog.excerpt}
            </p>
          </div>

          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

        </div>
      </section>

    </main>
  );
}