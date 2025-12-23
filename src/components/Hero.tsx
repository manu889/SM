import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';
import Image from 'next/image';

const PHONE = BUSINESS_INFO.phone;
const WHATSAPP = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5"
           style={{ backgroundImage: "url('/Images/Mysore.jpg')" }}
           aria-hidden="true" />

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
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 break-words">
                Taxi Services in Mysore<br />
                <span className="text-amber-600 text-xl sm:text-3xl md:text-4xl lg:text-5xl">₹11/km • Instant Cab Booking</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl">
                Best <strong>travel agency in Mysore</strong> for <strong>cab booking</strong>. 50+ <strong>cabs in Mysore</strong> with premium <strong>cab services</strong> - outstation tours, airport transfers & local sightseeing. Clean AC cars, verified drivers. Call <strong>+91 6363206398</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100 text-center">
                <div className="text-lg sm:text-xl font-bold text-amber-600">15+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Years Service</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100 text-center">
                <div className="text-lg sm:text-xl font-bold text-amber-600">50+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Vehicles</div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100 text-center">
                <div className="text-lg sm:text-xl font-bold text-amber-600">24/7</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>

            {/* Quick Contact CTAs */}
            <div className="hidden lg:flex flex-wrap gap-2 sm:gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all shadow-lg shadow-amber-500/30 text-sm sm:text-base"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden xs:inline">{PHONE}</span>
                <span className="xs:hidden">Call</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all text-sm sm:text-base"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AC Vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
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
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white text-center py-3 sm:py-4 rounded-t-xl">
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
