"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto heading-gradient"
        >
          Notre Vision, Votre Succès
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Depuis 2009, KATECH se consacre à transformer les idées audacieuses en entreprises leaders sur leur marché. Nous sommes plus que des investisseurs ; nous sommes des partenaires de croissance, engagés à vos côtés à chaque étape de votre développement.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutIntro;
