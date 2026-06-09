import Image from "next/image";

const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
];

export default function GalleryPage() {
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
            Gallery
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Our Gallery
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            A glimpse of our legal services, registrations, documentation
            support and professional journey.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-[#03228f]">
            Moments & Milestones
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Explore our gallery showcasing successful registrations,
            legal assistance, documentation support and memorable
            client interactions.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03228f] py-16">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Legal Assistance?
          </h2>

          <p className="mt-4 text-blue-100">
            Contact Advocate Taslim for Court Marriage,
            Marriage Registration and Legal Documentation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="tel:+918826552527"
              className="bg-white text-[#03228f] px-8 py-4 rounded-full font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918826552527"
              className="border border-white px-8 py-4 rounded-full font-semibold"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}