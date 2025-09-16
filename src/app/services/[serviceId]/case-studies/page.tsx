import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import CaseStudyList from '@/components/case-studies/CaseStudyList';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { fetchAllCaseStudies } from '@/lib/strapi/case-studies';
import { CaseStudy } from '@/types/strapi';

interface CaseStudiesPageProps {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  // Récupérer tous les services depuis servicesData
  const serviceIds = Object.keys(servicesData);
  
  return serviceIds.map((serviceId) => ({
    serviceId,
  }));
}

export const revalidate = 3600;

const CaseStudiesPage = async ({ params }: CaseStudiesPageProps) => {
  const { serviceId } = await params;
  
  // Vérifier que le service existe
  const service = servicesData[serviceId as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const { icon: Icon, name } = service;

  // Charger tous les cas d'études et filtrer par service
  const allCaseStudies: CaseStudy[] = await fetchAllCaseStudies();
  const caseStudies = allCaseStudies.filter(
    (caseStudy: CaseStudy) => caseStudy.serviceSlug === serviceId
  );

  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent text-gray-900 dark:text-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <Button asChild variant="ghost" className="dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white mb-8">
            <Link href={`/services/${serviceId}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au service
            </Link>
          </Button>
          
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-600 dark:text-accent-electric-blue" />
            </div>
            <div>
              <p className="font-semibold text-blue-600 dark:text-accent-electric-blue">{name}</p>
              <h1 className="text-4xl md:text-5xl font-bold heading-gradient">
                Nos Cas Concrets
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Plongez dans nos réalisations et découvrez comment nous avons aidé nos clients à surmonter leurs défis et à atteindre leurs objectifs.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <CaseStudyList caseStudies={caseStudies} serviceId={serviceId} />
    </AnimatedWrapper>
  );
};

export default CaseStudiesPage;