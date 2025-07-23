import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReviewCard from '@/components/ui/ReviewCard';
import FavoriteButton from '@/components/ui/FavoriteButton';
import Image from 'next/image';

interface ListingDetailPageProps {
  params: {
    id: string;
  };
}

// Mock data for demonstration
const mockListing = {
  id: '1',
  title: 'Appartement moderne à Paris',
  location: 'Paris, France',
  price: 120,
  rating: 4.8,
  reviews: 156,
  images: [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
  ],
  type: 'Appartement entier',
  guests: 4,
  bedrooms: 2,
  bathrooms: 1,
  description: 'Magnifique appartement moderne situé au cœur de Paris. Parfait pour découvrir la ville lumière avec tous les conforts modernes. L\'appartement dispose d\'une cuisine équipée, d\'un salon spacieux et de deux chambres confortables.',
  amenities: [
    'WiFi gratuit',
    'Cuisine équipée',
    'Climatisation',
    'Télévision',
    'Machine à laver',
    'Parking gratuit'
  ],
  host: {
    name: 'Marie',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    joinedDate: 'Juin 2020',
    reviews: 89
  }
};

// Mock reviews data
const mockReviews = [
  {
    author: {
      name: 'Sophie Martin',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    rating: 5,
    date: 'Mars 2024',
    comment: 'Appartement magnifique et très bien situé ! Marie est une hôte formidable, très accueillante et disponible. Je recommande vivement !'
  },
  {
    author: {
      name: 'Thomas Dubois',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    rating: 4,
    date: 'Février 2024',
    comment: 'Très bon séjour dans cet appartement moderne. Tout était propre et conforme à la description. Parfait pour découvrir Paris !'
  }
];

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{mockListing.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>⭐ {mockListing.rating} ({mockListing.reviews} avis)</span>
          <span>{mockListing.location}</span>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="lg:col-span-2 lg:row-span-2 relative">
          <div className="relative h-96 lg:h-full">
            <Image
              src={mockListing.images[0]}
              alt={mockListing.title}
              fill
              className="object-cover rounded-lg"
            />
            <FavoriteButton listingId={params.id} className="top-4 right-4" />
          </div>
        </div>
        {mockListing.images.slice(1, 4).map((image, index) => (
          <div key={index} className="relative h-48">
            <Image
              src={image}
              alt={`${mockListing.title} ${index + 2}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Property Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {mockListing.type} hébergé par {mockListing.host.name}
            </h2>
            <div className="flex space-x-4 text-gray-600 mb-4">
              <span>{mockListing.guests} voyageurs</span>
              <span>•</span>
              <span>{mockListing.bedrooms} chambres</span>
              <span>•</span>
              <span>{mockListing.bathrooms} salle de bain</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700 leading-relaxed">{mockListing.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Équipements</h3>
            <div className="grid grid-cols-2 gap-4">
              {mockListing.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={mockListing.host.avatar}
                    alt={mockListing.host.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Hébergé par {mockListing.host.name}</h4>
                  <p className="text-gray-600">Hôte depuis {mockListing.host.joinedDate}</p>
                  <p className="text-gray-600">{mockListing.host.reviews} avis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6">
              ⭐ {mockListing.rating} · {mockListing.reviews} avis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockReviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="mb-4">
                <span className="text-2xl font-bold">{mockListing.price}€</span>
                <span className="text-gray-600"> par nuit</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Arrivée</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Départ</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Voyageurs</label>
                  <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>1 voyageur</option>
                    <option>2 voyageurs</option>
                    <option>3 voyageurs</option>
                    <option>4 voyageurs</option>
                  </select>
                </div>
              </div>

              <Button className="w-full mb-4">Réserver</Button>

              <div className="text-center text-sm text-gray-600">
                Vous ne serez pas débité pour le moment
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{mockListing.price}€ x 5 nuits</span>
                  <span>{mockListing.price * 5}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de service</span>
                  <span>50€</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{mockListing.price * 5 + 50}€</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}