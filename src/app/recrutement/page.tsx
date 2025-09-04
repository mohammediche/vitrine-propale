import RecruitmentIntro from '@/components/recrutement/RecruitmentIntro';
import SpontaneousApplication from '@/components/recrutement/SpontaneousApplication';
import JobList from '@/components/recrutement/JobList';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const RecruitmentPage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent text-gray-900 dark:text-white">
      <RecruitmentIntro />
      <section id="offres" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">Nos opportunités</h2>
          <JobList />
        </div>
      </section>
      <SpontaneousApplication />
    </AnimatedWrapper>
  );
};

export default RecruitmentPage;