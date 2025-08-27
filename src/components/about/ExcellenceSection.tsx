"use client";
import React,{ useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export const excellenceItems = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Accompagner les entrepreneurs visionnaires dans leur transformation digitale et leur croissance stratégique.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Créer un écosystème d'innovation où chaque entrepreneur peut réaliser son plein potentiel.",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/50"
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      description: "Excellence, intégrité et innovation guident chacune de nos actions et décisions stratégiques.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/50"
    }
  ];

const ExcellenceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section ref={ref} id="about" className="py-20 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            L&apos;excellence au service de votre vision
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de notre engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excellenceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-8 bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.bgColor} mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
