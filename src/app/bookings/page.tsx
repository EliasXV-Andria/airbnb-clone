import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

// Mock bookings data
const mockBookings = [
  {
    id: '1',
    listing: {
      id: '1',
      title: 'Appartement moderne à Paris',
      location: 'Paris, France',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    checkIn: '2024-03-15',
    checkOut: '2024-03-20',
    guests: 2,
    totalPrice: 600,
    status: 'confirmed'
  },
  {
    id: '2',
    listing: {
      id: '2',
      title: 'Villa avec piscine à Nice',
      location: 'Nice, France',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'
    },
    checkIn: '2024-06-10',
    checkOut: '2024-06-15',
    guests: 4,
    totalPrice: 1250,
    status: 'upcoming'
  },
  {
    id: '3',
    listing: {
      id: '3',
      title: 'Studio cosy à Lyon',
      location: 'Lyon, France',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    },
    checkIn: '2024-01-10',
    checkOut: '2024-01-15',
    guests: 2,
    totalPrice: 400,
    status: 'completed'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confirmé';
    case 'upcoming':
      return 'À venir';
    case 'completed':
      return 'Terminé';
    case 'cancelled':
      return 'Annulé';
    default:
      return status;
  }
};

export default function BookingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Mes réservations</h1>
        <p className="text-gray-600">
          Gérez vos voyages passés et à venir
        </p>
      </div>

      <div className="space-y-6">
        {mockBookings.map((booking) => (
          <Card key={booking.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-32">
                  <Image
                    src={booking.listing.image}
                    alt={booking.listing.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{booking.listing.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusText(booking.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{booking.listing.location}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Arrivée</span>
                      <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString('fr-FR')}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Départ</span>
                      <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString('fr-FR')}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Voyageurs</span>
                      <p className="font-medium">{booking.guests}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Total</span>
                      <p className="font-medium">{booking.totalPrice}€</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <Link href={`/listings/${booking.listing.id}`}>
                      <Button variant="outline" size="sm">
                        Voir l'annonce
                      </Button>
                    </Link>
                    {booking.status === 'completed' && (
                      <Button variant="outline" size="sm">
                        Laisser un avis
                      </Button>
                    )}
                    {booking.status === 'upcoming' && (
                      <Button variant="outline" size="sm">
                        Contacter l'hôte
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockBookings.length === 0 && (
        <Card className="text-center py-16">
          <CardContent>
            <div className="text-6xl mb-4">✈️</div>
            <h2 className="text-2xl font-bold mb-4">Aucune réservation</h2>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas encore de réservation. Commencez à planifier votre prochain voyage !
            </p>
            <Link href="/search">
              <Button>Explorer les logements</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}