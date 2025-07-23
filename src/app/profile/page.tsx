import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/components/auth/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Accès non autorisé</h1>
        <p className="mb-4">Vous devez être connecté pour accéder à cette page.</p>
        <Link href="/auth/login">
          <Button>Se connecter</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mon Profil</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={user.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                    alt={`${user.firstName} ${user.lastName}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  {user.phone && <p className="text-gray-600">{user.phone}</p>}
                  <p className="text-sm text-gray-500">Membre depuis {new Date(user.createdAt).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              <Button variant="outline">Modifier le profil</Button>
            </CardContent>
          </Card>

          {/* Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Mes réservations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">Appartement moderne à Paris</h3>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Confirmé</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">15-20 Mars 2024 • 2 voyageurs</p>
                  <p className="font-semibold">600€ total</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">Villa avec piscine à Nice</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">À venir</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">10-15 Juin 2024 • 4 voyageurs</p>
                  <p className="font-semibold">1250€ total</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                Modifier le profil
              </Button>
              <Button className="w-full" variant="outline">
                Mes réservations
              </Button>
              <Button className="w-full" variant="outline">
                Mes favoris
              </Button>
              {user.isHost && (
                <Button className="w-full">
                  Gérer mes annonces
                </Button>
              )}
              <Button className="w-full" variant="destructive" onClick={logout}>
                Se déconnecter
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Devenir hôte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Partagez votre espace et gagnez de l'argent en tant qu'hôte Airbnb.
              </p>
              <Button className="w-full">
                Commencer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}