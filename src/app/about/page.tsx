import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "About SM Tours & Travels - Best Travel Agency & Taxi Services in Mysore | Call +91 6363206398",
  description: "Established in 2010, SM Tours & Travels is the best travel agency in Mysore. Premium taxi services, 50+ cabs in Mysore, instant cab booking. 4.9★ rated. 24/7 cab services for outstation tours, airport transfers.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Welcome to {BUSINESS_INFO.name}
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Our Story */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Established in {BUSINESS_INFO.established}, SM Tours & Travels has been serving the Mysore region with reliable and 
                  professional travel services. What started as a small venture with just a few vehicles has grown into one of 
                  the most trusted names in Karnataka's travel industry.
                </p>
                <p>
                  Over the years, we have built our reputation on three pillars: safety, reliability, and customer satisfaction. 
                  Our fleet has expanded to over 120 well-maintained vehicles, and our team now includes more than 75 professional 
                  drivers who are trained to handle all types of routes and situations.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers annually, from local sightseeing tours to outstation trips 
                  covering popular destinations like Ooty, Coorg, Wayanad, and beyond. Our commitment to excellence has earned 
                  us a Google rating of {BUSINESS_INFO.googleRatings.rating} stars based on over {BUSINESS_INFO.googleRatings.reviewCount} reviews.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {BUSINESS_INFO.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Fleet */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Fleet</h2>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  We maintain a diverse fleet of over 120 vehicles to cater to all your travel needs. From compact sedans 
                  for couples to spacious Tempo Travellers for large groups, we have the perfect vehicle for every occasion.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 mb-1">120+</div>
                    <div className="text-sm text-slate-600">Total Vehicles</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 mb-1">75+</div>
                    <div className="text-sm text-slate-600">Professional Drivers</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 mb-1">15,000+</div>
                    <div className="text-sm text-slate-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Service Areas</h2>
              <p className="text-sm text-slate-600 mb-6">
                We provide travel services across Karnataka and neighboring states, covering popular tourist destinations 
                and business hubs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {BUSINESS_INFO.serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Commitment</h2>
              <div className="space-y-4 text-sm text-slate-700">
                <p>
                  At SM Tours & Travels, we are committed to providing safe, comfortable, and reliable travel experiences. 
                  Every vehicle in our fleet undergoes regular maintenance and thorough sanitization before each trip.
                </p>
                <p>
                  Our drivers are not just professionals behind the wheel - they are courteous, helpful, and knowledgeable 
                  about local routes and attractions. Many have been with us for years, contributing to our reputation for 
                  excellence.
                </p>
                <p>
                  We believe in transparent pricing with no hidden charges. What we quote is what you pay, plus any actuals 
                  like tolls and parking. Your satisfaction is our success, and we work hard every day to earn your trust.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Booking */}
              <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Quick Booking</h3>
                <BookingForm compact />
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="space-y-1">
                        <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline block">{BUSINESS_INFO.email}</a>
                        <a href={`mailto:${BUSINESS_INFO.alternateEmail}`} className="hover:underline block">{BUSINESS_INFO.alternateEmail}</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-sm">{BUSINESS_INFO.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
