import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  type: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  location,
  price,
  rating,
  images,
  type
}) => {
  return (
    <Link href={`/listings/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-64">
          <Image
            src={images[0] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg truncate">{title}</h3>
            <div className="flex items-center">
              <span className="text-sm">⭐ {rating}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-1">{location}</p>
          <p className="text-gray-600 text-sm mb-2">{type}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">{price}€ par nuit</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;

