"use client";
import { motion } from 'framer-motion';
import NewsletterIntro from '@/components/newsletters/NewsletterIntro';
import NewsletterList from '@/components/newsletters/NewsletterList';

const NewsletterListPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NewsletterIntro />
      <NewsletterList />
    </motion.div>
  );
};

export default NewsletterListPage;
