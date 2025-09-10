"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, ArrowLeft } from 'lucide-react';
import AnimatedBlueBackground from '@/components/ui/animatedBlueBackground';
import RobotTestimonials from '@/components/robot/RobotTestimonials';
import AnatomyOfARobot from '@/components/robot/AnatomyOfARobot';
import RobotContactForm from '@/components/robot/RobotContactForm';
import Link from 'next/link';
import { useNavigate } from '@/hooks/useNavigate';
import { 
  servicesIA, 
  processSteps, 
  missionVisionValues, 
  sectionVariants 
} from '@/constants/robot';

const RobotIAPage = () => {
  const { navigateTo } = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#1a027d] text-gray-200 relative"
    >    
      <AnimatedBlueBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Bot className="w-20 h-20 mx-auto mb-6 text-[var(--accent-gold)]" />
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                Pôle <span className="text-[var(--accent-gold)]">Robot Intelligent</span> & IA
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Nous concevons le futur de votre entreprise en intégrant l&apos;intelligence artificielle au cœur de votre stratégie.
              </p>
              <Button 
                asChild
                size="lg" 
                className="mt-10 bg-[var(--accent-gold)] text-black font-bold hover:bg-[var(--accent-gold)]/90 group"
              >
                <a href="#servicesSection">
                  Découvrez nos solutions IA <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission / Vision / Valeur */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20"
        >
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            {missionVisionValues.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <item.icon className="w-12 h-12 text-[var(--accent-gold)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services IA */}
        <motion.section
          id="servicesSection"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-black/20"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">Nos Services d&apos;Intelligence Artificielle</h2>
              <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Des solutions sur-mesure pour chaque défi de votre entreprise.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {servicesIA.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-gray-800/60 p-8 rounded-2xl border border-[var(--accent-gold)]/20 hover:border-[var(--accent-gold)]/50 hover:bg-gray-800 transition-all duration-300 flex items-start gap-6"
                >
                  <div className="flex-shrink-0 bg-[var(--accent-gold)]/10 p-3 rounded-lg">
                    <service.icon className="w-8 h-8 text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Processus de développement */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">Notre Processus de Développement</h2>
              <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Une méthodologie agile et collaborative pour des résultats rapides et tangibles.</p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-gold)]/20 via-[var(--accent-gold)]/50 to-[var(--accent-gold)]/20 hidden md:block -translate-x-1/2"></div>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-full md:w-5/12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-2">{`Étape ${index + 1}: ${step.name}`}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  <div className="hidden md:flex w-2/12 items-center justify-center">
                    <div className="w-6 h-6 bg-[var(--accent-gold)] rounded-full shadow-lg ring-4 ring-[var(--accent-gold)]/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA après Processus */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="py-20 bg-black/20"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Prêt à intégrer l&apos;IA dans votre stratégie ?</h2>
            <p className="text-lg text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">Discutons de la manière dont nos solutions peuvent transformer votre entreprise et vous donner un avantage concurrentiel décisif.</p>
            <Button 
              size="lg" 
              className="bg-[var(--accent-gold)] text-black font-bold hover:bg-[var(--accent-gold)]/90 group"
              onClick={() => navigateTo('/prendre-rdv')}
            >
              Planifier un audit stratégique <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.section>

        {/* Témoignages */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20"
        >
          <div className="container mx-auto px-6">
            <RobotTestimonials />
          </div>
        </motion.section>

        <AnatomyOfARobot />

        {/* CTA & Formulaire */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-black/20 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <RobotContactForm />
            </div>
          </div>
        </motion.section>

        {/* Bouton de retour */}
        <div className="py-12 text-center">
          <Button asChild variant="outline" className="bg-white text-[#1a027d] border-2 border-[var(--accent-gold)] font-bold hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300">
            <Link href="/home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotIAPage;