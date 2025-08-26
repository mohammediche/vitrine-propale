
import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
// import About from '@/components/About';
// import Stats from '@/components/Stats';
// import Problems from '@/components/Problems';
// import Services from '@/components/Services';
// import Process from '@/components/Process';
// import Testimonials from '@/components/Testimonials';
// import FAQ from '@/components/FAQ';
// import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'KATECH - Business Angel & Accompagnement Stratégique',
  description: 'KATECH accompagne les entrepreneurs avec expertise, financement et vision stratégique. Découvrez nos 6 pôles d\'activités et obtenez votre audit gratuit.',
  openGraph: {
    title: 'KATECH - Business Angel & Accompagnement Stratégique',
    description: 'KATECH accompagne les entrepreneurs avec expertise, financement et vision stratégique. Découvrez nos 6 pôles d\'activités et obtenez votre audit gratuit.',
    type: 'website',
  },
};

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
      {/* <About />
      <Problems />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA /> */}
    </main>
  );
};

export default HomePage;
