"use client";
import React from 'react';
import { motion } from 'framer-motion';

const RecruitmentIntro = () => {
  return (
    <section className="pt-40 pb-24 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto heading-gradient"
        >
          Chez KATECH, nous ne nous contentons pas de viser les étoiles, nous construisons les fusées.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Si vous êtes un pionnier, un visionnaire et un expert passionné, votre place est parmi nous.
        </motion.p>
      </div>
    </section>
  );
};

export default RecruitmentIntro; 