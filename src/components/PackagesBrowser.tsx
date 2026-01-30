'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';

export type TourCategory = 'one-day' | 'weekend' | 'multi-day' | 'pilgrimage';

export type TourCardData = {
  id: string;
  title: string;
  slug: string;
  duration: string;
  days: number;
  nights: number;
  pricing: {
    sedan?: number;
    suv?: number;
    tempo?: number;
    note?: string;
  };
  destinations: string[];
  description: string;
  category: TourCategory;
  image?: string;
};

const CATEGORY_ORDER: TourCategory[] = ['one-day', 'weekend', 'multi-day', 'pilgrimage'];

const CATEGORY_LABELS: Record<TourCategory, string> = {
  'one-day': 'One Day Tours',
  weekend: 'Weekend Getaways',
  'multi-day': 'Multi-Day Tours',
  pilgrimage: 'Pilgrimage Tours'
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function isLikelyCityDestination(dest: string) {
  const d = dest.trim();
  if (!d) return false;
  if (d.length > 20) return false;

  const badTokens = [
    'palace',
    'temple',
    'church',
    'gardens',
    'peak',
    'falls',
    'monastery',
    'wildlife',
    'sanctuary',
    'lake',
    'park',
    'fort'
  ];

  const lower = d.toLowerCase();
  if (badTokens.some(t => lower.includes(t))) return false;

  // Avoid overly specific entries with commas/apostrophes.
  if (/[,'"()]/.test(d)) return false;

  // Keep up to two words (e.g., "Bangalore Airport" is ok)
  const words = d.split(/\s+/).filter(Boolean);
  return words.length <= 2;
}

export default function PackagesBrowser({ tours }: { tours: TourCardData[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<TourCategory | 'all'>('all');
  const [destination, setDestination] = useState('all');
  const [days, setDays] = useState<'all' | '1' | '2' | '3' | '4plus'>('all');
  const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const destinationOptions = useMemo(() => {
    const set = new Set<string>();

    for (const tour of tours) {
      for (const dest of tour.destinations ?? []) {
        if (isLikelyCityDestination(dest)) set.add(dest.trim());
      }

      // Heuristic: add well-known destinations from slug/title.
      const slug = normalize(tour.slug);
      const title = normalize(tour.title);
      const known = ['mysore', 'ooty', 'coonoor', 'coorg', 'wayanad', 'chikmagalur', 'tirupati', 'kabini', 'hampi', 'gokarna', 'bangalore'];
      for (const k of known) {
        if (slug.includes(k) || title.includes(k)) {
          set.add(k.charAt(0).toUpperCase() + k.slice(1));
        }
      }
    }

    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [tours]);

  const filteredTours = useMemo(() => {
    const q = normalize(search);

    const base = tours.filter((t) => {
      if (category !== 'all' && t.category !== category) return false;

      if (destination !== 'all') {
        const destNorm = normalize(destination);
        const matchesDest =
          normalize(t.title).includes(destNorm) ||
          normalize(t.slug).includes(destNorm) ||
          (t.destinations ?? []).some((d) => normalize(d) === destNorm || normalize(d).includes(destNorm));
        if (!matchesDest) return false;
      }

      if (days !== 'all') {
        if (days === '1' && t.days !== 1) return false;
        if (days === '2' && t.days !== 2) return false;
        if (days === '3' && t.days !== 3) return false;
        if (days === '4plus' && t.days < 4) return false;
      }

      if (!q) return true;

      const hay = [t.title, t.description, t.slug, ...(t.destinations ?? [])].map(normalize).join(' ');
      return hay.includes(q);
    });

    if (sort === 'price-asc') {
      return [...base].sort((a, b) => {
        const priceA = a.pricing.sedan || a.pricing.suv || a.pricing.tempo || 0;
        const priceB = b.pricing.sedan || b.pricing.suv || b.pricing.tempo || 0;
        return priceA - priceB;
      });
    }
    if (sort === 'price-desc') {
      return [...base].sort((a, b) => {
        const priceA = a.pricing.sedan || a.pricing.suv || a.pricing.tempo || 0;
        const priceB = b.pricing.sedan || b.pricing.suv || b.pricing.tempo || 0;
        return priceB - priceA;
      });
    }
    return base;
  }, [tours, search, category, destination, days, sort]);

  const countsByCategory = useMemo(() => {
    const initial: Record<TourCategory, number> = { 'one-day': 0, weekend: 0, 'multi-day': 0, pilgrimage: 0 };
    for (const t of filteredTours) initial[t.category] += 1;
    return initial;
  }, [filteredTours]);

  const hasActiveFilters =
    search.trim().length > 0 || category !== 'all' || destination !== 'all' || days !== 'all' || sort !== 'popular';

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setDestination('all');
    setDays('all');
    setSort('popular');
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 p-4 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Find the right package</h2>
                <p className="text-sm text-slate-600">Filter by destination, duration, and category.</p>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Search</label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ooty, Coorg, Mysore sightseeing..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All destinations</option>
                  {destinationOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as TourCategory | 'all')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All categories</option>
                  <option value="one-day">One Day Tours</option>
                  <option value="weekend">Weekend Getaways</option>
                  <option value="multi-day">Multi-Day Tours</option>
                  <option value="pilgrimage">Pilgrimage Tours</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Duration</label>
                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value as typeof days)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">Any duration</option>
                  <option value="1">1 day</option>
                  <option value="2">2 days</option>
                  <option value="3">3 days</option>
                  <option value="4plus">4+ days</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-slate-500">Showing {filteredTours.length} package(s)</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="popular">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {filteredTours.length === 0 ? (
          <section className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">No packages match your filters</h3>
            <p className="text-sm text-slate-700">Try clearing filters or searching a different destination (e.g., Ooty, Coorg, Wayanad).</p>
          </section>
        ) : (
          CATEGORY_ORDER.filter((c) => countsByCategory[c] > 0).map((c) => (
            <section key={c} id={c === 'one-day' ? 'one-day' : c} className="scroll-mt-24">
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{CATEGORY_LABELS[c]}</h2>
                <p className="text-sm text-slate-600">{countsByCategory[c]} package(s)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredTours
                  .filter((t) => t.category === c)
                  .map((tour) => (
                    <Link
                      key={tour.id}
                      href={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image
                          src={tour.image || '/Images/Mysore.jpg'}
                          alt={tour.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900">
                            {tour.duration}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-amber-500 text-xs font-bold text-white">
                            {tour.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition">
                          {tour.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{tour.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-slate-500 block">Starting from</span>
                            <span className="text-base font-bold text-amber-600">
                              ₹{(tour.pricing.sedan || tour.pricing.suv || tour.pricing.tempo || 0).toLocaleString()}*
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          ))
        )}
      </div>

      <aside className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
            <h3 className="text-base font-bold text-slate-900 mb-4">Get an Instant Quote</h3>
            <BookingForm compact />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="text-base font-bold text-slate-900 mb-4">Browse by Category</h3>
            <div className="space-y-2">
              {CATEGORY_ORDER.map((c) => (
                <a
                  key={c}
                  href={`#${c === 'one-day' ? 'one-day' : c}`}
                  className={`block text-sm py-2 border-b border-slate-100 last:border-0 transition ${
                    countsByCategory[c] > 0 ? 'text-slate-700 hover:text-amber-600' : 'text-slate-400 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{CATEGORY_LABELS[c]}</span>
                    <span className="text-xs text-slate-500">{countsByCategory[c]}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
            <h3 className="text-base font-bold mb-3">Need a Custom Itinerary?</h3>
            <p className="text-sm mb-4">Tell us your dates, destinations and budget — we’ll tailor a plan for you.</p>
            <Link
              href="/contact"
              className="inline-block w-full text-center rounded-full bg-white text-amber-600 px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
