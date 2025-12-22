import { vehicles } from '@/data/vehicles';
import Image from 'next/image';

const vehicleImages: Record<string, string> = {
  'swift-dzire': '/Images/Vehicles/Dzire.png',
  'etios': '/Images/Vehicles/Etios.png',
  'innova': '/Images/Vehicles/Innova.png',
  'ertiga': '/Images/Vehicles/Ertiga.png',
  'crysta': '/Images/Vehicles/Crysta.webp',
  'tempo-12': '/Images/Vehicles/Tempo-Traveller.png',
  'tempo-17': '/Images/Vehicles/Tempo-Traveller.png',
};

export default function VehicleCards() {
  const categories = {
    sedan: vehicles.filter(v => v.category === 'sedan'),
    suv: vehicles.filter(v => v.category === 'suv' || v.category === 'luxury'),
    tempo: vehicles.filter(v => v.category === 'tempo')
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Fleet</h2>
          <p className="text-sm text-slate-600">Well-maintained vehicles for every travel need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.slice(0, 6).map((vehicle) => (
            <div 
              key={vehicle.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/5 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src={vehicleImages[vehicle.id] || '/Images/Vehicles/Dzire.png'}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4"
                />
                {/* Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
                  {vehicle.seating} Seater
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 mb-1">{vehicle.name}</h3>
                <p className="text-sm text-slate-500 mb-4 capitalize">{vehicle.category}</p>
                
                <ul className="space-y-2 mb-5 text-sm text-slate-600">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="block text-base font-bold text-amber-600">{vehicle.pricePerKm}</span>
                    <span className="text-xs text-slate-500">per km</span>
                  </div>
                  <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/40">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/vehicles" className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:border-slate-300 hover:shadow-lg">
            View All Vehicles
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
