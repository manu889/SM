import Link from 'next/link';
import { popularRoutes } from '@/data/routes';
import { BUSINESS_INFO } from '@/data/constants';

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
            POPULAR ROUTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Traveled Destinations</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">Explore our most popular routes from Mysore to beautiful destinations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.slice(0, 8).map((route) => (
            <div 
              key={route.slug}
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 hover:shadow-2xl transition-all hover:border-amber-400"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-base font-bold text-slate-800">{route.from}</span>
                <span className="text-2xl text-amber-600">→</span>
                <span className="text-base font-bold text-slate-900">{route.to}</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="text-base">📍</span>
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="text-base">⏱️</span>
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center gap-1 pt-2">
                  <span className="text-lg font-bold text-amber-600">{route.price}</span>
                  <span className="text-lg font-bold text-amber-600">*</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <Link 
                  href={`/routes/${route.slug}`}
                  className="block w-full text-center text-sm font-medium text-slate-700 hover:text-amber-600 transition"
                >
                  View Details →
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need a taxi from ${route.from} to ${route.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                >
                  💬 Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 mb-6">
            * Prices shown are starting rates per vehicle (not per person). Final pricing depends on vehicle type, passenger count, and additional services. Call +91 6363206398 for exact quote.
          </p>
          <Link href="/routes" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-600 to-amber-700 px-8 py-4 text-white font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl">
            View All Routes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
