import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function HostPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Devenez hôte sur Airbnb
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Partagez votre espace et gagnez de l'argent supplémentaire en tant qu'hôte Airbnb
        </p>
        <Button size="lg" variant="secondary">
          Commencer maintenant
        </Button>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi devenir hôte ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Gagnez de l'argent</h3>
              <p className="text-gray-600">
                Générez des revenus supplémentaires en partageant votre espace avec des voyageurs du monde entier.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Rencontrez des gens</h3>
              <p className="text-gray-600">
                Accueillez des voyageurs de différentes cultures et créez des connexions uniques.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Protection incluse</h3>
              <p className="text-gray-600">
                Bénéficiez de notre couverture d'assurance et de notre support 24h/24 pour les hôtes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Créez votre annonce</h3>
            <p className="text-gray-600">
              Ajoutez des photos, décrivez votre espace et définissez vos tarifs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Accueillez vos invités</h3>
            <p className="text-gray-600">
              Communiquez avec vos invités et offrez-leur une expérience mémorable.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Recevez vos paiements</h3>
            <p className="text-gray-600">
              Nous nous occupons des paiements et vous versons vos gains rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="mb-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Calculez vos gains potentiels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type de logement</label>
                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>Appartement entier</option>
                  <option>Chambre privée</option>
                  <option>Chambre partagée</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Localisation</label>
                <input
                  type="text"
                  placeholder="Entrez votre ville"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nombre de nuits par mois</label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <Button className="w-full">Calculer mes gains</Button>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">~850€ par mois</p>
                <p className="text-sm text-gray-600">Estimation basée sur des annonces similaires</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Rejoignez des millions d'hôtes dans le monde entier
        </p>
        <Link href="/host/create-listing">
          <Button size="lg">Créer mon annonce</Button>
        </Link>
      </section>
    </div>
  );
}