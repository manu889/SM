import { notFound } from "next/navigation";
import { tourPackages } from "@/data/tours";
import type { Metadata } from "next";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import { BUSINESS_INFO } from "@/data/constants";

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found" };
  
  return {
    title: `${tour.title} | ₹${tour.price.toLocaleString()} | SM Tours & Travels Mysore`,
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
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-semibold mb-4 uppercase">
              {tour.category.replace('-', ' ')} tour
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {tour.title}
            </h1>
            <p className="text-lg text-slate-700 mb-6">
              {tour.description}
            </p>
            <div className="flex flex-wrap gap-6 text-slate-800 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span className="font-semibold">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="font-semibold">₹{tour.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-semibold">{tour.destinations.length} Destinations</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in ${tour.title}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                💬 WhatsApp Booking
              </a>
            </div>
          </div>
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
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-slate-800 rounded-full font-semibold">
                    📍 {destination}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-2 border-emerald-200 rounded-2xl p-6 bg-gradient-to-br from-white to-emerald-50">
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
                We provide comfortable AC vehicles, experienced drivers who know the routes well, and flexible timing to suit your needs. Whether you're traveling with family, friends, or as a couple, this tour package offers excellent value at <strong>₹{tour.price.toLocaleString()}</strong>.
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
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl shadow-xl border-2 border-emerald-200">
                <div className="text-center mb-6">
                  <p className="text-sm text-slate-600 mb-2">Starting from</p>
                  <p className="text-4xl font-bold text-emerald-600">₹{tour.price.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 mt-1">Per vehicle (not per person)*</p>
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
                <TourEnquiryForm tourTitle={tour.title} tourPrice={tour.price} duration={tour.duration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
