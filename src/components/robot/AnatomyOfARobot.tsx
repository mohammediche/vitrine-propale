"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  weightingMatrixHeaders, 
  weightingMatrixRows 
} from '@/constants/robot';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const AnimatedConnector = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const particles = Array.from({ length: 20 });

  return (
    <div ref={ref} className="hidden md:flex items-center justify-center w-full h-16 relative overflow-hidden">
      {/* Pulsing Line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent-light-blue), var(--accent-gold), transparent)',
          boxShadow: '0 0 8px var(--accent-light-blue), 0 0 12px var(--accent-gold)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: [0, 1, 0] } : {}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      {/* Particles */}
      {particles.map((_, i) => {
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 2.5;
        const yOffset = (Math.random() - 0.5) * 10;
        const size = Math.random() * 2 + 1;
        const color = Math.random() > 0.5 ? 'var(--accent-light-blue)' : 'white';

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 rounded-full"
            style={{
              left: '-5px',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              y: yOffset,
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { 
                opacity: [0, 0.8, 0],
                x: '100vw' 
              } : {}}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
};

const WeightingMatrix = () => {
  return (
    <motion.div variants={itemVariants} className="w-full overflow-x-auto">
      <div className="bg-gray-800/50 border border-[var(--accent-gold)]/20 rounded-2xl p-1 md:p-2 min-w-[700px] md:min-w-full">
        <div className="grid grid-cols-5 gap-4 text-center font-bold text-[var(--accent-gold)] p-4 border-b border-[var(--accent-gold)]/20">
          {weightingMatrixHeaders.map(h => <div key={h}>{h}</div>)}
        </div>
        <div className="divide-y divide-[var(--accent-gold)]/10">
          {weightingMatrixRows.map((row, index) => (
            <div key={row.name} className={`grid grid-cols-5 gap-4 p-4 text-center items-center text-sm md:text-base ${index % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
              <div className="font-semibold text-left text-white">{row.name}</div>
              <div className="font-bold text-lg text-[var(--accent-gold)]">{row.weight}</div>
              <div className="text-white">{row.score}</div>
              <div className={`${row.impact.startsWith('+') ? 'text-green-400' : row.impact.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                {row.impact}
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  row.priority === "Élevée" ? "bg-green-500/20 text-green-300" : 
                  row.priority === "Moyenne" ? "bg-yellow-500/20 text-yellow-300" : 
                  "bg-red-500/20 text-red-300"
                }`}>
                  {row.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AnatomyOfARobot = () => {
  return (
    <motion.section 
      variants={sectionVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{
        once: true,
        amount: 0.1
      }} 
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Anatomie de nos robots</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Un aperçu du processus décisionnel de nos intelligences artificielles.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-4 gap-y-16 items-center">
          <motion.div variants={sectionVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--accent-gold)] text-center">Entonnoir de traitement</h3>
            <div className="flex justify-center">
              <Image 
                src="/illustration1.svg" 
                alt="Entonnoir de traitement" 
                width={500} 
                height={400}
                className="max-w-full h-auto scale-110"
              />
            </div>
          </motion.div>

          <div className="relative w-full md:w-24 h-full">
            <AnimatedConnector />
          </div>

          <motion.div variants={sectionVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--accent-gold)] text-center">Modules Connectés</h3>
            <div className="flex justify-center">
              <Image 
                src="/Illustration2.svg" 
                alt="Modules Connectés" 
                width={500} 
                height={400}
                className="max-w-full h-auto scale-110"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={sectionVariants} className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-8">Matrice de pondération</h3>
          <WeightingMatrix />
          <motion.p variants={itemVariants} className="mt-8 max-w-2xl mx-auto text-gray-300">
            Chaque décision est le fruit d&apos;une analyse multicritères complexe, où des centaines de variables sont pondérées en temps réel pour garantir le choix le plus optimal, aligné sur vos objectifs stratégiques.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AnatomyOfARobot;
