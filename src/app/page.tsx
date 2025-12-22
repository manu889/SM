import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import VehicleCards from "@/components/VehicleCards";
import PopularRoutes from "@/components/PopularRoutes";
import PopularTours from "@/components/PopularTours";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SM Tours & Travels - Trusted Taxi Service in Mysore | ₹12/km",
  description:
    "Book reliable taxi service in Mysore with SM Tours & Travels. Outstation trips to Ooty, Coorg, Bangalore from ₹12/km. Airport transfers, local sightseeing, Tempo Traveller. 24/7 service. Call +91 98765 43210",
  alternates: { canonical: "/" },
  keywords: [
    'mysore taxi service',
    'taxi in mysore',
    'mysore to ooty cab',
    'mysore to coorg taxi',
    'bangalore to mysore cab',
    'airport taxi mysore',
    'tempo traveller mysore',
    'mysore sightseeing cab',
    'outstation taxi mysore',
    'mysore car rental'
  ],
  openGraph: {
    title: 'SM Tours & Travels - Trusted Taxi Service in Mysore',
    description: 'Professional taxi and cab rental service in Mysore. Outstation tours, airport transfers, local sightseeing from ₹12/km. Book now!',
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
