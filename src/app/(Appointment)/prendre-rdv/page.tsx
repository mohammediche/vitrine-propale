"use client";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { appointmentFormResolver, AppointmentFormData } from '@/resolvers/appointment-form-validator';
import { calComUtils } from '@/lib/calcom';

// Composants
import ServiceSelection from '@/components/appointment/ServiceSelection';
import DateTimeSelection from '@/components/appointment/DateTimeSelection';
import ContactForm from '@/components/appointment/ContactForm';
import Confirmation from '@/components/appointment/Confirmation';
import ProgressBar from '@/components/appointment/ProgressBar';
import NavigationButtons from '@/components/appointment/NavigationButtons';
import { CalComBookingRequest } from '@/types/calcom';
import { BOOKING_CONSTANTS } from '@/constants/booking';

const AppointmentPage = () => {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
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
    setBookingError(null);
    
    try {
      // Create start time from date and time in user's local timezone
      const dateStr = calComUtils.formatDateForAPI(data.date);
      const startTimeString = `${dateStr}T${data.time}:00`;
      const startTime = new Date(startTimeString);
      
      if (isNaN(startTime.getTime())) {
        throw new Error('Invalid date or time format');
      }
      
      // Check if booking time is in the past (with 5-minute buffer)
      const now = new Date();
      const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000);
      
      if (startTime <= fiveMinutesFromNow) {
        throw new Error('Impossible de réserver un créneau dans le passé. Veuillez choisir une date et heure futures.');
      }
      
      // Get service details
      const service = typeof data.service === 'object' ? data.service : null;
      if (!service || !service.calComId) {
        throw new Error('Service not properly selected');
      }
      
      const serviceDuration = service.duration || BOOKING_CONSTANTS.DEFAULT_DURATION_MINUTES;
      const endTime = new Date(startTime.getTime() + (serviceDuration * 60000));
      
      // Prepare booking request
      const bookingRequest: CalComBookingRequest = {
        eventTypeId: service.calComId,
        start: startTime.toISOString(),
        end: endTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: 'fr',
     
        metadata: {
          // Try multiple approaches to disable Cal.com emails
          'disable-emails': 'true',
          'no-email': 'true',
          'skip-email': 'true',
          'disable-notifications': 'true',
          'send-email': 'false'
        },
        sendEmails: false,
        responses: {
          name: data.name,
          email: data.email,
          notes: data.details || '',
          company: data.company || '',
        },
      };
      
      // Create booking
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingRequest),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        handleNext();
      } else {
        setBookingError(result.error || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setBookingError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const isStepValid = () => {
    switch (step) {
      case 1:
        return watchedValues.service !== '' && 
               (typeof watchedValues.service === 'object' ? 
                 !!watchedValues.service.calComId : 
                 false);
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


          {bookingError && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
              {bookingError}
            </div>
          )}

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