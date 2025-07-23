'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    propertyTypes: [] as string[],
    amenities: [] as string[],
    instantBook: false,
    superhost: false,
    rating: 0
  });

  if (!isOpen) return null;

  const propertyTypes = [
    'Appartement', 'Maison', 'Villa', 'Studio', 'Loft', 'Château'
  ];

  const amenities = [
    'WiFi', 'Cuisine', 'Parking', 'Piscine', 'Climatisation', 
    'Télévision', 'Machine à laver', 'Balcon', 'Jardin', 'Cheminée'
  ];

  const handlePropertyTypeToggle = (type: string) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type]
    }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 500],
      propertyTypes: [],
      amenities: [],
      instantBook: false,
      superhost: false,
      rating: 0
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Filtres</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Gamme de prix (par nuit)</h3>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                }))}
                className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value) || 500]
                }))}
                className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <span>€</span>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold mb-4">Type de logement</h3>
            <div className="grid grid-cols-3 gap-3">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.propertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeToggle(type)}
                    className="rounded"
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold mb-4">Équipements</h3>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="rounded"
                  />
                  <span className="text-sm">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Options */}
          <div>
            <h3 className="font-semibold mb-4">Options spéciales</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.instantBook}
                  onChange={(e) => setFilters(prev => ({ ...prev, instantBook: e.target.checked }))}
                  className="rounded"
                />
                <span className="text-sm">Réservation instantanée</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.superhost}
                  onChange={(e) => setFilters(prev => ({ ...prev, superhost: e.target.checked }))}
                  className="rounded"
                />
                <span className="text-sm">Superhôte uniquement</span>
              </label>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold mb-4">Note minimum</h3>
            <div className="flex space-x-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters(prev => ({ ...prev, rating }))}
                  className={`px-3 py-2 rounded-lg border text-sm ${
                    filters.rating === rating
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {rating === 0 ? 'Toutes' : `${rating}+ ⭐`}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline" onClick={clearFilters}>
              Effacer tout
            </Button>
            <Button onClick={handleApply}>
              Appliquer les filtres
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterModal;