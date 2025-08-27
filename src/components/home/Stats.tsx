"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, TrendingUp, Award, Globe } from 'lucide-react';
import AnimatedNumber from '../ui/animatedNumber';


const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const stats = [
    { value: 150, suffix: '+', title: 'Entreprises financées', text: 'Projets accompagnés vers le succès', icon: Briefcase },
    { value: 50, suffix: 'M€+', title: 'Fonds levés', text: 'Capital mobilisé pour nos clients', icon: TrendingUp },
    { value: 15, suffix: '', title: "Années d'expérience", text: 'Expertise éprouvée sur le marché', icon: Award },
    { value: 25, suffix: '+', title: 'Pays', text: 'Présence internationale', icon: Globe }
  ];

  return (
    <section ref={ref} id="stats" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            L&apos;excellence en chiffres
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de notre engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-md text-center"
            >
              <stat.icon className="w-12 h-12 text-blue-500 dark:text-accent-electric-blue mx-auto mb-4" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} className='text-5xl font-bold text-blue-600 dark:text-accent-electric-blue mb-2'/>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{stat.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
