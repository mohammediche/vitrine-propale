import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchJobBySlug, fetchJobs } from '@/lib/strapi/jobs';
import { notFound } from 'next/navigation';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import JobPageContent from '@/components/recrutement/JobPageContent';
import { Job } from '@/types/strapi';

interface JobPageProps {
  params: Promise<{ jobId: string }>;
}

export async function generateStaticParams() {
  const jobs = await fetchJobs();

  return jobs.map((job: Job) => ({
    jobId: job.slug,
  }));
}

const JobPage = async ({ params }: JobPageProps) => {
  const { jobId } = await params;
  
  try {
    const job = await fetchJobBySlug(jobId);    
    
    if (!job) {
      notFound();
    }

    return (
      <AnimatedWrapper className="bg-white dark:bg-transparent text-gray-900 dark:text-white">
        <div className="pt-32 pb-16 bg-gray-50 dark:bg-transparent">
          <div className="container mx-auto px-6">
            <Button asChild variant="ghost" className="dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
              <Link href="/recrutement">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux offres
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">{job.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center"><Briefcase className="w-5 h-5 mr-2 text-blue-500 dark:text-accent-electric-blue" /> {job.category}</div>
              <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500 dark:text-accent-electric-blue" /> {job.location}</div>
            </div>
          </div>
        </div>

        <JobPageContent job={job} />
      </AnimatedWrapper>
    );
  } catch (error) {
    console.error('Erreur lors du chargement du job:', error);
    notFound();
  }
};

export default JobPage;