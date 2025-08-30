"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { otherArticles } from '@/data/newsletters';

interface OtherArticlesProps {
  currentArticleId: string;
}

const OtherArticles: React.FC<OtherArticlesProps> = ({ currentArticleId }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Autres articles</h3>
      <ul className="space-y-4">
        {otherArticles.filter(a => a.id !== currentArticleId).map(item => (
          <li key={item.id}>
            <Link href={`/newsletters/${item.id}`} className="group flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-500 dark:text-accent-electric-blue mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-accent-electric-blue group-hover:underline transition-colors">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherArticles; 