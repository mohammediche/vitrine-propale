import React from 'react';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactServices from '@/components/contact/ContactServices';
import ContactMap from '@/components/contact/ContactMap';
import FAQContact from '@/components/contact/FAQContact';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const ContactPage = () => {
  return (
    <AnimatedWrapper className="text-gray-800 dark:text-white">
      <ContactIntro />
      
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactServices />
      <ContactMap />
      <FAQContact />
    </AnimatedWrapper>
  );
};

export default ContactPage;