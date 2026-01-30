export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  duration: string;
  days: number;
  nights: number;
  price: number;
  destinations: string[];
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  category: 'one-day' | 'multi-day' | 'weekend' | 'pilgrimage';
  image?: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: 'mysore-one-day',
    title: 'Mysore City One Day Tour',
    slug: 'mysore-one-day-tour',
    duration: '1 Day',
    days: 1,
    nights: 0,
    price: 3500,
    image: '/Images/Mysore_Tour_Package.jpg',
    destinations: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\'s Church', 'Brindavan Gardens'],
    description: 'Explore the royal heritage of Mysore in a comprehensive one-day sightseeing tour covering Mysore Palace, Chamundi Hills, St. Philomena\'s Church, and the Musical Fountains at Brindavan Gardens.',
    highlights: [
      'Visit the majestic Mysore Palace',
      'Panoramic city views from Chamundi Hills',
      'Neo-Gothic St. Philomena\'s Cathedral',
      'Musical fountain show at Brindavan Gardens',
      'Professional driver with local knowledge',
      'Comfortable AC vehicle'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore City Sightseeing',
        description: 'Full-day exploration of Mysore\'s iconic landmarks',
        activities: [
          '08:00 AM - Pickup from your hotel/railway station',
          '09:00 AM - Mysore Palace visit (2 hours)',
          '11:30 AM - Chamundi Hills & Nandi Temple',
          '01:00 PM - Lunch break (on your own)',
          '02:30 PM - St. Philomena\'s Church visit',
          '04:00 PM - Brindavan Gardens',
          '07:00 PM - Return to your location'
        ]
      }
    ],
    inclusions: [
      'Comfortable AC sedan/SUV',
      'Professional driver',
      'Fuel charges',
      'Parking fees',
      'Toll charges',
      'Driver allowance'
    ],
    exclusions: [
      'Monument entry tickets',
      'Meals and refreshments',
      'Guide charges',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'ooty-coonoor-2-days',
    title: '2 Days Ooty & Coonoor Tour from Mysore',
    slug: 'ooty-coonoor-2-days',
    duration: '2 Days / 1 Night',
    days: 2,
    nights: 1,
    price: 9500,
    image: '/Images/2.jpg',
    destinations: ['Ooty', 'Coonoor', 'Botanical Gardens', 'Doddabetta Peak', 'Tea Gardens'],
    description: 'Experience the beauty of Nilgiri Hills with this 2-day tour covering Ooty and Coonoor. Visit tea estates, botanical gardens, scenic viewpoints, and enjoy the cool mountain climate.',
    highlights: [
      'Scenic drive through Nilgiri Mountains',
      'Ooty Botanical Gardens and Ooty Lake',
      'Doddabetta Peak - highest point in Nilgiris',
      'Sim\'s Park and Dolphin\'s Nose in Coonoor',
      'Tea factory visit',
      'Comfortable hotel accommodation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Ooty - Local Sightseeing',
        description: 'Travel to Ooty and explore major attractions',
        activities: [
          '07:00 AM - Pickup from Mysore',
          '10:30 AM - Arrival in Ooty',
          '11:00 AM - Ooty Botanical Gardens',
          '01:00 PM - Lunch',
          '02:30 PM - Ooty Lake boating',
          '04:00 PM - Doddabetta Peak',
          '06:00 PM - Check-in to hotel',
          'Evening free for shopping at local markets'
        ]
      },
      {
        day: 2,
        title: 'Coonoor Excursion & Return to Mysore',
        description: 'Day trip to Coonoor and return journey',
        activities: [
          '08:00 AM - Checkout from hotel',
          '09:00 AM - Drive to Coonoor',
          '10:00 AM - Sim\'s Park visit',
          '11:30 AM - Dolphin\'s Nose viewpoint',
          '12:30 PM - Tea factory visit',
          '01:30 PM - Lunch',
          '02:30 PM - Start return journey to Mysore',
          '06:00 PM - Arrival in Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle for entire tour',
      'Professional driver',
      'Fuel, toll, and parking',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel accommodation',
      'Meals',
      'Entry tickets',
      'Guide charges',
      'Personal expenses',
      'GST'
    ],
    category: 'weekend'
  },
  {
    id: 'coorg-2-days',
    title: '2 Days Coorg Tour Package',
    slug: 'coorg-2-days-tour',
    duration: '2 Days / 1 Night',
    days: 2,
    nights: 1,
    price: 8500,
    image: '/Images/Coorg_Tour_Package.jpg',
    destinations: ['Coorg', 'Abbey Falls', 'Raja\'s Seat', 'Talacauvery', 'Dubare Elephant Camp'],
    description: 'Discover the Scotland of India with our 2-day Coorg tour. Experience coffee plantations, waterfalls, wildlife, and breathtaking hill views.',
    highlights: [
      'Abbey Falls and Golden Temple',
      'Raja\'s Seat sunset point',
      'Coffee plantation tour',
      'Dubare Elephant Camp (optional)',
      'Talacauvery - origin of River Cauvery',
      'Scenic hill station experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Coorg - Sightseeing',
        description: 'Travel to Coorg and visit major attractions',
        activities: [
          '07:00 AM - Pickup from Mysore',
          '10:00 AM - Arrival in Coorg',
          '10:30 AM - Abbey Falls visit',
          '12:00 PM - Golden Temple (Namdroling Monastery)',
          '01:30 PM - Lunch',
          '02:30 PM - Coffee plantation tour',
          '04:30 PM - Raja\'s Seat for sunset',
          '06:00 PM - Check-in to hotel'
        ]
      },
      {
        day: 2,
        title: 'Coorg Exploration & Return',
        description: 'Visit remaining attractions and return to Mysore',
        activities: [
          '08:00 AM - Checkout and breakfast',
          '09:00 AM - Talacauvery & Bhagamandala',
          '11:00 AM - Omkareshwara Temple',
          '12:00 PM - Lunch',
          '01:00 PM - Start return journey',
          '04:00 PM - Arrival in Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle for entire tour',
      'Fuel, toll, parking',
      'Driver allowance'
    ],
    exclusions: [
      'Accommodation',
      'Meals',
      'Entry fees',
      'Guide charges',
      'Personal expenses',
      'GST'
    ],
    category: 'weekend'
  },
  {
    id: 'tirupati-package',
    title: 'Tirupati Balaji Darshan Package from Mysore',
    slug: 'tirupati-balaji-darshan',
    duration: '2 Days / 1 Night',
    days: 2,
    nights: 1,
    price: 14000,
    image: '/Images/3.jpg',
    destinations: ['Tirupati', 'Tirumala', 'Padmavathi Temple', 'Sri Kalahasti'],
    description: 'Seek blessings at Tirupati Balaji with our comfortable pilgrimage package from Mysore. We handle travel, darshan arrangements, and ensure a hassle-free spiritual journey.',
    highlights: [
      'Comfortable overnight journey',
      'Tirumala Balaji Darshan',
      'Padmavathi Temple visit',
      'Sri Kalahasti Temple (optional)',
      'Darshan assistance and guidance',
      'Experienced pilgrimage tour drivers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Tirupati Journey',
        description: 'Overnight travel to Tirupati',
        activities: [
          '10:00 PM - Departure from Mysore',
          'Overnight journey (approximately 10-11 hours)',
          'Rest stops en route'
        ]
      },
      {
        day: 2,
        title: 'Tirupati Darshan & Return',
        description: 'Temple visit and return journey',
        activities: [
          '08:00 AM - Arrival at Tirupati',
          '09:00 AM - Proceed to Tirumala',
          '10:00 AM onwards - Balaji Darshan (time varies)',
          '02:00 PM - Lunch',
          '03:00 PM - Padmavathi Temple',
          '05:00 PM - Start return journey',
          'Late night arrival in Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle (Innova/Tempo Traveller)',
      'Fuel, toll, parking',
      'Driver allowance',
      'Darshan guidance'
    ],
    exclusions: [
      'Accommodation (if needed)',
      'Meals',
      'Darshan tickets',
      'Laddu prasadam',
      'Personal expenses',
      'GST'
    ],
    category: 'pilgrimage'
  },
  {
    id: 'mysore-ooty-coorg-5-days',
    title: '5 Days Mysore-Ooty-Coorg Complete Tour',
    slug: 'mysore-ooty-coorg-5-days',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    price: 22000,
    image: '/Images/4.jpg',
    destinations: ['Mysore', 'Ooty', 'Coonoor', 'Coorg', 'Nagarhole'],
    description: 'Comprehensive 5-day tour covering Mysore, Ooty, Coonoor, and Coorg. Perfect for families and groups looking for a complete South Indian hill station experience.',
    highlights: [
      'Mysore Palace and local sightseeing',
      'Complete Ooty-Coonoor exploration',
      'Coorg coffee plantations and waterfalls',
      'Nagarhole National Park (optional)',
      'Professional driver throughout',
      'Flexible itinerary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore Local Sightseeing',
        description: 'Explore the royal city of Mysore',
        activities: [
          '09:00 AM - Pickup and Mysore Palace visit',
          '12:00 PM - Chamundi Hills',
          '02:00 PM - Lunch',
          '03:30 PM - Brindavan Gardens',
          '06:00 PM - Return to hotel'
        ]
      },
      {
        day: 2,
        title: 'Mysore to Ooty',
        description: 'Travel to Ooty and local sightseeing',
        activities: [
          '07:00 AM - Departure to Ooty',
          '11:00 AM - Arrival, check-in',
          '12:00 PM - Botanical Gardens',
          '03:00 PM - Ooty Lake',
          '05:00 PM - Doddabetta Peak',
          'Evening free'
        ]
      },
      {
        day: 3,
        title: 'Coonoor Day Trip',
        description: 'Explore Coonoor and return to Ooty',
        activities: [
          '09:00 AM - Coonoor Sim\'s Park',
          '11:00 AM - Dolphin\'s Nose',
          '12:30 PM - Tea factory',
          '02:00 PM - Lunch',
          '04:00 PM - Return to Ooty',
          'Evening shopping'
        ]
      },
      {
        day: 4,
        title: 'Ooty to Coorg',
        description: 'Travel to Coorg and sightseeing',
        activities: [
          '08:00 AM - Checkout from Ooty',
          '12:00 PM - Arrival in Coorg',
          '01:00 PM - Lunch and check-in',
          '03:00 PM - Abbey Falls',
          '05:00 PM - Raja\'s Seat',
          'Evening free'
        ]
      },
      {
        day: 5,
        title: 'Coorg Sightseeing & Return to Mysore',
        description: 'Complete Coorg tour and return',
        activities: [
          '08:00 AM - Golden Temple',
          '10:00 AM - Coffee plantation tour',
          '12:00 PM - Lunch',
          '01:00 PM - Depart for Mysore',
          '04:00 PM - Arrival in Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle for 5 days',
      'Fuel, toll, parking',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel accommodation (4 nights)',
      'All meals',
      'Entry tickets',
      'Guide charges',
      'Personal expenses',
      'GST'
    ],
    category: 'multi-day'
  },
  {
    id: 'wayanad-2-days',
    title: '2 Days Wayanad Tour from Mysore',
    slug: 'wayanad-2-days-tour',
    duration: '2 Days / 1 Night',
    days: 2,
    nights: 1,
    price: 10500,
    image: '/Images/5.jpg',
    destinations: ['Wayanad', 'Edakkal Caves', 'Soochipara Falls', 'Pookode Lake', 'Banasura Dam'],
    description: 'Explore the natural beauty of Wayanad, Kerala, with this 2-day tour from Mysore. Visit caves, waterfalls, lakes, and enjoy the lush greenery of the Western Ghats.',
    highlights: [
      'Edakkal Caves - ancient rock carvings',
      'Soochipara Waterfalls',
      'Pookode Lake boating',
      'Banasura Sagar Dam',
      'Spice plantations',
      'Scenic Western Ghats drive'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Wayanad - Sightseeing',
        description: 'Travel to Wayanad and explore attractions',
        activities: [
          '07:00 AM - Pickup from Mysore',
          '10:30 AM - Arrival in Wayanad',
          '11:00 AM - Edakkal Caves trek',
          '01:00 PM - Lunch',
          '02:30 PM - Pookode Lake',
          '04:30 PM - Check-in to hotel',
          'Evening free'
        ]
      },
      {
        day: 2,
        title: 'Wayanad Sightseeing & Return',
        description: 'More sightseeing and return to Mysore',
        activities: [
          '08:00 AM - Breakfast and checkout',
          '09:00 AM - Banasura Sagar Dam',
          '11:00 AM - Soochipara Falls',
          '01:00 PM - Lunch',
          '02:00 PM - Depart for Mysore',
          '05:30 PM - Arrival in Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle for 2 days',
      'Fuel, toll, parking',
      'Driver allowance',
      'Interstate permit'
    ],
    exclusions: [
      'Accommodation',
      'Meals',
      'Entry fees',
      'Guide charges',
      'Personal expenses',
      'GST'
    ],
    category: 'weekend'
  }
];
