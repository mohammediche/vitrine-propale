import React from 'react';
import NewsletterCard from './NewsletterCard';
import { fetchArticles } from '@/lib/strapi/strapi';
import { Article } from '@/types/strapi';

const NewsletterList = async () => {
  const articles: Article[] = await fetchArticles();  
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
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