"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/useNavigate';

const ContactIntro = () => {
  const { navigateTo } = useNavigate();

  return (
    <section className="pt-40 pb-24 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto heading-gradient"
        >
          Prendre RDV | Audit Gratuit & Conseil Entrepreneurial
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={() => navigateTo('/')} 
            size="lg" 
            className="bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold text-lg"
          >
            Audit gratuit immédiat
          </Button>
          <Button 
            onClick={() => navigateTo('/prendre-rdv')} 
            size="lg" 
            variant="outline" 
            className="font-bold text-lg border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Planifier un RDV
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactIntro; 