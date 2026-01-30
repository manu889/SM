export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  description: string;
  features: string[];
  pricing: string;
  image: string;
}

export const services: ServiceData[] = [
  {
    id: '1',
    title: 'Outstation Tours',
    slug: 'outstation-taxi-mysore',
    shortDescription: 'Comfortable long-distance travel to Ooty, Coorg, Bangalore, and beyond',
    icon: '🚗',
    description: 'Experience seamless outstation travel with SM Tours & Travels. We provide reliable cab services to all major tourist destinations across Karnataka and neighboring states.',
    features: [
      'One-way and round trip packages',
      'Flexible route planning',
      'Multiple vehicle options',
      'All-inclusive pricing',
      'No hidden charges',
      'Sanitized and clean vehicles'
    ],
    pricing: 'Starting from ₹12/km',
    image: '/images/outstation.jpg'
  },
  {
    id: '2',
    title: 'Local Sightseeing',
    slug: 'local-sightseeing-taxi-mysore',
    shortDescription: 'Explore Mysore\'s heritage sites, palaces, and gardens with ease',
    icon: '🏛️',
    description: 'Discover the cultural richness of Mysore with our comprehensive local sightseeing services. Visit Mysore Palace, Chamundi Hills, Brindavan Gardens, and other iconic landmarks.',
    features: [
      'Half-day and full-day tours',
      'Custom itinerary planning',
      'All major attractions covered',
      'AC vehicles',
      'Family and group friendly'
    ],
    pricing: '₹1,800 - ₹3,000 per day',
    image: '/images/sightseeing.jpg'
  },
  {
    id: '3',
    title: 'Airport Transfers',
    slug: 'airport-taxi-mysore',
    shortDescription: 'Reliable pickup and drop services to Bangalore and Mysore airports',
    icon: '✈️',
    description: 'Punctual and comfortable airport transfer services connecting Mysore to Bangalore Airport and Mysore Airport. We track your flight and provide meet & greet services for a hassle-free experience.',
    features: [
      'Bangalore Airport transfers',
      'Mysore Airport services',
      'Real-time flight tracking',
      'Meet & greet at arrivals',
      'Available 24/7',
      'Luggage handling assistance'
    ],
    pricing: 'Starting from ₹3,000',
    image: '/images/airport.jpg'
  },
  {
    id: '4',
    title: 'Tempo Traveller',
    slug: 'tempo-traveller-mysore',
    shortDescription: 'Spacious 12-17 seater vehicles for group travel and family outings',
    icon: '🚐',
    description: 'Ideal for large groups, family reunions, or corporate events. Our Tempo Travellers offer comfortable push-back seats, ample luggage space, entertainment systems, and air conditioning for a pleasant journey.',
    features: [
      '12, 14, and 17 seater variants',
      'Reclining push-back seats',
      'Large luggage compartment',
      'Entertainment system',
      'Perfect for tours and pilgrimages'
    ],
    pricing: '₹19 - ₹24 per km',
    image: '/images/tempo.jpg'
  },
  {
    id: '5',
    title: 'Corporate Travel',
    slug: 'corporate-taxi-mysore',
    shortDescription: 'Professional employee transport and corporate cab solutions',
    icon: '💼',
    description: 'Comprehensive corporate transportation services including employee commute, client pickups, airport transfers, and event transport. Customizable monthly contracts with dedicated vehicles.',
    features: [
      'Daily employee transport',
      'Flexible route management',
      'Monthly contract options',
      'GPS-enabled tracking',
      'Corporate billing and invoicing'
    ],
    pricing: 'Custom packages available',
    image: '/images/corporate.jpg'
  },
  {
    id: '6',
    title: 'Pilgrimage Tours',
    slug: 'pilgrimage-taxi-mysore',
    shortDescription: 'Spiritual journeys to temples and holy sites across South India',
    icon: '🕉️',
    description: 'Embark on sacred journeys with our specialized pilgrimage tour packages. We cover major temples including Tirupati, Sabarimala, Dharmasthala, Kukke Subramanya, and more with comfortable travel.',
    features: [
      'Multi-day pilgrimage packages',
      'Temple tour specialists',
      'Accommodation assistance',
      'Darshan planning support',
      'Tempo Traveller for groups'
    ],
    pricing: 'Packages from ₹8,000',
    image: '/images/pilgrimage.jpg'
  }
];
