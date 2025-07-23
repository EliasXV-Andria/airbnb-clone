'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, X } from 'lucide-react';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      type: 'booking',
      title: 'Nouvelle réservation',
      message: 'Votre appartement à Paris a été réservé pour le 15-20 Mars',
      time: '2h',
      read: false
    },
    {
      id: 2,
      type: 'review',
      title: 'Nouvel avis',
      message: 'Sophie a laissé un avis 5 étoiles sur votre logement',
      time: '1j',
      read: false
    },
    {
      id: 3,
      type: 'message',
      title: 'Nouveau message',
      message: 'Thomas vous a envoyé un message concernant sa réservation',
      time: '2j',
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute right-0 top-full mt-2 w-80 z-50 shadow-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">Notifications</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-0 max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Aucune notification</p>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default NotificationBell;