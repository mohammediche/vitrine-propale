"use client";
import React from 'react';
import { motion } from 'framer-motion';
import JobApplicationForm from './JobApplicationForm';

const SpontaneousApplication = () => {
  return (
    <section id="candidature-spontanee" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900/50 rounded-3xl shadow-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2 heading-gradient">Candidature Spontanée</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Aucune offre ne vous correspond ? Surprenez-nous. Montrez-nous comment vous pouvez faire la différence.
            </p>
            
            <JobApplicationForm
              context="spontaneous"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpontaneousApplication;