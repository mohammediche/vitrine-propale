"use client";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { appointmentFormResolver, AppointmentFormData } from '@/resolvers/appointment-form-validator';

// Composants
import ServiceSelection from '@/components/appointment/ServiceSelection';
import DateTimeSelection from '@/components/appointment/DateTimeSelection';
import ContactForm from '@/components/appointment/ContactForm';
import Confirmation from '@/components/appointment/Confirmation';
import ProgressBar from '@/components/appointment/ProgressBar';
import NavigationButtons from '@/components/appointment/NavigationButtons';

const AppointmentPage = () => {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: appointmentFormResolver,
    defaultValues: {
      service: '',
      name: '',
      email: '',
      company: '',
      details: '',
      time: '',
    },
    mode: 'onChange',
  });

  const watchedValues = watch();

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulation d'un délai d'API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const appointmentData = { ...data, id: new Date().toISOString() };
      
      // Stockage local (simulation)
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      localStorage.setItem('appointments', JSON.stringify([...existingAppointments, appointmentData]));

      console.log('Rendez-vous confirmé:', appointmentData);
      handleNext();
    } catch (error) {
      console.error('Erreur lors de la confirmation:', error);
      alert('Erreur lors de la confirmation. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return watchedValues.service !== '';
      case 2:
        return watchedValues.date && watchedValues.time !== '';
      case 3:
        return watchedValues.name.trim() !== '' && 
               watchedValues.email.trim() !== '' && 
               !errors.name && 
               !errors.email;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ServiceSelection control={control} />;
      case 2:
        return <DateTimeSelection control={control} setValue={setValue} watch={watch} />;
      case 3:
        return <ContactForm control={control} errors={errors} />;
      case 4:
        return <Confirmation appointmentData={watchedValues} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 relative ${
      theme === 'dark' ? 'dark-mode-bg' : 'bg-gray-50'
    }`}>
      <Link href="/home" className="absolute top-6 left-6 mt-4 md:mt-0">
        <Image
          src="/logo.svg"
          alt="KATECH Logo"
          width={120}
          height={32}
          className={`h-8 ${theme === 'dark' ? 'invert' : ''}`}
        />
      </Link>

      <div className="w-full max-w-4xl">
        {step < totalSteps && (
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        )}

        <div className="bg-white dark:bg-gray-900/80 dark:backdrop-blur-sm p-8 rounded-2xl shadow-xl min-h-[500px] flex flex-col justify-between border border-transparent dark:border-gray-700">
          <AnimatePresence mode="wait">
            <div key={step}>
              {renderStep()}
            </div>
          </AnimatePresence>

          <NavigationButtons
            currentStep={step}
            totalSteps={totalSteps}
            isStepValid={isStepValid()}
            isSubmitting={isSubmitting}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;