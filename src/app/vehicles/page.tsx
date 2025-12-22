import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Fleet - Dzire, Innova, Crysta, Tempo Traveller | Mysore Taxi Service",
  description: "Choose from 50+ well-maintained AC vehicles: Swift Dzire (₹11/km), Ertiga (₹13/km), Innova (₹15/km), Innova Crysta (₹18/km), Tempo Traveller (₹25/km). Clean cars, professional drivers. Book Mysore taxi now.",
};

const vehicleImages: Record<string, string> = {
  '1': '/Images/Vehicles/Dzire.png',
  '2': '/Images/Vehicles/Etios.png',
  '3': '/Images/Vehicles/Innova.png',
  '4': '/Images/Vehicles/Ertiga.png',
  '5': '/Images/Vehicles/Crysta.webp',
  '6': '/Images/Vehicles/Tempo-Traveller.png',
  '7': '/Images/Vehicles/Tempo-Traveller.png',
};

export default function VehiclesPage() {
  const sedans = vehicles.filter(v => v.category === 'sedan');
  const suvs = vehicles.filter(v => v.category === 'suv' || v.category === 'luxury');
  const tempos = vehicles.filter(v => v.category === 'tempo');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Our Fleet
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Well-Maintained Vehicles
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Choose from our diverse fleet of 120+ vehicles - from compact sedans to spacious tempo travellers
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Sedans */}
            <section>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sedans</h2>
                <p className="text-sm text-slate-600">Perfect for couples and small families. Fuel-efficient and comfortable.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {sedans.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={vehicleImages[vehicle.id] || '/Images/Vehicles/Dzire.png'}
                        alt={vehicle.name}
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
                        {vehicle.seating} Seater
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-1">{vehicle.name}</h3>
                      <p className="text-sm text-slate-500 mb-4 capitalize">{vehicle.category}</p>
                      <ul className="space-y-2 mb-5">
                        {vehicle.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}  
                      </ul>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="block text-base font-bold text-amber-600">{vehicle.pricePerKm}</span>
                          <span className="text-xs text-slate-500">per km</span>
                        </div>
                        <Link href="/book" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg transition">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SUVs & Luxury */}
            <section>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">SUVs & Luxury</h2>
                <p className="text-sm text-slate-600">Spacious and comfortable for family trips and long journeys.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {suvs.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={vehicleImages[vehicle.id] || '/Images/Vehicles/Innova.png'}
                        alt={vehicle.name}
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
                        {vehicle.seating} Seater
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-1">{vehicle.name}</h3>
                      <p className="text-sm text-slate-500 mb-4 capitalize">{vehicle.category}</p>
                      <ul className="space-y-2 mb-5">
                        {vehicle.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="block text-base font-bold text-amber-600">{vehicle.pricePerKm}</span>
                          <span className="text-xs text-slate-500">per km</span>
                        </div>
                        <Link href="/book" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg transition">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tempo Travellers */}
            <section>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Tempo Travellers</h2>
                <p className="text-sm text-slate-600">Ideal for large groups, family functions, and corporate tours.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {tempos.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={vehicleImages[vehicle.id] || '/Images/Vehicles/Tempo-Traveller.png'}
                        alt={vehicle.name}
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
                        {vehicle.seating} Seater
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-1">{vehicle.name}</h3>
                      <p className="text-sm text-slate-500 mb-4 capitalize">{vehicle.category}</p>
                      <ul className="space-y-2 mb-5">
                        {vehicle.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="block text-base font-bold text-amber-600">{vehicle.pricePerKm}</span>
                          <span className="text-xs text-slate-500">per km</span>
                        </div>
                        <Link href="/book" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg transition">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">All Vehicles Include</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Regular Maintenance & Sanitization
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional Drivers
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  GPS Tracking
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Roadside Assistance
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insurance Coverage
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  First Aid Kit
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Form */}
              <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Quick Booking</h3>
                <BookingForm compact />
              </div>

              {/* Pricing Info */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">Transparent Pricing</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Per km rates include vehicle and driver charges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tolls, parking charged as per actuals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No hidden charges or surprise fees</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Need Help Choosing?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our experts can help you select the perfect vehicle for your trip.
                </p>
                <a href="/contact" className="inline-block w-full text-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
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
