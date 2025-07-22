import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-red-500">Airbnb Clone</div>
      <nav className="space-x-4">
        <Button variant="ghost">Devenir hôte</Button>
        <Button variant="ghost">Expériences</Button>
        <Button variant="ghost">Aide</Button>
        <Button>S'inscrire</Button>
        <Button variant="outline">Se connecter</Button>
      </nav>
    </header>
  );
};

export default Header;


