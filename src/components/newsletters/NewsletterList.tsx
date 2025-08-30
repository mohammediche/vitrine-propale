"use client";
import React from 'react';
import { newslettersList } from '@/data/newsletters';
import NewsletterCard from './NewsletterCard';

const NewsletterList = () => {
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newslettersList.map((item, index) => (
            <NewsletterCard 
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterList; 