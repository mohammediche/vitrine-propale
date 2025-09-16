import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { fetchCaseStudyBySlug } from '@/lib/strapi/case-studies';
import CaseStudyContent from '@/components/case-studies/CaseStudyContent';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import ContactCTA from '@/components/banner/ContactCTA';
import { CaseStudy } from '@/types/strapi';

interface CaseStudyDetailPageProps {
  params: Promise<{ serviceId: string; caseId: string }>;
}

const CaseStudyDetailPage = async ({ params }: CaseStudyDetailPageProps) => {
  const { serviceId, caseId } = await params;
  
  // Vérifier que le service existe
  const service = servicesData[serviceId as keyof typeof servicesData];
  if (!service) {
    notFound();
  }

  // Récupérer le cas concret depuis Strapi
  const caseStudy: CaseStudy | null = await fetchCaseStudyBySlug(caseId);
  
  if (!caseStudy || caseStudy.serviceSlug !== serviceId) {
    notFound();
  }

  const { icon: Icon, name } = service;

  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent text-gray-900 dark:text-white">
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <Button asChild variant="ghost" className="dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white mb-8">
            <Link href={`/services/${serviceId}/case-studies`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux cas concrets
            </Link>
          </Button>
          
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-600 dark:text-accent-electric-blue" />
            </div>
            <div>
              <p className="font-semibold text-blue-600 dark:text-accent-electric-blue">{name}</p>
              <h1 className="text-4xl md:text-5xl font-bold heading-gradient">
                {caseStudy.title}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {caseStudy.description}
          </p>
        </div>
      </section>
      {/* Case Study Content */}
      <CaseStudyContent caseStudy={caseStudy} />
      
      <ContactCTA isInView={true} />
    </AnimatedWrapper>
  );
};

export default CaseStudyDetailPage;