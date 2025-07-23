import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MapViewProps {
  listings?: any[];
  center?: { lat: number; lng: number };
  className?: string;
}

const MapView: React.FC<MapViewProps> = ({ listings = [], center, className = '' }) => {
  return (
    <Card className={`h-96 ${className}`}>
      <CardContent className="p-0 h-full">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Simulated map background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-blue-200 via-green-200 to-blue-200"></div>
            {/* Grid pattern to simulate map */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Map pins */}
          <div className="relative z-10 w-full h-full">
            <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">€</span>
            </div>
            <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">€</span>
            </div>
            <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">€</span>
            </div>
          </div>
          
          {/* Map overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm text-gray-600">🗺️ Vue carte interactive</p>
              <p className="text-xs text-gray-500">Cliquez sur les pins pour voir les détails</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;