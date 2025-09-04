import AboutIntro from '@/components/about/AboutIntro';
import VisionSection from '@/components/about/VisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import ImpactSection from '@/components/about/ImpactSection';
import TimelineSection from '@/components/about/TimelineSection';
import RseSection from '@/components/about/RseSection';
import ContactCTA from '@/components/banner/ContactCTA';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const AboutPage = () => {

  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      <AboutIntro />
      <VisionSection />
      <ValuesSection />
      <TeamSection />
      <ImpactSection />
      <TimelineSection />
      <RseSection />
      <ContactCTA isInView={true}/>

    </AnimatedWrapper>
  );
};

export default AboutPage;
