import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import { popularRoutes } from '@/data/routes';
import { BUSINESS_INFO } from '@/data/constants';

export async function generateStaticParams() {
  return popularRoutes.map((r) => ({ slug: r.slug }));
}

function buildTitle(from: string, to: string) {
  return `${from} to ${to} Taxi Service | SM Tours & Travels Mysore`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = popularRoutes.find((r) => r.slug === slug);
  if (!route) return { title: 'Route Not Found' };

  const title = buildTitle(route.from, route.to);
  const description =
    `${route.from} to ${route.to} cab booking with verified drivers and clean AC cars. ` +
    `Distance ${route.distance} • Travel time ${route.duration} • Fare ${route.price}. ` +
    `Call ${BUSINESS_INFO.phone} for instant quote.`;

  return {
    title,
    description,
    alternates: { canonical: `/routes/${route.slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/routes/${route.slug}`,
    },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = popularRoutes.find((r) => r.slug === slug);
  if (!route) notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold mb-4">
              POPULAR ROUTE
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              {route.from} to {route.to} Taxi
            </h1>
            <p className="text-base md:text-lg text-slate-700 mb-6">{route.description}</p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-800 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-semibold">{route.distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span className="font-semibold">{route.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="font-semibold">{route.price}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-lg font-bold transition-all shadow-lg"
              >
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                  `Hi, I need a taxi from ${route.from} to ${route.to}. Please share the best fare.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-bold transition-all shadow-lg"
              >
                💬 WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Route Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {route.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-slate-800 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {route.faqs?.length > 0 && (
              <section className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h2>
                <div className="space-y-4">
                  {route.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-200 p-4">
                      <p className="font-semibold text-slate-900 mb-2">{faq.question}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How pricing works</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Fares shown are starting ranges per vehicle. Final pricing depends on your exact pickup/drop address, vehicle type
                (Sedan / SUV / Innova / Crysta), trip type (one-way / round trip), tolls and parking (as actuals), and travel time.
                Share your date/time on WhatsApp for an instant quote.
              </p>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-base font-bold text-slate-900 mb-4">Book this Route</h3>
                <BookingForm compact />
              </div>

              <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-base font-bold mb-3">Prefer a call?</h3>
                <p className="text-sm text-white/80 mb-4">We’ll confirm vehicle availability and share the best fare.</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-block w-full text-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
