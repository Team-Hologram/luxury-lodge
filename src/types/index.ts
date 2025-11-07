export interface Lodge {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  images: string[];
  price: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  location: string;
  rating: number;
  reviews: number;
  featured: boolean;
  available: boolean;
}

export interface Booking {
  lodgeId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  customerInfo: CustomerInfo;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  lodge: string;
  date: string;
}