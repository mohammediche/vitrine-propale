"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { rsePillars } from '@/constants/about';

const RseSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Notre Engagement RSE</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rsePillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-800"
            >
              <p.icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RseSection;
