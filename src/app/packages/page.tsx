import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { tourPackages } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mysore Tour Packages - Ooty, Coorg, Wayanad, Chikmagalur | SM Tours",
  description: "Book Mysore tour packages: Mysore-Ooty one day trip, Coorg package, Wayanad tour, Chikmagalur weekend package, Kabini safari. Customized itineraries with experienced drivers. Call +91 6363206398 for best rates.",
};

const tourImages: Record<string, string> = {
  'mysore-one-day-tour': '/Images/Mysore_Tour_Package.jpg',
  'ooty-coonoor-2-days': '/Images/2.jpg',
  'coorg-2-days-1-night': '/Images/Coorg_Tour_Package.jpg',
  'tirupati-package': '/Images/3.jpg',
  'mysore-ooty-coorg-5days': '/Images/4.jpg',
  'wayanad-weekend': '/Images/5.jpg',
};

export default function PackagesPage() {
  const oneDayTours = tourPackages.filter(t => t.category === 'one-day');
  const weekendTours = tourPackages.filter(t => t.category === 'weekend');
  const multiDayTours = tourPackages.filter(t => t.category === 'multi-day');
  const pilgrimageTours = tourPackages.filter(t => t.category === 'pilgrimage');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Tour Packages
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Curated Travel Experiences
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Handpicked itineraries for unforgettable journeys across Karnataka and South India
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* One Day Tours */}
            {oneDayTours.length > 0 && (
              <section id="one-day">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">One Day Tours</h2>
                  <p className="text-sm text-slate-600">Perfect for a quick getaway or exploring local attractions.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {oneDayTours.map((tour) => (
                    <Link 
                      key={tour.id}
                      href={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
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
                            <span className="text-base font-bold text-amber-600">₹{tour.price.toLocaleString()}</span>
                          </div>
                          <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Weekend Getaways */}
            {weekendTours.length > 0 && (
              <section id="weekend">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Weekend Getaways</h2>
                  <p className="text-sm text-slate-600">2-3 day packages perfect for a weekend escape.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {weekendTours.map((tour) => (
                    <Link 
                      key={tour.id}
                      href={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={tourImages[tour.slug] || '/Images/2.jpg'}
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
                            <span className="text-base font-bold text-amber-600">₹{tour.price.toLocaleString()}</span>
                          </div>
                          <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Multi-Day Tours */}
            {multiDayTours.length > 0 && (
              <section id="multi-day">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Multi-Day Tours</h2>
                  <p className="text-sm text-slate-600">Extended tours covering multiple destinations.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {multiDayTours.map((tour) => (
                    <Link 
                      key={tour.id}
                      href={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={tourImages[tour.slug] || '/Images/4.jpg'}
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
                            <span className="text-base font-bold text-amber-600">₹{tour.price.toLocaleString()}</span>
                          </div>
                          <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Pilgrimage Tours */}
            {pilgrimageTours.length > 0 && (
              <section id="pilgrimage">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Pilgrimage Tours</h2>
                  <p className="text-sm text-slate-600">Spiritual journeys to sacred destinations.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {pilgrimageTours.map((tour) => (
                    <Link 
                      key={tour.id}
                      href={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={tourImages[tour.slug] || '/Images/3.jpg'}
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
                            <span className="text-base font-bold text-amber-600">₹{tour.price.toLocaleString()}</span>
                          </div>
                          <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* What's Included */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What's Typically Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Comfortable AC Vehicle
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional Driver
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fuel Charges
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Driver Allowance
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Parking & Tolls
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong>Note:</strong> Entry tickets, accommodation (where applicable), meals, and personal expenses are typically not included unless specified. All packages are customizable to your preferences.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Form */}
              <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Book a Package</h3>
                <BookingForm compact />
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Browse by Category</h3>
                <div className="space-y-2">
                  <a href="#one-day" className="block text-sm text-slate-700 hover:text-amber-600 transition py-2 border-b border-slate-100">
                    One Day Tours ({oneDayTours.length})
                  </a>
                  <a href="#weekend" className="block text-sm text-slate-700 hover:text-amber-600 transition py-2 border-b border-slate-100">
                    Weekend Getaways ({weekendTours.length})
                  </a>
                  <a href="#multi-day" className="block text-sm text-slate-700 hover:text-amber-600 transition py-2 border-b border-slate-100">
                    Multi-Day Tours ({multiDayTours.length})
                  </a>
                  <a href="#pilgrimage" className="block text-sm text-slate-700 hover:text-amber-600 transition py-2">
                    Pilgrimage Tours ({pilgrimageTours.length})
                  </a>
                </div>
              </div>

              {/* Custom Package */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-3">Want a Custom Package?</h3>
                <p className="text-sm mb-4">
                  We can create a personalized itinerary based on your preferences, budget, and travel dates.
                </p>
                <a href="/contact" className="inline-block w-full text-center rounded-full bg-white text-amber-600 px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition">
                  Contact Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
