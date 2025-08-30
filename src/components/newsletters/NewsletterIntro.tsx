"use client";
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterIntro = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 heading-gradient"
        >
          Nos Newsletters
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Plongez au cœur des tendances qui façonnent l&apos;avenir de l&apos;entrepreneuriat et de l&apos;investissement.
        </motion.p>
      </div>
    </section>
  );
};

export default NewsletterIntro; 