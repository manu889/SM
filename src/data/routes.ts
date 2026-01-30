export interface RouteData {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const popularRoutes: RouteData[] = [
  {
    slug: 'mysore-to-ooty',
    from: 'Mysore',
    to: 'Ooty',
    distance: '125 km',
    duration: '3.5 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Experience a scenic journey from Mysore to Ooty, the Queen of Hill Stations. Travel through winding mountain roads, lush tea gardens, and enjoy breathtaking views with SM Tours & Travels\' professional cab service.',
    highlights: [
      'Comfortable AC vehicles',
      'Flexible pickup from anywhere in Mysore',
      'Well-maintained cars for hill routes',
      'Stopover options at viewpoints',
      '24/7 customer support and assistance'
    ],
    faqs: [
      {
        question: 'How long does the Mysore to Ooty cab journey take?',
        answer: 'The journey typically takes 3.5 to 4 hours depending on traffic and road conditions.'
      },
      {
        question: 'What is the cab fare from Mysore to Ooty?',
        answer: 'Fares are based on vehicle type starting from ₹11/km for Sedan, ₹13/km for SUV, and ₹15/km for Innova Crysta. Total cost varies by vehicle choice and trip type.'
      },
      {
        question: 'Can I book a round trip to Ooty from Mysore?',
        answer: 'Yes, we offer both one-way and round trip packages. Round trips are more economical. Call +91 6363206398 for package details.'
      },
      {
        question: 'Are tolls and parking charges included?',
        answer: 'The quoted fare includes driver allowance. Tolls, parking, and hill station entry fees are additional and charged as per actuals.'
      }
    ]
  },
  {
    slug: 'mysore-to-coorg',
    from: 'Mysore',
    to: 'Coorg',
    distance: '120 km',
    duration: '3 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Discover the beauty of Coorg, Scotland of India, with SM Tours & Travels. Travel from Mysore to Coorg through picturesque landscapes, coffee plantations, and misty hills in our well-maintained vehicles.',
    highlights: [
      'Direct pickup from your location',
      'Clean and sanitized vehicles',
      'Flexible travel timings',
      'Competitive pricing with no hidden costs'
    ],
    faqs: [
      {
        question: 'What is the best time to travel from Mysore to Coorg?',
        answer: 'October to March is ideal for pleasant weather. Monsoon (June-September) offers lush greenery but roads can be slippery.'
      },
      {
        question: 'Can we make stops during the Mysore to Coorg journey?',
        answer: 'Yes, you can request stops at restaurants, viewpoints, or other attractions. Our drivers will accommodate reasonable stopover requests.'
      }
    ]
  },
  {
    slug: 'bangalore-to-mysore',
    from: 'Bangalore',
    to: 'Mysore',
    distance: '145 km',
    duration: '3 hours',
    price: '₹2,500 - ₹4,000',
    description: 'Book a comfortable cab from Bangalore to Mysore with SM Tours & Travels. Enjoy a smooth ride on the Bangalore-Mysore expressway with well-maintained vehicles.',
    highlights: [
      'Pickup from any Bangalore location',
      'Fast expressway route',
      'Transparent pricing',
      'GPS-enabled vehicles',
      'Multiple payment options'
    ],
    faqs: [
      {
        question: 'How much does a Bangalore to Mysore taxi cost?',
        answer: 'Fares start from ₹11/km for Sedan, ₹13/km for SUV, and ₹15/km for premium vehicles. Exact cost depends on vehicle type and trip duration.'
      },
      {
        question: 'Do you provide Bangalore Airport to Mysore cab service?',
        answer: 'Yes, we offer direct pickup from Kempegowda International Airport to Mysore. Advance booking recommended for airport pickups.'
      },
      {
        question: 'How do I book a cab from Bangalore to Mysore?',
        answer: 'Call us at +91 6363206398, send a WhatsApp message, or use our online booking form. Instant confirmation provided.'
      }
    ]
  },
  {
    slug: 'mysore-to-wayanad',
    from: 'Mysore',
    to: 'Wayanad',
    distance: '130 km',
    duration: '3.5 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Plan your trip from Mysore to Wayanad, Kerala\'s scenic hill station, with SM Tours & Travels. Experience nature\'s beauty with our reliable cab service.',
    highlights: [
      'Interstate travel specialists',
      'Well-serviced vehicles for long trips',
      'Affordable and transparent rates',
      'Punctual and reliable service'
    ],
    faqs: [
      {
        question: 'Is one-way trip available from Mysore to Wayanad?',
        answer: 'Yes, we provide both one-way and round trip services. One-way trips are charged based on total distance covered.'
      },
      {
        question: 'Are driver food and accommodation charges extra?',
        answer: 'For single-day trips, driver allowance is included. For multi-day tours, driver food and accommodation are additional.'
      }
    ]
  },
  {
    slug: 'mysore-to-bangalore',
    from: 'Mysore',
    to: 'Bangalore',
    distance: '145 km',
    duration: '3 hours',
    price: '₹2,500 - ₹4,000',
    description: 'Convenient and affordable taxi service from Mysore to Bangalore with SM Tours & Travels. Perfect for business trips, airport transfers, shopping, or leisure travel.',
    highlights: [
      'Early morning departures available',
      'Airport drop service',
      'Corporate billing options',
      'Safety and hygiene standards'
    ],
    faqs: [
      {
        question: 'Can I get a cab at 4 AM for Bangalore Airport?',
        answer: 'Yes, we operate 24/7. Early morning pickups for airport transfers are common. Advance booking ensures availability.'
      },
      {
        question: 'Do you offer monthly packages for Mysore-Bangalore commute?',
        answer: 'Yes, we have corporate packages for regular commuters. Contact us for customized monthly contracts.'
      }
    ]
  },
  {
    slug: 'mysore-to-chikmagalur',
    from: 'Mysore',
    to: 'Chikmagalur',
    distance: '150 km',
    duration: '4 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Explore the coffee land of Chikmagalur with SM Tours & Travels. Book a cab from Mysore to Chikmagalur and discover stunning hills, waterfalls, and aromatic coffee estates.',
    highlights: [
      'Comfortable vehicles for hilly terrain',
      'Scenic route through Western Ghats',
      'Stopover at attractions en route',
      'Round trip packages available'
    ],
    faqs: [
      {
        question: 'What are the must-visit places in Chikmagalur?',
        answer: 'Mullayanagiri, Baba Budangiri, Coffee Museum, Hebbe Falls, and Bhadra Wildlife Sanctuary are top attractions.'
      },
      {
        question: 'Is the Mysore to Chikmagalur route safe?',
        answer: 'Yes, the route is well-maintained. Our experienced drivers are familiar with the roads and ensure a safe journey.'
      }
    ]
  },
  {
    slug: 'mysore-to-hampi',
    from: 'Mysore',
    to: 'Hampi',
    distance: '340 km',
    duration: '7 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Embark on a historical journey from Mysore to Hampi with SM Tours & Travels. Visit the UNESCO World Heritage site with comfortable cab service.',
    highlights: [
      'Long-distance travel specialists',
      'Comfortable vehicles for extended trips',
      'Multiple rest stops',
      'Customizable itineraries',
      'Affordable pricing'
    ],
    faqs: [
      {
        question: 'How many days are needed for a Hampi trip from Mysore?',
        answer: 'A 2-day, 1-night trip is ideal to explore Hampi comfortably. We offer package tours including accommodation assistance.'
      },
      {
        question: 'Can we visit Badami and Aihole on the way to Hampi?',
        answer: 'Yes, we can customize your itinerary to include Badami, Aihole, and Pattadakal. Contact us for customized tour packages.'
      }
    ]
  },
  {
    slug: 'mysore-to-gokarna',
    from: 'Mysore',
    to: 'Gokarna',
    distance: '350 km',
    duration: '7.5 hours',
    price: 'Starting from ₹11/km (Sedan)',
    description: 'Travel from Mysore to Gokarna, the serene beach town, with SM Tours & Travels. Experience coastal Karnataka with our reliable cab service and comfortable vehicles.',
    highlights: [
      'Coastal route specialists',
      'Comfortable long-distance travel',
      'Stops at scenic locations',
      'Beach-ready clean vehicles',
      'Package tours with accommodation help'
    ],
    faqs: [
      {
        question: 'What is included in the Mysore to Gokarna cab fare?',
        answer: 'The fare includes vehicle cost, driver allowance, and fuel. Tolls, parking, and permits are additional.'
      },
      {
        question: 'Can we visit Murudeshwar on the way to Gokarna?',
        answer: 'Yes, Murudeshwar is on the route. We can include it as a stopover. Inform us during booking for itinerary planning.'
      }
    ]
  }
];
