'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Calendar, Users, CreditCard } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: {
    id: string;
    title: string;
    price: number;
    images: string[];
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, listing }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    paymentMethod: 'card'
  });
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const subtotal = nights * listing.price;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const handleBooking = () => {
    // Here you would typically send the booking data to your API
    console.log('Booking data:', { ...bookingData, listingId: listing.id });
    alert('Réservation confirmée ! Vous recevrez un email de confirmation.');
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Détails du voyage</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Arrivée
                </label>
                <input
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Départ
                </label>
                <input
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Nombre de voyageurs
              </label>
              <select
                value={bookingData.guests}
                onChange={(e) => setBookingData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} voyageur{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            {nights > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Résumé des prix</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>{listing.price}€ x {nights} nuit{nights > 1 ? 's' : ''}</span>
                    <span>{subtotal}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frais de service</span>
                    <span>{serviceFee}€</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{total}€</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">
              <CreditCard className="inline h-5 w-5 mr-2" />
              Paiement
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Numéro de carte</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiration</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nom sur la carte</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                🔒 Vos informations de paiement sont sécurisées et cryptées
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Réserver ce logement</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {/* Listing Info */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold">{listing.title}</h4>
              <p className="text-sm text-gray-600">{listing.price}€ par nuit</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center mb-6">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-red-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= 1 ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm">Détails</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-red-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= 2 ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm">Paiement</span>
            </div>
          </div>

          {/* Step Content */}
          {renderStep()}

          {/* Actions */}
          <div className="flex justify-between mt-6 pt-4 border-t">
            {currentStep > 1 && (
              <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                Retour
              </Button>
            )}
            <div className="flex-1"></div>
            {currentStep < 2 ? (
              <Button 
                onClick={() => setCurrentStep(2)}
                disabled={!bookingData.checkIn || !bookingData.checkOut}
              >
                Continuer
              </Button>
            ) : (
              <Button onClick={handleBooking}>
                Confirmer la réservation ({total}€)
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;