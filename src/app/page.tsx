import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Lazy load below-fold components
const VehicleCards = dynamic(() => import("@/components/VehicleCards"), {
  loading: () => <div className="min-h-100 animate-pulse bg-gray-100" />,
});
const PopularRoutes = dynamic(() => import("@/components/PopularRoutes"), {
  loading: () => <div className="min-h-100 animate-pulse bg-gray-100" />,
});
const PopularTours = dynamic(() => import("@/components/PopularTours"), {
  loading: () => <div className="min-h-100 animate-pulse bg-gray-100" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-75 animate-pulse bg-gray-100" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-75 animate-pulse bg-gray-100" />,
});

export const metadata: Metadata = {
  title: "Best Taxi Service & Travel Agency in Mysore | ₹11/km Instant Booking | SM Tours & Travels",
  description:
    "Book reliable taxi service in Mysore with SM Tours & Travels. Outstation trips to Ooty, Coorg, Bangalore from ₹11/km. Airport transfers, local sightseeing, corporate travel. 24/7 service. Call +91 6363206398",
  alternates: { canonical: "/" },
  keywords: [
    'mysore taxi service',
    'taxi in mysore',
    'travels in mysore',
    'mysore to ooty cab',
    'mysore to coorg taxi',
    'bangalore to mysore cab',
    'airport taxi mysore',
    'mysore sightseeing cab',
    'outstation taxi mysore',
    'mysore car rental',
    'best travels in mysore',
    'travel agency mysore',
    'cab booking mysore',
  ],
  openGraph: {
    title: 'SM Tours & Travels - Trusted Taxi Service in Mysore',
    description: 'Professional taxi and cab rental service in Mysore. Outstation tours, airport transfers, local sightseeing from ₹11/km. Book now!',
    type: 'website',
    url: '/',
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServiceCards />
      <VehicleCards />
      <PopularRoutes />
      <PopularTours />
      <Testimonials />
      <FAQ />
    </main>
  );
}
