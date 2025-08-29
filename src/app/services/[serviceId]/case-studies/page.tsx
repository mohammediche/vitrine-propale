"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import ContactCTA from '@/components/banner/ContactCTA';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CaseStudiesListPageProps {
  params: Promise<{serviceId: string}>;
}

const CaseStudiesListPage = ({ params }: CaseStudiesListPageProps) => {
  const { serviceId } = React.use(params);
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/services/${serviceId}`}>
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au service
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-accent-electric-blue" />
              </div>
              <div>
                <p className="text-blue-600 dark:text-accent-electric-blue font-semibold">{service.name}</p>
                <h1 className="text-4xl md:text-5xl font-bold heading-gradient">
                  Nos Cas Concrets
                </h1>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Plongez dans nos réalisations et découvrez comment nous avons aidé nos clients à surmonter leurs défis et à atteindre leurs objectifs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {service.cases.map((caseStudy) => (
              <motion.div key={caseStudy.slug} variants={itemVariants}>
                <Link href={`/services/${serviceId}/case-studies/${caseStudy.slug}`} className="block h-full">
                  <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{caseStudy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">{caseStudy.description}</p>
                    <div className="mt-6">
                      <span className="font-semibold text-blue-600 dark:text-amber-400 flex items-center">
                        Voir le détail <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA isInView={true} />
    </motion.div>
  );
};

export default CaseStudiesListPage;