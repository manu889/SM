import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Tempo Traveller Mysore | 12 Seater 17 Seater Hire | Group Travel ₹18/km",
  description: "Book tempo traveller in Mysore for group tours, family trips, corporate travel. 12 seater, 17 seater, 20 seater available. AC tempo traveller hire at ₹18/km. Clean vehicles, experienced drivers.",
};

export default function TempoTravellerPage() {
  const vehicles = [
    {
      name: "12 Seater Tempo Traveller",
      capacity: "12 passengers",
      luggage: "10-12 bags",
      rate: "₹18/km",
      ideal: "Small groups, family tours"
    },
    {
      name: "17 Seater Tempo Traveller",
      capacity: "17 passengers",
      luggage: "15-17 bags",
      rate: "₹20/km",
      ideal: "Medium groups, college trips"
    },
    {
      name: "20 Seater Luxury Tempo",
      capacity: "20 passengers",
      luggage: "18-20 bags",
      rate: "₹22/km",
      ideal: "Large groups, corporate events"
    }
  ];

  const features = [
    "Push-back reclining seats",
    "Individual reading lights",
    "Air conditioning",
    "Ample luggage space",
    "Music system",
    "First aid kit",
    "Experienced driver",
    "GPS tracking"
  ];

  const popularRoutes = [
    {
      destination: "Mysore to Ooty",
      distance: "125 km",
      duration: "3 hours",
      price: "₹4,500"
    },
    {
      destination: "Mysore to Coorg",
      distance: "120 km",
      duration: "2.5 hours",
      price: "₹4,200"
    },
    {
      destination: "Mysore to Bangalore",
      distance: "145 km",
      duration: "3 hours",
      price: "₹3,600"
    },
    {
      destination: "Mysore to Wayanad",
      distance: "140 km",
      duration: "3.5 hours",
      price: "₹5,600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-purple-600 text-white rounded-full text-xs font-semibold mb-4">
              TEMPO TRAVELLER
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Tempo Traveller Hire in Mysore
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Book 12 seater, 17 seater tempo traveller in Mysore for group tours, family trips, corporate events. Clean AC vehicles with push-back seats. Starting at <span className="font-bold text-purple-600">₹18/km</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need tempo traveller for group tour from Mysore`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Tempo Traveller Fleet</h2>
              <div className="space-y-6">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-white to-purple-50">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{vehicle.name}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.ideal}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-purple-600">{vehicle.rate}</p>
                        <p className="text-xs text-slate-500">Per kilometer</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600">👥</span>
                        <span className="text-slate-700">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600">🧳</span>
                        <span className="text-slate-700">{vehicle.luggage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Features & Amenities</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Group Tour Routes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {popularRoutes.map((route, index) => (
                  <div key={index} className="border border-purple-200 rounded-xl p-5 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{route.destination}</h3>
                    <div className="space-y-1 text-sm text-slate-600 mb-3">
                      <p>📍 {route.distance}</p>
                      <p>⏱️ {route.duration}</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{route.price}</p>
                    <p className="text-xs text-slate-500">For 12 seater (one way)</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Tempo Traveller Service in Mysore</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Looking for <strong>tempo traveller hire in Mysore</strong> for your group tour? SM Tours & Travels offers the best <strong>12 seater tempo traveller</strong>, <strong>17 seater tempo traveller</strong>, and <strong>20 seater luxury tempo</strong> for family trips, corporate events, college tours, and pilgrimage journeys.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our <strong>AC tempo traveller Mysore</strong> fleet features push-back reclining seats, individual reading lights, ample luggage space, and music systems. Perfect for <strong>group travel from Mysore to Ooty, Coorg, Wayanad, Chikmagalur</strong>, and other tourist destinations.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Our Tempo Traveller?</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Comfortable Seating:</strong> Push-back reclining seats for long journeys</li>
                <li>✓ <strong>Well-Maintained Vehicles:</strong> Regular servicing and cleanliness</li>
                <li>✓ <strong>Experienced Drivers:</strong> Familiar with hill station routes</li>
                <li>✓ <strong>Spacious Interiors:</strong> Ample headroom and legroom</li>
                <li>✓ <strong>Large Luggage Area:</strong> Separate cargo space for bags</li>
                <li>✓ <strong>Transparent Pricing:</strong> Per km rates, no hidden charges</li>
                <li>✓ <strong>Flexible Bookings:</strong> One-way, round trips, multi-day tours</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popular Uses</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="font-bold">Family Tours</p>
                  <p className="text-sm">Extended family trips to hill stations, weekend getaways</p>
                </div>
                <div>
                  <p className="font-bold">Corporate Travel</p>
                  <p className="text-sm">Employee outings, team building events, conferences</p>
                </div>
                <div>
                  <p className="font-bold">College Trips</p>
                  <p className="text-sm">Educational tours, industrial visits, adventure trips</p>
                </div>
                <div>
                  <p className="font-bold">Pilgrimage Tours</p>
                  <p className="text-sm">Temple visits, Tirupati tours, religious journeys</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Tempo Traveller?</h3>
              <p className="text-slate-700 leading-relaxed">
                Call <strong>+91 6363206398</strong> or WhatsApp with your requirements: number of passengers, travel dates, destination, and tour duration. We'll provide a detailed quote and confirm vehicle availability. Advance booking recommended for peak seasons.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Tempo Traveller</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
