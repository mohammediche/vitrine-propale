import React from 'react';
import { motion } from 'framer-motion';
import { values } from '@/constants/about';

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Les principes qui guident chacune de nos actions</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-md text-center"
            >
              <v.icon className="w-12 h-12 text-blue-500 dark:text-accent-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{v.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
