import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taxi Services in Mysore | Outstation, Airport, Sightseeing, Corporate | SM Tours",
  description: "Explore all taxi services by SM Tours & Travels in Mysore: Outstation cab, airport transfer, local sightseeing, corporate travel, pilgrimage tours, tempo traveller hire. Book now at ₹11/km.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Taxi Services in Mysore | SM Tours & Travels",
    description: "Explore all taxi services: Outstation cab, airport transfer, local sightseeing, corporate travel, pilgrimage tours, tempo traveller. From ₹11/km.",
    type: "website",
    url: "https://smtoursandtravel.com/services",
    images: [{ url: "https://smtoursandtravel.com/logo.png", width: 800, height: 600, alt: "SM Tours & Travels - Taxi Services in Mysore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Services in Mysore | SM Tours & Travels",
    description: "Outstation cab, airport transfer, local sightseeing, corporate travel, pilgrimage tours, tempo traveller. From ₹11/km.",
    images: ["https://smtoursandtravel.com/logo.png"],
  },
};

const services = [
  {
    slug: "outstation-taxi-mysore",
    name: "Outstation Taxi Service",
    description: "One-way & round trips to Ooty, Coorg, Bangalore, Wayanad and beyond. Starting ₹11/km.",
    icon: "🚗",
  },
  {
    slug: "local-sightseeing-taxi-mysore",
    name: "Local Sightseeing Mysore",
    description: "Full day and half day Mysore city tours. Visit Palace, Chamundi Hills, Brindavan Gardens.",
    icon: "🏰",
  },
  {
    slug: "airport-taxi-mysore",
    name: "Airport Taxi Mysore",
    description: "24/7 Mysore to Bangalore airport transfers with flight tracking. Fixed rates, no surge pricing.",
    icon: "✈️",
  },
  {
    slug: "tempo-traveller-mysore",
    name: "Tempo Traveller Mysore",
    description: "12 & 17 seater AC tempo traveller for group tours, family trips, corporate outings.",
    icon: "🚐",
  },
  {
    slug: "corporate-taxi-mysore",
    name: "Corporate Taxi Mysore",
    description: "Reliable employee transport, client pickups, business travel. Monthly contracts available.",
    icon: "💼",
  },
  {
    slug: "pilgrimage-taxi-mysore",
    name: "Pilgrimage Tours Mysore",
    description: "Tirupati, Shirdi, Dharmasthala, Kukke Subramanya tours with experienced drivers.",
    icon: "🛕",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Taxi Services in Mysore
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              From outstation travel to local sightseeing, airport transfers to pilgrimage tours — we cover every journey.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg hover:ring-amber-200 transition"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h2 className="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {service.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              <span className="inline-block mt-4 text-xs font-semibold text-amber-600 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smtoursandtravel.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://smtoursandtravel.com/services" }
            ]
          })
        }}
      />
    </main>
  );
}
