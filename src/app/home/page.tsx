"use client";
import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ExcellenceSection from '@/components/home/ExcellenceSection';
import Problems from '@/components/home/Problems';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <ExcellenceSection />
      <Problems />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomePage; 