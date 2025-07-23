import React from 'react';
import CreateListingForm from '@/components/host/CreateListingForm';

export default function CreateListingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Créer votre annonce</h1>
        <p className="text-gray-600">
          Partagez votre espace avec des voyageurs du monde entier
        </p>
      </div>
      <CreateListingForm />
    </div>
  );
}