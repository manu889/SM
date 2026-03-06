import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Lazy load below-fold components
const VehicleCards = dynamic(() => import("@/components/VehicleCards"), {
  loading: () => <div className="min-h-100 animate-pulse bg-gray-100" />,
});
const HappyCustomers = dynamic(() => import("@/components/HappyCustomers"), {
  loading: () => <div className="min-h-75 animate-pulse bg-gray-100" />,
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
  title: "Taxi, Cabs in Mysore | Travel Agency in Mysore | ₹11/km Instant Booking | SM Tours & Travels",
  description:
    "Book reliable taxi service in Mysore with SM Tours & Travels. Outstation trips to Ooty, Coorg, Bangalore from ₹11/km. Airport transfers, local sightseeing, corporate travel. 24/7 service. Call +91 6363206398",
  alternates: { canonical: "/" },
  keywords: [
    'mysore taxi service',
    'taxi in mysore',
    'travels in mysore',
    'travels in mysore',
    'mysore to ooty cab',
    'travel agency in mysore',
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
    url: 'https://smtoursandtravel.com/',
    images: [
      {
        url: 'https://smtoursandtravel.com/logo.png',
        width: 800,
        height: 600,
        alt: 'SM Tours & Travels - Taxi Service in Mysore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Tours & Travels - Trusted Taxi Service in Mysore',
    description: 'Professional taxi and cab rental service in Mysore. Outstation tours, airport transfers, local sightseeing from ₹11/km. Book now!',
    images: ['https://smtoursandtravel.com/logo.png'],
  },
};

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smtoursandtravel.com/" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I book a cab with SM Tours & Travels?", "acceptedAnswer": { "@type": "Answer", "text": "You can book by calling us at +91 6363206398, sending a WhatsApp message, or filling out our online booking form. We provide instant confirmation." } },
      { "@type": "Question", "name": "What are your cab rates from Mysore to Ooty?", "acceptedAnswer": { "@type": "Answer", "text": "Rates start from \u20b93,000 for sedan and go up to \u20b95,000 for luxury SUVs. The exact fare depends on the vehicle type and travel date." } },
      { "@type": "Question", "name": "Are your drivers experienced with hill routes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our drivers are professionally trained and have extensive experience driving through hill routes like Ooty, Coorg, and Wayanad." } },
      { "@type": "Question", "name": "Do you provide airport pickup and drop services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer reliable airport transfer services to Bangalore Airport and Mysore Airport. We track your flight and provide meet & greet services." } },
      { "@type": "Question", "name": "What is included in the quoted fare?", "acceptedAnswer": { "@type": "Answer", "text": "The fare includes vehicle charges, driver allowance, and fuel. Tolls, parking, and hill station entry fees are additional and charged as per actuals." } },
      { "@type": "Question", "name": "Can I customize my tour itinerary?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer flexible and customizable tour packages. Share your preferences, and we'll create a personalized itinerary for you." } },
      { "@type": "Question", "name": "Do you offer one-way cab services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide both one-way and round trip services. One-way trips are charged based on the total distance covered, including the return journey of the vehicle." } },
      { "@type": "Question", "name": "Are your vehicles sanitized and well-maintained?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our vehicles undergo regular maintenance and thorough sanitization before every trip to ensure your safety and comfort." } }
    ]
  };

  return (
    <main>
      <Hero />
      <AboutSection />
      <VehicleCards />
      <HappyCustomers />
      <ServiceCards />
      <PopularRoutes />
      <PopularTours />
      <Testimonials />
      <FAQ />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
