"use client";
import React from 'react';
import { motion} from 'framer-motion';

interface ConsultationCTAProps {
  handleConsultationClick: () => void;
  isInView: boolean;
}

const ConsultationCTA = ({ handleConsultationClick, isInView }: ConsultationCTAProps) => {

  return (
    <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Une approche sur-mesure pour chaque défi
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nos experts analysent votre situation unique et créent une stratégie personnalisée pour maximiser votre potentiel.
            </p>
            <motion.button onClick={handleConsultationClick} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Planifier une consultation
            </motion.button>
          </div>
        </motion.div>
  )
}

export default ConsultationCTA