import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Connexion à votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ou{' '}
            <a href="/auth/register" className="font-medium text-red-600 hover:text-red-500">
              créez un nouveau compte
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}