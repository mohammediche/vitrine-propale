"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Building2, BookOpenCheck, Cpu, Bot, School, Megaphone } from 'lucide-react';
import ConsultationCTA from '../banner/ConsultationCTA';
import { useRouter } from 'next/navigation';

export const services = [{
    id: 'structuration-jeune-entreprise',
    icon: Building2,
    title: "Structuration & Jeune entreprise",
    description: "Accompagnement de la création à la croissance.",
    color: "from-blue-400 to-cyan-500"
  }, {
    id: 'conseil-audit',
    icon: BookOpenCheck,
    title: "Conseil & Audit",
    description: "Analyses stratégiques pour optimiser vos performances.",
    color: "from-green-400 to-emerald-500"
  }, {
    id: 'services-informatiques',
    icon: Cpu,
    title: "Services Informatiques",
    description: "Solutions IT sur-mesure pour votre transformation.",
    color: "from-red-400 to-orange-500"
  }, {
    id: 'robot-intelligent',
    icon: Bot,
    title: "Robot Intelligent",
    description: "Automatisation et IA pour booster votre efficacité.",
    color: "from-indigo-400 to-blue-500"
  }, {
    id: 'formation',
    icon: School,
    title: "Formation",
    description: "Montée en compétence de vos équipes.",
    color: "from-yellow-400 to-amber-500"
  }, {
    id: 'marketing-communication',
    icon: Megaphone,
    title: "Marketing & Communication",
    description: "Stratégies pour accroître votre visibilité.",
    color: "from-pink-400 to-rose-500"
  }];

const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const router = useRouter();

  const handleConsultationClick = () => {
    router.push('/');
  };
  return <section ref={ref} className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Nos 6 pôles d&apos;expertise
        </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une expertise complète et diversifiée pour répondre à tous vos besoins stratégiques et opérationnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.id} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} className="h-full">
              <Link href={`/services/${service.id}`} className="block h-full">
                <motion.div whileHover={{
              y: -10,
              rotateY: 5,
              scale: 1.02
            }} className="relative group cursor-pointer h-full">
                  <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                    <div className="relative flex-grow">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-accent-electric-blue transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      <motion.div className="absolute top-0 right-0 w-8 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{
                    scale: 1.2
                  }}>
                        <div className="w-full h-full flex items-center justify-center text-white text-sm">→</div>
                      </motion.div>
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>)}
        </div>
        <ConsultationCTA handleConsultationClick={handleConsultationClick} isInView={isInView}/>

      </div>
    </section>;
};
export default Services;
