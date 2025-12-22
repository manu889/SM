export interface VehicleData {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'luxury' | 'tempo';
  seating: number;
  image: string;
  features: string[];
  idealFor: string;
  pricePerKm: string;
}

export const vehicles: VehicleData[] = [
  {
    id: '1',
    name: 'Swift Dzire',
    category: 'sedan',
    seating: 4,
    image: '/images/vehicles/dzire.png',
    features: ['AC', 'Music System', 'Comfortable Seats', 'GPS Tracking'],
    idealFor: 'Couples, Small families, Business travel',
    pricePerKm: '₹12 - ₹14'
  },
  {
    id: '2',
    name: 'Toyota Etios',
    category: 'sedan',
    seating: 4,
    image: '/images/vehicles/etios.png',
    features: ['AC', 'Spacious Interior', 'Fuel Efficient', 'Smooth Ride'],
    idealFor: 'Outstation trips, Airport transfers',
    pricePerKm: '₹12 - ₹14'
  },
  {
    id: '3',
    name: 'Toyota Innova',
    category: 'suv',
    seating: 7,
    image: '/images/vehicles/innova.png',
    features: ['AC', 'Spacious', '7-Seater', 'Large Boot', 'Captain Seats'],
    idealFor: 'Family trips, Group travel, Long tours',
    pricePerKm: '₹15 - ₹17'
  },
  {
    id: '4',
    name: 'Maruti Ertiga',
    category: 'suv',
    seating: 7,
    image: '/images/vehicles/ertiga.png',
    features: ['AC', '7-Seater', 'Comfortable', 'Excellent Mileage'],
    idealFor: 'Family outings, Weekend trips',
    pricePerKm: '₹14 - ₹16'
  },
  {
    id: '5',
    name: 'Toyota Innova Crysta',
    category: 'luxury',
    seating: 7,
    image: '/images/vehicles/crysta.png',
    features: ['Premium AC', 'Luxury Seats', 'Advanced Safety', 'Premium Audio'],
    idealFor: 'Corporate travel, VIP guests, Premium tours',
    pricePerKm: '₹17 - ₹20'
  },
  {
    id: '6',
    name: 'Tempo Traveller 12-Seater',
    category: 'tempo',
    seating: 12,
    image: '/images/vehicles/tempo-12.png',
    features: ['AC', 'Push-back Seats', 'Music System', 'Large Luggage Space'],
    idealFor: 'Group tours, Pilgrimages, Corporate outings',
    pricePerKm: '₹19 - ₹22'
  },
  {
    id: '7',
    name: 'Tempo Traveller 17-Seater',
    category: 'tempo',
    seating: 17,
    image: '/images/vehicles/tempo-17.png',
    features: ['AC', 'Comfortable Seating', 'Entertainment System', 'Spacious'],
    idealFor: 'Large groups, Family functions, College trips',
    pricePerKm: '₹22 - ₹25'
  }
];
