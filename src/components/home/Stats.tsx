"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, TrendingUp, Award, Globe } from 'lucide-react';
import AnimatedNumber from '../ui/animatedNumber';


const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const stats = [
    { value: 54, suffix: '', title: 'Nombre de clients accompagnés', text: '', icon: Briefcase },
    { value: 67, suffix: '', title: 'Nombre de projet réussi', text: '', icon: TrendingUp },
    { value: 4, suffix: '', title: "SaaS en RUN", text: '', icon: Award },
    { value: -10, suffix: '%', title: 'Taux de turnover', text: '', icon: Globe }
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
          <h2 className="text-4xl md:text-5xl font-bold pb-2 mb-6 heading-gradient">
             Pilotage en chiffres 
          </h2>
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
              <stat.icon className="w-12 h-12 primary-blue mx-auto mb-4" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} className='text-5xl font-bold primary-blue mb-2'/>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{stat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
