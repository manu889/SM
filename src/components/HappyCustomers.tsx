"use client";

import Image from "next/image";
import { useState } from "react";

const TOTAL_IMAGES = 47;

const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  src: `/Images/Happy Customers/Customer (${i + 1}).jpeg`,
  alt: `Happy Customer ${i + 1}`,
}));

export default function HappyCustomers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Our Happy Customers
          </h2>
          <p className="text-sm text-slate-600">
            Thousands of smiles — here are some of our cherished travellers who
            made wonderful memories with SM Tours &amp; Travels.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid mb-4 cursor-pointer group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="relative max-w-2xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size customer photo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
