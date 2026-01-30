import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';
import Image from 'next/image';

const PHONE = BUSINESS_INFO.phone;
const WHATSAPP = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black pt-16 lg:pt-24 overflow-hidden">
      {/* Background Pattern with Dark Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/Images/Mysore.jpg"
          alt=""
          fill
          priority
          quality={75}
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative container mx-auto px-3 sm:px-4 py-6 sm:py-10 lg:py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-100 text-amber-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-xs sm:text-sm">4.9★ Rated • 500+ Reviews</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white wrap-break-word">
                Travels in Mysore |  Taxi Services in Mysore<br />
                <span className="text-amber-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">₹11/km • Instant Cab Booking</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl">
                Best <strong>travel agency in Mysore</strong> for <strong>cab booking</strong>. Premium <strong>cab services in Mysore</strong> - outstation tours, airport transfers & local sightseeing. Clean AC cars, professional service. Call <strong>+91 6363206398</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-md">
              <div className="bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100 text-center">
                <div className="text-lg sm:text-xl font-bold text-amber-600">11+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Years Service</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100 text-center">
                <div className="text-lg sm:text-xl font-bold text-amber-600">24/7</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AC Vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Transparent Pricing</span>
              </div>
            </div>


          </div>

          {/* Right - Booking Form */}
          <div className="lg:sticky lg:top-24 w-full max-w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-1 max-w-full">
              <div className="bg-linear-to-br from-amber-500 to-orange-600 text-white text-center py-3 sm:py-4 rounded-t-xl">
                <h3 className="text-lg sm:text-xl font-bold">Book Your Cab Now</h3>
                <p className="text-xs sm:text-sm text-amber-50 mt-1">Instant confirmation • Best rates</p>
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <BookingForm compact={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
