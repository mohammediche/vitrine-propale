"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const NoJobsBanner = () => {
  return (
    <AnimatedWrapper className="text-center py-16">
      <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-12">
        <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
          Aucune offre disponible pour le moment
        </h3>
        <p className="text-gray-500 dark:text-gray-500 mb-6">
          Nous n&apos;avons actuellement aucune offre d&apos;emploi ouverte, mais n&apos;hésitez pas à nous envoyer votre candidature spontanée !
        </p>
        <Button asChild variant="outline" className="text-blue-600 dark:text-accent-electric-blue border-blue-600 dark:border-accent-electric-blue hover:bg-blue-50 dark:hover:bg-blue-900/20">
          <Link href="/recrutement/orientation">
            Candidature spontanée
          </Link>
        </Button>
      </div>
    </AnimatedWrapper>
  );
};

export default NoJobsBanner;