"use client";

import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Excellent service! The driver was punctual, the car was clean, and the journey to Ooty was comfortable. Highly recommend SM Tours & Travels for outstation trips.',
    date: 'November 2024'
  },
  {
    name: 'Priya Sharma',
    location: 'Mysore',
    rating: 5,
    text: 'We booked a Tempo Traveller for our family trip to Coorg. Everything was perfect - the vehicle was spacious, the driver was experienced, and the rates were reasonable.',
    date: 'October 2024'
  },
  {
    name: 'Amit Patel',
    location: 'Mumbai',
    rating: 5,
    text: 'Best cab service in Mysore! Used their airport transfer service and was impressed by their professionalism. The driver tracked my flight and was waiting at the airport.',
    date: 'September 2024'
  },
  {
    name: 'Lakshmi Iyer',
    location: 'Chennai',
    rating: 5,
    text: 'Wonderful experience with SM Tours for our Tirupati darshan. The driver was helpful and knowledgeable. Made our pilgrimage hassle-free and comfortable.',
    date: 'December 2024'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">What Our Customers Say</h2>
          <p className="text-sm text-slate-600">Trusted by thousands of satisfied travelers</p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-sm text-slate-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-slate-600">{testimonials[currentIndex].location} • {testimonials[currentIndex].date}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition ${idx === currentIndex ? 'bg-amber-600 w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
