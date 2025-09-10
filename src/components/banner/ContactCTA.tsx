"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/useNavigate';
import { Check, ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  isInView: boolean;
}

const ContactCTA = ({ isInView }: ContactCTAProps) => {
  const { navigateTo } = useNavigate();

  return (
    <section className="relative py-20 text-white overflow-hidden bg-gradient-to-r from-dark-blue-tailwind to-accent-blue-tailwind">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Prêt à conquérir votre futur ?
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Rejoignez les entrepreneurs visionnaires qui ont choisi KATECH pour transformer leurs rêves en réalité.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => navigateTo('/prendre-rdv')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-200 text-lg px-8 py-4 rounded-[12px] group"
            >
              Audit gratuit
              <Check className="ml-2 w-5 h-5 transition-transform" />
            </Button>
            
            <Button
              onClick={() => navigateTo('/prendre-rdv')}
              size="lg"
              className="bg-black/20 text-white border border-white/50 hover:bg-black/40 text-lg px-8 py-4 rounded-[12px] group"
            >
              Prendre RDV
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 