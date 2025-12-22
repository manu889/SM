"use client";

import { BUSINESS_INFO } from '@/data/constants';

const PHONE = BUSINESS_INFO.phone;
const WHATSAPP = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`;

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-2 shadow-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
        <a href={`tel:${PHONE}`} className="rounded-md border px-3 py-2 text-center text-sm">📞 Call</a>
        <a href={WHATSAPP} target="_blank" className="rounded-md border px-3 py-2 text-center text-sm">💬 WhatsApp</a>
        <a href="/book" className="rounded-md bg-black px-3 py-2 text-center text-sm text-white">📋 Book Now</a>
      </div>
    </div>
  );
}
