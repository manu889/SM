import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Mysore Airport Taxi | Bangalore Airport Transfer | Kempegowda Airport Cab",
  description: "Book Mysore to Bangalore airport taxi, Kempegowda Airport transfer from Mysore. 24/7 pickup & drop service. Clean AC cars, flight tracking. Starting from ₹11/km.",
  alternates: { canonical: "/services/airport-taxi-mysore" },
  openGraph: {
    title: "Mysore Airport Taxi | Bangalore Airport Transfer",
    description: "Book Mysore to Bangalore airport taxi. 24/7 pickup & drop. Clean AC cars, flight tracking. Starting from ₹11/km.",
    type: "website",
    url: "https://smtoursandtravel.com/services/airport-taxi-mysore",
    images: [{ url: "https://smtoursandtravel.com/logo.png", width: 800, height: 600, alt: "Mysore Airport Taxi - SM Tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysore Airport Taxi | Bangalore Airport Transfer",
    description: "Book Mysore to Bangalore airport taxi. 24/7 pickup & drop. Starting from ₹11/km.",
    images: ["https://smtoursandtravel.com/logo.png"],
  },
};

export default function AirportTransfersPage() {
  const features = [
    {
      icon: "✈️",
      title: "Flight Tracking",
      description: "We monitor your flight status for pickup timing"
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Early morning or late night, we're always ready"
    },
    {
      icon: "💺",
      title: "Comfortable Rides",
      description: "Spacious AC cars with ample luggage space"
    },
    {
      icon: "🎯",
      title: "Direct Drop",
      description: "Non-stop ride to/from airport terminal"
    },
    {
      icon: "📱",
      title: "Driver Tracking",
      description: "Live GPS tracking & driver contact details"
    },
    {
      icon: "💳",
      title: "Fixed Rates",
      description: "No surge pricing or hidden charges"
    }
  ];

  const routes = [
    {
      from: "Mysore to Bangalore Airport",
      distance: "170 km",
      duration: "3-3.5 hours",
      price: "Starting from ₹11/km (Sedan)"
    },
    {
      from: "Bangalore Airport to Mysore",
      distance: "170 km",
      duration: "3-3.5 hours",
      price: "Starting from ₹11/km (Sedan)"
    },
    {
      from: "Mysore to Bangalore City via Airport",
      distance: "185 km",
      duration: "3.5-4 hours",
      price: "Starting from ₹11/km (Sedan)"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-semibold mb-4">
              AIRPORT TRANSFERS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Mysore Airport Taxi Service
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Reliable Mysore to Bangalore Airport taxi service. Pickup & drop from Kempegowda International Airport. Flight tracking, clean AC cars, 24/7 service. Fixed rate <span className="font-bold text-blue-600">₹2,500</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need Bangalore airport transfer from Mysore`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Airport Transfer?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Airport Transfer Routes</h2>
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <div key={index} className="border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{route.from}</h3>
                        <div className="flex gap-4 text-sm text-slate-600">
                          <span>📍 {route.distance}</span>
                          <span>⏱️ {route.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-blue-600">{route.price}</p>
                        <p className="text-xs text-slate-500">Fixed Rate</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Mysore to Bangalore Airport Taxi</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Need a reliable <strong>Mysore airport taxi</strong> for your flight? SM Tours & Travels provides 24/7 <strong>Bangalore airport transfer service</strong> from Mysore. Whether you're catching an early morning flight or arriving late at night, our <strong>Kempegowda airport cab service</strong> ensures you reach on time, every time.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We offer both pickup and drop services. Book <strong>Mysore to Bangalore airport taxi</strong> for departure or <strong>Bangalore airport to Mysore cab</strong> for arrival. Our drivers track your flight status to adjust pickup timing for delays.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Airport Taxi Service Features</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Flight Status Monitoring:</strong> Automatic adjustments for delays</li>
                <li>✓ <strong>Meet & Greet Service:</strong> Driver meets you at arrival gate</li>
                <li>✓ <strong>Luggage Assistance:</strong> Help with bags and loading</li>
                <li>✓ <strong>Clean AC Vehicles:</strong> Sedans and SUVs with ample boot space</li>
                <li>✓ <strong>24/7 Availability:</strong> Early morning & late night pickups</li>
                <li>✓ <strong>Direct Non-Stop:</strong> Straight to your terminal</li>
                <li>✓ <strong>Fixed Rate:</strong> ₹2,500 Mysore to Bangalore Airport</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Airport Transfer?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Call <strong>+91 6363206398</strong> or WhatsApp us with your flight details (flight number, departure/arrival time, number of passengers, luggage). We'll confirm your booking and send driver details 2 hours before pickup.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-bold">How much time does it take from Mysore to Bangalore Airport?</p>
                  <p>Approximately 3 to 3.5 hours depending on traffic. We recommend leaving 4 hours before flight departure for international flights and 3.5 hours for domestic.</p>
                </div>
                <div>
                  <p className="font-bold">Do you provide pickup from Bangalore Airport arrivals?</p>
                  <p>Yes, we provide Bangalore Airport to Mysore drop service. Our driver will wait at the arrival gate with a name board.</p>
                </div>
                <div>
                  <p className="font-bold">What if my flight is delayed?</p>
                  <p>We track flight status. If your flight is delayed, our driver will adjust pickup time automatically. No extra charges.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Airport Transfer</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smtoursandtravel.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://smtoursandtravel.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Airport Taxi Mysore", "item": "https://smtoursandtravel.com/services/airport-taxi-mysore" }
        ]
      }) }} />
    </main>
  );
}