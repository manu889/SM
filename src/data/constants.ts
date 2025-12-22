export const BUSINESS_INFO = {
  name: 'SM Tours & Travels',
  tagline: 'Your Trusted Travel Partner in Mysore',
  phone: '+91 6363206398',
  whatsapp: '+91 6363206398',
  email: 'info@smtoursandtravel.com',
  address: 'Mysuru, Karnataka 570001',
  addressDetails: {
    street: 'Main Road, Saraswathipuram',
    city: 'Mysuru',
    state: 'Karnataka',
    zipcode: '570001',
    country: 'India'
  },
  googleMapsUrl: 'https://maps.google.com/?q=Mysuru+Karnataka+570001',
  googleRatings: {
    rating: 4.9,
    reviewCount: 200
  },
  established: '2015',
  website: 'https://smtoursandtravel.com',
  
  social: {
    facebook: 'https://facebook.com/smtoursandtravel',
    instagram: 'https://instagram.com/smtoursandtravel',
    twitter: 'https://twitter.com/smtoursandtravel'
  },

  serviceAreas: [
    'Mysore',
    'Bangalore',
    'Ooty',
    'Coorg',
    'Wayanad',
    'Chikmagalur',
    'Hassan',
    'Mangalore',
    'Hampi',
    'Gokarna'
  ],

  features: [
    '10+ Years of Excellence',
    '75+ Professional Drivers',
    '120+ Well-Maintained Vehicles',
    '24/7 Customer Support',
    '15,000+ Satisfied Customers',
    'GPS-Enabled Fleet'
  ]
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Outstation Tours', href: '/services/outstation-tours' },
      { label: 'Local Sightseeing', href: '/services/local-sightseeing' },
      { label: 'Airport Transfers', href: '/services/airport-transfers' },
      { label: 'Tempo Traveller', href: '/services/tempo-traveller' },
      { label: 'Corporate Travel', href: '/services/corporate-travel' },
      { label: 'Pilgrimage Tours', href: '/services/pilgrimage-tours' }
    ]
  },
  { 
    label: 'Tour Packages', 
    href: '/packages',
    dropdown: [
      { label: 'All Packages', href: '/packages' },
      { label: 'One Day Tours', href: '/packages#one-day' },
      { label: 'Weekend Getaways', href: '/packages#weekend' },
      { label: 'Pilgrimage Tours', href: '/packages#pilgrimage' }
    ]
  },
  { 
    label: 'Vehicles', 
    href: '/vehicles'
  },
  { 
    label: 'About', 
    href: '/about'
  },
  { label: 'Contact', href: '/contact' }
];
