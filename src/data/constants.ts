export const BUSINESS_INFO = {
  name: 'SM Tours & Travels',
  tagline: 'Your Trusted Travel Partner in Mysore',
  phone: '+91 6363206398',
  whatsapp: '+91 6363206398',
  email: 'support@smtoursandtravel.com',
  alternateEmail: 'smtoursandtravelmy@gmail.com',
  address: '2ND FLOOR, 541/1 CH10, WESTCROSS ROAD, Sunnadakeri, KUMBARGERI (BESTAGERI), Rahmania Mohalla, Mysuru, Karnataka 570004',
  addressDetails: {
    street: '2ND FLOOR, 541/1 CH10, WESTCROSS ROAD, Sunnadakeri',
    area: 'KUMBARGERI (BESTAGERI)',
    mohalla: 'Rahmania Mohalla',
    city: 'Mysuru',
    state: 'Karnataka',
    zipcode: '570004',
    country: 'India'
  },
  googleMapsUrl: 'https://maps.google.com/?q=2ND+FLOOR+541/1+CH10+WESTCROSS+ROAD+Sunnadakeri+Mysuru+570004',
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
      { label: 'Outstation Tours', href: '/services/outstation-taxi-mysore' },
      { label: 'Local Sightseeing', href: '/services/local-sightseeing-taxi-mysore' },
      { label: 'Airport Transfers', href: '/services/airport-taxi-mysore' },
      { label: 'Tempo Traveller', href: '/services/tempo-traveller-mysore' },
      { label: 'Corporate Travel', href: '/services/corporate-taxi-mysore' },
      { label: 'Pilgrimage Tours', href: '/services/pilgrimage-taxi-mysore' }
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
