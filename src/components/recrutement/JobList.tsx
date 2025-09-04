import React from 'react';
import JobCard from './JobCard';
import { fetchJobs } from '@/lib/strapi/jobs';
import { Job } from '@/types/strapi';
import NoJobsBanner from '@/components/banner/NoJobsBanner';

const JobList = async () => {
  const jobs: Job[] = await fetchJobs();
  
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        {jobs.length === 0 ? (
          <NoJobsBanner />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((item, index) => (
              <JobCard 
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;