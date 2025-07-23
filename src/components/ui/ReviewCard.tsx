import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ReviewCardProps {
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, date, comment }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative w-12 h-12">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600">{date}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700">{comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;