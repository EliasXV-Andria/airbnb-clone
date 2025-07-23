import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ListingCard from '@/components/ui/ListingCard';

// Mock data for demonstration
const mockFavorites = [
  {
    id: '1',
    title: 'Appartement moderne à Paris',
    location: 'Paris, France',
    price: 120,
    rating: 4.8,
    images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'],
    type: 'Appartement entier'
  },
  {
    id: '3',
    title: 'Studio cosy à Lyon',
    location: 'Lyon, France',
    price: 80,
    rating: 4.6,
    images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'],
    type: 'Studio entier'
  }
];

export default function FavoritesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Mes favoris</h1>
        <p className="text-gray-600">
          {mockFavorites.length} logement{mockFavorites.length > 1 ? 's' : ''} sauvegardé{mockFavorites.length > 1 ? 's' : ''}
        </p>
      </div>

      {mockFavorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockFavorites.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      ) : (
        <Card className="text-center py-16">
          <CardContent>
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold mb-4">Aucun favori pour le moment</h2>
            <p className="text-gray-600 mb-6">
              Commencez à explorer et sauvegardez vos logements préférés
            </p>
            <a href="/search" className="text-red-500 hover:text-red-600 font-medium">
              Découvrir des logements
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
}