import React from 'react';
import { Button } from '@/components/ui/button';
import ListingCard from '@/components/ui/ListingCard';

// Mock data for demonstration
const mockSearchResults = [
  {
    id: '1',
    title: 'Appartement moderne à Paris',
    location: 'Paris, France',
    price: 120,
    rating: 4.8,
    images: ['/placeholder-image.jpg'],
    type: 'Appartement entier'
  },
  {
    id: '2',
    title: 'Villa avec piscine à Nice',
    location: 'Nice, France',
    price: 250,
    rating: 4.9,
    images: ['/placeholder-image.jpg'],
    type: 'Villa entière'
  },
  {
    id: '3',
    title: 'Studio cosy à Lyon',
    location: 'Lyon, France',
    price: 80,
    rating: 4.6,
    images: ['/placeholder-image.jpg'],
    type: 'Studio entier'
  },
  {
    id: '4',
    title: 'Maison de campagne en Provence',
    location: 'Provence, France',
    price: 180,
    rating: 4.7,
    images: ['/placeholder-image.jpg'],
    type: 'Maison entière'
  },
  {
    id: '5',
    title: 'Loft industriel à Marseille',
    location: 'Marseille, France',
    price: 95,
    rating: 4.5,
    images: ['/placeholder-image.jpg'],
    type: 'Loft entier'
  },
  {
    id: '6',
    title: 'Château en Dordogne',
    location: 'Dordogne, France',
    price: 350,
    rating: 4.9,
    images: ['/placeholder-image.jpg'],
    type: 'Château entier'
  }
];

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Résultats de recherche</h1>
        <p className="text-gray-600">{mockSearchResults.length} logements trouvés</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Price Filter */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Prix par nuit</h3>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className="w-full"
                />
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Type de logement</h3>
              <div className="space-y-2">
                {['Appartement', 'Maison', 'Villa', 'Studio', 'Loft'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Équipements</h3>
              <div className="space-y-2">
                {['WiFi', 'Cuisine', 'Parking', 'Piscine', 'Climatisation'].map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button className="w-full">Appliquer les filtres</Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">{mockSearchResults.length} logements</span>
            <select className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Trier par: Pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Note la plus élevée</option>
              <option>Plus récent</option>
            </select>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockSearchResults.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline">Précédent</Button>
              <Button variant="outline">1</Button>
              <Button>2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

