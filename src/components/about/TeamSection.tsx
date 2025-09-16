"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { team } from '@/constants/about';
import { Briefcase } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Une équipe d’experts au service de votre succès</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600/50 h-full flex flex-col min-h-[280px]">
                {/* Nom et rôle */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-base font-medium">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {member.role}
                  </div>
                </div>

                {/* Bio avec icône de citation */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="relative">
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center italic">
                      {member.bio}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
