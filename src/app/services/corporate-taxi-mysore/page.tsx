import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Corporate Taxi Mysore | Employee Transport | Business Car Rental ₹13/km",
  description: "Professional corporate taxi service in Mysore. Employee transport, business meetings, airport transfers, client pickups. Reliable vehicles, professional drivers, monthly contracts available.",
};

export default function CorporateTravelPage() {
  const services = [
    {
      icon: "🏢",
      title: "Employee Transport",
      description: "Daily office commute, shift pickups & drops"
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      description: "Business travel, client pickups from airport"
    },
    {
      icon: "🤝",
      title: "Client Meetings",
      description: "Professional vehicles for client transport"
    },
    {
      icon: "🎯",
      title: "Conference Travel",
      description: "Multi-day conferences, seminars, events"
    },
    {
      icon: "🚀",
      title: "Site Visits",
      description: "Industrial site visits, factory tours"
    },
    {
      icon: "📅",
      title: "Monthly Contracts",
      description: "Dedicated vehicles, fixed monthly rates"
    }
  ];

  const benefits = [
    "Professional chauffeurs in formal attire",
    "Well-maintained executive sedans & SUVs",
    "Punctual service with zero delays",
    "Flexible billing - per trip or monthly",
    "GST invoices for business expenses",
    "24/7 customer support",
    "Live GPS tracking",
    "Corporate account management"
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-slate-700 text-white rounded-full text-xs font-semibold mb-4">
              CORPORATE TRAVEL
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Corporate Taxi Service Mysore
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Professional business car rental & employee transport solutions. Reliable corporate taxi service for meetings, airport transfers, site visits. Executive sedans & SUVs from <span className="font-bold text-slate-700">₹13/km</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need corporate taxi service for business travel`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                💬 WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all border border-slate-200">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Vehicle Rates</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-bold">Vehicle Type</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-bold">Capacity</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-bold">Per KM Rate</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-bold">Full Day (8hr/80km)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">Dzire / Etios (Sedan)</td>
                      <td className="border border-slate-300 px-4 py-3">4 passengers</td>
                      <td className="border border-slate-300 px-4 py-3 font-bold text-slate-700">₹13/km</td>
                      <td className="border border-slate-300 px-4 py-3">Starting from ₹2,200</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3">Ertiga (MUV)</td>
                      <td className="border border-slate-300 px-4 py-3">6 passengers</td>
                      <td className="border border-slate-300 px-4 py-3 font-bold text-slate-700">₹15/km</td>
                      <td className="border border-slate-300 px-4 py-3">Starting from ₹2,500</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">Innova (SUV)</td>
                      <td className="border border-slate-300 px-4 py-3">7 passengers</td>
                      <td className="border border-slate-300 px-4 py-3 font-bold text-slate-700">₹17/km</td>
                      <td className="border border-slate-300 px-4 py-3">Starting from ₹2,800</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3">Innova Crysta (Premium)</td>
                      <td className="border border-slate-300 px-4 py-3">7 passengers</td>
                      <td className="border border-slate-300 px-4 py-3 font-bold text-slate-700">₹20/km</td>
                      <td className="border border-slate-300 px-4 py-3">Starting from ₹3,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">* Monthly contract rates available. Driver allowance extra for outstation.</p>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Corporate Car Rental Mysore</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                SM Tours & Travels provides premium <strong>corporate taxi service in Mysore</strong> for businesses, startups, and enterprises. Our <strong>business car rental Mysore</strong> solutions include employee transport, client pickups, airport transfers, and executive travel.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We understand corporate requirements - punctuality, professionalism, and reliability. Our <strong>corporate cab service Mysore</strong> features well-groomed chauffeurs, executive vehicles (sedans & SUVs), and flexible billing options including monthly contracts.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Businesses Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popular Corporate Use Cases</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-bold">Employee Commute</p>
                  <p>Daily pickup & drop for employees working in shifts or late hours. Safe, reliable transport solutions.</p>
                </div>
                <div>
                  <p className="font-bold">Client Meetings</p>
                  <p>Professional vehicles for transporting clients from hotels, airports to your office or meeting venues.</p>
                </div>
                <div>
                  <p className="font-bold">Business Conferences</p>
                  <p>Multi-day conference support with dedicated vehicles and drivers for outstation events.</p>
                </div>
                <div>
                  <p className="font-bold">Site Visits</p>
                  <p>Industrial site visits, factory tours, project site inspections with comfortable SUVs.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Monthly Contract Benefits</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Dedicated vehicle assigned to your company</li>
                <li>✓ Same driver for consistency and familiarity</li>
                <li>✓ Fixed monthly cost - better budget planning</li>
                <li>✓ Priority booking during peak hours</li>
                <li>✓ Customized billing cycles</li>
                <li>✓ GST invoices for expense claims</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Book Corporate Service?</h3>
              <p className="text-slate-700 leading-relaxed">
                Call <strong>+91 6363206398</strong> to speak with our corporate account manager. Share your requirements (number of trips per month, vehicle type, service hours), and we'll create a customized proposal with competitive rates. GST invoices provided for all bookings.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Corporate Quote</h3>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
