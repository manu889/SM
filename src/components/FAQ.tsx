"use client";

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I book a cab with SM Tours & Travels?',
    answer: 'You can book by calling us at +91 98765 43210, sending a WhatsApp message, or filling out our online booking form. We provide instant confirmation.'
  },
  {
    question: 'What are your cab rates from Mysore to Ooty?',
    answer: 'Rates start from ₹3,000 for sedan and go up to ₹5,000 for luxury SUVs. The exact fare depends on the vehicle type and travel date.'
  },
  {
    question: 'Are your drivers experienced with hill routes?',
    answer: 'Yes, all our drivers are professionally trained and have extensive experience driving through hill routes like Ooty, Coorg, and Wayanad.'
  },
  {
    question: 'Do you provide airport pickup and drop services?',
    answer: 'Yes, we offer reliable airport transfer services to Bangalore Airport and Mysore Airport. We track your flight and provide meet & greet services.'
  },
  {
    question: 'What is included in the quoted fare?',
    answer: 'The fare includes vehicle charges, driver allowance, and fuel. Tolls, parking, and hill station entry fees are additional and charged as per actuals.'
  },
  {
    question: 'Can I customize my tour itinerary?',
    answer: 'Absolutely! We offer flexible and customizable tour packages. Share your preferences, and we\'ll create a personalized itinerary for you.'
  },
  {
    question: 'Do you offer one-way cab services?',
    answer: 'Yes, we provide both one-way and round trip services. One-way trips are charged based on the total distance covered, including the return journey of the vehicle.'
  },
  {
    question: 'Are your vehicles sanitized and well-maintained?',
    answer: 'Yes, all our vehicles undergo regular maintenance and thorough sanitization before every trip to ensure your safety and comfort.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">Quick answers to common queries about our taxi services</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition"
              >
                <span className="font-semibold text-sm text-slate-900 pr-8">{faq.question}</span>
                <span className={`text-amber-600 text-xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
