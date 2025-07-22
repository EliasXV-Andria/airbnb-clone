export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  isHost: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  location: string;
  latitude: number;
  longitude: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  hostId: string;
  host?: User;
  rating?: number;
  reviewCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  listingId: string;
  listing?: Listing;
  guestId: string;
  guest?: User;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface CreateListingDto {
  title: string;
  description: string;
  type: string;
  price: number;
  location: string;
  latitude: number;
  longitude: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
}

export interface CreateBookingDto {
  listingId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

