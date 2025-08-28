import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '@/constants/about';

const TimelineSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Nos Grandes Étapes</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center md:justify-start mb-8"
            >
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-lg shadow-md"
                >
                  <p className="text-blue-600 dark:text-accent-electric-blue font-bold text-xl mb-1">{item.year}</p>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.event}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-accent-electric-blue rounded-full z-10 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
