"use client";
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jobOpenings } from '@/data/jobs';
import Link from 'next/link';

const JobOpenings = () => {
  return (
    <section id="offres" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">Nos opportunités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-3 py-1 rounded-full">{job.contract}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{job.location}</span>
                </div>
              </div>
              <Button asChild variant="link" className="mt-6 text-blue-600 dark:text-accent-electric-blue font-bold p-0 group self-start">
                <Link href={`/recrutement/${job.id}`}>
                  Postuler <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings; 