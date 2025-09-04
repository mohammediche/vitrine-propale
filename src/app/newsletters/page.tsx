import NewsletterIntro from '@/components/newsletters/NewsletterIntro';
import NewsletterList from '@/components/newsletters/NewsletterList';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const NewsletterListPage = () => {
  return (
    <AnimatedWrapper>
      <NewsletterIntro />
      <NewsletterList />
    </AnimatedWrapper>
  );
};

export default NewsletterListPage;
