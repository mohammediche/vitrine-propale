"use client";
import React from 'react';
import { CaseStudy } from '@/types/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyContent = ({ caseStudy }: CaseStudyContentProps) => {    
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedWrapper 
          delay={0.1}
          className="prose prose-lg max-w-none dark:prose-invert leading-loose [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:my-4 [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h4]:font-semibold [&_h4]:mb-3 [&_h4]:text-gray-800 [&_h4]:dark:text-gray-100 [&_ul]:list-disc [&_ul]:ml-6 [&_li]:list-item [&_p]:leading-loose [&_li]:leading-loose"
        >
          <BlocksRenderer content={caseStudy.content} />
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default CaseStudyContent;