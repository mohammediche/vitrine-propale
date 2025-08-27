"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { servicesData } from '@/data/ServicesData';
import ContactCTA from '@/components/banner/ContactCTA';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CaseStudyDetailPageProps {
  params: Promise<{serviceId: string,   caseId: string;}>;
}

const CaseStudyDetailPage = ({ params }: CaseStudyDetailPageProps) => {
  const { serviceId, caseId } = React.use(params);
  const service = servicesData[serviceId as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const caseStudy = service.cases.find(c => c.slug === caseId);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/services/${serviceId}/case-studies`}>
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux cas concrets
              </Button>
            </Link>
            <p className="font-semibold text-blue-600 dark:text-accent-electric-blue mb-2">{service.name}</p>
            <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div 
            className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p>{caseStudy.content}</p>
          </motion.div>
        </div>
      </section>
      
      <ContactCTA isInView={true} />
    </motion.div>
  );
};

export default CaseStudyDetailPage;