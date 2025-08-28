"use client";
import { motion } from 'framer-motion';

import AboutIntro from '@/components/about/AboutIntro';
import VisionSection from '@/components/about/VisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import ImpactSection from '@/components/about/ImpactSection';
import TimelineSection from '@/components/about/TimelineSection';
import RseSection from '@/components/about/RseSection';
import ContactCTA from '@/components/banner/ContactCTA';

const AboutPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-transparent"
    >
      <AboutIntro />
      <VisionSection />
      <ValuesSection />
      <TeamSection />
      <ImpactSection />
      <TimelineSection />
      <RseSection />
      <ContactCTA isInView={true}/>

    </motion.div>
  );
};

export default AboutPage;
