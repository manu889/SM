"use client";

import { BUSINESS_INFO } from '@/data/constants';

const PHONE = BUSINESS_INFO.phone;
const WHATSAPP = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`;

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-white p-2.5 shadow-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
        <a href={`tel:${PHONE}`} className="rounded-lg border-2 border-blue-500 bg-blue-50 px-3 py-2.5 text-center text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100">📞 Call</a>
        <a href={WHATSAPP} target="_blank" className="rounded-lg border-2 border-green-500 bg-green-50 px-3 py-2.5 text-center text-sm font-semibold text-green-700 transition-all hover:bg-green-100">💬 WhatsApp</a>
        <a href="/book" className="rounded-lg border-2 border-amber-600 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-amber-600 hover:to-orange-600">📋 Book</a>
      </div>
    </div>
  );
}
