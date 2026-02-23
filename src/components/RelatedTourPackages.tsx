import Link from "next/link";
import { tourPackages } from "@/data/tours";
import type { TourPackage } from "@/data/tours";

interface RelatedToursProps {
  currentTourSlug: string;
}

export default function RelatedTourPackages({ currentTourSlug }: RelatedToursProps) {
  // Get 3 random tours excluding current one
  const relatedTours = tourPackages
    .filter((tour) => tour.slug !== currentTourSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (relatedTours.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Explore Other Tour Packages
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Looking for something different? Check out our other exciting tour packages to explore more of South India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedTours.map((tour) => {
            const startPrice =
              tour.pricing.sedan || tour.pricing.suv || tour.pricing.tempo || 0;

            return (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  {tour.image && (
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3 capitalize">
                    {tour.category.replace("-", " ")}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                    {tour.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {tour.description}
                  </p>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span>📅</span>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span>📍</span>
                      <span>{tour.destinations.length} destinations</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-600">From</span>
                    <span className="text-2xl font-bold text-amber-600">
                      ₹{startPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-bold transition-all text-sm">
                      View Details →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
