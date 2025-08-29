"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactServices from '@/components/contact/ContactServices';
import ContactMap from '@/components/contact/ContactMap';
import FAQContact from '@/components/contact/FAQContact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-gray-800 dark:text-white"
    >
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
    </motion.div>
  );
};

export default ContactPage;