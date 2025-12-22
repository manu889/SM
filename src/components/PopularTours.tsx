import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/data/tours';

const tourImages: Record<string, string> = {
  'mysore-one-day-tour': '/Images/Mysore_Tour_Package.jpg',
  'ooty-coonoor-2-days': '/Images/2.jpg',
  'coorg-2-days-tour': '/Images/Coorg_Tour_Package.jpg',
  'tirupati-balaji-darshan': '/Images/3.jpg',
  'mysore-ooty-coorg-5-days': '/Images/4.jpg',
  'wayanad-2-days-tour': '/Images/5.jpg',
};

export default function PopularTours() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">
            🗺️ Curated Experiences
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Popular Tour Packages</h2>
          <p className="text-sm text-slate-600">Handpicked itineraries for unforgettable journeys</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.slice(0, 6).map((tour) => (
            <Link 
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-amber-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={tourImages[tour.slug] || '/Images/Mysore.jpg'}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900">
                    {tour.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-xs font-bold text-white">
                    {tour.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition">
                  {tour.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Starting from</span>
                    <span className="text-base font-bold text-amber-600">₹{tour.price.toLocaleString()}*</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-600 font-semibold text-sm">
                    <span>Explore</span>
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 mb-6">
          <p className="text-xs text-slate-500 mb-6">
            * Prices shown are starting rates per vehicle (not per person). Final pricing depends on vehicle type, passenger count, and additional services.
          </p>
          <Link href="/packages" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/40">
            <span>View All Packages</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
