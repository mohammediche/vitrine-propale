import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from '@/types/strapi';
import NoCaseStudiesBanner from '../banner/NoCaseStudiesBanner';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
  serviceId: string;
}

const CaseStudyList = ({ caseStudies, serviceId }: CaseStudyListProps) => {
  
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        {caseStudies.length === 0 ? (
          <NoCaseStudiesBanner />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((item, index) => (
              <CaseStudyCard 
                key={item.id}
                item={item}
                index={index}
                serviceId={serviceId}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyList;