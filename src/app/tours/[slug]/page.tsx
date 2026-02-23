import { notFound } from "next/navigation";
import { tourPackages } from "@/data/tours";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import TourPackageHero from "@/components/TourPackageHero";
import RelatedTourPackages from "@/components/RelatedTourPackages";
import { BUSINESS_INFO } from "@/data/constants";

const HappyCustomers = dynamic(() => import("@/components/HappyCustomers"), {
  loading: () => <div className="min-h-75 animate-pulse bg-gray-100" />,
});

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found" };
  
  const startPrice = tour.pricing.sedan || tour.pricing.suv || tour.pricing.tempo || 0;
  
  return {
    title: `${tour.title} | From ₹${startPrice.toLocaleString()} | SM Tours & Travels Mysore`,
    description: tour.description,
  };
}

export default async function TourPackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);
  
  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <TourPackageHero tour={tour} />

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Vehicle Options & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tour.pricing.sedan && (
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="text-lg font-bold text-slate-900 mb-1">Sedan</div>
                <div className="text-sm text-slate-600 mb-4">Dzire / Etios</div>
                <div className="text-xs text-slate-500 mb-2">Starts from</div>
                <div className="text-4xl font-bold text-amber-600 mb-4">₹{tour.pricing.sedan.toLocaleString()}</div>
              </div>
            )}
            {tour.pricing.suv && (
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="text-lg font-bold text-slate-900 mb-1">SUV</div>
                <div className="text-sm text-slate-600 mb-4">Innova / Ertiga</div>
                <div className="text-xs text-slate-500 mb-2">Starts from</div>
                <div className="text-4xl font-bold text-amber-600 mb-4">₹{tour.pricing.suv.toLocaleString()}</div>
              </div>
            )}
            {tour.pricing.tempo && (
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="text-lg font-bold text-slate-900 mb-1">Tempo Traveller</div>
                <div className="text-sm text-slate-600 mb-4">12-17 Seater</div>
                <div className="text-xs text-slate-500 mb-2">Starts from</div>
                <div className="text-4xl font-bold text-amber-600 mb-4">₹{tour.pricing.tempo.toLocaleString()}</div>
              </div>
            )}
          </div>
          {tour.pricing.note && (
            <p className="text-sm text-slate-600 mt-6 text-center italic">* {tour.pricing.note}</p>
          )}
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tour Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                    <span className="text-emerald-600 text-xl mt-0.5">✓</span>
                    <span className="text-slate-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Destinations Covered</h2>
              <div className="flex flex-wrap gap-3">
                {tour.destinations.map((destination, index) => (
                  <span key={index} className="px-4 py-2 bg-linear-to-r from-emerald-100 to-teal-100 text-slate-800 rounded-full font-semibold">
                    📍 {destination}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-2 border-emerald-200 rounded-2xl p-6 bg-linear-to-br from-white to-emerald-50">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
                        {day.day}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{day.title}</h3>
                        <p className="text-sm text-slate-600">{day.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-15">
                      {day.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Inclusions & Exclusions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✓</span> Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✗</span> Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Book This Tour?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our <strong>{tour.title.toLowerCase()}</strong> is carefully designed to give you the best experience of {tour.destinations.join(', ')}. With {tour.days} days and {tour.nights} night{tour.nights !== 1 ? 's' : ''}, you'll have enough time to explore all major attractions without feeling rushed.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We provide comfortable AC vehicles, experienced drivers who know the routes well, and flexible timing to suit your needs. Whether you're traveling with family, friends, or as a couple, this tour package offers excellent value with competitive pricing for sedans, SUVs, and tempo travellers.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Booking & Payment</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Call or WhatsApp to confirm availability</li>
                <li>✓ Advance payment of 20% to block the booking</li>
                <li>✓ Balance payment after the tour completion</li>
                <li>✓ Free cancellation up to 48 hours before tour</li>
                <li>✓ Flexible pickup from hotel, railway station, or airport</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl shadow-xl border-2 border-emerald-200">
                <div className="text-center mb-6">
                  <p className="text-sm text-slate-600 mb-2">Starting from</p>
                  <p className="text-4xl font-bold text-emerald-600">
                    ₹{(tour.pricing.sedan || tour.pricing.suv || tour.pricing.tempo || 0).toLocaleString()}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Per vehicle (Sedan) - Select vehicle type below*</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between border-b border-emerald-200 pb-2">
                    <span className="text-slate-600">Duration:</span>
                    <span className="font-semibold text-slate-900">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-200 pb-2">
                    <span className="text-slate-600">Category:</span>
                    <span className="font-semibold text-slate-900 capitalize">{tour.category.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Destinations:</span>
                    <span className="font-semibold text-slate-900">{tour.destinations.length} places</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Tour Details</h3>
                <TourEnquiryForm 
                  tourTitle={tour.title} 
                  tourPrice={tour.pricing.sedan || tour.pricing.suv || tour.pricing.tempo || 0} 
                  duration={tour.duration} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Happy Customers Section */}
      <HappyCustomers />

      {/* Related Tour Packages */}
      <RelatedTourPackages currentTourSlug={tour.slug} />
    </main>
  );
}
