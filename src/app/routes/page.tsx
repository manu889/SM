import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { popularRoutes } from "@/data/routes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Popular Routes - Mysore to Ooty, Coorg, Bangalore Taxi | Fare ₹11/km",
  description: "Book Mysore taxi for popular routes: Mysore to Ooty (₹2500), Mysore to Coorg (₹2200), Mysore to Bangalore (₹2000), Mysore to Wayanad (₹3200). One way & round trip available. Clean AC cars, 24/7 service.",
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Popular Routes
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Traveled Destinations
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Explore our most popular cab routes from Mysore with transparent pricing and reliable service
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Routes Grid */}
            <section>
              <div className="grid md:grid-cols-2 gap-4">
                {popularRoutes.map((route) => (
                  <Link 
                    key={route.slug}
                    href={`/routes/${route.slug}`}
                    className="group block bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg hover:ring-amber-200 transition"
                  >
                    {/* Route Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-slate-900">{route.from}</span>
                          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="text-sm font-bold text-slate-900">{route.to}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {route.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {route.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-xs text-slate-500 block mb-1">Starting from</span>
                      <span className="text-base font-bold text-amber-600">{route.price}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{route.description}</p>

                    {/* Highlights */}
                    {route.highlights && route.highlights.length > 0 && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {route.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                              <svg className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* View Details Link */}
                    <div className="flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why Choose Our Cab Service?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Experienced Drivers</h3>
                    <p className="text-sm text-slate-600">All drivers are trained professionals with extensive knowledge of hill routes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-slate-600">No hidden charges - clear pricing with toll and parking as actuals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Well-Maintained Fleet</h3>
                    <p className="text-sm text-slate-600">Clean, sanitized vehicles with regular maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">24/7 Support</h3>
                    <p className="text-sm text-slate-600">Round-the-clock customer service for bookings and assistance</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Options */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Flexible Booking Options</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">One-Way Trips</h3>
                    <p className="text-slate-600">Travel to your destination without return. Billed based on total distance including vehicle return.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Round Trips</h3>
                    <p className="text-slate-600">More economical for return journeys. Vehicle stays with you throughout your trip.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Multi-City Tours</h3>
                    <p className="text-slate-600">Visit multiple destinations in one trip. Custom itineraries available.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Stopover Flexibility</h3>
                    <p className="text-slate-600">Request stops at viewpoints, restaurants, or attractions along the way.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Form */}
              <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Book Your Cab</h3>
                <BookingForm compact />
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Top Routes</h3>
                <div className="space-y-2">
                  {popularRoutes.slice(0, 5).map((route) => (
                    <Link 
                      key={route.slug}
                      href={`/routes/${route.slug}`}
                      className="block text-sm text-slate-700 hover:text-amber-600 transition py-2 border-b border-slate-100 last:border-0"
                    >
                      <div className="flex items-center justify-between">
                        <span>{route.from} → {route.to}</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{route.price}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-3">Need a Custom Route?</h3>
                <p className="text-sm mb-4">
                  Can't find your destination? Contact us for custom routes and special requests.
                </p>
                <a href="/contact" className="inline-block w-full text-center rounded-full bg-white text-amber-600 px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition">
                  Contact Us
                </a>
              </div>

              {/* FAQ Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Common Questions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Are tolls included?</h4>
                    <p className="text-slate-600">Tolls and parking are charged as per actuals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Can I book last minute?</h4>
                    <p className="text-slate-600">Yes, subject to availability. We recommend 2-3 hours advance booking</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Payment options?</h4>
                    <p className="text-slate-600">Cash, UPI, cards - before or after the trip</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
