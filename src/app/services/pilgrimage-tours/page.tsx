import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Tirupati Tour from Mysore | Shirdi Darshan Taxi | Pilgrimage Tours ₹15/km",
  description: "Book pilgrimage tours from Mysore to Tirupati, Shirdi, Dharmasthala, Kukke Subramanya. Comfortable AC cabs, experienced drivers, darshan assistance. Package tours & per km rates available.",
};

export default function PilgrimageToursPage() {
  const destinations = [
    {
      name: "Tirupati Balaji Temple",
      location: "Andhra Pradesh",
      distance: "550 km from Mysore",
      duration: "2 Days / 1 Night",
      price: "₹12,000",
      highlights: ["Balaji Darshan", "Padmavathi Temple", "Golden Temple"]
    },
    {
      name: "Shirdi Sai Baba Temple",
      location: "Maharashtra",
      distance: "900 km from Mysore",
      duration: "3 Days / 2 Nights",
      price: "₹22,000",
      highlights: ["Sai Baba Temple", "Shani Shingnapur", "Accommodation"]
    },
    {
      name: "Dharmasthala Temple",
      location: "Karnataka",
      distance: "150 km from Mysore",
      duration: "1 Day",
      price: "₹3,500",
      highlights: ["Manjunatha Temple", "Bahubali Statue", "One day tour"]
    },
    {
      name: "Kukke Subramanya",
      location: "Karnataka",
      distance: "160 km from Mysore",
      duration: "1 Day",
      price: "₹3,800",
      highlights: ["Subramanya Temple", "Sarpa Samskara", "Return same day"]
    }
  ];

  const features = [
    {
      icon: "🙏",
      title: "Darshan Assistance",
      description: "Help with temple protocols and darshan arrangements"
    },
    {
      icon: "🚗",
      title: "Comfortable AC Vehicles",
      description: "Sedans, SUVs, tempo travellers for families & groups"
    },
    {
      icon: "👨‍✈️",
      title: "Experienced Drivers",
      description: "Drivers familiar with pilgrimage routes and timings"
    },
    {
      icon: "🏨",
      title: "Accommodation Assistance",
      description: "Help booking hotels near temples (on request)"
    },
    {
      icon: "⏰",
      title: "Flexible Timing",
      description: "Early morning departures for darshan schedules"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Package tours or per km rates - your choice"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-orange-600 text-white rounded-full text-xs font-semibold mb-4">
              PILGRIMAGE TOURS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pilgrimage Tours from Mysore
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Book temple tour packages from Mysore to Tirupati, Shirdi, Dharmasthala, Kukke Subramanya. Comfortable AC cabs, darshan assistance, experienced drivers. Packages from <span className="font-bold text-orange-600">₹3,500</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need pilgrimage tour package from Mysore`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Pilgrimage Destinations</h2>
              <div className="space-y-6">
                {destinations.map((destination, index) => (
                  <div key={index} className="border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-white to-orange-50">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{destination.name}</h3>
                        <p className="text-sm text-slate-600 mt-1">{destination.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-orange-600">{destination.price}</p>
                        <p className="text-xs text-slate-500">{destination.duration}</p>
                      </div>
                    </div>
                    <div className="mb-4 text-sm text-slate-600">
                      <p>📍 {destination.distance}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilgrimage Taxi Service from Mysore</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                SM Tours & Travels specializes in <strong>pilgrimage tours from Mysore</strong> to major temples and holy places. Book <strong>Tirupati tour from Mysore</strong>, <strong>Shirdi darshan taxi</strong>, <strong>Dharmasthala temple tour</strong>, and <strong>Kukke Subramanya package</strong> with comfortable AC vehicles and experienced drivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our <strong>temple tour taxi service</strong> includes darshan assistance, flexible timings for early morning visits, and knowledge of temple protocols. Whether you're traveling alone, with family, or in a group, we have sedans, SUVs, and tempo travellers available.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Tirupati Tour Package Details</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our <strong>Mysore to Tirupati taxi package</strong> is the most popular pilgrimage tour. The package includes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Day 1:</strong> Depart Mysore early morning (4-5 AM), reach Tirupati by afternoon, check-in hotel</li>
                <li>✓ <strong>Day 1 Evening:</strong> Visit Padmavathi Temple, Golden Temple, local sightseeing</li>
                <li>✓ <strong>Day 2 Morning:</strong> Tirumala Balaji Darshan (we help with booking or waiting)</li>
                <li>✓ <strong>Day 2 Afternoon:</strong> Return journey to Mysore, reach by evening</li>
                <li>✓ <strong>Package Rate:</strong> ₹12,000 (sedan), ₹15,000 (SUV) - includes all tolls, parking, driver allowance</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Other Popular Temple Tours</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-bold">Shirdi Sai Baba Yatra (3 Days / 2 Nights)</p>
                  <p>Visit Shirdi Sai Baba Temple, Shani Shingnapur. Stay in Shirdi. ₹22,000 sedan, ₹28,000 SUV.</p>
                </div>
                <div>
                  <p className="font-bold">Dharmasthala One Day Tour</p>
                  <p>Visit Manjunatha Temple, Bahubali Statue. Return same day. ₹3,500 sedan, ₹4,500 SUV.</p>
                </div>
                <div>
                  <p className="font-bold">Kukke Subramanya Darshan</p>
                  <p>Sarpa Samskara temple tour. One day round trip. ₹3,800 sedan, ₹4,800 SUV.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Book With Us?</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ 15+ years experience in pilgrimage tours</li>
                <li>✓ Drivers familiar with temple routes and timings</li>
                <li>✓ Help with darshan tickets and accommodation</li>
                <li>✓ Flexible departure times (early morning available)</li>
                <li>✓ Clean, well-maintained vehicles</li>
                <li>✓ Respectful service for religious travel</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Pilgrimage Tour?</h3>
              <p className="text-slate-700 leading-relaxed">
                Call <strong>+91 6363206398</strong> or WhatsApp with your preferred destination, travel dates, and number of passengers. We'll provide complete package details including accommodation recommendations (if needed). Book at least 1 week in advance for Tirupati tours during peak seasons.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Pilgrimage Tour</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
