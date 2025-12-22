import Link from 'next/link';
import { services } from '@/data/services';

export default function ServiceCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Services</h2>
          <p className="text-sm text-slate-600">Comprehensive travel solutions for all your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-3xl ring-1 ring-amber-200/50">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-600">
                  {service.shortDescription}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 ring-1 ring-amber-200/50">
                    {service.pricing}
                  </span>
                  <svg
                    className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
