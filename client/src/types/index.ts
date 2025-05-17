export interface Place {
  id: string;
  name: string;
  state: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  featured?: boolean;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  itinerary?: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  location: string;
  user: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface Trip {
  id: string;
  packageId: string;
  packageTitle: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'past' | 'cancelled';
  image: string;
}

export interface Referral {
  id: string;
  code: string;
  credits: number;
  history: ReferralHistory[];
}

export interface ReferralHistory {
  id: string;
  date: string;
  name: string;
  amount: number;
}