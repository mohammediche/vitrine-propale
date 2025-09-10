"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContactCTA from '@/components/banner/ContactCTA';

interface ServicePageProps {
  params: Promise<{serviceId: string}>;
  
}

const ServicePage = ({ params }: ServicePageProps) => {
  const { serviceId } = React.use(params);

  // Récupérer les données du service
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const { icon: Icon, name, tagline, whyUs, testimonial, cases } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-8"
          >
            <Icon className="w-12 h-12 text-blue-600 dark:text-accent-electric-blue" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 heading-gradient"
          >
            {name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {tagline}
          </motion.p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">{whyUs.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{whyUs.description}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {whyUs.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200">{advantage}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           >
              <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-2xl italic text-gray-700 dark:text-gray-200 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
           </motion.div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Cas concrets</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Découvrez quelques-uns de nos projets emblématiques.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {cases.slice(0, 2).map((c, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <Link href={`/services/${serviceId}/case-studies/${c.slug}`} className="block h-full">
                            <motion.div 
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                            >
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{c.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{c.description}</p>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-12">
                 <Button asChild size="lg" variant="outline" className="btn-secondary group">
                    <Link href={`/services/${serviceId}/case-studies`}>
                      Voir plus de cas concrets <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </Button>
            </div>
        </div>
      </section>

      <ContactCTA isInView={true} />
    </motion.div>
  );
};

export default ServicePage; 