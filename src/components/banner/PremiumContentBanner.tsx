"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

interface PremiumContentBannerProps {
  onUnlockClick: () => void;
}

const PremiumContentBanner: React.FC<PremiumContentBannerProps> = ({ onUnlockClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-8 text-center p-8 border-2 border-dashed border-blue-200 dark:border-blue-900 rounded-2xl bg-blue-50 dark:bg-blue-900/20"
    >
      <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">...</p>
      <h3 className="text-2xl font-bold my-4 text-gray-900 dark:text-white">Le meilleur reste à venir.</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Débloquez l&apos;intégralité de cet article et accédez à nos analyses complètes.</p>
      <Button onClick={onUnlockClick} size="lg" className="bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold group">
        Voir plus <Lock className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
};

export default PremiumContentBanner; 