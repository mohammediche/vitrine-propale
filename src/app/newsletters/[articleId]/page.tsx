import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { fetchArticleBySlug, fetchArticles } from '@/lib/strapi/articles';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { formatDate } from '@/lib/utils';
import NewsletterArticleContent from '@/components/newsletters/NewsletterArticleContent';
import { Article } from '@/types/strapi';

interface NewsletterArticlePageProps {
  params: Promise<{ articleId: string }>;
}

export async function generateStaticParams() {
  const articles = await fetchArticles();

  return articles.map((article: Article) => ({
    articleId: article.slug,
  }));
}

export const revalidate = 3600;

const NewsletterArticlePage = async ({ params }: NewsletterArticlePageProps) => {
  const { articleId } = await params;

  try {
    const article = await fetchArticleBySlug(articleId);

    if (!article) {
      notFound();
    }

    const allArticles = await fetchArticles();

    return (
      <AnimatedWrapper>
        <section className="pt-32 pb-16 bg-gray-100 dark:bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <p className="text-blue-600 dark:text-accent-electric-blue font-semibold mb-4">
              {article.category?.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto heading-gradient">
              {article.title}
            </h1>
            <div className="flex justify-center items-center gap-4 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(article.createdAt)}</span>
              </div>
              <span>•</span>
              <span>Par {article.author?.name}</span>
            </div>
          </div>
        </section>

        <NewsletterArticleContent 
          article={article} 
          articleId={articleId} 
          allArticles={allArticles}
        />
      </AnimatedWrapper>
    );
  } catch (error) {
    console.error('Erreur lors du chargement de l\'article:', error);
    notFound();
  }
};

export default NewsletterArticlePage;