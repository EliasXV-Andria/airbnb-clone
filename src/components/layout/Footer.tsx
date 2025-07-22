import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Assistance</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Centre d'aide</li>
            <li>AirCover</li>
            <li>Lutte contre la discrimination</li>
            <li>Aide au handicap</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Accueil</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Accueillir chez soi</li>
            <li>AirCover pour les hôtes</li>
            <li>Ressources pour les hôtes</li>
            <li>Forum communautaire</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Airbnb</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Newsroom</li>
            <li>Nouvelles fonctionnalités</li>
            <li>Carrières</li>
            <li>Investisseurs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Légal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Confidentialité</li>
            <li>Conditions</li>
            <li>Plan du site</li>
            <li>Fonctionnement du site</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-300 text-sm text-gray-600">
        <p>&copy; 2024 Airbnb Clone. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

