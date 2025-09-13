"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from '@/hooks/useNavigate';
import PaywallDialog from '@/components/newsletters/PaywallDialog';
import NewsletterSubscription from '@/components/newsletters/NewsletterSubscription';
import PremiumContentBanner from '@/components/banner/PremiumContentBanner';
import OtherArticles from '@/components/newsletters/OtherArticles';
import { Article } from '@/types/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { checkAccess, createCheckoutSession } from '@/services/front/stripe';
import { getUserEmail, setUserEmail } from '@/lib/cookies';

interface NewsletterArticleContentProps {
  article: Article;
  allArticles: Article[];
}

const NewsletterArticleContent = ({ article, allArticles }: NewsletterArticleContentProps) => {
  const { navigateTo } = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [hasCheckedAutoAccess, setHasCheckedAutoAccess] = useState(false);

  const checkAutoAccess = useCallback(async () => {
    // Éviter les exécutions multiples
    if (hasCheckedAutoAccess) {
      return;
    }
    
    setHasCheckedAutoAccess(true);
    
    try {
      const savedEmail = getUserEmail();
      
      if (savedEmail) {
        const hasAccess = await checkAccess({ 
          email: savedEmail, 
          articleId: article.id.toString() 
        });
        
        if (hasAccess) {
          setIsUnlocked(true);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la vérification automatique:', error);
    }
  }, [article.id, hasCheckedAutoAccess]);

  useEffect(() => {
    if (!article) {
      navigateTo('/newsletters');
      return;
    }

    // Vérifier automatiquement l'accès si c'est un article premium
    if (article.isPremium) {
      checkAutoAccess();
    }
  }, [article, navigateTo, checkAutoAccess]);

  const confirmPayment = async (email: string) => {
    // 1. Stocker l'email dans les cookies
    setUserEmail(email);
    
    // 2. Vérifier si l'article a déjà été payé
    const hasAccess = await checkAccess({ email, articleId: article.id.toString() });
  
    if (hasAccess) {
      setShowPaywall(false);
      setIsUnlocked(true);
      return;
    }
    // 3. Sinon → créer une session Stripe
    const sessionUrl = await createCheckoutSession({ email, articleId: article.id.toString(), slug: article.slug });
  
    if (sessionUrl) {
      window.location.href = sessionUrl;
    }
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
              {article.isPremium && (
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
              <OtherArticles currentArticleSlug={article.slug} allArticles={allArticles} />
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