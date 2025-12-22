import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Mysore Local Sightseeing Taxi | Full Day & Half Day City Tour | ₹1,800",
  description: "Book Mysore local sightseeing taxi for full day (8 hours) or half day (4 hours) city tour. Visit Mysore Palace, Chamundi Hills, Brindavan Gardens. Clean AC cars, experienced drivers. Starting at ₹1,800.",
};

export default function LocalSightseeingPage() {
  const attractions = [
    "Mysore Palace - Royal Heritage",
    "Chamundi Hills Temple - Panoramic Views",
    "St. Philomena's Church - Gothic Architecture",
    "Brindavan Gardens - Musical Fountains",
    "Mysore Zoo - Wildlife Experience",
    "Karanji Lake - Bird Sanctuary",
    "Jaganmohan Palace Art Gallery",
    "Railway Museum - Heritage Collection"
  ];

  const packages = [
    {
      name: "Half Day Tour (4 Hours)",
      duration: "4 hours / 40 km",
      price: "₹1,800",
      includes: ["Mysore Palace", "Chamundi Hills", "St. Philomena's Church"]
    },
    {
      name: "Full Day Tour (8 Hours)",
      duration: "8 hours / 80 km",
      price: "₹2,800",
      includes: ["All half day attractions", "+ Brindavan Gardens", "+ Mysore Zoo", "+ Shopping"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold mb-4">
              LOCAL SIGHTSEEING
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Mysore City Sightseeing Tour
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Explore Mysore's heritage sites, palaces, temples & gardens with our local taxi service. Half day & full day packages available starting at <span className="font-bold text-amber-600">₹1,800</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need Mysore local sightseeing taxi`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sightseeing Packages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {packages.map((pkg, index) => (
                  <div key={index} className="border-2 border-amber-200 rounded-2xl p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-white to-amber-50">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{pkg.duration}</p>
                    <p className="text-3xl font-bold text-amber-600 mb-4">{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Attractions Covered</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">🏛️</span>
                    <span className="text-slate-800">{attraction}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Mysore City Tour Taxi Service</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Discover the royal city of Mysore with our professional local sightseeing taxi service. Whether you have 4 hours or a full day, we'll take you to all major attractions including the magnificent <strong>Mysore Palace</strong>, sacred <strong>Chamundi Hills Temple</strong>, beautiful <strong>Brindavan Gardens</strong>, and more.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our <strong>Mysore local taxi</strong> service is perfect for tourists, families, and corporate groups. Our drivers are well-versed with Mysore's history and will ensure you don't miss any important landmarks. Book <strong>Mysore city tour cab</strong> for a hassle-free sightseeing experience.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Our Local Sightseeing Service?</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Experienced Local Drivers:</strong> Know the best routes and timings</li>
                <li>✓ <strong>Flexible Itinerary:</strong> Customize as per your preferences</li>
                <li>✓ <strong>Clean AC Vehicles:</strong> Comfortable sedans and SUVs</li>
                <li>✓ <strong>Fixed Package Rates:</strong> No per-km charges, transparent pricing</li>
                <li>✓ <strong>Multiple Pickup Points:</strong> Hotel, railway station, bus stand</li>
                <li>✓ <strong>Photo Stops Allowed:</strong> Take your time at each location</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Mysore Local Taxi?</h3>
              <p className="text-slate-700 leading-relaxed">
                Call us at <strong>+91 6363206398</strong> or WhatsApp to book your Mysore city sightseeing tour. Tell us your preferred pickup time and package (4 hours or 8 hours), and we'll arrange a clean AC vehicle with an experienced driver. Payment can be made after the trip.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Sightseeing Tour</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
