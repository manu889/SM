import Image from "next/image";
import { BUSINESS_INFO } from "@/data/constants";
import type { TourPackage } from "@/data/tours";

interface TourPackageHeroProps {
  tour: TourPackage;
}

export default function TourPackageHero({ tour }: TourPackageHeroProps) {
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in ${tour.title}`;
  
  return (
    <section className="relative min-h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      {tour.image && (
        <div className="absolute inset-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content — pt accounts for fixed topbar (40px) + header (~80px) = 120px on desktop, 80px on mobile */}
      <div className="relative container mx-auto px-4 max-w-7xl pt-24 lg:pt-36 pb-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full text-xs font-semibold mb-6 uppercase">
            {tour.category.replace('-', ' ')} tour
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {tour.title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-xl">
            {tour.description}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-8 text-white mb-12">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📅</span>
              <div>
                <div className="text-sm text-white/80">Duration</div>
                <span className="font-bold text-lg">{tour.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📍</span>
              <div>
                <div className="text-sm text-white/80">Destinations</div>
                <span className="font-bold text-lg">{tour.destinations.length} Places</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📞 Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
