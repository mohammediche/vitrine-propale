"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/useNavigate';


interface  SupportCTAProps{
    isInView: boolean;
}
  
const SupportCTA = ({isInView}: SupportCTAProps) => {
    const { navigateTo } = useNavigate();


  return (
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mt-16"
    >
      <div className="bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-blue-900/50 dark:to-yellow-900/50 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-4 heading-gradient">
          Vous ne trouvez pas la réponse à votre question ?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Notre équipe d&apos;experts est là pour répondre à toutes vos interrogations et vous accompagner dans votre réflexion.
        </p>
        <Button
           onClick={()=> navigateTo('/contact')}
          size="lg"
          className="btn-primary text-lg px-8 py-4 rounded-full"
        >
          Contactez nos experts
        </Button>
      </div>
    </motion.div>
  )
}

export default SupportCTA