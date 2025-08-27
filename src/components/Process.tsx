"use client";
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { steps } from '@/constants/processSteps';

const Process = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const timelineGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['linear-gradient(to bottom, #334155 100%, #00C2FF 0%)', 'linear-gradient(to bottom, #334155 50%, #00C2FF 50%)', 'linear-gradient(to bottom, #334155 0%, #00C2FF 100%)']
  );

  return (
    <section ref={ref} id="process" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Notre processus
          </h2>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <motion.div 
            style={{ background: timelineGradient }}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full hidden md:block" 
          />
          
          <div className="hidden md:block space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2 p-4">
                  <div className={`bg-white dark:bg-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 text-left ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="text-6xl font-black text-blue-500 dark:text-accent-electric-blue mb-2">0{index + 1}</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                    <div className="mt-4 text-green-500 dark:text-green-400 font-semibold flex items-center gap-2">
                       Bénéfice pour le client : {step.advantage} <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400 fill-green-100 dark:fill-green-900/50" />
                    </div>
                  </div>
                </div>
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
          
           {/* Mobile Timeline */}
           <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }
                }}
                className="bg-white dark:bg-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 text-center"
              >
                 <div className="text-6xl font-black text-blue-500 dark:text-accent-electric-blue mb-2">0{index + 1}</div>
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{step.title}</h3>
                 <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto mb-4">{step.description}</p>
                 <div className="mt-4 text-green-500 dark:text-green-400 font-semibold flex items-center justify-center gap-2">
                    Bénéfice pour le client : {step.advantage} <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400 fill-green-100 dark:fill-green-900/50" />
                  </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;