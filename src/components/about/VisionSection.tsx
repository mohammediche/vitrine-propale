import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Une Vision Révolutionnaire</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Née en 2009 de la conviction que le capital seul ne suffit pas, KATECH a été fondée par des entrepreneurs pour des entrepreneurs. Forts de notre propre expérience du terrain, nous avons créé un modèle d&apos;accompagnement unique qui allie financement stratégique, expertise opérationnelle et un réseau international puissant pour propulser les startups vers le succès.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <Image
              src="/vision.webp"
              alt="Équipe professionnelle et dynamique collaborant dans un bureau moderne et lumineux"
              width={660}
              height={440}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
