'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  listingId: string;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ listingId, className = '' }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Here you would typically call an API to save/remove the favorite
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFavorite}
      className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${className}`}
    >
      <Heart
        className={`h-4 w-4 ${
          isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
        }`}
      />
    </Button>
  );
};

export default FavoriteButton;