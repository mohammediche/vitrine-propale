"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/constants/contact';

const ContactServices = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">Nos services disponibles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full mx-auto flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-accent-electric-blue" />
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{service.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactServices; 