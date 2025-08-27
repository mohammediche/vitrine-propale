"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, TrendingDown, Clock, DollarSign, Users } from 'lucide-react';


export const problemsItems = [
  {
    icon: TrendingDown,
    title: "Croissance stagnante",
    description: "Votre entreprise plafonne et vous ne savez pas comment franchir le cap suivant ?",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/50",
    link: "/services/conseil-audit"
  },
  {
    icon: DollarSign,
    title: "Difficultés de financement",
    description: "Vous peinez à lever des fonds ou à convaincre les investisseurs ?",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/50",
    link: "/services/structuration-jeune-entreprise"
  },
  {
    icon: Clock,
    title: "Manque de temps",
    description: "Vous êtes débordé et n'arrivez pas à vous concentrer sur la stratégie ?",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/50",
    link: "/services/robot-intelligent"
  },
  {
    icon: Users,
    title: "Équipe insuffisante",
    description: "Vous manquez d'expertise dans certains domaines clés ?",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/50",
    link: "/services/formation"
  },
  {
    icon: AlertTriangle,
    title: "Problèmes Informatiques",
    description: "Votre infrastructure IT freine votre productivité ?",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/50",
    link: "/services/services-informatiques"
  }
]; 

const Problems = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  

  return (
    <section ref={ref} id="problems" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Nous comprenons vos défis ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Chaque entrepreneur fait face à des obstacles. Notre mission est de les transformer en opportunités.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsItems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={problem.link} className="block h-full">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${problem.bgColor} mb-6`}>
                      <problem.icon className={`w-8 h-8 ${problem.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                  <div className="text-blue-600 dark:text-accent-electric-blue font-semibold mt-6 flex items-center group">
                    Découvrir la solution
                    <motion.span className="ml-2 transition-transform group-hover:translate-x-2">
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
