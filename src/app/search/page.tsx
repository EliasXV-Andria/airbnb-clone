import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ListingCard from '@/components/ui/ListingCard';
import MapView from '@/components/ui/MapView';
import FilterModal from '@/components/ui/FilterModal';
import { Filter, Map, List } from 'lucide-react';

// Mock data for demonstration
const mockSearchResults = [
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
  },
  {
    id: '5',
    title: 'Loft industriel à Marseille',
    location: 'Marseille, France',
    price: 95,
    rating: 4.5,
    images: ['https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'],
    type: 'Loft entier'
  },
  {
    id: '6',
    title: 'Château en Dordogne',
    location: 'Dordogne, France',
    price: 350,
    rating: 4.9,
    images: ['https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'],
    type: 'Château entier'
  }
];

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<any>({});

  const handleApplyFilters = (filters: any) => {
    setAppliedFilters(filters);
    // Here you would typically call an API with the filters
    console.log('Applied filters:', filters);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold">Résultats de recherche</h1>
            <p className="text-gray-600">{mockSearchResults.length} logements trouvés</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setIsFilterModalOpen(true)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </Button>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-r-none"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="rounded-l-none"
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
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
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Map View */}
          <div className="order-2 lg:order-1">
            <MapView listings={mockSearchResults} className="h-full" />
          </div>
          
          {/* Listings Sidebar */}
          <div className="order-1 lg:order-2 overflow-y-auto">
            <div className="space-y-4">
              {mockSearchResults.map((listing) => (
                <div key={listing.id} className="flex space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <img
                      src={listing.images[0]}
                      alt={listing.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{listing.title}</h3>
                    <p className="text-gray-600 text-xs mb-1">{listing.location}</p>
                    <p className="text-gray-600 text-xs mb-2">{listing.type}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">{listing.price}€/nuit</span>
                      <span className="text-xs">⭐ {listing.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
}

