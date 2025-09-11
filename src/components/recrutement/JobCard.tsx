"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Job } from '@/types/strapi';

interface JobCardProps {
  item: Job;
  index: number;
}

const JobCard = ({ item, index }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="flex"
    >
      <Link href={`/recrutement/${item.slug}`} prefetch={true} className="w-full" aria-label={`Postuler pour ${item.title}`}>
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group relative">
          <div className="p-8 flex-grow">
            <div className="flex justify-between items-center mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                {item.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-accent-electric-blue transition-colors">
              {item.title}
            </h3>
            
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                <span className="text-sm">{item.location}</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 pt-0">
            <Button 
              variant="link" 
              className="text-blue-600 dark:text-accent-electric-blue font-bold p-0 group-hover:underline"
            >
              Postuler 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default JobCard;