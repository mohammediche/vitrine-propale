"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from '@/hooks/useNavigate';
import PaywallDialog from '@/components/newsletters/PaywallDialog';
import NewsletterSubscription from '@/components/newsletters/NewsletterSubscription';
import PremiumContentBanner from '@/components/banner/PremiumContentBanner';
import OtherArticles from '@/components/newsletters/OtherArticles';
import { Article } from '@/types/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface NewsletterArticleContentProps {
  article: Article;
  articleId: string;
  allArticles: Article[];
}

const NewsletterArticleContent = ({ article, articleId, allArticles }: NewsletterArticleContentProps) => {
  const { navigateTo } = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);



  useEffect(() => {
    if (!article) {
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

  return (
    <>
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="prose prose-lg max-w-none dark:prose-invert [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:my-4 [&_h3]:text-gray-900 [&_h3]:dark:text-white"
              >
                <BlocksRenderer content={article.content} />
              </motion.div>
              {article.isPaid && (
                !isUnlocked ? (
                  <PremiumContentBanner onUnlockClick={() => setShowPaywall(true)} />
                ) : (
                  <div className="[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:my-4 [&_h3]:text-gray-900 [&_h3]:dark:text-white">
                    <BlocksRenderer content={article.paid_content} />
                  </div>
                )
              )}
            </div>

            <motion.aside 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/3 lg:sticky top-28 h-fit"
            >
              <NewsletterSubscription />
              <OtherArticles currentArticleId={articleId} allArticles={allArticles} />
            </motion.aside>
          </div>
        </div>
      </section>

      <PaywallDialog
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onConfirm={confirmPayment}
      />
    </>
  );
};

export default NewsletterArticleContent;