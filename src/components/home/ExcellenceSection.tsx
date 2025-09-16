"use client";
import React,{ useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export const excellenceItems = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Développer des outils structurants qui stimule la création de la valeur en combinant avec cohérence l’expertise humaine et la technologie.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Concevoir et déployer des solutions informatiques qui résolvent les frictions de vos processus et renforcent la performance de votre organisation.",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/50"
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      description: "Délivrer des logiciels qui s’intègrent parfaitement à votre SI pour simplifier vos opérations quotidiennes et offrir un ROI mesurable.",
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
          <h2 className="text-4xl md:text-5xl font-bold pb-2 mb-6 heading-gradient">
            L&apos;innovation au service de vos processus 
          </h2>
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
