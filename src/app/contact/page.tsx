import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Contact SM Tours & Travels Mysore | Call +91 6363206398 | 24/7 Taxi Booking",
  description: "Contact SM Tours & Travels for taxi booking in Mysore. Call +91 6363206398 or WhatsApp for instant quotes. Office: Saraswathipuram, Mysuru. 24/7 customer support for outstation & local taxi service.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              We're here to help you plan your perfect journey. Reach out to us anytime!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-sm text-slate-600 mb-3">Available 24/7 for bookings and queries</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base font-semibold text-amber-600 hover:text-amber-700">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-slate-600 mb-3">Quick booking via WhatsApp</p>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-green-600 hover:text-green-700"
                >
                  {BUSINESS_INFO.whatsapp}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-sm text-slate-600 mb-3">Send us your queries</p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-base font-semibold text-blue-600 hover:text-blue-700 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-sm text-slate-600 mb-3">Our office location</p>
                <address className="text-sm text-slate-700 not-italic">
                  {BUSINESS_INFO.addressDetails.street}<br />
                  {BUSINESS_INFO.addressDetails.city}, {BUSINESS_INFO.addressDetails.state}<br />
                  {BUSINESS_INFO.addressDetails.zipcode}
                </address>
                <a 
                  href={BUSINESS_INFO.googleMapsUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Operating Hours</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">Customer Support</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="font-semibold text-amber-600">24/7</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Our phone lines and WhatsApp are available round the clock for bookings and emergencies.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Map */}
            <section className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Find Us on Map</h2>
              <div className="aspect-video w-full bg-slate-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954506.957080585!2d71.71391566584238!3d13.223018805248568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71644b23d7c7%3A0xe59eb942b8f6e3d0!2sSM%20TOURS%20AND%20TRAVEL%20-%20Taxi%20%7C%20Cab%20%7CTravels%20In%20Mysore!5e0!3m2!1sen!2sin!4v1766417977052!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SM Tours & Travels Location"
                ></iframe>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Quick Answers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">How quickly can I get a cab?</h3>
                  <p className="text-sm text-slate-600">
                    For local bookings, we can arrange a cab within 30-60 minutes. For outstation trips, we recommend booking at least 2-3 hours in advance.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Do you accept advance bookings?</h3>
                  <p className="text-sm text-slate-600">
                    Yes, you can book up to 30 days in advance. Early booking ensures vehicle availability, especially during peak seasons.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">What payment methods do you accept?</h3>
                  <p className="text-sm text-slate-600">
                    We accept cash, UPI, credit/debit cards, and online bank transfers. Payment can be made before or after the trip.
                  </p>
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

              {/* Business Hours Card */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">24/7 Support</h3>
                <p className="text-sm mb-4">
                  Our customer support team is available round the clock to assist you with bookings, queries, and emergencies.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Always ready to serve you</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href={BUSINESS_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
