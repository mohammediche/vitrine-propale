"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

interface NewsletterSubscriptionProps {
  onSubscribeClick: () => void;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ onSubscribeClick }) => {
  return (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">S&apos;abonner à la newsletter</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Recevez nos analyses exclusives directement dans votre boîte mail.</p>
        <Button onClick={onSubscribeClick} size="lg" className="w-full btn-primary group">
          Je m&apos;abonne <Mail className="ml-2 w-5 h-5" />
        </Button>
      </div>
  );
};

export default NewsletterSubscription; 