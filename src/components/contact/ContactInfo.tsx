"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 heading-gradient">Nos coordonnées</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Notre équipe est disponible pour répondre à toutes vos questions. Nos bureaux sont situés au cœur de Paris.
      </p>
      <div className="space-y-4 dark:text-gray-200">
        <p className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-blue-500 dark:text-accent-electric-blue" /> 
          <a href="mailto:contact@katech.fr" className="hover:underline">contact@katech.fr</a>
        </p>
        <p className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-blue-500 dark:text-accent-electric-blue" /> 
          <a href="tel:+33652500927" className="hover:underline">+33 6 52 50 09 27</a>
        </p>
        <p className="flex items-center">
          <MapPin className="w-5 h-5 mr-3 text-blue-500 dark:text-accent-electric-blue" />
          203 Rue Michel Carré 95870 Bezons
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Horaires : Lundi - Vendredi, 9h00 - 18h00
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo; 