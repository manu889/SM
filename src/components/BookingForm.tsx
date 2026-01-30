'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

interface BookingFormProps {
  compact?: boolean;
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    bookingType: 'outstation' as 'outstation' | 'local' | 'airport',
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    tripType: 'one-way' as 'one-way' | 'round-trip',
    returnDate: '',
    vehicleType: 'sedan' as 'sedan' | 'suv' | 'innova' | 'crysta',
    passengers: '4',
    // Airport specific fields
    direction: 'drop' as 'drop' | 'pickup',
    airport: 'bangalore' as 'bangalore' | 'mysore',
    // Local specific fields
    localPackage: '8-80' as '4-40' | '8-80' | '12-120'
  });

  const bookingTypes = [
    { value: 'outstation', label: 'Outstation', desc: 'Inter-city travel' },
    { value: 'local', label: 'Local', desc: 'Within city' },
    { value: 'airport', label: 'Airport', desc: 'Pickup / Drop' }
  ];

  const localPackages = [
    { value: '4-40', label: '4 Hours / 40 km' },
    { value: '8-80', label: '8 Hours / 80 km' },
    { value: '12-120', label: '12 Hours / 120 km' }
  ];

  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan (4 Seater)' , passengers: '4' },
    { value: 'suv', label: 'SUV (6 Seater)' , passengers: '6' },
    { value: 'innova', label: 'Innova (7 Seater)' , passengers: '7' },
    { value: 'crysta', label: 'Innova Crysta (7 Seater)' , passengers: '7' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = bookingTypes.find(t => t.value === formData.bookingType)?.label ?? 'Taxi';
    const selectedVehicle = vehicleTypes.find(v => v.value === formData.vehicleType);

    let message = `🚕 Instant Quote Request\n\n` +
      `Service: ${selectedService}\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n`;

    if (formData.bookingType === 'outstation') {
      message += `\nTrip Type: ${formData.tripType === 'one-way' ? 'One Way' : 'Round Trip'}\n`;
      message += `Pickup: ${formData.pickup}\n` +
        `Drop: ${formData.drop}\n` +
        `Date: ${formData.date}${formData.time ? ` ${formData.time}` : ''}\n`;
      if (formData.tripType === 'round-trip' && formData.returnDate) {
        message += `Return Date: ${formData.returnDate}\n`;
      }
    } else if (formData.bookingType === 'local') {
      const localPkg = localPackages.find(p => p.value === formData.localPackage);
      message += `\nLocal Package: ${localPkg?.label || 'Not specified'}\n` +
        `Pickup Location: ${formData.pickup}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time || 'Not specified'}\n`;
    } else if (formData.bookingType === 'airport') {
      const directionText = formData.direction === 'drop' ? 'Drop to Airport' : 'Pick from Airport';
      const airportName = formData.airport === 'bangalore' ? 'Bengaluru (BLR)' : 'Mysore Airport';
      message += `\nDirection: ${directionText}\n` +
        `Airport: ${airportName}\n` +
        `Pickup: ${formData.pickup}\n` +
        `Date: ${formData.date}\n`;
    }

    message += `Vehicle: ${selectedVehicle?.label ?? ''}\n` +
      `Passengers: ${formData.passengers}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'vehicleType') {
      const selected = vehicleTypes.find(v => v.value === value);
      setFormData(prev => ({
        ...prev,
        vehicleType: value as typeof prev.vehicleType,
        passengers: selected?.passengers ?? prev.passengers
      }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Compact mode styling
  const spacing = compact ? 'space-y-3 sm:space-y-2.5' : 'space-y-6';
  const inputPadding = compact ? 'px-3 py-2 sm:py-1.5' : 'px-3 py-2.5';
  const sectionPadding = compact ? 'p-4 sm:p-3.5' : 'p-6';
  const headingSize = compact ? 'text-sm' : 'text-base';
  const labelSize = compact ? 'text-xs sm:text-xs' : 'text-sm';

  return (
    <form onSubmit={handleSubmit} className={`${spacing} bg-white ${sectionPadding} rounded-xl shadow-lg`}>
      {!compact && (
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-slate-500">Instant quote on WhatsApp</p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Book Your Taxi</h2>
              <p className="text-xs text-slate-600">24/7 service • Professional drivers • Transparent pricing</p>
            </div>
            <p className="text-xs font-semibold text-slate-500">No hidden charges</p>
          </div>
        </div>
      )}

      {/* Service Tabs */}
      <div>
        <div className="flex items-center justify-between">
          <label className={`block ${headingSize} font-bold text-gray-900 ${compact ? 'mb-1.5' : 'mb-2'}`}>
            Service *
          </label>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-1">
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
            {bookingTypes.map((type) => (
              <label
                key={type.value}
                className={`cursor-pointer rounded-lg px-2 sm:px-3 ${compact ? 'py-1.5 sm:py-2 text-xs sm:text-xs' : 'py-2.5 text-sm'} font-bold text-center transition-all ${
                  formData.bookingType === type.value
                    ? 'bg-orange-500 text-white shadow'
                    : 'bg-transparent text-slate-700 hover:bg-white'
                }`}
                title={type.desc}
              >
                <input
                  type="radio"
                  name="bookingType"
                  value={type.value}
                  checked={formData.bookingType === type.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="name" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="phone" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              inputMode="numeric"
              className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
              placeholder="10-digit mobile"
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      {/* Local Package */}
      {formData.bookingType === 'local' && (
        <div>
          <label htmlFor="localPackage" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
            Local Package *
          </label>
          <select
            id="localPackage"
            name="localPackage"
            required
            value={formData.localPackage}
            onChange={handleChange}
            className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
          >
            {localPackages.map((pkg) => (
              <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
            ))}
          </select>
        </div>
      )}

      {/* Trip Type (Outstation only) */}
      {formData.bookingType === 'outstation' && (
        <div>
          <label className={`block ${labelSize} font-semibold text-gray-800 ${compact ? 'mb-1.5' : 'mb-2'}`}>
            Trip Type
          </label>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-1">
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              <label
                className={`cursor-pointer rounded-lg px-2 sm:px-3 ${compact ? 'py-1.5 sm:py-2 text-xs' : 'py-2.5 text-sm'} font-bold text-center transition-all ${
                  formData.tripType === 'one-way' ? 'bg-white text-slate-900 shadow' : 'bg-[#F7DB91] text-slate-700 hover:bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={formData.tripType === 'one-way'}
                  onChange={handleChange}
                  className="sr-only"
                />
                One Way
              </label>
              <label
                className={`cursor-pointer rounded-lg ${compact ? 'py-2 text-xs' : 'py-2.5 text-sm'} font-bold text-center transition-all ${
                  formData.tripType === 'round-trip' ? 'bg-white text-slate-900 shadow' : 'bg-[#F7DB91] text-slate-700 hover:bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={formData.tripType === 'round-trip'}
                  onChange={handleChange}
                  className="sr-only"
                />
                Round Trip
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Pickup / Drop / Date */}
      <div className={compact ? 'space-y-2' : 'space-y-3'}>
        {formData.bookingType === 'local' && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="pickup" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Pickup Location *</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="Mysore"
                />
                <p className="mt-1 text-[11px] text-slate-500">Service available within Mysore city limits</p>
              </div>

              <div>
                <label htmlFor="date" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="dd-mm-yyyy"
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                placeholder="--:--"
              />
            </div>
          </>
        )}

        {formData.bookingType === 'airport' && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="direction" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Direction *</label>
                <select
                  id="direction"
                  name="direction"
                  required
                  value={formData.direction}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                >
                  <option value="drop">Drop to Airport</option>
                  <option value="pickup">Pick from Airport</option>
                </select>
              </div>

              <div>
                <label htmlFor="airport" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Airport *</label>
                <select
                  id="airport"
                  name="airport"
                  required
                  value={formData.airport}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                >
                  <option value="bangalore">Bengaluru (BLR)</option>
                  <option value="mysore">Mysore Airport</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="pickup" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Pickup *</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="Mysore"
                />
              </div>

              <div>
                <label htmlFor="date" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="dd-mm-yyyy"
                />
              </div>
            </div>
          </>
        )}

        {formData.bookingType === 'outstation' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div>
                <label htmlFor="pickup" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Pickup *</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="Mysore"
                  list="pickup-suggestions"
                />
                <datalist id="pickup-suggestions">
                  <option value="Mysore" />
                  <option value="Bangalore" />
                </datalist>
              </div>

              <div>
                <label htmlFor="drop" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Drop *</label>
                <input
                  type="text"
                  id="drop"
                  name="drop"
                  required
                  value={formData.drop}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  placeholder="Drop location"
                  list="drop-suggestions"
                />
                <datalist id="drop-suggestions">
                  <option value="Ooty" />
                  <option value="Coorg" />
                  <option value="Wayanad" />
                  <option value="Bangalore" />
                </datalist>
              </div>

              <div>
                <label htmlFor="date" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="time" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                />
              </div>

              {formData.tripType === 'round-trip' && (
                <div>
                  <label htmlFor="returnDate" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.date || new Date().toISOString().split('T')[0]}
                    className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Vehicle + Passengers */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label htmlFor="vehicleType" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
              Vehicle Type *
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              required
              value={formData.vehicleType}
              onChange={handleChange}
              className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 bg-white ${compact ? 'text-sm' : ''}`}
            >
              {vehicleTypes.map((v) => (
                <option key={v.value} value={v.value}>{v.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="passengers" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
              Passengers
            </label>
            <input
              type="text"
              id="passengers"
              name="passengers"
              value={formData.passengers}
              readOnly
              className={`w-full ${inputPadding} border border-gray-300 rounded-lg outline-none text-gray-900 bg-gray-50 ${compact ? 'text-sm' : ''}`}
            />
            <p className="mt-1 text-[11px] text-slate-500">Auto-selected based on vehicle type</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full bg-green-600 hover:bg-green-700 text-white ${compact ? 'py-2 px-3 text-sm sm:text-base' : 'py-3 sm:py-3.5 px-4 sm:px-6 text-base sm:text-lg'} rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2`}
      >
        <svg className={`${compact ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-5 h-5 sm:w-6 sm:h-6'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book Taxi on WhatsApp
      </button>

      <div className="text-center pt-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
        >
          <span className="text-sm text-slate-600">Prefer a call?</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {BUSINESS_INFO.phone}
        </a>
      </div>
    </form>
  );
}
