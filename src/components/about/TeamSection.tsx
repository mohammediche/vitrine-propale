import React from 'react';
import { motion } from 'framer-motion';
import { team } from '@/constants/about';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-transparent">
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
              className="text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={32}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-accent-electric-blue mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
