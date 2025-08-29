"use client";
import { motion } from 'framer-motion';
import RecruitmentIntro from '@/components/recrutement/RecruitmentIntro';
import SpontaneousApplication from '@/components/recrutement/SpontaneousApplication';
import JobOpenings from '@/components/recrutement/JobOpenings';

const RecruitmentPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-transparent text-gray-900 dark:text-white"
    >
      <RecruitmentIntro />
      <JobOpenings />
      <SpontaneousApplication />
    </motion.div>
  );
};

export default RecruitmentPage;