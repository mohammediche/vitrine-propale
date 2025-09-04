"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { Article } from '@/types/strapi';
import { formatDate } from '@/lib/utils';

interface NewsletterCardProps {
  item: Article;
  index: number;
}

const NewsletterCard = ({ item, index }: NewsletterCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="flex"
    >
      <Link href={`/newsletters/${item.slug}`} className="w-full">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group relative">
          {item.isPaid && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star size={12} />
              <span>Premium</span>
            </div>
          )}
          
          <div className="p-8 flex-grow">
            <div className="flex justify-between items-center mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800`}>
                {item.category?.name}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} />
                {/* <span>{item.date}</span> */}
                <span>{formatDate(item.createdAt)}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-accent-electric-blue transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.excerpt}
                </p>
          </div>
          
          <div className="p-8 pt-0">
            <Button 
              variant="link" 
              className="text-blue-600 dark:text-accent-electric-blue font-bold p-0 group-hover:underline"
            >
              Lire l&apos;article 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsletterCard; 