"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/useNavigate';
import { stats } from '@/constants/stats';
import AnimatedNumber from '../ui/animatedNumber';

const Hero = () => {
  const { navigateTo } = useNavigate();

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 transition-colors duration-1000 dark:bg-transparent bg-blue-50`}>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-accent-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pb-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 dark:border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-800 dark:text-white">Conseil Transformation Digitale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold pb-3 mb-6 leading-tight heading-gradient"
          >
            Transformez votre{' '}
            <span className="text-gradient">vision</span>
            <br />
            en logiciel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            KATECH aide votre DSI à apporter de la performance à vos fonctions supports grâce à des logiciels sur-mesure, conçus pour répondre à vos besoins métiers et atteindre vos objectifs opérationnels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => navigateTo('/prendre-rdv')}
              size="lg"
              className="btn-primary text-lg px-8 py-4 rounded-[12px] group pulse-animation"
            >
              Prendre RDV
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => window.open('https://www.propale.co', '_blank')}
              variant="outline"
              size="lg"
              className="btn-secondary text-lg px-8 py-4 rounded-[12px]"
            >
              Découvrez Propale
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-6 text-center"
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero;
