import apiClient from '../client';
import { Listing, CreateListingDto } from '@/types';

export const listingsService = {
  async getAllListings(): Promise<Listing[]> {
    const response = await apiClient.get('/listings');
    return response.data;
  },

  async getListingById(id: string): Promise<Listing> {
    const response = await apiClient.get(`/listings/${id}`);
    return response.data;
  },

  async createListing(listingData: CreateListingDto): Promise<Listing> {
    const response = await apiClient.post('/listings', listingData);
    return response.data;
  },

  async updateListing(id: string, listingData: Partial<CreateListingDto>): Promise<Listing> {
    const response = await apiClient.patch(`/listings/${id}`, listingData);
    return response.data;
  },

  async deleteListing(id: string): Promise<void> {
    await apiClient.delete(`/listings/${id}`);
  },

  async searchListings(params: {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    minPrice?: number;
    maxPrice?: number;
    type?: string;
  }): Promise<Listing[]> {
    const response = await apiClient.get('/listings', { params });
    return response.data;
  }
};

