import apiClient from '../client';
import { Booking, CreateBookingDto } from '@/types';

export const bookingsService = {
  async getAllBookings(): Promise<Booking[]> {
    const response = await apiClient.get('/bookings');
    return response.data;
  },

  async getBookingById(id: string): Promise<Booking> {
    const response = await apiClient.get(`/bookings/${id}`);
    return response.data;
  },

  async createBooking(bookingData: CreateBookingDto): Promise<Booking> {
    const response = await apiClient.post('/bookings', bookingData);
    return response.data;
  },

  async getBookingsByGuest(guestId: string): Promise<Booking[]> {
    const response = await apiClient.get(`/bookings/guest/${guestId}`);
    return response.data;
  },

  async getBookingsByListing(listingId: string): Promise<Booking[]> {
    const response = await apiClient.get(`/bookings/listing/${listingId}`);
    return response.data;
  }
};

