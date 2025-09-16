"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const NoCaseStudiesBanner = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
        <Briefcase className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Aucun cas concret disponible
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Nous travaillons actuellement sur de nouveaux cas concrets pour ce service. 
        Revenez bientôt pour découvrir nos réalisations.
      </p>
      
      <Button 
        onClick={() => router.back()}
        variant="outline" 
        className="btn-secondary group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Retour
      </Button>
    </motion.div>
  );
};

export default NoCaseStudiesBanner;