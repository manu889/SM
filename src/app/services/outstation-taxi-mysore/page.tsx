import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outstation Taxi Service Mysore | Mysore to Ooty, Coorg, Bangalore Cab | ₹11/km",
  description: "Book outstation taxi from Mysore to Ooty, Coorg, Bangalore, Wayanad, Chikmagalur at ₹11/km. Clean AC cars, verified drivers, one-way & round trip available. Call +91 6363206398 for instant booking.",
};

export default function OutstationToursPage() {
  const popularRoutes = [
    { name: "Mysore to Ooty", distance: "125 km", duration: "3 hours", price: "Starting from ₹11/km" },
    { name: "Mysore to Coorg", distance: "120 km", duration: "2.5 hours", price: "Starting from ₹11/km" },
    { name: "Mysore to Bangalore", distance: "145 km", duration: "3 hours", price: "Starting from ₹11/km" },
    { name: "Mysore to Wayanad", distance: "140 km", duration: "3.5 hours", price: "Starting from ₹11/km" },
    { name: "Mysore to Chikmagalur", distance: "160 km", duration: "4 hours", price: "Starting from ₹11/km" },
    { name: "Mysore to Hassan", distance: "115 km", duration: "2.5 hours", price: "Starting from ₹11/km" },
  ];

  const features = [
    { icon: "✅", title: "One-Way & Round Trip", desc: "Flexible booking options" },
    { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges, ₹11/km onwards" },
    { icon: "🚗", title: "Clean AC Vehicles", desc: "Well-maintained fleet" },
    { icon: "👨‍✈️", title: "Verified Drivers", desc: "Experienced & professional" },
    { icon: "⏰", title: "24/7 Service", desc: "Book anytime, anywhere" },
    { icon: "📱", title: "Instant Booking", desc: "WhatsApp & phone support" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold mb-4">
              OUTSTATION TOURS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Outstation Taxi Service from Mysore
            </h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Book reliable outstation cabs from Mysore to Ooty, Coorg, Bangalore, Wayanad & more. Clean AC vehicles, professional drivers, transparent pricing starting at <span className="font-bold text-amber-600">₹11/km</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need an outstation taxi from Mysore`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Why Choose Us */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Outstation Taxi Service?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Routes */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Outstation Routes from Mysore</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {popularRoutes.map((route, index) => (
                  <div key={index} className="border-2 border-slate-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{route.name}</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <span className="text-amber-600">📍</span>
                        {route.distance}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-amber-600">⏱️</span>
                        {route.duration}
                      </p>
                      <p className="flex items-center gap-2 text-lg font-bold text-amber-600">
                        💰 Starting from {route.price}*
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Disclaimer */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-slate-700">
                <strong className="text-blue-700">*Note:</strong> Prices shown are base rates per route for standard vehicles. Final cost depends on vehicle type (Sedan/SUV/Innova), exact pickup/drop location, toll charges, and parking fees. Contact us for exact quotation.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent Pricing</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-slate-900">Swift Dzire (Sedan)</span>
                  <span className="text-2xl font-bold text-amber-600">₹11/km</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-slate-900">Ertiga (SUV)</span>
                  <span className="text-2xl font-bold text-amber-600">₹13/km</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-slate-900">Innova</span>
                  <span className="text-2xl font-bold text-amber-600">₹15/km</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-slate-900">Innova Crysta</span>
                  <span className="text-2xl font-bold text-amber-600">₹18/km</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                * Prices include driver charges. Toll, parking and permit charges extra.
              </p>
            </section>

            {/* SEO Content */}
            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Outstation Taxi Service in Mysore</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Planning an outstation trip from Mysore? SM Tours & Travels offers the most reliable and comfortable outstation taxi service in Mysore. Whether you're heading to the hill stations of Ooty and Coorg, the tech hub Bangalore, or the scenic Wayanad, we provide clean AC vehicles with professional drivers at transparent rates starting from just <strong>₹11 per kilometer</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our outstation cab service covers all major destinations from Mysore including <strong>Mysore to Ooty taxi</strong> (125 km), <strong>Mysore to Coorg cab</strong> (120 km), <strong>Mysore to Bangalore taxi</strong> (145 km), <strong>Mysore to Wayanad</strong> (140 km), and <strong>Mysore to Chikmagalur</strong> (160 km). We offer both one-way and round trip bookings with flexible departure times.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Book Outstation Cabs from Mysore with SM Tours?</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>11+ Years of Experience:</strong> Trusted by thousands of customers since 2015</li>
                <li><strong>Professional Drivers:</strong> Well-trained, courteous drivers with local knowledge</li>
                <li><strong>Clean & Maintained Vehicles:</strong> Regular servicing and sanitization</li>
                <li><strong>Transparent Pricing:</strong> No hidden charges, clear fare breakup</li>
                <li><strong>24/7 Availability:</strong> Book anytime via phone or WhatsApp</li>
                <li><strong>One-Way Options:</strong> Pay only for the distance you travel</li>
                <li><strong>GPS-Enabled Fleet:</strong> Real-time tracking for safety</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Outstation Taxi from Mysore?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Booking an outstation cab with SM Tours & Travels is easy! Simply call us at <strong>+91 6363206398</strong> or send a WhatsApp message with your travel details. Our team will provide an instant quote and confirm your booking within minutes. You can also use our online booking form to get a callback from our team.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popular Outstation Destinations from Mysore</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Ooty:</strong> Queen of Hill Stations (125 km, 3 hours) - Perfect for weekend getaways<br/>
                <strong>Coorg:</strong> Scotland of India (120 km, 2.5 hours) - Coffee plantations and scenic beauty<br/>
                <strong>Bangalore:</strong> IT Capital (145 km, 3 hours) - Business and leisure travel<br/>
                <strong>Wayanad:</strong> Nature's Paradise (140 km, 3.5 hours) - Wildlife and trekking<br/>
                <strong>Chikmagalur:</strong> Land of Coffee (160 km, 4 hours) - Hill station retreat
              </p>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Your Outstation Taxi</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
