"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/useNavigate';
import { useTheme } from '@/contexts/ThemeContext';

const ContactMap = () => {
  const { navigateTo } = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="h-96 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.2924,48.8711,2.3024,48.8751&layer=mapnik&marker=48.8731,2.2974"
            style={{ border: 0, filter: theme === 'dark' ? 'invert(90%)' : 'none' }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4 heading-gradient">Nos bureaux parisiens</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Venez nous rencontrer dans un cadre exceptionnel pour discuter de vos ambitions. Notre porte est toujours ouverte aux entrepreneurs visionnaires.
          </p>
          <p className="font-semibold mb-4 dark:text-white">
            123 Avenue des Champs-Élysées, 75008 Paris
          </p>
          <Button 
            onClick={() => navigateTo('prendre-rdv')} 
            size="lg" 
            className="bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold"
          >
            Prendre RDV
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap; 