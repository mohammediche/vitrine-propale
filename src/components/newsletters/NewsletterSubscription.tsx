"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { subscribeToNewsletter } from '@/services/front/subscribe';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscribedEmail = localStorage.getItem('newsletter_subscribed');
    if (subscribedEmail) {
      setIsSubscribed(true);
      setEmail(subscribedEmail);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage('');

    try {
      await subscribeToNewsletter({ email });
      setMessage('Inscription réussie ! Merci de vous être abonné.');
      setIsSubscribed(true);
      localStorage.setItem('newsletter_subscribed', email);
    } catch (error) {
      setMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100 text-center">
          Vous êtes déjà abonné !
        </h3>
        <p className="text-sm text-green-600 dark:text-green-400 text-center">
          Vous recevrez nos analyses exclusives directement dans votre boîte mail.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">S&apos;abonner à la newsletter</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Recevez nos analyses exclusives directement dans votre boîte mail.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        
        {message && (
          <p className={`text-sm ${message.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
        
        <Button 
          type="submit" 
          size="lg" 
          className="w-full btn-primary group"
          disabled={isLoading || !email}
        >
          {isLoading ? 'Inscription...' : 'Je m\'abonne'} 
          <Mail className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSubscription; 