import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  onSearch?: (params: SearchParams) => void;
  className?: string;
}

interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(searchParams);
    } else {
      // Navigate to search page with params
      const params = new URLSearchParams();
      if (searchParams.location) params.set('location', searchParams.location);
      if (searchParams.checkIn) params.set('checkIn', searchParams.checkIn);
      if (searchParams.checkOut) params.set('checkOut', searchParams.checkOut);
      if (searchParams.guests > 1) params.set('guests', searchParams.guests.toString());
      
      router.push(`/search?${params.toString()}`);
    }
  };

  const handleChange = (field: keyof SearchParams, value: string | number) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 rounded-lg shadow-lg border ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Destination</label>
          <input
            type="text"
            placeholder="Où allez-vous ?"
            value={searchParams.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Arrivée</label>
          <input
            type="date"
            value={searchParams.checkIn}
            onChange={(e) => handleChange('checkIn', e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Départ</label>
          <input
            type="date"
            value={searchParams.checkOut}
            onChange={(e) => handleChange('checkOut', e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex items-end">
          <Button type="submit" className="w-full">Rechercher</Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;