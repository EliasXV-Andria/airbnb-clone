import { useState, useEffect } from 'react';
import { Listing } from '@/types';
import { listingsService } from '@/api/services/listingsService';

export const useListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      setIsLoading(true);
      const data = await listingsService.getAllListings();
      setListings(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des annonces');
      console.error('Error fetching listings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const searchListings = async (params: {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    minPrice?: number;
    maxPrice?: number;
    type?: string;
  }) => {
    try {
      setIsLoading(true);
      const data = await listingsService.searchListings(params);
      setListings(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors de la recherche');
      console.error('Error searching listings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listings,
    isLoading,
    error,
    fetchListings,
    searchListings,
  };
};

export const useListing = (id: string) => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchListing(id);
    }
  }, [id]);

  const fetchListing = async (listingId: string) => {
    try {
      setIsLoading(true);
      const data = await listingsService.getListingById(listingId);
      setListing(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement de l\'annonce');
      console.error('Error fetching listing:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listing,
    isLoading,
    error,
    refetch: () => fetchListing(id),
  };
};

