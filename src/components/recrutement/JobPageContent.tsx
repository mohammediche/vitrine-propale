"use client";
import React from 'react';
import JobApplicationForm from '@/components/recrutement/JobApplicationForm';
import { Job } from '@/types/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

interface JobPageContentProps {
  job: Job;
}

const JobPageContent = ({ job }: JobPageContentProps) => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <AnimatedWrapper 
            delay={0.1}
            className="prose prose-lg max-w-none dark:prose-invert leading-loose [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:my-4 [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h4]:font-semibold [&_h4]:mb-3 [&_h4]:text-gray-800 [&_h4]:dark:text-gray-100 [&_ul]:list-disc [&_ul]:ml-6 [&_li]:list-item [&_p]:leading-loose [&_li]:leading-loose"
          >
            <BlocksRenderer content={job.content} />
          </AnimatedWrapper>
        </div>

        <aside className="lg:sticky top-24 h-fit">
          <AnimatedWrapper 
            delay={0.5}
            className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-center mb-6 heading-gradient">Postulez pour ce poste</h3>
            <JobApplicationForm context="specific-job" />
          </AnimatedWrapper>
        </aside>
      </div>
    </div>
  );
};

export default JobPageContent;