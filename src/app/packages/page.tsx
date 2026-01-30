import type { Metadata } from "next";
import { tourPackages } from "@/data/tours";
import PackagesBrowser from "@/components/PackagesBrowser";

export const metadata: Metadata = {
  title: "Mysore Tour Packages - Ooty, Coorg, Wayanad, Chikmagalur | SM Tours",
  description: "Book Mysore tour packages: Mysore-Ooty one day trip, Coorg package, Wayanad tour, Chikmagalur weekend package, Kabini safari. Customized itineraries with experienced drivers. Call +91 6363206398 for best rates.",
  alternates: { canonical: "/packages" },
  keywords: [
    "Mysore tour packages",
    "Travels in Mysore",
    "Mysore taxi packages",
    "Mysore to Ooty tour",
    "Mysore to Coorg package",
    "Wayanad tour from Mysore",
    "Chikmagalur package from Mysore",
    "pilgrimage tours from Mysore"
  ]
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Tour Packages
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Curated Travel Experiences
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Handpicked itineraries for unforgettable journeys across Karnataka and South India
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <PackagesBrowser tours={tourPackages} />

        {/* Pricing Disclaimer */}
        <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate-700">
            <strong>*Pricing Disclaimer:</strong> Package prices are starting rates per vehicle and vary based on group size, vehicle type, season, and special requirements. Final pricing will be confirmed after discussing your specific travel dates and preferences. Please contact us for accurate quotation.
          </p>
        </div>
      </div>
    </main>
  );
}
