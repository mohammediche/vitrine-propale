"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useNavigate } from '@/hooks/useNavigate';
import { Calendar } from 'lucide-react';
import { newslettersData } from '@/data/newsletters';
import PaywallDialog from '@/components/newsletters/PaywallDialog';
import NewsletterSubscription from '@/components/newsletters/NewsletterSubscription';
import PremiumContentBanner from '@/components/banner/PremiumContentBanner';
import OtherArticles from '@/components/newsletters/OtherArticles';

const NewsletterArticlePage = () => {
  const params = useParams();
  const articleId = params.articleId as string;
  const { navigateTo } = useNavigate();
  const article = newslettersData[articleId as keyof typeof newslettersData];

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    if (!article) {
      // Rediriger vers la page 404 si l'article n'existe pas
      navigateTo('/newsletters');
      return;
    }

    // Vérifier le statut de déverrouillage
    const unlockedStatus = localStorage.getItem(`unlocked_${articleId}`);
    if (unlockedStatus === 'true') {
      setIsUnlocked(true);
    }
  }, [articleId, article, navigateTo]);

  const confirmPayment = () => {
    setShowPaywall(false);
    setIsUnlocked(true);
    localStorage.setItem(`unlocked_${articleId}`, 'true');
    console.log('Paiement réussi ! Article débloqué.');
  };

  const handleSubscribeClick = () => {
    // Faire la fonctionnalité plus tard
    console.log('Abonnement à la newsletter');
  };

  // Si pas d'article, ne rien afficher (redirection en cours)
  if (!article) {
    return null;
  }

  const contentToShow = article.paid && !isUnlocked && 'preview' in article ? article.preview : article.fullContent;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="pt-32 pb-16 bg-gray-100 dark:bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-600 dark:text-accent-electric-blue font-semibold mb-4"
            >
              {article.category}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto heading-gradient"
            >
              {article.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center items-center gap-4 text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <span>Par {article.author}</span>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/3">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: contentToShow }}
                />
                {article.paid && !isUnlocked && (
                  <PremiumContentBanner onUnlockClick={() => setShowPaywall(true)} />
                )}
              </div>

              <motion.aside 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-1/3 lg:sticky top-28 h-fit"
                >
                <NewsletterSubscription onSubscribeClick={handleSubscribeClick} />
                <OtherArticles currentArticleId={articleId} />
              </motion.aside>
            </div>
          </div>
        </section>
      </motion.div>

      <PaywallDialog
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onConfirm={confirmPayment}
      />
    </>
  );
};

export default NewsletterArticlePage;
