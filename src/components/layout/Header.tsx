import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/AuthProvider';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-600 transition-colors">
        Airbnb Clone
      </Link>
      <nav className="space-x-4">
        <Link href="/host">
          <Button variant="ghost">Devenir hôte</Button>
        </Link>
        <Button variant="ghost">Expériences</Button>
        <Button variant="ghost">Aide</Button>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">Bonjour, {user.firstName}</span>
            <Link href="/bookings">
              <Button variant="ghost" size="sm">Mes voyages</Button>
            </Link>
            <Link href="/favorites">
              <Button variant="ghost" size="sm">Favoris</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline">Mon profil</Button>
            </Link>
            <Button variant="outline" onClick={logout}>
              Se déconnecter
            </Button>
          </div>
        ) : (
          <>
            <Link href="/auth/register">
              <Button>S'inscrire</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Se connecter</Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;


