"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Smile, LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Icon className="w-12 h-12 text-blue-500 dark:text-accent-electric-blue mx-auto mb-4" />
      <p className="text-4xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

const ImpactSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Au-delà des chiffres</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard icon={Users} value="2000+" label="emplois créés" />
          <StatCard icon={Globe} value="25+" label="pays" />
          <StatCard icon={Smile} value="95%" label="taux de succès" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
