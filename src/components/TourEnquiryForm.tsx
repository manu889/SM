'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

interface TourEnquiryFormProps {
  tourTitle: string;
  tourPrice: number;
  duration: string;
}

export default function TourEnquiryForm({ tourTitle, tourPrice, duration }: TourEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfTravel: '',
    numberOfPersons: '1',
    specialRequests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = encodeURIComponent(`
Hello! I'm interested in the "${tourTitle}" tour.

📋 My Details:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Preferred Travel Date: ${formData.dateOfTravel || 'To be decided'}
• Number of Persons: ${formData.numberOfPersons}
• Special Requests: ${formData.specialRequests || 'None'}

💰 Package Details:
• Duration: ${duration}
• Per Vehicle Price: ₹${tourPrice.toLocaleString()}

Please send me more details and confirm availability. Thank you!
    `.trim());

    const whatsappPhone = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfTravel: '',
      numberOfPersons: '1',
      specialRequests: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Preferred Travel Date
        </label>
        <input
          type="date"
          name="dateOfTravel"
          value={formData.dateOfTravel}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 transition"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Number of Persons
        </label>
        <select
          name="numberOfPersons"
          value={formData.numberOfPersons}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 transition"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Person' : 'Persons'}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Special Requests / Questions
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary restrictions, special requirements, or questions..."
          rows={3}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder-slate-400 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg transition-all shadow-lg hover:shadow-xl"
      >
        💬 Send Enquiry via WhatsApp
      </button>

      <p className="text-xs text-slate-500 text-center">
        Your enquiry will be sent directly to our WhatsApp. We'll respond within 1 hour.
      </p>
    </form>
  );
}
