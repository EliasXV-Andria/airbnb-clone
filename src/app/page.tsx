import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ListingCard from '@/components/ui/ListingCard';

// Mock data for demonstration
const mockListings = [
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
    id: '2',
    title: 'Villa avec piscine à Nice',
    location: 'Nice, France',
    price: 250,
    rating: 4.9,
    images: ['https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'],
    type: 'Villa entière'
  },
  {
    id: '3',
    title: 'Studio cosy à Lyon',
    location: 'Lyon, France',
    price: 80,
    rating: 4.6,
    images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'],
    type: 'Studio entier'
  },
  {
    id: '4',
    title: 'Maison de campagne en Provence',
    location: 'Provence, France',
    price: 180,
    rating: 4.7,
    images: ['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'],
    type: 'Maison entière'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Trouvez votre prochain séjour
        </h1>
        <p className="text-xl mb-8">
          Découvrez des logements uniques et des expériences inoubliables
        </p>
        <Link href="/search">
          <Button size="lg" variant="secondary">
            Commencer à explorer
          </Button>
        </Link>
      </section>

      {/* Search Section */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Destination</label>
              <input
                type="text"
                placeholder="Où allez-vous ?"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Arrivée</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Départ</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-end">
              <Link href="/search" className="w-full">
                <Button className="w-full">Rechercher</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Logements populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Explorez par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">🏠</div>
            <h3 className="font-semibold">Maisons</h3>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">🏢</div>
            <h3 className="font-semibold">Appartements</h3>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">🏖️</div>
            <h3 className="font-semibold">Bord de mer</h3>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">🏔️</div>
            <h3 className="font-semibold">Montagne</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

