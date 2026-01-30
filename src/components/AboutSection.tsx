import Image from 'next/image';
import { BUSINESS_INFO } from '@/data/constants';

export default function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
              ABOUT US
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Best Travel Agency in Mysore - Premium Taxi Services & Cab Booking
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              SM Tours & Travels is the <strong>best travel agency in Mysore</strong> providing premium <strong>taxi services in Mysore</strong> since 2015. We offer the most reliable <strong>cab booking in Mysore</strong> with quality vehicles including Dzire, Innova, Crysta, and Tempo Traveller. Our <strong>cab services in Mysore</strong> include outstation tours, airport transfers, and local sightseeing at affordable rates starting ₹11/km.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Verified drivers, 24/7 availability, instant <strong>cab booking</strong>. As the top-rated <strong>travel agency in Mysore</strong>, we serve <strong>Mysore to Ooty taxi</strong>, <strong>Mysore to Coorg cab</strong>, <strong>Mysore to Bangalore</strong>, and all popular routes. Book your <strong>cab in Mysore</strong> online with transparent pricing and no hidden charges.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Professional Drivers</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Experienced, courteous, and well-trained</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Clean Vehicles</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Well-maintained & sanitized fleet</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Transparent Pricing</h4>
                  <p className="text-xs text-gray-600 mt-0.5">No hidden charges or surprises</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">24/7 Available</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Round-the-clock service & support</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/About-side-image.png"
                alt="SM Tours & Travels - Professional Taxi Service in Mysore"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">11+</div>
                <div className="text-xs mt-1 opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
