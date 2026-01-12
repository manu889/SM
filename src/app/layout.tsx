import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { BUSINESS_INFO } from "@/data/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smtoursandtravel.com"),
  title: {
    default: "Taxi Services in Mysore | Best Travel Agency | SM Tours & Travels - Call +91 6363206398",
    template: "%s | SM Tours & Travels Mysore",
  },
  description:
    "Best taxi services in Mysore & travel agency for cab booking. 50+ cabs in Mysore with AC vehicles at ₹11/km. 24/7 cab services for Mysore to Ooty, Coorg, Bangalore. Verified drivers. Call +91 6363206398 for instant booking.",
  applicationName: "SM Tours & Travels",
  generator: "Next.js",
  keywords: [
    "Taxi services in Mysore",
    "Travel agency in mysore",
    "Cab booking in mysore",
    "cabs in mysore",
    "cab services in mysore",
    "Mysore taxi",
    "Mysore cab booking",
    "taxi service in Mysore",
    "Travels in Mysore",
    "Travel Agency Mysore",
    "best Travels in Mysore",
    "Mysore to Ooty taxi",
    "Mysore to Coorg cab",
    "Mysore to Bangalore taxi",
    "Mysore airport taxi",
    "car rental Mysore",
    "outstation taxi Mysore",
    "Mysore local taxi",
    "Mysore taxi fare",
    "taxi Mysore online booking",
    "tempo traveller Mysore",
    "Mysore tour packages",
    "Mysore sightseeing taxi",
    "Mysore taxi number",
    "Mysore cab service",
    "tours and travels Mysore",
    "Innova Crysta Mysore",
    "Dzire taxi Mysore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Taxi Services in Mysore | Best Travel Agency for Cab Booking | SM Tours & Travels",
    description:
      "Best taxi services in Mysore with 50+ cabs available for booking. Leading travel agency for cab services at ₹11/km. Clean AC vehicles, verified drivers. Call +91 6363206398",
    url: "/",
    siteName: "SM Tours & Travels - Taxi Services in Mysore",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Tours & Travels — Best Travel Agency & Taxi Services in Mysore",
    description:
      "Premium cab services in Mysore - instant cab booking, 50+ cabs available. Call +91 6363206398",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smtoursandtravel.com/#organization",
    "name": BUSINESS_INFO.name,
    "alternateName": "SM Tours Mysore",
    "description": "Leading taxi service in Mysore since 2010. Book online at ₹11/km for outstation tours, airport transfers, local sightseeing, tempo traveller. 24/7 service with clean AC cars and verified drivers.",
    "url": "https://smtoursandtravel.com",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "image": "https://smtoursandtravel.com/Images/About-side-image.png",
    "logo": "https://smtoursandtravel.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.addressDetails.street,
      "addressLocality": BUSINESS_INFO.addressDetails.city,
      "addressRegion": BUSINESS_INFO.addressDetails.state,
      "postalCode": BUSINESS_INFO.addressDetails.zipcode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.2958",
      "longitude": "76.6394"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.googleRatings.rating,
      "bestRating": "5",
      "reviewCount": BUSINESS_INFO.googleRatings.reviewCount
    },
    "priceRange": "₹11-₹30 per km",
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Card",
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "sameAs": [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.twitter
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi & Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Taxi Service",
            "description": "Mysore to Ooty, Coorg, Bangalore, Wayanad outstation cabs at ₹11/km onwards",
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_INFO.name
            }
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "11",
            "unitText": "per km"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mysore Airport Taxi",
            "description": "24/7 airport pickup and drop service to Bangalore and Mysore airports",
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_INFO.name
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Sightseeing Mysore",
            "description": "Full day and half day Mysore city tour packages with professional drivers",
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_INFO.name
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tempo Traveller Mysore",
            "description": "12 and 17 seater tempo traveller for group tours and family trips",
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_INFO.name
            }
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smtoursandtravel.com/"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P9JDZFLB');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9JDZFLB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
        <StickyMobileCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
