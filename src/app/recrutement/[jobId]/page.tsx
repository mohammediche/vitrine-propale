"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobApplicationForm from '@/components/recrutement/JobApplicationForm';
import { jobOpenings } from '@/data/jobs';
import { notFound } from 'next/navigation';

interface JobPageProps {
  params: Promise<{ jobId: string }>;
}

const JobPage = ({ params }: JobPageProps) => {
  const resolvedParams = React.use(params);
  const { jobId } = resolvedParams;
  
  // Récupérer les données du job
  const job = jobOpenings.find(job => job.id === jobId);
  
  // Si le job n'existe pas, afficher la page 404
  if (!job) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-transparent text-gray-900 dark:text-white"
    >
      <div className="pt-32 pb-16 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Button asChild variant="ghost" className="dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
              <Link href="/recrutement">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux offres
              </Link>
            </Button>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">{job.title}</motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center"><Briefcase className="w-5 h-5 mr-2 text-blue-500 dark:text-accent-electric-blue" /> {job.contract}</div>
            <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500 dark:text-accent-electric-blue" /> {job.location}</div>
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">{job.introduction}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-6 heading-gradient">Missions principales</h2>
              <ul className="space-y-3 mb-12">
                {job.missions.map((mission, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{mission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-bold mb-6 heading-gradient">Profil recherché</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Compétences techniques</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {job.profile.technical.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Soft skills</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {job.profile.soft.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-6 heading-gradient">Ce que nous offrons</h2>
              <ul className="space-y-3">
                {job.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 dark:text-accent-electric-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{adv}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <aside className="lg:sticky top-24 h-fit">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-center mb-6 heading-gradient">Postulez pour ce poste</h3>
              <JobApplicationForm
                context="specific-job"
              />
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default JobPage;