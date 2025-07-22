import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Créer votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ou{' '}
            <a href="/auth/login" className="font-medium text-red-600 hover:text-red-500">
              connectez-vous à votre compte existant
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}